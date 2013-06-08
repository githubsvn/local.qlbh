<?php
class Language_AdminController extends Language_Libraries_Controller_Action
{
    /**
     * @todo process for LangAdmin
     */
    public function indexAction()
    {
        $obj = new Language_Model_SiteLanguage();
        $data = $obj->getLangGroupByRoleLangKey();
        $arr = array();
        $rst = array();
        $wheres = '';
        if (is_array($data)) {
            foreach ($data as $value) {
                if (is_array($value)) {
                    foreach ($value as $k => $v) {
                        if ($k === 'role_id' && !empty($v)) {
                            $arr[] = $v;
                        }
                    }
                }
            }
            if (is_array($arr) && count($arr) > 0) {
                foreach ($arr as $key => $value) {
                    $wheres = "t.role_id = '$value'";
                    $rst[] = $obj->getList(0, 0, $wheres);
                }
            }
        }
        $this->view->assign('datas', $rst);
    }
    /**
     *
     */
    public function addAction()
    {
        $request = $this->_request;
        $id = $request->getParam('id', '');
        $roleId = $request->getParam('roleId', 0);
        $langKey = $request->getParam('country_lang', '');
        $obj = new Language_Model_SiteLanguage();
        //$oldLangKey    = $obj->find($id)->getLangKey();
        $rst = $obj->add(array('id' => $id, 'role_id' => $roleId, 'lang_key' => $langKey));
        /* No need Edit
         //Change lang key for table sm_site_language_multi
         //Get all id of the sm_site_language_default
         //Get old lang_key
         $objLangDefault     = new Model_SiteLanguageDefault();
         $langDefaults        =
         $objLangDefault->getList(0, 0, array("t.role_id = '$roleId'", "l.lang_key = '$oldLangKey'"));
         if(is_array($langDefaults)){
         foreach($langDefaults as $value){
         if(!empty($value['id_mul'])){
         $objLangMul            = new Model_SiteLanguageMulti();
         $dtSave                = array();
         $dtSave['id']        = $value['id_mul'];
         $dtSave['lang_key']    = $langKey;
         $objLangMul->add($dtSave, true);
         }
         }
         }*/
        $this->_helper->redirector('index', 'admin');
    }
    public function exportAction()
    {
        $autoloader = Zend_Loader_Autoloader::getInstance();
        $autoloader->registerNamespace('PHPExcel');
        require_once LIB_PATH.'/PHPExcel/PHPExcel.php';
        // News Object
        $objPHPExcel = new PHPExcel();
        //$objPHPExcel->getActiveSheet()->getProtection()->setSheet(true);
        // set default font
        $objPHPExcel->getDefaultStyle()->getFont()->setName('Calibri');
        // set default font size
        $objPHPExcel->getDefaultStyle()->getFont()->setSize(10);
        $request = $this->_request;
        $langName = $request->getParam('langName', '');
        $id = $request->getParam('id', 0);
        $objSiteLang = new Language_Model_SiteLanguage();
        $objSiteLang->find($id);
        $roleId = $objSiteLang->getRoleId();
        $langKey = $objSiteLang->getLangKey();
        $objLangDefault = new Language_Model_SiteLanguageDefault();
        if (!empty($id) && $id > 0) {
            $objPHPExcel->getProperties()
            ->setCreator("Admin")
            ->setLastModifiedBy("Admin")
            ->setTitle("Office 2007 $langName")
            ->setSubject("Office 2007 $langName")
            ->setDescription("$langName")
            ->setKeywords("$langName")
            ->setCategory("$langName");
            $colTitleStart = "A";
            $colTitleMid = "B";
            $colTitleEnd = "C";
            $rowTitle = "1";
            $color = "FFC6A8";
            //Get action in table sm_site_language_default. with each action we we create each sheet in excel
            $actions = $objLangDefault->getGroupActionByRoleId($roleId);
            if (!empty($actions) && is_array($actions)) {
                for ($i = 0; $i < count($actions); $i++) {
                    if ($i > 0) {
                        $objPHPExcel->createSheet($i);
                    }
                    $objSheet = $objPHPExcel->getSheet($i);
                    if (empty($actions[$i]['action'])) {
                        $objSheet->setTitle('Default');
                    } else {
                        $sheetName = $this->convertActionToSheetName($actions[$i]['action']);
                        $objSheet->setTitle($sheetName);
                    }
                    $objSheet->getStyle("$colTitleStart$rowTitle:$colTitleEnd$rowTitle")
                    ->getFill()
                    ->setFillType(PHPExcel_Style_Fill::FILL_SOLID)
                    ->getStartColor()
                    ->setARGB($color);
                    $objSheet->setCellValue("$colTitleStart$rowTitle", "Id");
                    $objSheet->setCellValue("$colTitleMid$rowTitle", 'Default Text');
                    $objSheet->setCellValue("$colTitleEnd$rowTitle", 'Translate Text');
                    $objSheet->getColumnDimension($colTitleStart)->setAutoSize(true);
                    $objSheet->getColumnDimension($colTitleMid)->setAutoSize(true);
                    $objSheet->getColumnDimension($colTitleEnd)->setAutoSize(true);
                    //Get data from table sm_site_language_default and sm_language_multi
                    $rst = array();
                    $act = $actions[$i]['action'];
                    $wheres = array("t.role_id = $roleId" , "action = '$act'");
                    $rst = $objLangDefault->getList(0, 0, $wheres, '', true, $langKey);
                    if (is_array($rst)) {
                        for ($j = 0; $j < count($rst); $j++) {
                            $row = $rowTitle + $j + 1;
                            $rst[$j]['id'] = !empty($rst[$j]['id']) ? $rst[$j]['id'] : '';
                            $rst[$j]['default_text'] = !empty($rst[$j]['default_text']) ? $rst[$j]['default_text'] : '';
                            $rst[$j]['translate_text'] 
                            = !empty($rst[$j]['translate_text']) ? $rst[$j]['translate_text'] : '';
                            $rst[$j]['default_text'] = html_entity_decode($rst[$j]['default_text']);
                            if (!empty($rst[$j]['id'])) {
                                $objSheet->setCellValue("$colTitleStart$row", $rst[$j]['id']);
                            }
                            if (!empty($rst[$j]['default_text'])) {
                                $objSheet->setCellValue("$colTitleMid$row", $rst[$j]['default_text']);
                            }
                            $objSheet->setCellValue("$colTitleEnd$row", $rst[$j]['translate_text']);
                        }
                    }
                } //end for
            }
        } //if(!empty($id) && $id > 0){
        //$pathExcel = EXCEL_PATH;//$this->view->config->contact->xls->root;
        $pathExcel = DATA_PATH.DS.'excel';
        $fileName = rand();
        $fileName .= '.xlsx';
        $file = $pathExcel.DS.$fileName;
        $objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel2007');
        $objWriter->setPreCalculateFormulas(false);
        $objWriter->save($file);
        $objPHPExcel->disconnectWorksheets();
        unset($objPHPExcel);
        $this->getResponse()
        ->setHeader('Content-type', 'application/vnd.ms-excel')
        ->setHeader('Content-Disposition', 'attachment; filename='.$fileName);
        print file_get_contents($file);
        unlink($file);
        $this->_helper->layout()->disableLayout();
        $this->_helper->viewRenderer->setNoRender(true);
    }
    private function convertActionToSheetName($action = '')
    {
        $sheetName = '';
        if (!empty($action)) {
            $sheetName = str_replace("/", "_", $action);
            $sheetName = str_replace("-", "", $sheetName);
            $sheetName = strtoupper($sheetName);
        }
        if (strlen($sheetName) > 31) {
            $sheetName = substr($sheetName, 0, 31);
        }
        return $sheetName;
    }
    public function importAction()
    {
        $this->_helper->layout()->disableLayout();
        $this->_helper->viewRenderer->setNoRender(true);
        $scrError = '<script type="text/javascript">window.top.afterImportLanguage(0);</script>';
        $scrSuccess = '<script type="text/javascript">window.top.afterImportLanguage(1);</script>';
        if (!$this->_request->isPost()) {
            $this->msg('use_post_method');
            echo $scrError;
            return false;
        }
        $request = $this->_request;
        $id = $request->getParam('id', 0);
        $objSiteLang = new Language_Model_SiteLanguage();
        $objLangDefault = new Language_Model_SiteLanguageDefault();
        $objLangMul = new Language_Model_SiteLanguageMulti();
        $objSiteLang->find($id);
        $langKey = $objSiteLang->getLangKey();
        $roleId = $objSiteLang->getRoleId();
        $pathExcel = DATA_PATH.DS.'excel';
        /** * Upload Excel */
        $adapter = new Zend_File_Transfer_Adapter_Http();
        $adapter->setDestination($pathExcel);
        if (!$adapter->receive()) {
            $messages = $adapter->getMessages();
            if (is_array($messages)) {
                foreach ($messages as $msg) {
                    $this->view->message = $msg;
                    echo $msg;
                }
            } else {
                $this->view->message = $messages;
                echo $messages;
            }
            echo $scrError;
            return false;
        }
        /**
         * Check Excel file
         */
        // File Info
        $files = $adapter->getFileInfo();
        if (!isset($files['fileUpload'])) {
            echo $scrError;
            return false;
        }
        // Excel
        $fileExcel = $files['fileUpload'];
        $fileName = $fileExcel['name'];
        $fileType = explode('.', $fileName);
        $fileType = $fileType[count($fileType) - 1];
        if (!in_array($fileType, array('xlsx', 'xls'))) {
            echo $message = "Type of Exce must in: 'xlsx', 'xls'.";
            echo $scrError;
            unlink($fileExcel['tmp_name']);
            $this->_helper->redirector('index', 'admin');
            return false;
        }
        /**
         * Real Excel File
         * Excel to Array
         */
        $file = $fileExcel['tmp_name']; //EXCEL_PATH.'/survey_language.xlsx';
        $dataList = $this->readData($file);
        foreach ($dataList as $key => $datas) {
            if ($key === 'Default') {
                $key = '';
            }
            //Insert into table sm_site_language_default
            for ($i = 1; $i < count($datas); $i++) {
                $defaultText = '';
                $translateText = '';
                $dt = $datas[$i];
                if (is_array($dt)) {
                    if (!empty($dt[1])) {
                        $defaultText = $dt[1];
                    }
                    if (!empty($dt[2])) {
                        $translateText = $dt[2];
                    }
                }
                if (!empty($defaultText)) {
                    //insert to table sm_site_language_default
                    $dtSave = array();
                    $dtSave['role_id'] = $roleId;
                    $dtSave['default_text'] = $defaultText;
                    $dtSave['action'] = $key;
                    $idLang = 0;
                    //check if $roleId, $defaultText, $action is exist in table sm_site_language_default
                    //We need to get this is to save for table sm_site_language_default because this is new lang
                    $idLang = $objLangDefault->getIdLangIsExist(
                        $dtSave['role_id'], $dtSave['default_text'], $dtSave['action']
                    );
                    if ($idLang > 0) {
                        $dtSave['id'] = $idLang;
                    }
                    $rst = $objLangDefault->add($dtSave);
                    if ($rst) {
                        //Update translated for sm_site_lang
                        if (!empty($id)) {
                            $objSiteLang->find($id);
                            $objSiteLang->setTranslated(2);
                            $objSiteLang->save();
                        }
                        if (!empty($translateText)) {
                            $dtSave = array();
                            $dtSave['language_default_id'] = $rst;
                            $dtSave['lang_key'] = $langKey;
                            $dtSave['translate_text'] = $translateText;
                            $idLangMul = $objLangMul->getIdLangIsExist(
                                $dtSave['language_default_id'], $dtSave['lang_key']
                            );
                            if ($idLangMul > 0) {
                                $dtSave['id'] = $idLangMul;
                            }
                            $rst = $objLangMul->add($dtSave);
                        }
                    }
                }
            }
        } //end for foreach($dataList as $key => $datas)
        @unlink($file);
        echo $scrSuccess;
        $this->_helper->redirector('index', 'admin');
    }
    /**
     *
     * @param unknown_type $file
     * @return array(1, 1, 1)
     */
    public function readData($file)
    {                           
        if (!file_exists($file)) {
            $this->msg('file_not_found');
        }
        // Load Library
        $autoloader = Zend_Loader_Autoloader::getInstance();
        $autoloader->registerNamespace('PHPExcel');
        require_once LIB_PATH.'/PHPExcel/PHPExcel.php';
        $dataList = array();
        $objReader = PHPExcel_IOFactory::createReader('Excel2007');
        $objReader->setReadDataOnly(true);
        $objPHPExcel = $objReader->load($file);
        $objReader->setReadDataOnly(true);
        $totalSheets = $objPHPExcel->getSheetCount(); // here 4
        $allSheetName = $objPHPExcel->getSheetNames(); // array([0]=>'student',[1]=>'teacher',
        // [2]=>'school',[3]=>'college')
        for ($i = 0; $i < $totalSheets; $i++) {
            $objWorksheet = $objPHPExcel->getSheet($i);
            $data = array();
            foreach ($objWorksheet->getRowIterator() as $row) {
                $tempData = array();
                $cellIterator = $row->getCellIterator();
                foreach ($cellIterator as $cell) {
                    $tempData[] = $cell->getValue();
                }
                $data[] = $tempData;
            }
            $dataList[$allSheetName[$i]] = $data;
        } //end for
        unset($objPHPExcel);
        unset($objWorksheet);
        return $dataList;
    }
    /**
     * error
     * Function for display error message
     */
    public function msg($msgId, $msg = '')
    {
        $msgList = array('use_post_method' => 'Use Post Method', 'not_found_lang' => 'Not found Language: ',
            'file_not_found' => 'File Not found');
        // Print msg
        if (array_key_exists($msgId, $msgList)) {
            $msg = array('msg' => $msgList[$msgId].$msg);
        } else {
            $msg = array('msg' => "Message Id $msgId don't exist.");
        }
        $this->output($msg['msg']);
        exit();
    }
    /**
     * output
     * Output Data
     */
    public function output($string)
    {
        print $string;
    }
    public function deleteAction()
    {
        $request = $this->getRequest();
        $id = $request->getParam('id', 0);
        $idLangMuls = array();
        $objLangDefault = new Language_Model_SiteLanguageDefault();
        $objLangMul = new Language_Model_SiteLanguageMulti();
        $obj = new Language_Model_SiteLanguage();
        $obj->find($id);
        $default = $obj->getDefault();
        $langKey = $obj->getLangKey();
        $roleId = $obj->getRoleId();
        $rst = 0;
        if (!empty($default) && $default != 1) {
            if (!empty($id)) {
                $rst = $obj->delete(array($id));
            }
            if ($rst) {
                //Change lang key for table sm_site_language_multi
                //Get all id of the sm_site_language_default
                //Get old lang_key
                $langDefaults = $objLangDefault->getList(
                    0, 0, array("t.role_id = '$roleId'", "l.lang_key = '$langKey'"), 'date_create DESC', true
                );
                if (is_array($langDefaults)) {
                    foreach ($langDefaults as $value) {
                        if (!empty($value['id_mul'])) {
                            $idLangMuls[] = $value['id_mul'];
                        }
                    }
                    if (is_array($idLangMuls) && count($idLangMuls) > 0) {
                        $objLangMul->delete($idLangMuls);
                    }
                }
            }
        }
        $this->_helper->redirector('index', 'admin');
    }
    public function changeStatusAction()
    {
        $request = $this->getRequest();
        $id = $request->getParam('id', '');
        $status = $request->getParam('status', '');
        if (!empty($id)) {
            if (!empty($status) && $status === 2) {
                $status = 3;
            } elseif (!empty($status) && $status === 3) {
                $status = 2;
            }
            if (!empty($status)) {
                $obj = new Language_Model_SiteLanguage();
                $obj->find($id);
                $obj->setDefault(intval($status));
                $obj->save();
            }
        }
        $this->_helper->redirector('index', 'admin');
    }
    public function checkDefaultAction()
    {
        $configuration = Zend_Registry::get('languageconfig');
        $request = $this->getRequest();
        $id = $request->getParam('id', '');
        $roleId = $request->getParam('role_id', $configuration->language->config->guestrole);
        $wheres = array();
        $lId = '';
        if (!empty($roleId)) {
            $wheres[] = "t.role_id = '$roleId'";
        }
        if (!empty($id)) {
            $obj = new Language_Model_SiteLanguage();
            $rst = $obj->getList(0, 0, $wheres);
            if (is_array($rst)) {
                foreach ($rst as $value) {
                    if (!empty($value['id'])) {
                        $lId = $value['id'];
                    }
                    if (!empty($lId) && !empty($id)) {
                        $obj->find($lId);
                        $curDefault = $obj->getDefault();
                        if (intval($curDefault) === 1) {
                            $obj->setDefault(2);
                            $obj->save();
                        }
                    }
                }
                //Set default for record with $id
                if (!empty($id)) {
                    $obj->find($id);
                    $obj->setDefault(1);
                    $obj->save();
                }
            }
        }
        //Change language session when role_id == session role_id
        $modelUser = new Language_Model_Users();
        $sesRole = 0;
        if (!empty($this->view->userProfile['username'])) {
            $sesRole = $modelUser->getRoleByUserName($this->view->userProfile['username']);
        }
        if (!empty($sesRole[0]['rid']) && $roleId == $sesRole[0]['rid']) {
            try
            {
                if (!Zend_Session::isStarted()) {
                    Zend_Session::start();
                }
                $langSession = new Zend_Session_Namespace('langsession');
                $langSession->unlock();
            }
            catch (Zend_Session_Exception $e)
            {
                echo "Cannot instantiate this namespace since langsession was created";
            }
            $langSession->current_lang = strtolower($obj->getLangKey());
        }
        $this->_helper->redirector('index', 'admin');
    } //end funciton
} //end class