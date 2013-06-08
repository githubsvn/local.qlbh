<?php
/**
 *
 * @todo This class will be do tasks
 * - For example : We echo $this->language->translate('Default Text');
 * - 1. We will load file language ini. ((Language_Key is MODULE.CONTROLLER.ACTION.DEFAULTTEXT 
 * or DEFAULTTEXT in file lang ini.)
 * - 2. Convert 'Default Text' to Language_Key
 * + If to have param language in URL will convert to MODULE.CONTROLLER.ACTION.DEFAULTTEXT
 * + Else don't have will convert to DEFAULTTEXT
 * - 3. After converting we will check this Lang_Key with Lang_Key in file ini
 * + If exist in file language ini : We will show this key
 * + If don't exist : We will do follow
 * o/ Echo 'Default Text' to html
 * o/ Insert to DB :
 * >. If exist param language we will insert Action is module/controller/action
 * >. If don't have param language we will insert action is empty
 *
 */
class Language_Libraries_Application_Resource_Language
{
    private static $_langInstance;
    private $_dataLangs = array();
    private $_params = array();
    private $_isParamTranslate = false;
    private $_moduleName = '';
    private $_controllerName = '';
    private $_actionName = '';
    private $_curLang = '';
    private $_userProfile = array();
    /**
     * @todo Init data for language.
     * @param unknown_type $params
     */
    public function __construct($params = array())
    {
        $configuration = new Zend_Config_Ini(
            APP_PATH . DS . 'modules' . DS . 'language' . DS . 'config' . DS . 'config.ini'
        );
        $config = array();
        //1. Load file language ini. If to have language in param we will load language file 
        //follow param lang(en/module_admin.ini)
        //If don't have param language we will load in language file config
        $pathLangFile = '';
        $fileLang = '';
        $this->_moduleName = ! empty($params['module']) ? trim($params['module']) : '';
        $this->_controllerName = ! empty($params['controller']) ? trim($params['controller']) : '';
        $this->_actionName = ! empty($params['action']) ? trim($params['action']) : '';
        $this->_userProfile = array();
        if (! empty($configuration->language->config->multirole)) {
            //Used multi role
            $auth = Zend_Auth::getInstance()->getStorage('admin');
            $data = $auth->read();
            if (! empty($data)) {
                $this->_userProfile = $data;
            }
        }
        $this->_curLang = $this->getCurLang($params);
        if (! empty($params) && is_array($params)) {
            //get param transalate
            if (array_key_exists('translate', $params)) {
                if (! empty($params['translate'])) {
                    $this->_isParamTranslate = true;
                } else {
                    $this->_isParamTranslate = false;
                }
            } else {
                $this->_isParamTranslate = false;
            }
            $roleName = $this->getRoleNameByUserName($this->getUserName());
            $roleName = str_replace(" ", "", strtolower($roleName));
            $pathLangFile = APP_PATH . DS . 'languages' . DS . strtolower($this->_curLang);
            $fileLang = $pathLangFile . DS . "$roleName.ini";
            //Get content in file $fileLang and parse to array.
            if (file_exists($fileLang)) {
                $this->_dataLangs = $this->myParseIniFile($fileLang);
            }
        }
        if ($this->_actionName == 'logout' || $this->_actionName == 'login' || $this->_controllerName == 'login') {
            $langSession = new Zend_Session_Namespace('langsession');
            $langSession->unsetAll();
            unset($_SESSION['langsession']['current_lang']);
            unset($_SESSION['langsession']);
        }
    }
    /**
     *
     * @param unknown_type $params
     */
    public static function getInstance($params = array())
    {
        if (! self::$_langInstance) {
            self::$_langInstance = new Language_Libraries_Application_Resource_Language($params);
        }
        return self::$_langInstance;
    }
    private function myParseIniFile($fileName = '')
    {
        $datas = array();
        if (! is_file($fileName))
            return $datas;
        $ini = file($fileName);
        foreach ($ini as $i) {
            if (! empty($i)) {
                $strings = explode("=", $i);
                if (! empty($strings[0]) && ! empty($strings[1])) {
                    $datas[trim($strings[0])] = trim(str_replace('"', "", $strings[1]));
                }
            }
        }
        return $datas;
    }
    /**
     * @todo Get value of $_isParamTransltes. This variable to convert DefaultText to 
     * MODULE.CONTROLLER.ACTION.DEFAULTTEXT or DEFAULTTEXT
     * @return string
     */
    public function getIsParamTranslate()
    {
        return $this->_isParamTranslate;
    }
    /**
     * @todo Get Current language
     * @return string
     */
    public function getCurLang($params)
    {
        $obj = new Language_Model_SiteLanguage();
        $curLanguage = '';
        try {
            if (! Zend_Session::isStarted()) {
                Zend_Session::start();
            }
            $langSession = new Zend_Session_Namespace('langsession');
            $langSession->unLock();
        } catch (Zend_Session_Exception $e) {
            echo "Cannot instantiate this namespace since langsession was created";
        }
        $language = (! empty($params['lang'])) ? $params['lang'] : '';
        $roleId = $this->getRoleByUserName($this->getUserName());
        if ($language == false) {
            //If $langSession->current_lang is empty then to get current language  default in db
            if (empty($langSession->current_lang)) {
                if (! empty($roleId)) {
                    $langDefault = $obj->getLangDefaultOfRoleId($roleId);
                    if (is_array($langDefault) && ! empty($langDefault['lang_key'])) {
                        $langSession->current_lang = $langDefault['lang_key'];
                    }
                }
            }
        } else {
            //Check language in database if don't exist in database, get default language in database
            if ($obj->checkLangIsExist($roleId, $language)) {
                $langSession->current_lang = $language;
            } else {
                //If language don't exist
                if (! empty($roleId)) {
                    $langDefault = $obj->getLangDefaultOfRoleId($roleId);
                    if (is_array($langDefault) && ! empty($langDefault['lang_key'])) {
                        $langSession->current_lang = $langDefault['lang_key'];
                    }
                }
            }
        }
        if (empty($langSession->current_lang)) {
            $config = Zend_Registry::get('configuration');
            $this->_curLang = $config->site->lang_default;
        } else {
            $this->_curLang = $langSession->current_lang;
        }
        $langSession->current_lang = $this->_curLang;
        if (isset($params['lang'])) {
            unset($params['lang']);
            $view = new Zend_View();
            $url = $view->url($params, 'default', true);
            header("Location: $url");
        }
        return strtolower($this->_curLang);
    }
    /**
     * @todo Get $_moduleName
     * @return string
     */
    public function getModuleName()
    {
        return $this->_moduleName;
    }
    /**
     * @todo Get $_controllerName
     * @return string
     */
    public function getControllerName()
    {
        return $this->_controllerName;
    }
    /**
     * @todo Get $_actionName
     * @return string
     */
    public function getActionName()
    {
        return $this->_actionName;
    }
    public function getUserProfile()
    {
        return $this->_userProfile;
    }
    public function getUserName()
    {
        $username = '';
        $userProfile = $this->getUserProfile();
        if (! empty($userProfile) && is_array($userProfile)) {
            if (! empty($userProfile['username'])) {
                $username = $userProfile['username'];
            }
        }
        return $username;
    }
    /**
     *
     */
    public function translate($defaultText = '')
    {
        $langKey = '';
        $text = '';
        if (! empty($defaultText)) {
            //Convert default text to lang key
            $langKey = $this->convertToLangKey($defaultText);
            //Check lang key is exist in file lang ini or not
            if (array_key_exists($langKey, $this->_dataLangs)) {
                //If Lang key is exist echo Lang Key
                $text = $this->_dataLangs[$langKey];
            } else {
                //If Lang key is not exist
                //echo Default Text
                $text = $defaultText;
                //and insert database
                $data = $this->builData($defaultText);
                $rst = $this->addLangToDb($data);
            }
        }
        return $this->decodeQuote($text);
    }
    /**
     *
     * @param unknown_type $text
     */
    private function decodeQuote($text = '')
    {
        $text = htmlspecialchars_decode($text);
        return $text;
    }
    /**
     * @todo Buil data
     * @param unknown_type $defaultText
     */
    public function builData($defaultText)
    {
        $data = array();
        $data['role_id'] = $this->getRoleByUserName($this->getUserName());
        $data['default_text'] = $defaultText;
        if ($this->getIsParamTranslate()) {
            $data['action'] = $this->getModuleName() . DS . $this->getControllerName() . DS . $this->getActionName();
        } else {
            $data['action'] = '';
        }
        return $data;
    }
    /**
     * @todo
     * @param unknown_type $defaultText
     */
    private function convertToLangKey($defaultText = '')
    {
        $isParamTranslate = $this->getIsParamTranslate();
        $langKey = '';
        if (! empty($defaultText)) {
            //remove space in $defaultText
            $defaultText = preg_replace("/[^A-Za-z0-9]/", "", $defaultText);
            if ($isParamTranslate) { //Lang key is MODULE.CONTROLLER.ACTION.DEFAULTTEXT
                $langKey = strtoupper($this->getModuleName()) . ".";
                $langKey .= strtoupper($this->getControllerName()) . ".";
                $langKey .= strtoupper($this->getActionName()) . ".";
                $langKey .= strtoupper($defaultText);
                $langKey = str_replace("-", "", $langKey);
            } else { //Lang key is DEFAULTTEXT
                $langKey = strtoupper($defaultText);
            }
        }
        return $langKey;
    } //end function
    /**
     *
     * @param unknown_type $langKey
     * @param unknown_type $defaultText
     */
    public function addLangToDb($data = array())
    {
        $rst = 0;
        $obj = new Language_Model_SiteLanguageDefault();
        $rst = $obj->add($data);
        return $rst;
    }
    /**
     *
     * @param unknown_type $userName
     */
    public function getRoleByUserName($userName = '')
    {
        $roleId = 0;
        $data = array();
        if (! empty($userName)) {
            $user = new Language_Model_Users();
            if ($user->checkUserName($userName)) {
                $data = $user->getRoleByUserName($userName);
            }
        }
        if (! empty($data)) {
            $data = $data[0];
            if (! empty($data) && ! empty($data['rid'])) {
                $roleId = $data['rid'];
            }
        } else {
            //We get role default "Guest"
            $objAcl = new Language_Model_AclRoles();
            $data = $this->getRoleDefault('Guest');
            if (! empty($data['role_id'])) {
                $roleId = $data['role_id'];
            }
        }
        return $roleId;
    }
    private function getRoleDefault($roleDefaultName = 'Guest')
    {
        $data = array();
        //We get role default "Guest"
        $objAcl = new Language_Model_AclRoles();
        $data = $objAcl->getDataByFieldName('role_name', $roleDefaultName);
        return $data;
    }
    /**
     *
     * @param unknown_type $userName
     */
    public function getRoleNameByUserName($userName = '')
    {
        $roleName = '';
        $data = array();
        if (! empty($userName)) {
            $user = new Language_Model_Users();
            if ($user->checkUserName($userName)) {
                $data = $user->getRoleByUserName($userName);
            }
        }
        if (! empty($data)) {
            $data = $data[0];
            if (! empty($data) && ! empty($data['role_name'])) {
                $roleName = $data['role_name'];
            }
        } else {
            $roleName = 'guest';
        }
        return $roleName;
    }
} //end Class
