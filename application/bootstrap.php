<?php
class Bootstrap extends Zend_Application_Bootstrap_Bootstrap {

    protected $_frontController;

    /**
     * Bootstrap autoloader for application resources
     *
     * @return Zend_Application_Module_Autoloader
     */
    protected function _initAutoload() {
        // Ensure front controller instance is present
        $this->bootstrap('frontController');
        $this->_frontController = $this->getResource('frontController');
        $this->_frontController->throwExceptions(true);
        // Add autoloader empty namespace
        $moduleLoader = new Zend_Application_Module_Autoloader(array('namespace' => '', 'basePath' => APP_PATH));

        /**
         * Auto load for Entity
         */
        require_once LIB_PATH . '/Doctrine/Common/ClassLoader.php';
        $autoloader = \Zend_Loader_Autoloader::getInstance();
        $bisnaAutoloader = new \Doctrine\Common\ClassLoader('Bisna');
        $autoloader->pushAutoloader(array($bisnaAutoloader, 'loadClass'), 'Bisna');

        $appAutoloader = new \Doctrine\Common\ClassLoader('MTxEntity');
        $autoloader->pushAutoloader(array($appAutoloader, 'loadClass'), 'MTxEntity');
    }

    /**
     * Setup Database
     *
     * @return void
     */
    //protected function _initDB() {
        //$this->bootstrap("doctrine");
    //}

    /**
     * Setup logging
     *
     * @return void
     */
    protected function _initHelpers() {

    }

    /**
     * Setup View
     *
     * @return void
     */
    protected function _initView() {
        $view = new Zend_View ();

        // Instantiate and add the helper in one go
        $viewRenderer = Zend_Controller_Action_HelperBroker::getStaticHelper('ViewRenderer');
        $viewRenderer->setView($view);
        $viewRenderer->setViewSuffix('phtml');

        // Initialise Zend_Layout's MVC helpers
        // by default with layout config option in ../configs/application.ini


        return $view;
    }

    /**
     * @Desc : Initial all viewer setting here
     *
     * @return : void
     */
    protected function _initViewSettings() {
        try {
            $config = Zend_Registry::get('configuration');
        } catch (Exception $e) {
            $this->_initConfig();
            $config = Zend_Registry::get('configuration');
        }

        $this->bootstrap('view');
        //$this->_view = $this->getResource ( 'view' );
        // Load scripts to viewers!!
        //$this->_view->addScriptPath("/path/to/scripts/folder");
        // Load view helper
        $this->view->addHelperPath('MTxCore' . DS . 'View' . DS . 'Helper', 'MTxCore_View_Helper');
        $this->view->addHelperPath(APP_PATH . DS . 'modules' . DS . 'language' . DS . 'libraries' . DS . 'views' . DS . 'helpers', 'Language_Libraries_Views_Helpers_');
    }

    /**
     * Setup Plugins
     *
     * @return void
     */
    protected function _initPlugins() {

    }

    /**
     * Setup Plugins
     *
     * @return void
     */
    protected function _initRoutes() {

    }

    /**
     * Setup Plugins
     *
     * @return void
     */
    protected function _initControllers() {

    }

    /**
     * Add Controller Action Helpers
     */
    protected function _initActionHelpers() {
        Zend_Controller_Action_HelperBroker::addPath('MTxCore' . DS . 'Controller' . DS . 'Action' . DS . 'Helper', 'MTxCore_Controller_Action_Helper');
    }

    /**
     * Setup logging
     *
     * @return void
     */
    protected function _initLog() {
        //$this->bootstrap ( 'log' );
        $logs = $this->getPluginResource('log');
        Zend_Registry::set('logger', $logs->getLog());
    }

    /*     * **********************************************************
     * Here I'm loading my configuration file
     * and i am placing the returned object inside Zend registry
     * this is a bit like having it as a global variable
     * ********************************************************** */

    protected function _initConfig() {
        $configuration = new Zend_Config_Ini(APP_PATH . DS . 'configs' . DS . 'configuration.ini', 'bootstrap', array('skipExtends' => false, 'allowModifications' => true));
        Zend_Registry::set('configuration', $configuration);
    }

    /**
     * Run the application
     *
     * Checks to see that we have a default controller directory. If not, an
     * exception is thrown.
     *
     * If so, it registers the bootstrap with the 'bootstrap' parameter of
     * the front controller, and dispatches the front controller.
     *
     * @return void
     * @throws Zend_Application_Bootstrap_Exception
     */
    public function run() {
        try {
            //$this->frontController->setBaseUrl('/sub-folder');
            $this->_frontController->dispatch();
        } catch (Exception $e) {
            echo $e->getMessage();die;
            $logger = Zend_Registry::get('logger');
            $request = $this->_frontController->getRequest();
            $params = $request->getParams();
            unset($params ['error_handler']);
            $message = $e->getMessage() . "\n" . $e->getTraceAsString() . "\n Param: \n" . var_export($params, true) . "\n";
            $configuration = Zend_Registry::get('configuration');
            if ($configuration->log->write->file == 1) {
                $logger->log($message, Zend_Log::DEBUG);
                /* $writer = new Zend_Log_Writer_Stream(DATA_PATH . '\logs\application.log');
                  $logger1 = new Zend_Log($writer);
                  Zend_Debug::dump($logger1);
                  $logger1->log($message, Zend_Log::DEBUG); */
            } else {
                echo '<pre>';
                print_R($message);
                echo '</pre>';
                exit();
            }
        }
    }

}