<?php
class Language_ManagerController extends Language_Libraries_Controller_Action
{
    /**
     */
    public function indexAction()
    {
        $request = $this->_request;
        $roleId = $request->getParam('role_id', 0);
        $configuration = Zend_Registry::get('languageconfig');
        if (! empty($configuration->language->config->multirole)) {
            if (empty($roleId) || $roleId == 0) {
                //Get role of current user login
                $objUser = new Language_Model_Users();
                if (! empty($this->view->userProfile['username'])) {
                    $data = $objUser->getRoleByUserName($this->view->userProfile['username']);
                    if (! empty($data[0]['rid'])) {
                        $roleId = $data[0]['rid'];
                    }
                }
            }
        }
        $this->view->assign('multirole', $configuration->language->config->multirole);
        $this->view->assign('guestrole', $configuration->language->config->guestrole);
        //Get role default
        if (empty($roleId) || $roleId == 0) {
            //We get role default "Guest"
            $objAcl = new Language_Model_AclRoles();
            $data = $objAcl->getDataByFieldName('role_name', 'Guest');
            if (! empty($data['role_id'])) {
                $roleId = $data['role_id'];
            }
        }
        $this->view->assign('role_id', $roleId);
        $actionId = $request->getParam('action_id', 0);
        $this->view->assign('action_id', $actionId);
        $langKey = $request->getParam('lang_key', '');
        if (empty($langKey)) {
            $objLang = new Language_Model_SiteLanguage();
            $row = $objLang->getLangDefaultByRole($roleId);
            if (is_array($row) && ! empty($row['lang_key'])) {
                $langKey = $row['lang_key'];
            }
        }
        $this->view->assign('lang_key', $langKey);
        $request = $this->getRequest();
        $params = $request->getParams();
        $config = Zend_Registry::get('configuration');
        //$limit         = $request->getParam( 'itemperpage', $config->site->backend->paging->items_per_page);
        $limit = 0;
        $page = $request->getParam('page', 0);
        $wheres = array();
        if ($roleId > 0) {
            $wheres[] = "t.role_id = '$roleId'";
        }
        $action = '';
        if ($actionId > 0) {
            $obj1 = new Language_Model_SiteLanguageDefault();
            $obj1->find($actionId);
            $action = $obj1->getAction();
            $wheres[] = "t.action = '$action'";
        } else {
            $wheres[] = "t.action = ''";
        }
        $order = $request->getParam('sort', '');
        $obj = new Language_Model_SiteLanguageDefault();
        $datas = $obj->getList($page, $limit, $wheres, $order, true, $langKey); //data of Province
        $total = $obj->getTotalList($wheres, true, $langKey);
        $this->view->assign('page', $page);
        $this->view->assign('item_per_page', $limit);
        //$this->view->assign( 'list_item_perpage', $config->site->backend->paging->list_item_per_page);
        $this->view->assign('datas', $datas);
        $this->view->assign('total', $total);
         //$this->view->assign( 'pagination_config', array('total_items' => $total, 'items_per_page' => $limit, 'style' => $config->site->backend->paging->style));
    }
    public function addLabelAction()
    {
        $configuration = Zend_Registry::get('languageconfig');
        $request = $this->_request;
        $roleId = $request->getParam('role_id', $configuration->language->config->guestrole);
        $this->view->assign('role_id', $roleId);
        $actionId = $request->getParam('action_id', 0);
        $this->view->assign('action_id', $actionId);
        $langKey = $request->getParam('lang_key', '');
        $this->view->assign('lang_key', $langKey);
        $defaultText = $request->getParam('default_text', '');
        $translateText = $request->getParam('translate_text', '');
        $data = array();
        $data['role_id'] = $roleId;
        $data['default_text'] = $defaultText;
        $action = '';
        if ($actionId > 0) {
            $obj1 = new Language_Model_SiteLanguageDefault();
            $obj1->find($actionId);
            $action = $obj1->getAction();
        }
        $data['action'] = $action;
        $rst = 0;
        $obj = new Language_Model_SiteLanguageDefault();
        $rst = $obj->add($data);
        if ($rst > 0) {
            $objMul = new Language_Model_SiteLanguageMulti();
            $data = array();
            $data['language_default_id'] = $rst;
            $data['lang_key'] = $langKey;
            $data['translate_text'] = $translateText;
            if (! empty($translateText)) {
                $objMul->add($data);
            }
        }
        $this->_helper->redirector(
            'index', 'manager', 'language', 
            array('role_id' => $roleId , 'lang_key' => $langKey , 'action_id' => $actionId)
        );
    }
    /**
     *
     */
    public function saveLabelAction()
    {
        $configuration = Zend_Registry::get('languageconfig');
        $request = $this->_request;
        $roleId = $request->getParam('role_id', $configuration->language->config->guestrole);
        $this->view->assign('role_id', $roleId);
        $actionId = $request->getParam('action_id', 0);
        $this->view->assign('action_id', $actionId);
        $langKey = $request->getParam('lang_key', '');
        $this->view->assign('lang_key', $langKey);
        $ids = $request->getParam('ids', '');
        $id_muls = $request->getParam('id_muls', '');
        $actions = $request->getParam('actions', '');
        $defaultText = $request->getParam('default_text', '');
        $translateText = $request->getParam('translate_text', '');
        if (is_array($ids)) {
            for ($i = 0; $i < count($ids); $i ++) {
                if (! empty($ids[$i]) && ! empty($defaultText[$i])) {
                    $data = array();
                    $data['id'] = $ids[$i];
                    $data['role_id'] = $roleId;
                    $data['default_text'] = $defaultText[$i];
                    $data['action'] = $actions[$i];
                    $rst = 0;
                    $obj = new Language_Model_SiteLanguageDefault();
                    $rst = $obj->add($data);
                    if ($rst > 0) {
                        $objMul = new Language_Model_SiteLanguageMulti();
                        $data = array();
                        $data['id'] = $id_muls[$i];
                        $data['language_default_id'] = $rst;
                        $data['lang_key'] = $langKey;
                        //if(!empty($translateText[$i])){
                        $data['translate_text'] = $translateText[$i];
                        $objMul->add($data);
                         //}
                    }
                } //end if !empty($ids[$i]) && !empty($defaultText[$i])
            } //end for
        } //end if is_array($ids)
        $this->_helper->redirector(
            'index', 'manager', 'language', 
            array('role_id' => $role_id , 'lang_key' => $langKey , 'action_id' => $actionId)
        );
    }
    /**
     * @todo : Generate file language ini
     * - Get all data on table sm_site_language_default by role_id
     * - After that we will get data translated
     * - When will generate file init we need to check
     * + if default_text translated we will generate translated
     * + if default_text did not translate we will generate default_text
     */
    public function generateIniAction()
    {
        $configuration = Zend_Registry::get('languageconfig');
        $request = $this->_request;
        $moduleName = $request->getParam('module', '');
        $controllerName = $request->getParam('controller', '');
        $actionName = $request->getParam('action', '');
        $roleId = $request->getParam('role_id', $configuration->language->config->guestrole);
        $this->view->assign('role_id', $roleId);
        $actionId = $request->getParam('action_id', 0);
        $this->view->assign('action_id', $actionId);
        $langKey = $request->getParam('lang_key', 'en');
        $this->view->assign('lang_key', $langKey);
        $obj = new Language_Model_SiteLanguageDefault();
        //When we generate we will generate all data in table, don't have criteria
        $objRole = new Language_Model_AclRoles();
        $rows = $objRole->getGroupRoles();
        if (is_array($rows)) {
            foreach ($rows as $value) {
                $wheres = array();
                $order = 'date_create DESC';
                if (! empty($value['role_id'])) {
                    $roleId = $value['role_id'];
                    $wheres[] = "t.role_id = '$roleId'";
                }
                $roleName = strtolower($value['role_name']);
                $obj = new Language_Model_SiteLanguageDefault();
                $rst = $obj->getDataForIni(0, 0, $wheres, '', true, $langKey);
                $this->generateFileIni($this->getCurLang(), $langKey, $roleName, $rst);
            }
        }
        $urlOptions = array('module' => 'language' , 'controller' => 'manager' , 'action' => 'index');
        $this->_helper->redirector(
            'index', 'manager', 'language', 
            array('role_id' => $roleId , 'lang_key' => $langKey , 'action_id' => $actionId)
        );
         //$this->_helper->redirector('index', 'manager');
    }
    /**
     *
     */
    private function getCurLang()
    {
        $curLang = '';
        $langSession = new Zend_Session_Namespace('langsession');
        $currLang = $langSession->current_lang;
        if (empty($this->_curLang)) {
            $config = Zend_Registry::get('configuration');
            $curLang = $config->site->lang_default;
        }
        return $curLang;
    }
    /**
     *
     * @param unknown_type $module
     * @param unknown_type $curLang
     * @param unknown_type $datas
     */
    private function generateFileIni($curLang = '', $langKey = '', $roleName = '', $datas = array())
    {
        $content = "";
        $translateKey = "";
        $filePath = "";
        $filePath1 = "";
        if (! empty($langKey)) {
            $path = APP_PATH . DS . 'languages' . DS . strtolower($langKey);
            $filePath = APP_PATH . DS . 'languages' . DS . strtolower($langKey) . DS .
                 str_replace(" ", '', strtolower($roleName)) . '.ini';
                $filePath1 = APP_PATH . DS . 'languages' . DS . strtolower($langKey) . DS . strtolower($curLang) . '.ini';
            } else {
                $path = APP_PATH . DS . 'languages' . DS . strtolower($curLang);
                $filePath = APP_PATH . DS . 'languages' . DS . strtolower($curLang) . DS .
                     str_replace(" ", '', strtolower($roleName)) . '.ini';
                    $filePath1 = APP_PATH . DS . 'languages' . DS . strtolower($curLang) . DS . strtolower($curLang) .
                         '.ini';
                    }
                    if (is_array($datas)) {
                        foreach ($datas as $values) {
                            if (! empty($values['action'])) {
                                //generate to MODULE.CONTROLLER.ACTION.DEFAULTTEXT
                                $translateKey = $this->convertToLangKey($values['action'], $values['default_text']);
                                $content .= "$translateKey = ";
                            } else {
                                //generate to DEFAULTTEXT
                                $translateKey = $this->convertToLangKey(
                                    $values['action'], $values['default_text']);
                                $content .= "$translateKey = ";
                            }
                            if (! empty($values['translate_text'])) {
                                /*$values['translate_text'] = stripcslashes($values['translate_text']);
                     $content .= '"' . addslashes($values['translate_text'])  . '"' . "\n";*/
                                $content .= '"' . $this->encodeQuote($values['translate_text']) . '"' . "\n";
                            } else {
                                /*$values['default_text'] = stripcslashes($values['default_text']);
                     $content .= '"' . addslashes($values['default_text'])  . '"' . "\n";*/
                                $content .= '"' . $this->encodeQuote($values['default_text']) . '"' . "\n";
                            }
                        }
                    }
                    //$fileSystem = new SMCore_Filesystem_File();
                    try {
                        @mkdir($path, 0777);
                        //$fileSystem->saveFile($filePath, $content);
                        $this->saveFile($filePath, $content);
                         //$fileSystem->saveFile($filePath1, $content);
                    } catch (Exception $e) {
                        echo $e->getMessage();
                    }
                } //end function
                private function encodeQuote($text = '')
                {
                    /*$text = stripcslashes($text);

         if(!empty($text)){
         $text = str_replace("<", "&lt;", $text);
         $text = str_replace(">", "&gt;", $text);
         $text = str_replace("\"", "&quot;", $text);
         $text = str_replace("'", "&#039;", $text);
         }*/
                    $text = htmlspecialchars($text);
                    return $text;
                }
                /**
                 * creates a new file from a string
                 *
                 * @param string $path
                 * @param string $content
                 * @return string
                 */
                private function saveFile($path, $content)
                {
                    try {
                        file_put_contents($path, $content);
                        return 'Your page was saved successfully';
                    } catch (Zend_Exception $e) {
                        return 'Sorry, there was an error saving your page';
                    }
                }
                /**
                 * @todo
                 * @param unknown_type $defaultText
                 */
                private function convertToLangKey($action, $defaultText = '')
                {
                    $langKey = '';
                    if (! empty($defaultText)) {
                        //remove space in $defaultText
                        /*$specChar            = array(')', '(', ':', " ", "'", "`", "~", "!", "@", "#", "$",
             "%", "^", "&", "*", "+", "|", "\\", "\/", ";", "\"", ",", "<", ">", ".", "?");
             foreach($specChar as $val){
             $defaultText     = str_replace($val, "", $defaultText);
             }*/
                        $defaultText = preg_replace("/[^A-Za-z0-9]/", "", $defaultText);
                        if (! empty($action)) { //Lang key is MODULE.CONTROLLER.ACTION.DEFAULTTEXT
                            $langKey = $this->convertActionKey($action);
                            $langKey .= "." . strtoupper($defaultText);
                        } else { //Lang key is DEFAULTTEXT
                            $langKey = strtoupper($defaultText);
                        }
                    }
                    return $langKey;
                } //end function
                private function convertActionKey($action = '')
                {
                    $keyName = '';
                    if (! empty($action)) {
                        $keyName = str_replace("/", ".", $action);
                        $keyName = str_replace("-", "", $keyName);
                        $keyName = strtoupper($keyName);
                    }
                    return $keyName;
                }
                /**
                 *
                 */
                public function deleteLabelAction()
                {
                    $configuration = Zend_Registry::get('languageconfig');
                    $request = $this->_request;
                    $roleId = $request->getParam('role_id', $configuration->language->config->guestrole);
                    $this->view->assign('role_id', $roleId);
                    $actionId = $request->getParam('action_id', 0);
                    $this->view->assign('action_id', $actionId);
                    $langKey = $request->getParam('lang_key', 'en');
                    $chkIds = $request->getParam('chkIds', array());
                    $obj = new Language_Model_SiteLanguageDefault();
                    $objMul = new Language_Model_SiteLanguageMulti();
                    $idMuls = array();
                    if (! empty($chkIds) && count($chkIds)) {
                        if (! empty($chkIds)) {
                            $idMuls = $objMul->getIdsByLangDefaultId($chkIds);
                        }
                        //Delete language in table sm_site_language_Default
                        if ($obj->delete($chkIds)) {
                            //Delete data in table sm_site_language_mul
                            if (! empty($idMuls) && count($idMuls)) {
                                $objMul = new Language_Model_SiteLanguageMulti();
                                $objMul->delete($idMuls);
                            }
                        }
                    }
                    $this->_helper->redirector(
                        'index', 'manager', 'language', 
                        array('role_id' => $roleId , 'lang_key' => $langKey , 'action_id' => $actionId)
                    );
                }
            } //end class
