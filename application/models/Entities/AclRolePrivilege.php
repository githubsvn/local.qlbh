<?php
/**
 * MTxCore Core [short name : MTxCore]
 * 
 * Object Role Modeling (ORM) is a powerful method for designing and querying
 * database models at the conceptual level, where the application is described in
 * terms easily understood by non-technical users. In practice, ORM data models
 * often capture more business rules, and are easier to validate and evolve than
 * data models in other approaches.
 * 
 * MTxCore is a software development company specializing in Web Application and
 * Media. Asianoss's combination of experience and specialization on Internet
 * technologies extends our customers' competitive advantage and helps them
 * maximize their return on investment. We aim to realize your company's goals and
 * vision though ongoing communication and our commitment to quality.
 * 
 * @category 	MTxCore
 * @package 	MTxCore >> Base model
 * @copyright 	Copyright (c) 2000-2013 SuttixMedia VN JSC.
 * @license 	http://www.MTxCore.com
 * @version 	MTxCore version 1.0.0
 * @author 		
 * @implement 	Name of developer
 */


class Model_Entities_AclRolePrivilege
{

    /**
     * @var Model_Entities_Mapper_AclRolePrivilegeMapper
     */
    protected $_mapper = null;

    /**
     * @var int
     */
    protected $_acl_roleprivilege_id = null;

    /**
     * @var int
     */
    protected $_acl_role_id = null;

    /**
     * @var int
     */
    protected $_acl_privilege_id = null;

    /**
     * @var tinyint
     */
    protected $_status = null;

    /**
     * Constructor
     * 
     * @param array|null $options
     * @return void
     */
    public function __construct(Array $options = array())
    {
        if (is_array ( $options ) && count($options) > 0){
        	$this->setOptions ( $options );
        }
    }

    /**
     * Overloading: allow property access
     * 
     * @param mixed $value
     * @param string|null $name
     * @return void
     */
    public function __set($name = null, $value = null)
    {
        $method = 'set' . $name;
        if ('mapper' == $name || ! method_exists ( $this, $method )){
        	throw Zend_Exception ( 'Invalid property specified' );
        }
        $this->$method ( $value );
    }

    /**
     * Overloading: allow property access
     * 
     * @param string|null $name
     * @return mixed
     */
    public function __get($name = null)
    {
        $method = 'get' . $name;
        if ('mapper' == $name || ! method_exists ( $this, $method )){
        	throw Zend_Exception ( 'Invalid property specified' );
        }
        return $this->$method ();
    }

    /**
     * Set data mapper
     * 
     * @param mixed $mapper
     * @return mixed
     */
    public function setMapper($mapper = null)
    {
        $this->_mapper = $mapper;
        return $this;
    }

    /**
     * Get data mapper
     * 
     * @return mixed
     */
    public function getMapper()
    {
        if (null === $this->_mapper){
        	$this->setMapper ( new Model_Entities_Mapper_AclRolePrivilegeMapper ( ) );
        }
        return $this->_mapper;
    }

    /**
     * Set object state
     * 
     * @param array $options
     * @return mixed
     */
    public function setOptions(Array $options = null)
    {
        $methods = get_class_methods ( $this );
        foreach ( $options as $key => $value ){
        	$key = explode('_', $key);
        	foreach ($key as $k => $v) { $key[$k] = ucfirst ( $v ); }
        	$key = implode('', $key);
        	$method = 'set' . ucfirst ( $key );
        	if (in_array ( $method, $methods )){
        		$this->$method ( $value );
        	}
        }
        return $this;
    }

    /**
     * Set the _acl_roleprivilege_id property
     * 
     * @param int $value
     * @return mixed
     */
    public function setAclRoleprivilegeId($value = null)
    {
        $this->_acl_roleprivilege_id = $value;
        return $this;
    }

    /**
     * Retrieve the _acl_roleprivilege_id property
     * 
     * @return int|null
     */
    public function getAclRoleprivilegeId()
    {
        return $this->_acl_roleprivilege_id;
    }

