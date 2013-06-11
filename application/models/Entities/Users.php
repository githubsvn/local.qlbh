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
 * @package 	MTxCore >> Base model
 * @copyright 	Copyright (c) 2000-2013 SuttixMedia VN JSC.
 * @license 	http://www.sutrixmedia.com
 * @version 	MTxCore version 1.0.0
 * @author 		
 * @implement 	Name of developer
 */


class Model_Entities_Users
{

    /**
     * @var Model_Entities_Mapper_UsersMapper
     */
    protected $_mapper = null;

    /**
     * @var int
     */
    protected $_id = null;

    /**
     * @var varchar
     */
    protected $_username = null;

    /**
     * @var varchar
     */
    protected $_password = null;

    /**
     * @var varchar
     */
    protected $_first_name = null;

    /**
     * @var varchar
     */
    protected $_last_name = null;

    /**
     * @var varchar
     */
    protected $_email = null;

    /**
     * @var tinyint
     */
    protected $_status = null;

    /**
     * @var datetime
     */
    protected $_date_created = null;

    /**
     * @var int
     */
    protected $_user_created = null;

    /**
     * @var datetime
     */
    protected $_date_modified = null;

    /**
     * @var int
     */
    protected $_user_modified = null;

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
        	$this->setMapper ( new Model_Entities_Mapper_UsersMapper ( ) );
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
     * Set the _id property
     * 
     * @param int $value
     * @return mixed
     */
    public function setId($value = null)
    {
        $this->_id = $value;
        return $this;
    }

    /**
     * Retrieve the _id property
     * 
     * @return int|null
     */
    public function getId()
    {
        return $this->_id;
    }

    /**
     * Set the _username property
     * 
     * @param string $value
     * @return mixed
     */
    public function setUsername($value = null)
    {
        $this->_username = $value;
        return $this;
    }

    /**
     * Retrieve the _username property
     * 
     * @return string|null
     */
    public function getUsername()
    {
        return $this->_username;
    }

    /**
     * Set the _password property
     * 
     * @param string $value
     * @return mixed
     */
    public function setPassword($value = null)
    {
        $this->_password = $value;
        return $this;
    }

    /**
     * Retrieve the _password property
     * 
     * @return string|null
     */
    public function getPassword()
    {
        return $this->_password;
    }

    /**
     * Set the _first_name property
     * 
     * @param string $value
     * @return mixed
     */
    public function setFirstName($value = null)
    {
        $this->_first_name = $value;
        return $this;
    }

    /**
     * Retrieve the _first_name property
     * 
     * @return string|null
     */
    public function getFirstName()
    {
        return $this->_first_name;
    }

    /**
     * Set the _last_name property
     * 
     * @param string $value
     * @return mixed
     */
    public function setLastName($value = null)
    {
        $this->_last_name = $value;
        return $this;
    }

    /**
     * Retrieve the _last_name property
     * 
     * @return string|null
     */
    public function getLastName()
    {
        return $this->_last_name;
    }

    /**
     * Set the _email property
     * 
     * @param string $value
     * @return mixed
     */
    public function setEmail($value = null)
    {
        $this->_email = $value;
        return $this;
    }

    /**
     * Retrieve the _email property
     * 
     * @return string|null
     */
    public function getEmail()
    {
        return $this->_email;
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
     * Set the _date_created property
     * 
     * @param string $value
     * @return mixed
     */
    public function setDateCreated($value = null)
    {
        $this->_date_created = $value;
        return $this;
    }

    /**
     * Retrieve the _date_created property
     * 
     * @return string|null
     */
    public function getDateCreated()
    {
        return $this->_date_created;
    }

    /**
     * Set the _user_created property
     * 
     * @param int $value
     * @return mixed
     */
    public function setUserCreated($value = null)
    {
        $this->_user_created = $value;
        return $this;
    }

    /**
     * Retrieve the _user_created property
     * 
     * @return int|null
     */
    public function getUserCreated()
    {
        return $this->_user_created;
    }

    /**
     * Set the _date_modified property
     * 
     * @param string $value
     * @return mixed
     */
    public function setDateModified($value = null)
    {
        $this->_date_modified = $value;
        return $this;
    }

    /**
     * Retrieve the _date_modified property
     * 
     * @return string|null
     */
    public function getDateModified()
    {
        return $this->_date_modified;
    }

    /**
     * Set the _user_modified property
     * 
     * @param int $value
     * @return mixed
     */
    public function setUserModified($value = null)
    {
        $this->_user_modified = $value;
        return $this;
    }

    /**
     * Retrieve the _user_modified property
     * 
     * @return int|null
     */
    public function getUserModified()
    {
        return $this->_user_modified;
    }

    /**
     * Save the current entry
     * 
     * @param array $filter_array
     * @return mixed
     */
    public function save(Array $filter_array = array())
    {
        return $this->getMapper ()->save ( $this, $filter_array, true, 'id' );
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

