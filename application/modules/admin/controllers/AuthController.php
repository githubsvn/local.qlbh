<?php

class Admin_AuthController extends MTxCore_Admin_Controller_Action {

    /**
     * @todo redirect to login page
     * @return void
     */
    public function indexAction() {
        $urlOptions = array('module' => 'admin', 'controller' => 'auth', 'action' => 'login');
        $this->_helper->redirector->gotoRoute($urlOptions);
    }

    /**
     * @todo Authentication
     * valid: redirect to default administrator site.
     * invalid: alert error message.
     *
     * @return void
     */
    public function loginAction() {
        session_regenerate_id();

        // Start
        // 1.   set layout to admin_login.phtml
        $this->_helper->layout->setLayout('admin_login');
        $request = $this->getRequest();

        // 2.   submit form
        if ($request->isPost()) {
            $values['username'] = $request->getParam('username');
            $values['password'] = $request->getParam('password');
            // 2.1   general validate form data
            if ($this->validate($values)) {
                // 2.2  login process
                if ($this->process($values)) {
                    echo "{success:true}";die;
                    $urlOptions = array(
                        'module' => 'admin',
                        'controller' => 'index',
                        'action' => 'index'
                    );
                    $this->_helper->redirector->gotoRoute($urlOptions);
                } else {
                    $this->view->msg = $this->view->translate('username-or-password-not-match');
                }
            } else {
                $this->view->msg = $this->view->translate('username-or-password-invalid');
            }
        }
    }

    /**
     * @todo clear authenticated session
     * @return void
     */
    public function logoutAction() {
        Zend_Auth::getInstance()->clearIdentity();
        Zend_Session::destroy();
        $urlOptions = array('module' => 'admin', 'controller' => 'auth', 'action' => 'login');
        $this->_helper->redirector->gotoRoute($urlOptions);
    }

    /**
     * @todo Login process
     * @param Array $values
     * @return boolean
     */
    private function process($values) {
        $result = false;
        $objUser = new Model_Users();
        $authAdapter = new Zend_Auth_Adapter_DbTable($objUser->getMapper()->getDbTable()->getAdapter());
        $authAdapter->setTableName($objUser->getMapper()->getDbTable()->getTableName())
                ->setIdentityColumn('username')
                ->setCredentialColumn('password');
        $authAdapter->setIdentity($values['username']);
        $authAdapter->setCredential(md5($values['password']));
        //create new instance of authentication
        $auth = Zend_Auth::getInstance();
        $result = $auth->authenticate($authAdapter);
        if ($result->isValid()) {
            $data = $authAdapter->getResultRowObject(null, array('password'));
            $content = get_object_vars($data);
            $auth->getStorage('Administrator')->write($content);
            $result = true;
        }
        return $result;
    }

    /**
     * @todo Validate general data
     * @param Array $values
     * @return boolean
     */
    private function validate($values) {
        $validator = new Zend_Validate_NotEmpty();
        if ($validator->isValid($values['username'])) {
            $validator = new Zend_Validate_NotEmpty();
            return $validator->isValid($values['password']);
        } else {
            return false;
        }
    }

}