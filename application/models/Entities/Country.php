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
 * @copyright 	Copyright (c) 2000-2011 SuttixMedia VN JSC.
 * @license 	http://www.sutrixmedia.com
 * @version 	MTxCore version 1.0.0
 * @author 		
 * @implement 	Name of developer
 */


class Model_Entities_Country
{

    /**
     * @var Model_Entities_Mapper_CountryMapper
     */
    protected $_mapper = null;

    /**
     * @var int
     */
    protected $_id = null;

    /**
     * @var varchar
     */
    protected $_key = null;

    /**
     * @var varchar
     */
    protected $_name = null;

    /**
     * @var varchar
     */
    protected $_code = null;

    /**
     * @var datetime
     */
    protected $_date_create = null;

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
        	$this->setMapper ( new Model_Entities_Mapper_CountryMapper ( ) );
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
     * Set the _key property
     * 
     * @param string $value
     * @return mixed
     */
    public function setKey($value = null)
    {
        $this->_key = $value;
        return $this;
    }

    /**
     * Retrieve the _key property
     * 
     * @return string|null
     */
    public function getKey()
    {
        return $this->_key;
    }

    /**
     * Set the _name property
     * 
     * @param string $value
     * @return mixed
     */
    public function setName($value = null)
    {
        $this->_name = $value;
        return $this;
    }

    /**
     * Retrieve the _name property
     * 
     * @return string|null
     */
    public function getName()
    {
        return $this->_name;
    }

    /**
     * Set the _code property
     * 
     * @param string $value
     * @return mixed
     */
    public function setCode($value = null)
    {
        $this->_code = $value;
        return $this;
    }

    /**
     * Retrieve the _code property
     * 
     * @return string|null
     */
    public function getCode()
    {
        return $this->_code;
    }

    /**
     * Set the _date_create property
     * 
     * @param string $value
     * @return mixed
     */
    public function setDateCreate($value = null)
    {
        $this->_date_create = $value;
        return $this;
    }

    /**
     * Retrieve the _date_create property
     * 
     * @return string|null
     */
    public function getDateCreate()
    {
        return $this->_date_create;
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

