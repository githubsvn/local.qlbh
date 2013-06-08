<?php
/**
 * Admin_Libraries_Controller_Action
 * @version            $Id: Action.php 01-08-2010
 * @file            Action.php
 *
 */
abstract class Language_Libraries_Controller_Action extends SMCore_Admin_Controller_Action
{
    /**
     * init
     */
    public function init()
    {
        parent::init();
        $configuration = new Zend_Config_Ini(APP_PATH.DS.'modules'.DS.'language'.DS.'config'.DS.'config.ini');
        Zend_Registry::set('languageconfig', $configuration);
        $this->_helper->layout->setLayout('master_language');
        // Load scripts to viewers!!
        $this->view->addScriptPath(APP_PATH.DS."modules".DS."language".DS.'layouts');
        $this->view->addScriptPath(APP_PATH.DS."modules".DS."admin".DS.'layouts');
        // Load scripts to viewers!!
        $this->view->addScriptPath(APP_PATH.DS."modules".DS."admin".DS.'layouts'.DS.'partial');
        $this->view->headLink()->appendStylesheet(
            $this->view->baseUrl().'/language/css/language.css', array('media' => 'screen')
        );
        $this->view->headScript()->appendFile($this->view->baseUrl().'/language/js/lib.js', 'text/javascript');
        $this->view->headScript()->appendFile($this->view->baseUrl().'/language/js/l10n.js', 'text/javascript');
        $this->view->headScript()->appendFile($this->view->baseUrl().'/language/js/util.js', 'text/javascript');
        $this->view->headScript()->appendFile($this->view->baseUrl().'/language/js/start.js', 'text/javascript');
        /*$request                = $this->_request;
         $params                    = $request->getParams();
         $this->view->language     = $this->language = new Language_Libraries_Application_Resource_Language($params);*/
    }
} //end class