    /**
     * Set the _acl_role_id property
     * 
     * @param int $value
     * @return mixed
     */
    public function setAclRoleId($value = null)
    {
        $this->_acl_role_id = $value;
        return $this;
    }

    /**
     * Retrieve the _acl_role_id property
     * 
     * @return int|null
     */
    public function getAclRoleId()
    {
        return $this->_acl_role_id;
    }

    /**
     * Set the _acl_privilege_id property
     * 
     * @param int $value
     * @return mixed
     */
    public function setAclPrivilegeId($value = null)
    {
        $this->_acl_privilege_id = $value;
        return $this;
    }

    /**
     * Retrieve the _acl_privilege_id property
     * 
     * @return int|null
     */
    public function getAclPrivilegeId()
    {
        return $this->_acl_privilege_id;
    }

    /**
     * Set the _status property
     * 
     * @param int $value
     * @return mixed
     */
    public function setStatus($value = null)
    {
        $this->_status = $value;
        return $this;
    }

    /**
     * Retrieve the _status property
     * 
     * @return int|null
     */
    public function getStatus()
    {
        return $this->_status;
    }

    /**
     * Save the current entry
     * 
     * @param array $filter_array
     * @return mixed
     */
    public function save(Array $filter_array = array())
    {
        return $this->getMapper ()->save ( $this, $filter_array, true, 'acl_roleprivilege_id' );
    }

    /**
     * Move the current entry
     * 
     * @param int $dirn
     * @param array $filter_array
     * @return mixed
     */
    public function move($dirn, Array $filter_array = array())
    {
        return $this->getMapper ()->move ( $this, $dirn, $filter_array );
    }

    /**
     * Save the current entry
     * 
     * @param array $filter_array
     * @return mixed
     */
    public function reorder(Array $filter_array = array())
    {
        return $this->getMapper ()->move ( $this, $filter_array );
    }

    /**
     * Find an entry
     * 
     * Resets entry state if matching id found.
     * 
     * @param int $id
     * @return mixed
     */
    public function find($id)
    {
        $this->getMapper ()->find ( $id, $this );
        return $this;
    }

    /**
     * Find an entry
     * 
     * Resets entry state if matching id found.
     * 
     * @param int $id
     * @return mixed
     */
    public function search($column_name, $keyword)
    {
        return $this->getMapper ()->search ( $column_name, $keyword );
    }

    /**
     * Delete an entry
     * 
     * Resets entry state if matching id found.
     * 
     * @param Array $ids
     * @return mixed
     */
    public function delete(Array $ids = array())
    {
        return $this->getMapper ()->delete ( $ids );
    }

    /**
     * Retrieve array data
     * 
     * Get all data from single table
     * 
     * @return array
     */
    public function toArray()
    {
        return $this->getMapper ()->toArray ( $this );
    }

    /**
     * Retrieve array data
     * 
     * Get all data from single table
     * 
     * @param int $page
     * @param int $limit
     * @param Array $wheres
     * @param Array $orders
     * @return array
     */
    public function getArray($page, $limit, Array $wheres = array(), Array $orders = array())
    {
        return $this->getMapper ()->getArray ($page, $limit, $wheres, $orders);
    }

    /**
     * Retrieve array data
     * 
     * Get all data from single table
     * 
     * @param int $page
     * @param int $limit
     * @param Array $wheres
     * @param Array $orders
     * @return Object
     */
    public function getObject($page, $limit, Array $wheres = array(), Array $orders = array())
    {
        return $this->getMapper ()->getObject ($page, $limit, $wheres, $orders);
    }

    /**
     * Get total entries
     * 
     * Resets entry state if matching id found.
     * 
     * @param Array $wheres
     * @return mixed
     */
    public function getTotalEntries(Array $wheres = array())
    {
        return $this->getMapper ()->getTotalEntries ( $wheres );
    }


}

