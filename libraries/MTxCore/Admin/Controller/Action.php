<?php

abstract class MTxCore_Admin_Controller_Action extends Zend_Controller_Action {

    protected $cache = null;
    protected $_request;

    public function init() {
        $this->_request = $this->getRequest();

        // check login
        $auth = Zend_Auth::getInstance();
        $data = $auth->getStorage('Administrator')->read();
        if (!$data) {
            if ($this->_request->getActionName() != 'login') {
                $urlOptions = array('module' => 'admin', 'controller' => 'auth', 'action' => 'login');
                $this->_helper->redirector->gotoRoute($urlOptions);
            }
        } else {
            $isPermission = $this->_checkACL($data['id']);
            if (!$isPermission) {
                $urlOptions = array('module' => 'admin', 'controller' => 'auth', 'action' => 'login');
                $this->_helper->redirector->gotoRoute($urlOptions);
            }
            $this->view->assign('userProfile', $data);
        }

        $this->_helper->layout->setLayout('admin_master');
        $config = Zend_Registry::get('configuration');

        // Load meta tags
        $this->view->headMeta()->appendHttpEquiv('Content-Type', 'text/html;charset=' . $config->charset);
        $this->view->headMeta()->appendHttpEquiv('Content-Language', 'en-US');
        $this->view->headMeta()->appendName('keywords', $config->meta->keywords);
        $this->view->headMeta()->appendName('author', $config->meta->author);
        $this->view->headMeta()->appendName('description', $config->meta->description);

        // Set doctype and charset
        $this->view->setEncoding('UTF-8');
        $this->view->doctype('XHTML1_STRICT');

        // Setting up title
        $this->view->headTitle()->setSeparator(' - '); // setting a separator string for segments:
        // load block
        //$this->loadBlock();
    }

    protected function doPaging(Zend_Db_Select $select, $perItem = 0, $pageRange = 0) {
        $page = $this->_request->getParam('page', 1);
        $paginator = Zend_Paginator::factory($select);
        $paginator->setCurrentPageNumber($page);
        if ($pageRange > 0) {
            $paginator->setPageRange($pageRange);
        }
        if ($per_item > 0) {
            $paginator->setItemCountPerPage($per_item);
        }
        return $paginator;
    }

    /**
     * Check ACL of user
     *
     * @param unknown_type $idUser
     * @return boolean
     */
    protected function _checkACL($idUser = '') {
        $request = $this->getRequest();
        if (!empty($idUser)) {
            //Check privilege
            $u = new Model_Users();
            $acl = Model_Acl::getInstance($idUser);
            $uGroupAcl = $u->getGroupAclUser($idUser);
            if (is_object($acl) && $uGroupAcl) {
                return @$acl->isAllowed($uGroupAcl, $request->getControllerName(), $request->getActionName());
            }
        }
        return false;
    }

    public function preDispatch() {
        $config = Zend_Registry::get('configuration');
        $this->view->assign('config', $config);

        $frontendOptions = array('lifetime' => null, 'automatic_serialization' => true);
        $backendOptions = array('cache_dir' => $config->cache_dir); // Directory where to put the cache files
        $this->cache = Zend_Cache::factory('Core', 'File', $frontendOptions, $backendOptions);
        Zend_Registry::set('cache', $this->cache);
        $this->view->assign('cache', $this->cache);

        // get messages
        // i'm using the "conventional" flashMessenger supported by Zend, and implements some feartures
        // to avoid some bugs in his function(redirect loop)
        $flashMessenger = $this->_helper->getHelper('Messenger');
        $messages = $flashMessenger->getMessages();
        if ($messages) {
            $this->view->assign('msg', $flashMessenger->showmessage($messages));
        } else {
            $this->_helper->flashMessenger->clearMessages();
        }
    }

    public function postDispatch() { // to do ...
    }

    /**
     * @todo load all block
     * @return void
     */
    private function loadBlock() {
        $blocksConfig = new Zend_Config_Ini(APP_PATH . DS . 'configs' . DS . 'blocks.ini');
        $blocks = $blocksConfig->toArray();
        foreach ($blocks as $blockName => $options) {
            if ($options ['display'] == 'all') {
                $this->_helper->block->add($blockName);
            } elseif ($options ['display'] != 'none') {
                $modules = explode(',', $options ['display']);
                for ($i = 0; $i < count($modules); $i++) {
                    if ($this->_request->getModuleName() == $modules [$i]) {
                        $this->_helper->block->add($blockName);
                        break;
                    }
                }
            }
        }
    }

    /**
     * Disable layout
     */
    protected function disableLayout() {
        $this->_helper->viewRenderer->setNoRender(true);
        $this->_helper->layout->disableLayout();
    }

}