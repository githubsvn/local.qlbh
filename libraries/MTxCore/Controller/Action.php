<?php
/**
 * Here're your description about this file and its function
 *
 * @version			$Id: Action.php 16 Aug 2010 00:39:33$
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

abstract class MTxCore_Controller_Action extends Zend_Controller_Action {
	public $cache = null;
	
	public function init() {
		$config = Zend_Registry::get ( 'configuration' );
		
		$router = $this->getFrontController ()->getRouter ();
		$router->addRoute ( 'requestVars', new MTxCore_Controller_Router_Route_RequestVars () );
		
		// Load meta tags
		$this->view->headMeta ()->appendHttpEquiv ( 'Content-Type', 'text/html;charset=' . $config->charset );
		$this->view->headMeta ()->appendHttpEquiv ( 'Content-Language', 'en-US' );
		$this->view->headMeta ()->appendName ( 'keywords', $config->meta->keywords );
		$this->view->headMeta ()->appendName ( 'author', $config->meta->author );
		$this->view->headMeta ()->appendName ( 'description', $config->meta->description );
		
		// Set doctype and charset
		$this->view->setEncoding ( 'UTF-8' );
		$this->view->doctype ( 'XHTML1_STRICT' );
		
		// Setting up title
		$this->view->headTitle ()->setSeparator ( ' - ' ); // setting a separator string for segments:
		$this->view->headTitle ( $config->title );
		
		// Load CSS
		$this->view->headLink ()->appendStylesheet ( $this->view->baseUrl () . '/css/frontend.screen.css' );
		$this->view->headLink ( array ('rel' => 'shortcut icon', 'href' => $this->view->baseUrl () . '/favicon.ico', 'type' => 'image/x-icon' ), 'PREPEND' );
		
		// Load JS
		$this->view->headScript ()->appendFile ( $this->view->baseUrl () . '/js/common.js', 'text/javascript' );
		
		// load block
		$this->loadBlock ();
	}
	
	public function preDispatch() {
		$config = Zend_Registry::get ( 'configuration' );
		$this->view->assign ( 'config', $config );
		
		$frontendOptions = array ('lifetime' => null, 'automatic_serialization' => true );
		$backendOptions = array ('cache_dir' => $config->cache_dir ); // Directory where to put the cache files
		

		$this->cache = Zend_Cache::factory ( 'Core', 'File', $frontendOptions, $backendOptions );
		Zend_Registry::set ( 'cache', $this->cache );
		$this->view->assign ( 'cache', $this->cache );
	}
	
	/**
	 * Post-dispatch routines
	 *
	 * Called after action method execution. If using class with
	 * {@link Zend_Controller_Front}, it may modify the
	 * {@link $_request Request object} and reset its dispatched flag in order
	 * to process an additional action.
	 *
	 * Common usages for postDispatch() include rendering content in a sitewide
	 * template, link url correction, setting headers, etc.
	 *
	 * @return void
	 *
	 *
	 * Override from Zend Controller Action
	 * @implements : thuan.uaf.it@gmail.com <Nguyen Quang Thuan>
	 */
	public function postDispatch() {
		// to do ...
	}
	
	/**
	 * @todo load all block
	 * @return void
	 */
	private function loadBlock() {
		$blocksConfig = new Zend_Config_Ini ( APP_PATH . DS . 'configs' . DS . 'blocks.ini' );
		$blocks = $blocksConfig->toArray ();
		foreach ( $blocks as $blockName => $options ) {
			if ($options ['display'] == 'all') {
				$this->_helper->block->add ( $blockName );
			} elseif ($options ['display'] != 'none') {
				$modules = explode ( ',', $options ['display'] );
				for($i = 0; $i < count ( $modules ); $i ++) {
					if ($this->_request->getModuleName () == $modules [$i]) {
						$this->_helper->block->add ( $blockName );
						break;
					}
				}
			}
		}
	}
}