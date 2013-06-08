<?php
/**
 * SutrixMedia Core [short name : MTxCore]
 * 
 * Object Role Modeling (ORM) is a powerful method for designing and querying
 * database models at the conceptual level, where the application is described in
 * terms easily understood by non-technical users. In practice, ORM data models
 * often capture more business rules, and are easier to validate and evolve than
 * data models in other approaches.
 * 
 * SutrixMedia is a software development company specializing in Web Application
 * and Media. Asianoss's combination of experience and specialization on Internet
 * technologies extends our customers' competitive advantage and helps them
 * maximize their return on investment. We aim to realize your company's goals and
 * vision though ongoing communication and our commitment to quality.
 * 
 * @category 	MTxCore
 * @package 	MTxCore >> Mapper
 * @copyright 	Copyright (c) 2000-2011 SuttixMedia VN JSC.
 * @license 	http://www.sutrixmedia.com
 * @version 	MTxCore version 1.0.0
 * @author 		
 * @implement 	Name of developer
 */


class Model_Entities_Mapper_AclModuleMapper
{

    /**
     * @var Model_Entities_DbTable_AclModule
     */
    protected $_dbTable = null;

    /**
     * Get registered Zend_Db_Table instance
     * 
     * @return Zend_Db_Table_Abstract
     */
    public function getDbTable()
    {
        if (null === $this->_dbTable){
        	$this->setDbTable ( 'Model_Entities_DbTable_AclModule' );
        }
        return $this->_dbTable;
    }

    /**
     * Specify Zend_Db_Table instance to use for data operations
     * 
     * @param Zend_Db_Table_Abstract $dbTable
     * @return Model_Entities_Mapper_AclModuleMapper
     */
    public function setDbTable($dbTable = null)
    {
        if (is_string ( $dbTable )){
        	$dbTable = new $dbTable ( );
        }if (! $dbTable instanceof Zend_Db_Table_Abstract){
        	throw new Zend_Exception ( 'Invalid table data gateway provided' );
        }
        $this->_dbTable = $dbTable;
        return $this;
    }

    /**
     * Save a AclModule entry
     * 
     * @param Model_Entities_AclModule $object
     * @return void
     */
    public function save(Model_Entities_AclModule $object, Array $filter_array = array(), $ignoreEmptyValuesOnUpdate = true, $pkey = 'id')
    {
        $data = array (
        	'acl_module_id' => $object->getAclModuleId(),
        	'acl_module_name' => $object->getAclModuleName(),
        	'status' => $object->getStatus()
        );
        if ($ignoreEmptyValuesOnUpdate){
        	foreach ( $data as $key => $value )
        		if (is_null ( $value ) or $value == '')
        		unset ( $data [$key] );
        }
        if (null === ($id = $object->getAclModuleId ())){
        	unset ( $data ['acl_module_id'] );
        	$this->getDbTable ()->insert ( $data );
        	return $this->getDbTable ()->getDefaultAdapter ()->lastInsertId ();
        } else {
        	if ($this->getDbTable ()->update ( $data, array ('acl_module_id = ?' => $id ) ) < 0){
        		return false;
        	} else {
        		return $id;
        	}
        }
    }

    /**
     * Get data array
     * 
     * @param Model_Entities_AclModule $object
     * @return array
     */
    public function toArray(Model_Entities_AclModule $object)
    {
        return array (
        	'acl_module_id' => $object->getAclModuleId(),
        	'acl_module_name' => $object->getAclModuleName(),
        	'status' => $object->getStatus()
        );
    }

    /**
     * Find an entry by id
     * 
     * @param Model_Entities_AclModule $object
     * @return array
     */
    public function find($key, Model_Entities_AclModule $object)
    {
        $result = $this->getDbTable ()->find ( $key );
        if (0 == count ( $result )){return null;}
        $dtr = $result->current ();
        $object->setAclModuleId($dtr->acl_module_id)
        	->setAclModuleName($dtr->acl_module_name)
        	->setStatus($dtr->status)
        	->setMapper ( $this );
    }

    /**
     * Find an entry by id
     * 
     * @param Model_Entities_AclModule $object
     * @return array
     */
    public function search($column, $keyword)
    {
        $select = $this->getDbTable ()->select ();
        $select->where ( "$column = ?", $keyword );
        $dts = $this->getDbTable ()->fetchAll ( $select );
        $entries = array ();
        foreach ( $dts as $key => $dtr ){
        	$object = new Model_Entities_AclModule ( );
        	$object->setAclModuleId($dtr->acl_module_id)
        		->setAclModuleName($dtr->acl_module_name)
        		->setStatus($dtr->status)
        		->setMapper ( $this );
        	$entries [$key] = $object;}return $entries;
    }

    /**
     * Delete entry(ies) by id(s)
     * 
     * @param array $ids
     * @return mixed
     */
    public function delete(Array $ids)
    {
        if (! is_array ( $ids )){
        	$ids = array ($ids );
        }
        $wheres = 'acl_module_id IN (' . implode ( ',', $ids ) . ')';
        return $this->getDbTable ()->delete ( $wheres );
    }

    /**
     * Fetch all data entries
     * 
     * @param Zend_Db_Table_Select $select
     * @return mixed
     */
    public function fetchAll()
    {
        $dts = $this->getDbTable()->fetchAll();
        return $dts->toArray ();
    }

    /**
     * Fetch all data entries
     * 
     * @param int $page
     * @param int $limit
     * @param Array $wheres
     * @param Array $orders
     * @return Array
     */
    public function getArray($page, $limit, Array $wheres = array(), Array $orders = array())
    {
        $select = $this->getDbTable ()->select ();
        if (is_array ( $wheres ) and count ( $wheres ) > 0){
        	foreach ( $wheres as $where ){
        	$select->where ( $where );
        	}
        }if(is_array($orders) and count($orders) > 0){foreach($orders as $order){$select->order($order);}}
        if ($limit > 0) {
        	$select->limitPage ( $page, $limit );
         } 
        $select->distinct(true);
        return $this->getDbTable ()->fetchAll ( $select )->toArray ();
    }

    /**
     * Fetch all data entries
     * 
     * @param int $page
     * @param int $limit
     * @param Array $wheres
     * @param Array $orders
     * @return Array
     */
    public function getObject($page, $limit, Array $wheres = array(), Array $orders = array())
    {
        $select = $this->getDbTable ()->select ();
        if (is_array ( $wheres ) and count ( $wheres ) > 0){
        	foreach ( $wheres as $where ){
        		$select->where ( $where );
        	}
        }
        
        if(is_array($orders) and count($orders) > 0){foreach($orders as $order){$select->order($order);}}
        if ($limit > 0) {
        	$select->limitPage ( $page, $limit );
         } 
        $select->distinct(true);
        return $this->fetchAll ( $select );
    }

    /**
     * Get total entries
     * 
     * @param Array $wheres
     * @return int
     */
    public function getTotalEntries(Array $wheres = array())
    {
        $select = $this->getDbTable ()->select ()->from(array('sm'=>$this->getDbTable ()->getTableName()), array('num'=>'count(*)'));
        if (is_array ( $wheres ) and count ( $wheres ) > 0){
        	foreach ( $wheres as $where ){
        		$select->where ( $where );
        	}
        }
        return $this->getDbTable ()->fetchRow ( $select )->num;
    }


}

