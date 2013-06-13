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
 * @package 	MTxCore >> Table Object
 * @copyright 	Copyright (c) 2000-2013 SuttixMedia VN JSC.
 * @license 	http://www.MTxCore.com
 * @version 	MTxCore version 1.0.0
 * @author 		
 * @implement 	Name of developer
 */


class Model_Entities_DbTable_Users extends Zend_Db_Table_Abstract
{

    protected $_name = 'mtx_users';

    protected $_primary = 'id';

    protected $_sequence = false;

    /**
     * Retrieve string data
     * 
     * Get table name
     */
    public function getTableName()
    {
        return $this->_name;
    }


}

