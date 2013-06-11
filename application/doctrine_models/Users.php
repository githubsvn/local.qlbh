<?php
class Model_Users
{
	/**
	 * @var MTxEntity\DAL\Entity\Repository\UsersRepository
	 */
	private $_repUsers;
	
	public function __construct()
	{
		//$em = Zend_Registry::get('em');
		//$this->_repUsers = $em->getRepository('MTxEntity:Users');
	}
	
	/**
	 * Get list user
	 */
	public function getList()
	{
		$rst = array();
		try {
			$rst = $this->_repUsers->getList();
		} catch (Exception $ex) {
			throw $ex;
		}
		return $rst;
	}
}