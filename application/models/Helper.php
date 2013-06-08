<?php
class Model_Helper{
	
	/**
	 * Get DB
	 * Enter description here ...
	 */
	public function getAdapter ()
	{
		$db 	= null;
		$obj 	= new Model_Users();
		$db		= $obj->getMapper()->getDbTable()->getDefaultAdapter();
		return $db;
	}
}