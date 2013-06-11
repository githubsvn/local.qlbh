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

class MTxCore_Controller_Plugin_Action extends Zend_Controller_Plugin_Abstract
{
    protected $_stack;

    public function dispatchLoopStartup(Zend_Controller_Request_Abstract $request)
    {
        $front = Zend_Controller_Front::getInstance ();

        //creates ActionStack if required
        if (! $front->hasPlugin ( 'Zend_Controller_Plugin_Action' ))
        {
            $actionStack = new Zend_Controller_Plugin_ActionStack ( );
            $front->registerPlugin ( $actionStack );
        }
        else
        {
            $actionStack = $front->getPlugin ( 'Zend_Controller_Plugin_ActionStack' );
        }

        $_params = ( array ) $this->getRequest ()->getParams ();
        if (array_key_exists ( 'task', $_params ) and empty ( $_params ['task'] ) == false)
        {
            $request->setActionName ( $_params ['task'] )->setParams ( $_params );
            $actionStack->forward ( $request );
        }
    }

    public function getStack()
    {
        if (null === $this->_stack)
        {
            $front = Zend_Controller_Front::getInstance ();
            if (! $front->hasPlugin ( 'Zend_Controller_Plugin_ActionStack' ))
            {
                $stack = new Zend_Controller_Plugin_ActionStack ( );
                $front->registerPlugin ( $stack );
            }
            else
            {
                $stack = $front->getPlugin ( 'ActionStack' );
            }
            $this->_stack = $stack;
        }
        return $this->_stack;
    }
}