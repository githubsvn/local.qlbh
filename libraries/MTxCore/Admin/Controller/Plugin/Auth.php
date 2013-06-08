<?php
/**
 * Here're your description about this file and its function
 *
 * @version			$Id: Action.php 07-08-2010 15:45:54$
 * @category		ZFAdmin
 * @package			ZFAdmin Package
 * @subpackage		subpackage
 * @license			http://www.asianoss.com/license
 * @copyright		Copyright (C) 2005 - 2010 Open Source Matters. All rights reserved. (http://www.asianoss.com)
 * @author			thuan.uaf.it@gmail.com <Nguyen Quang Thuan> (asianoss)
 * @implements		all members
 * @file			Action.php
 *
 */

class MTxCore_Admin_Controller_Plugin_Auth extends Zend_Controller_Plugin_Abstract
{
    protected $_stack;

    public function dispatchLoopStartup(Zend_Controller_Request_Abstract $request)
    {
        $front = Zend_Controller_Front::getInstance();
        //creates ActionStack if required
        $actionStack = $front->getPlugin('Zend_Controller_Plugin_ActionStack');
        
        /**
         * check login status
         */
        $auth = Zend_Auth::getInstance();
        $storage = new MTxCore_Auth_Storage_Db(new Model_StorageSession());
        $auth->setStorage($storage);
        $data = $auth->getStorage()->read();
        if (!$data) {
            $config = Zend_Registry::get('configuration');
            $request->setModuleName($config->auth->module);
            $request->setControllerName($config->auth->controller);
            $request->setActionName($config->auth->action);
            $actionStack->forward($request);
        }
    }
}