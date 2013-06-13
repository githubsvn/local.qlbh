<?php
/**
 * @author			
 * @date			April 11, 2011
 * 
 */
class Admin_GeneratorController extends MTxCore_Admin_Controller_Action
{
    private $_acl = array();
    
    /**
     * Tables primary and foreign keys
     * @var array
     */
    protected $_keys = null;
    
    public $_tablePrefix = 'mtx_';
    public $_tableSuffix = '';
    public $_model_dir = ''; // must be set value
    public $_msg = '';
    
    public $_classDbTablePrefix = 'Model_Entities_DbTable_';
    public $_classMapperPrefix = 'Model_Entities_Mapper_';
    public $_classBaseModelPrefix = 'Model_Entities_';
    
    public $_dbAdapter = null;
    public $_listTables = null;

    public function preDispatch()
    {
        /*$userProfile = $this->view->userProfile;
        $this->_acl = new MTxCore_Acl_Acl($userProfile['username']);
        if (! $this->_acl->isUserAllowed($this->getRequest()->getModuleName() . '-' . $this->getRequest()->getControllerName(), $this->getRequest()->getActionName())) {
            $urlOptions = array('module'=>'admin', 'controller'=>'errors', 'action'=>'restricted');
            $this->_helper->redirector->gotoRoute($urlOptions);
        }*/
    }

    public function modelsAction()
    {
        $config = Zend_Registry::get('configuration');
        $this->_model_dir = $config->base->model_dir;
        
        //$this->_helper->layout()->disableLayout();
        //$this->_helper->viewRenderer->setNoRender(true);
        
        $application = new Zend_Application(APP_ENV, realpath(APP_PATH . DS . 'configs' . DS . 'application.ini'));
        
        $bootstrap = $application->getBootstrap();
        $bootstrap->bootstrap('db');
        $this->_dbAdapter = $bootstrap->getResource('db');
        $this->_listTables = $this->_dbAdapter->listTables();
        
        foreach ($this->_listTables as $table) {
            $fields = $this->_dbAdapter->describeTable($table);
            
            $properties = array();
            foreach ($fields as $field) {
                $data = array(
                    'name' => '_' . $field["COLUMN_NAME"] , 'column_name' => $field["COLUMN_NAME"] , 'visibility' => 'protected' , 'datatype' => $field["DATA_TYPE"] , 'docblock' => '@var ' . $field["DATA_TYPE"]);
                if (in_array(strtoupper($field['DATA_TYPE']), explode(',', $config->mysql->datatypes->string))) {
                    $data['datatype'] = 'string';
                }
                elseif (in_array(strtoupper($field['DATA_TYPE']), explode(',', $config->mysql->datatypes->int))) {
                    $data['datatype'] = 'int';
                }
                elseif (in_array(strtoupper($field['DATA_TYPE']), explode(',', $config->mysql->datatypes->float))) {
                    $data['datatype'] = 'float';
                }
                elseif (in_array(strtoupper($field['DATA_TYPE']), explode(',', $config->mysql->datatypes->date))) {
                    $data['datatype'] = 'string';
                }
                elseif (in_array(strtoupper($field['DATA_TYPE']), explode(',', $config->mysql->datatypes->misc))) {
                    $data['datatype'] = ''; // temp
                }
                else {
                    $data['datatype'] = '';
                }
                
                $properties[] = $data;
                
                if ($field['PRIMARY'] == 1) {
                    $primaryKey[] = array(
                        'name' => $field['COLUMN_NAME']);
                }
            }
            
            $this->generateMapper($table, $properties, $primaryKey);
            $this->generateModelDbTable($table, $primaryKey);
            $this->generateBaseModel($table, $properties, $primaryKey);
            $primaryKey = array();
            
            $this->view->assign('result', $this->_msg);
        }
    }

    // Generate Mapper object
    public function generateMapper ($table, $properties, $primaryKey)
    {
        $_className = $this->PasscalCase(str_replace("{$this->_tablePrefix}", '', $table));
        foreach ($properties as $key => $property) {
            $_suffixMethod = $this->PasscalCase(($property['column_name']));
            $_getMethods[] = "'{$property ['column_name']}' => " . '$object->' . 'get' . $_suffixMethod . '()';
            $temp = '$dtr->' . $property['name'];
            $temp = str_replace('$dtr->_', '$dtr->', $temp);
            if ($key == 0)
                $_setMethods[] = '$object->' . 'set' . $_suffixMethod . '(' . $temp . ')';
            else
                $_setMethods[] = 'set' . $_suffixMethod . '(' . $temp . ')';
        }
        $file = new Zend_CodeGenerator_Php_File();
        $docblock = new Zend_CodeGenerator_Php_Docblock(array('shortDescription' => 'MTxCore Core [short name : MTxCore]' . "\n\n" . 'Object Role Modeling (ORM) is a powerful method for designing and querying database models at the conceptual level, where the application is described in terms easily understood by non-technical users. In practice, ORM data models often capture more business rules, and are easier to validate and evolve than data models in other approaches.' , 'longDescription' => 'MTxCore is a software development company specializing in Web Application and Media. Asianoss\'s combination of experience and specialization on Internet technologies extends our customers\' competitive advantage and helps them maximize their return on investment. We aim to realize your company\'s goals and vision though ongoing communication and our commitment to quality.' , 'tags' => array(array('name' => 'category' , 'description' => "\t" . 'MTxCore') , array('name' => 'package' , 'description' => "\t" . 'MTxCore >> Mapper') , array('name' => 'copyright' , 'description' => "\t" . 'Copyright (c) 2000-' . date('Y') . ' SuttixMedia VN JSC.') , array('name' => 'license' , 'description' => "\t" . 'http://www.MTxCore.com') , array('name' => 'version' , 'description' => "\t" . 'MTxCore version 1.0.0') , array('name' => 'author' , 'description' => "\t\t" . '') , array('name' => 'implement' , 'description' => "\t" . 'Name of developer'))));
        $file->setDocblock($docblock);
        $class = new Zend_CodeGenerator_Php_Class();
        //$class->setAbstract(true);
        $class->setName($this->_classMapperPrefix . $_className . 'Mapper');
        // initialize properties
        $properties = array(array('name' => '_dbTable' , 'visibility' => 'protected' , 'docblock' => '@var ' . $this->_classDbTablePrefix . $_className , 'default' => new Zend_CodeGenerator_Php_Parameter_DefaultValue("null")));
        $class->setProperties($properties);
        // Generate get, set DbTable
        $class->setMethods(array(new Zend_CodeGenerator_Php_Method(array('name' => 'getDbTable' , 'body' => 'if (null === $this->_dbTable){' . "\n\t" . '$this->setDbTable ( \'' . $this->_classDbTablePrefix . $_className . '\' );' . "\n}\n" . 'return $this->_dbTable;' , 'docblock' => new Zend_CodeGenerator_Php_Docblock(array('shortDescription' => 'Get registered Zend_Db_Table instance' , 'tags' => array(new Zend_CodeGenerator_Php_Docblock_Tag_Return(array('datatype' => 'Zend_Db_Table_Abstract')))))))));
        $class->setMethods(array(new Zend_CodeGenerator_Php_Method(array('name' => 'setDbTable' , 'parameters' => array(array('name' => 'dbTable' , 'defaultValue' => new Zend_CodeGenerator_Php_Parameter_DefaultValue("null"))) , 'body' => 'if (is_string ( $dbTable )){' . "\n\t" . '$dbTable = new $dbTable ( );' . "\n}" . 'if (! $dbTable instanceof Zend_Db_Table_Abstract){' . "\n\t" . 'throw new Zend_Exception ( \'Invalid table data gateway provided\' );' . "\n}\n" . '$this->_dbTable = $dbTable;' . "\n" . 'return $this;' , 'docblock' => new Zend_CodeGenerator_Php_Docblock(array('shortDescription' => 'Specify Zend_Db_Table instance to use for data operations' , 'tags' => array(new Zend_CodeGenerator_Php_Docblock_Tag_Param(array('datatype' => 'Zend_Db_Table_Abstract' , 'paramName' => 'dbTable')) , new Zend_CodeGenerator_Php_Docblock_Tag_Return(array('datatype' => $this->_classMapperPrefix . $_className . 'Mapper')))))))));
        // Generate save method
        $temp = explode('_', $primaryKey[0]['name']);
        foreach ($temp as $kkk => $ttt) {
            $temp[$kkk] = ucfirst($ttt);
        }
        $nameUF = implode('', $temp);
        $class->setMethods(array(new Zend_CodeGenerator_Php_Method(array('name' => 'save' , 'parameters' => array(array('type' => $this->_classBaseModelPrefix . $_className , 'name' => 'object') , array('type' => 'Array' , 'name' => 'filter_array' , 'defaultValue' => new Zend_CodeGenerator_Php_Parameter_DefaultValue("array()")) , array('name' => 'ignoreEmptyValuesOnUpdate' , 'defaultValue' => new Zend_CodeGenerator_Php_Parameter_DefaultValue("true")) , array('name' => 'pkey' , 'defaultValue' => 'id')) , 'body' => '$data = array (' . "\n\t" . implode(",\n\t", $_getMethods) . "\n" . ');' . "\n" . 'if ($ignoreEmptyValuesOnUpdate){' . "\n\t" . 'foreach ( $data as $key => $value )' . "\n\t\t" . 'if (is_null ( $value ) or $value == \'\')' . "\n\t\t" . 'unset ( $data [$key] );' . "\n}\n" . 'if (null === ($id = $object->get' . $nameUF . ' ())){' . "\n\t" . 'unset ( $data [\'' . $primaryKey[0]['name'] . '\'] );' . "\n\t" . '$this->getDbTable ()->insert ( $data );' . "\n\t" . 'return $this->getDbTable ()->getDefaultAdapter ()->lastInsertId ();' . "\n" . '} else {' . "\n\t" . 'if ($this->getDbTable ()->update ( $data, array (\'' . $primaryKey[0]['name'] . ' = ?\' => $id ) ) < 0){' . "\n\t\t" . 'return false;' . "\n\t" . '} else {' . "\n\t\t" . 'return $id;' . "\n\t}" . "\n}" , 'docblock' => new Zend_CodeGenerator_Php_Docblock(array('shortDescription' => 'Save a ' . $_className . ' entry' , 'tags' => array(new Zend_CodeGenerator_Php_Docblock_Tag_Param(array('datatype' => $this->_classBaseModelPrefix . $_className , 'paramName' => 'object')) , new Zend_CodeGenerator_Php_Docblock_Tag_Return(array('datatype' => 'void')))))))));
        // Generate __toArray method
        $class->setMethods(array(new Zend_CodeGenerator_Php_Method(array('name' => 'toArray' , 'parameters' => array(array('type' => $this->_classBaseModelPrefix . $_className , 'name' => 'object')) , 'body' => 'return array (' . "\n\t" . implode(",\n\t", $_getMethods) . "\n" . ');' . "\n" , 'docblock' => new Zend_CodeGenerator_Php_Docblock(array('shortDescription' => 'Get data array' , 'tags' => array(new Zend_CodeGenerator_Php_Docblock_Tag_Param(array('datatype' => $this->_classBaseModelPrefix . $_className , 'paramName' => 'object')) , new Zend_CodeGenerator_Php_Docblock_Tag_Return(array('datatype' => 'array')))))))));
        // Generate find method
        $class->setMethods(array(new Zend_CodeGenerator_Php_Method(array('name' => 'find' , 'parameters' => array(array('name' => 'key') , array('type' => $this->_classBaseModelPrefix . $_className , 'name' => 'object')) , 'body' => '$result = $this->getDbTable ()->find ( $key );' . "\n" . 'if (0 == count ( $result )){return null;}' . "\n" . '$dtr = $result->current ();' . "\n" . implode("\n\t->", $_setMethods) . "\n\t" . '->setMapper ( $this );' , 'docblock' => new Zend_CodeGenerator_Php_Docblock(array('shortDescription' => 'Find an entry by id' , 'tags' => array(new Zend_CodeGenerator_Php_Docblock_Tag_Param(array('datatype' => $this->_classBaseModelPrefix . $_className , 'paramName' => 'object')) , new Zend_CodeGenerator_Php_Docblock_Tag_Return(array('datatype' => 'array')))))))));
        // Generate search method
        $class->setMethods(array(new Zend_CodeGenerator_Php_Method(array('name' => 'search' , 'parameters' => array(array('name' => 'column') , array('name' => 'keyword')) , 'body' => '$select = $this->getDbTable ()->select ();' . "\n" . '$select->where ( "$column = ?", $keyword );' . "\n" . '$dts = $this->getDbTable ()->fetchAll ( $select );' . "\n" . '$entries = array ();' . "\n" . 'foreach ( $dts as $key => $dtr ){' . "\n\t" . '$object = new ' . $this->_classBaseModelPrefix . $_className . ' ( );' . "\n\t" . implode("\n\t\t->", $_setMethods) . "\n\t\t" . '->setMapper ( $this );' . "\n\t" . '$entries [$key] = $object;' . "}" . 'return $entries;' , 'docblock' => new Zend_CodeGenerator_Php_Docblock(array('shortDescription' => 'Find an entry by id' , 'tags' => array(new Zend_CodeGenerator_Php_Docblock_Tag_Param(array('datatype' => $this->_classBaseModelPrefix . $_className , 'paramName' => 'object')) , new Zend_CodeGenerator_Php_Docblock_Tag_Return(array('datatype' => 'array')))))))));
        // Generate delete method
        $class->setMethods(array(new Zend_CodeGenerator_Php_Method(array('name' => 'delete' , 'parameters' => array(array('type' => 'Array' , 'name' => 'ids')) , 'body' => 'if (! is_array ( $ids )){' . "\n\t" . '$ids = array ($ids );' . "\n}\n" . '$wheres = \'' . $primaryKey[0]['name'] . ' IN (\' . implode ( \',\', $ids ) . \')\';' . "\n" . 'return $this->getDbTable ()->delete ( $wheres );' , 'docblock' => new Zend_CodeGenerator_Php_Docblock(array('shortDescription' => 'Delete entry(ies) by id(s)' , 'tags' => array(new Zend_CodeGenerator_Php_Docblock_Tag_Param(array('datatype' => 'array' , 'paramName' => 'ids')) , new Zend_CodeGenerator_Php_Docblock_Tag_Return(array('datatype' => 'mixed')))))))));
        // Generate fetchAll method
        $class->setMethods(array(new Zend_CodeGenerator_Php_Method(array('name' => 'fetchAll' , 'body' => '$dts = $this->getDbTable()->fetchAll();' . "\n" . 'return $dts->toArray ();' , 'docblock' => new Zend_CodeGenerator_Php_Docblock(array('shortDescription' => 'Fetch all data entries' , 'tags' => array(new Zend_CodeGenerator_Php_Docblock_Tag_Param(array('datatype' => 'Zend_Db_Table_Select' , 'paramName' => 'select')) , new Zend_CodeGenerator_Php_Docblock_Tag_Return(array('datatype' => 'mixed')))))))));
        // Generate getArray method
        $class->setMethods(array(new Zend_CodeGenerator_Php_Method(array('name' => 'getArray' , 'parameters' => array(array('name' => 'page') , array('name' => 'limit') , array('type' => 'Array' , 'name' => 'wheres' , 'defaultValue' => new Zend_CodeGenerator_Php_Parameter_DefaultValue("array()")) , array('type' => 'Array' , 'name' => 'orders' , 'defaultValue' => new Zend_CodeGenerator_Php_Parameter_DefaultValue("array()"))) , 'body' => '$select = $this->getDbTable ()->select ();' . "\n" . 'if (is_array ( $wheres ) and count ( $wheres ) > 0){' . "\n\t" . 'foreach ( $wheres as $where ){' . "\n\t" . '$select->where ( $where );' . "\n\t}\n}" . 'if(is_array($orders) and count($orders) > 0){foreach($orders as $order){$select->order($order);}}' . "\n" . 'if ($limit > 0) {' . "\n\t" . '$select->limitPage ( $page, $limit );' . "\n } \n" . '$select->distinct(true);' . "\n" . 'return $this->getDbTable ()->fetchAll ( $select )->toArray ();' , 'docblock' => new Zend_CodeGenerator_Php_Docblock(array('shortDescription' => 'Fetch all data entries' , 'tags' => array(new Zend_CodeGenerator_Php_Docblock_Tag_Param(array('datatype' => 'int' , 'paramName' => 'page')) , new Zend_CodeGenerator_Php_Docblock_Tag_Param(array('datatype' => 'int' , 'paramName' => 'limit')) , new Zend_CodeGenerator_Php_Docblock_Tag_Param(array('datatype' => 'Array' , 'paramName' => 'wheres')) , new Zend_CodeGenerator_Php_Docblock_Tag_Param(array('datatype' => 'Array' , 'paramName' => 'orders')) , new Zend_CodeGenerator_Php_Docblock_Tag_Return(array('datatype' => 'Array')))))))));
        // Generate getObject method
        $class->setMethods(array(new Zend_CodeGenerator_Php_Method(array('name' => 'getObject' , 'parameters' => array(array('name' => 'page') , array('name' => 'limit') , array('type' => 'Array' , 'name' => 'wheres' , 'defaultValue' => new Zend_CodeGenerator_Php_Parameter_DefaultValue("array()")) , array('type' => 'Array' , 'name' => 'orders' , 'defaultValue' => new Zend_CodeGenerator_Php_Parameter_DefaultValue("array()"))) , 'body' => '$select = $this->getDbTable ()->select ();' . "\n" . 'if (is_array ( $wheres ) and count ( $wheres ) > 0){' . "\n\t" . 'foreach ( $wheres as $where ){' . "\n\t\t" . '$select->where ( $where );' . "\n\t}\n}\n\n" . 'if(is_array($orders) and count($orders) > 0){foreach($orders as $order){$select->order($order);}}' . "\n" . 'if ($limit > 0) {' . "\n\t" . '$select->limitPage ( $page, $limit );' . "\n } \n" . '$select->distinct(true);' . "\n" . 'return $this->fetchAll ( $select );' , 'docblock' => new Zend_CodeGenerator_Php_Docblock(array('shortDescription' => 'Fetch all data entries' , 'tags' => array(new Zend_CodeGenerator_Php_Docblock_Tag_Param(array('datatype' => 'int' , 'paramName' => 'page')) , new Zend_CodeGenerator_Php_Docblock_Tag_Param(array('datatype' => 'int' , 'paramName' => 'limit')) , new Zend_CodeGenerator_Php_Docblock_Tag_Param(array('datatype' => 'Array' , 'paramName' => 'wheres')) , new Zend_CodeGenerator_Php_Docblock_Tag_Param(array('datatype' => 'Array' , 'paramName' => 'orders')) , new Zend_CodeGenerator_Php_Docblock_Tag_Return(array('datatype' => 'Array')))))))));
        // Generate getTotalEntries method
        $class->setMethods(array(new Zend_CodeGenerator_Php_Method(array('name' => 'getTotalEntries' , 'parameters' => array(array('type' => 'Array' , 'name' => 'wheres' , 'defaultValue' => new Zend_CodeGenerator_Php_Parameter_DefaultValue("array()"))) , 'body' => '$select = $this->getDbTable ()->select ()->from(array(\'sm\'=>$this->getDbTable ()->getTableName()), array(\'num\'=>\'count(*)\'));' . "\n" . 'if (is_array ( $wheres ) and count ( $wheres ) > 0){' . "\n\t" . 'foreach ( $wheres as $where ){' . "\n\t\t" . '$select->where ( $where );' . "\n\t}\n}" . "\n" . 'return $this->getDbTable ()->fetchRow ( $select )->num;' , 'docblock' => new Zend_CodeGenerator_Php_Docblock(array('shortDescription' => 'Get total entries' , 'tags' => array(new Zend_CodeGenerator_Php_Docblock_Tag_Param(array('datatype' => 'Array' , 'paramName' => 'wheres')) , new Zend_CodeGenerator_Php_Docblock_Tag_Return(array('datatype' => 'int')))))))));
        $file->setClass($class);
        if (! MTxCore_Filesystem_Dir::getDirectories($this->_model_dir . DS . 'Mapper')) {
            MTxCore_Filesystem_Dir::make($this->_model_dir . DS . 'Mapper');
        }
        if (file_put_contents($this->_model_dir . DS . 'Mapper' . DS . $_className . 'Mapper.php', $file->generate())) {
            $this->_msg .= "[CREATED] File: " . $this->_model_dir . DS . 'Mapper' . DS . $_className . 'Mapper.php' . "<br />";
        }
    }
    // Generate DbTable object
    public function generateModelDbTable ($table, $primaryKey)
    {
        $_className = $this->PasscalCase(str_replace("{$this->_tablePrefix}", '', $table));
        $file = new Zend_CodeGenerator_Php_File();
        $docblock = new Zend_CodeGenerator_Php_Docblock(array('shortDescription' => 'MTxCore Core [short name : MTxCore]' . "\n\n" . 'Object Role Modeling (ORM) is a powerful method for designing and querying database models at the conceptual level, where the application is described in terms easily understood by non-technical users. In practice, ORM data models often capture more business rules, and are easier to validate and evolve than data models in other approaches.' , 'longDescription' => 'MTxCore is a software development company specializing in Web Application and Media. Asianoss\'s combination of experience and specialization on Internet technologies extends our customers\' competitive advantage and helps them maximize their return on investment. We aim to realize your company\'s goals and vision though ongoing communication and our commitment to quality.' , 'tags' => array(array('name' => 'category' , 'description' => "\t" . 'MTxCore') , array('name' => 'package' , 'description' => "\t" . 'MTxCore >> Table Object') , array('name' => 'copyright' , 'description' => "\t" . 'Copyright (c) 2000-' . date('Y') . ' SuttixMedia VN JSC.') , array('name' => 'license' , 'description' => "\t" . 'http://www.MTxCore.com') , array('name' => 'version' , 'description' => "\t" . 'MTxCore version 1.0.0') , array('name' => 'author' , 'description' => "\t\t" . '') , array('name' => 'implement' , 'description' => "\t" . 'Name of developer'))));
        $file->setDocblock($docblock);
        $class = new Zend_CodeGenerator_Php_Class(array('name' => $this->_classDbTablePrefix . $_className , 'properties' => array(array('name' => '_name' , 'visibility' => 'protected' , 'defaultValue' => $table) , array('name' => '_primary' , 'visibility' => 'protected' , 'defaultValue' => $primaryKey[0]['name']) , array('name' => '_sequence' , 'visibility' => 'protected' , 'defaultValue' => false)) , 'extendedClass' => 'Zend_Db_Table_Abstract'));
        // generate getTableName method
        $class->setMethods(array(new Zend_CodeGenerator_Php_Method(array('name' => 'getTableName' , 'parameters' => array() , array() , array() , 'body' => ' return $this->_name;' , 'docblock' => new Zend_CodeGenerator_Php_Docblock(array('shortDescription' => 'Retrieve string data' , 'longDescription' => 'Get table name' , 'tags' => array()))))));
        $file->setClass($class);
        if (! MTxCore_Filesystem_Dir::getDirectories($this->_model_dir . DS . 'DbTable')) {
            MTxCore_Filesystem_Dir::make($this->_model_dir . DS . 'DbTable');
        }
        if (file_put_contents($this->_model_dir . DS . 'DbTable' . DS . $_className . '.php', $file->generate())) {
            $this->_msg .= '[CREATED] File: ' . $this->_model_dir . DS . 'DbTable' . DS . $_className . '.php' . "<br />";
        }
    }
    // Generate BaseModel object
    public function generateBaseModel ($table, $properties, $primaryKey)
    {
        $_className = $this->PasscalCase(str_replace("{$this->_tablePrefix}", '', $table));
        $file = new Zend_CodeGenerator_Php_File();
        $docblock = new Zend_CodeGenerator_Php_Docblock(array('shortDescription' => 'MTxCore Core [short name : MTxCore]' . "\n\n" . 'Object Role Modeling (ORM) is a powerful method for designing and querying database models at the conceptual level, where the application is described in terms easily understood by non-technical users. In practice, ORM data models often capture more business rules, and are easier to validate and evolve than data models in other approaches.' , 'longDescription' => 'MTxCore is a software development company specializing in Web Application and Media. Asianoss\'s combination of experience and specialization on Internet technologies extends our customers\' competitive advantage and helps them maximize their return on investment. We aim to realize your company\'s goals and vision though ongoing communication and our commitment to quality.' , 'tags' => array(array('name' => 'category' , 'description' => "\t" . 'MTxCore') , array('name' => 'package' , 'description' => "\t" . 'MTxCore >> Base model') , array('name' => 'copyright' , 'description' => "\t" . 'Copyright (c) 2000-' . date('Y') . ' SuttixMedia VN JSC.') , array('name' => 'license' , 'description' => "\t" . 'http://www.MTxCore.com') , array('name' => 'version' , 'description' => "\t" . 'MTxCore version 1.0.0') , array('name' => 'author' , 'description' => "\t\t" . '') , array('name' => 'implement' , 'description' => "\t" . 'Name of developer'))));
        $file->setDocblock($docblock);
        $class = new Zend_CodeGenerator_Php_Class();
        $class->setName($this->_classBaseModelPrefix . $_className);
        //		$class->setAbstract(true);
        // initialize properties
        $properties = array_merge(array(array('docblock' => '@var ' . $this->_classMapperPrefix . $_className . 'Mapper' , 'name' => '_mapper' , 'visibility' => 'protected')), $properties);
        $class->setProperties($properties);
        // generate constructer
        $class->setMethods(array(new Zend_CodeGenerator_Php_Method(array('name' => '__construct' , 'parameters' => array(array('type' => 'Array' , 'name' => 'options' , 'defaultValue' => new Zend_CodeGenerator_Php_Parameter_DefaultValue("array()"))) , 'body' => 'if (is_array ( $options ) && count($options) > 0){' . "\n\t" . '$this->setOptions ( $options );' . "\n}" , 'docblock' => new Zend_CodeGenerator_Php_Docblock(array('shortDescription' => 'Constructor' , 'tags' => array(new Zend_CodeGenerator_Php_Docblock_Tag_Param(array('datatype' => 'array|null' , 'paramName' => 'options')) , new Zend_CodeGenerator_Php_Docblock_Tag_Return(array('datatype' => 'void')))))))));
        // generate __get, __set functions
        $class->setMethods(array(new Zend_CodeGenerator_Php_Method(array('name' => '__set' , 'parameters' => array(array('name' => 'name' , 'defaultValue' => new Zend_CodeGenerator_Php_Parameter_DefaultValue("null")) , array('name' => 'value' , 'defaultValue' => new Zend_CodeGenerator_Php_Parameter_DefaultValue("null"))) , 'body' => '$method = \'set\' . $name;' . "\n" . 'if (\'mapper\' == $name || ! method_exists ( $this, $method )){' . "\n\t" . 'throw Zend_Exception ( \'Invalid property specified\' );' . "\n}\n" . '$this->$method ( $value );' , 'docblock' => new Zend_CodeGenerator_Php_Docblock(array('shortDescription' => 'Overloading: allow property access' , 'tags' => array(new Zend_CodeGenerator_Php_Docblock_Tag_Param(array('datatype' => 'mixed' , 'paramName' => 'value')) , new Zend_CodeGenerator_Php_Docblock_Tag_Param(array('datatype' => 'string|null' , 'paramName' => 'name')) , new Zend_CodeGenerator_Php_Docblock_Tag_Return(array('datatype' => 'void')))))))));
        $class->setMethods(array(new Zend_CodeGenerator_Php_Method(array('name' => '__get' , 'parameters' => array(array('name' => 'name' , 'defaultValue' => new Zend_CodeGenerator_Php_Parameter_DefaultValue("null"))) , 'body' => '$method = \'get\' . $name;' . "\n" . 'if (\'mapper\' == $name || ! method_exists ( $this, $method )){' . "\n\t" . 'throw Zend_Exception ( \'Invalid property specified\' );' . "\n}\n" . 'return $this->$method ();' , 'docblock' => new Zend_CodeGenerator_Php_Docblock(array('shortDescription' => 'Overloading: allow property access' , 'tags' => array(new Zend_CodeGenerator_Php_Docblock_Tag_Param(array('datatype' => 'string|null' , 'paramName' => 'name')) , new Zend_CodeGenerator_Php_Docblock_Tag_Return(array('datatype' => 'mixed')))))))));
        // generate _mappers get, set function
        $class->setMethods(array(new Zend_CodeGenerator_Php_Method(array('name' => 'setMapper' , 'parameters' => array(array('name' => 'mapper' , 'defaultValue' => new Zend_CodeGenerator_Php_Parameter_DefaultValue("null"))) , 'body' => '$this->_mapper = $mapper;' . "\n" . 'return $this;' , 'docblock' => new Zend_CodeGenerator_Php_Docblock(array('shortDescription' => 'Set data mapper' , 'tags' => array(new Zend_CodeGenerator_Php_Docblock_Tag_Param(array('datatype' => 'mixed' , 'paramName' => 'mapper')) , new Zend_CodeGenerator_Php_Docblock_Tag_Return(array('datatype' => 'mixed')))))))));
        $class->setMethods(array(new Zend_CodeGenerator_Php_Method(array('name' => 'getMapper' , 'body' => 'if (null === $this->_mapper){' . "\n\t" . '$this->setMapper ( new ' . $this->_classMapperPrefix . $_className . 'Mapper ( ) );' . "\n}\n" . 'return $this->_mapper;' , 'docblock' => new Zend_CodeGenerator_Php_Docblock(array('shortDescription' => 'Get data mapper' , 'tags' => array(new Zend_CodeGenerator_Php_Docblock_Tag_Return(array('datatype' => 'mixed')))))))));
        // generate setOptions
        $class->setMethods(array(new Zend_CodeGenerator_Php_Method(array('name' => 'setOptions' , 'parameters' => array(array('type' => 'Array' , 'name' => 'options' , 'defaultValue' => new Zend_CodeGenerator_Php_Parameter_DefaultValue("null"))) , 'body' => '$methods = get_class_methods ( $this );' . "\n" . 'foreach ( $options as $key => $value ){' . "\n\t" . '$key = explode(\'_\', $key);' . "\n\t" . 'foreach ($key as $k => $v) { $key[$k] = ucfirst ( $v ); }' . "\n\t" . '$key = implode(\'\', $key);' . "\n\t" . '$method = \'set\' . ucfirst ( $key );' . "\n\t" . 'if (in_array ( $method, $methods )){' . "\n\t\t" . '$this->$method ( $value );' . "\n\t}" . "\n}\n" . 'return $this;' , 'docblock' => new Zend_CodeGenerator_Php_Docblock(array('shortDescription' => 'Set object state' , 'tags' => array(new Zend_CodeGenerator_Php_Docblock_Tag_Param(array('datatype' => 'array' , 'paramName' => 'options')) , new Zend_CodeGenerator_Php_Docblock_Tag_Return(array('datatype' => 'mixed')))))))));
        // generate get, set methods of properties
        unset($properties[0]);
        foreach ($properties as $property) {
            $_suffixMethod = $this->PasscalCase(($property['column_name']));
            $class->setMethods(array(array('name' => 'set' . $_suffixMethod , 'parameters' => array(array('name' => 'value' , 'defaultValue' => new Zend_CodeGenerator_Php_Parameter_DefaultValue("null"))) , 'body' => '$this->' . "{$property['name']}" . ' = $value;' . "\n" . 'return $this;' , 'docblock' => new Zend_CodeGenerator_Php_Docblock(array('shortDescription' => 'Set the ' . "{$property['name']}" . ' property' , 'tags' => array(new Zend_CodeGenerator_Php_Docblock_Tag_Param(array('paramName' => 'value' , 'datatype' => "{$property['datatype']}")) , new Zend_CodeGenerator_Php_Docblock_Tag_Return(array('datatype' => 'mixed')))))) , new Zend_CodeGenerator_Php_Method(array('name' => 'get' . $_suffixMethod , 'body' => 'return $this->' . "{$property['name']}" . ';' , 'docblock' => new Zend_CodeGenerator_Php_Docblock(array('shortDescription' => 'Retrieve the ' . "{$property['name']}" . ' property' , 'tags' => array(new Zend_CodeGenerator_Php_Docblock_Tag_Return(array('datatype' => "{$property['datatype']}" . '|null')))))))));
        }
        // generate save method
        $class->setMethods(array(new Zend_CodeGenerator_Php_Method(array('name' => 'save' , 'parameters' => array(array('type' => 'Array' , 'name' => 'filter_array' , 'defaultValue' => new Zend_CodeGenerator_Php_Parameter_DefaultValue("array()"))) , 'body' => 'return $this->getMapper ()->save ( $this, $filter_array, true, \'' . $primaryKey[0]['name'] . '\' );' , 'docblock' => new Zend_CodeGenerator_Php_Docblock(array('shortDescription' => 'Save the current entry' , 'tags' => array(new Zend_CodeGenerator_Php_Docblock_Tag_Param(array('datatype' => 'array' , 'paramName' => 'filter_array')) , new Zend_CodeGenerator_Php_Docblock_Tag_Return(array('datatype' => 'mixed')))))))));
        // generate move method
        $class->setMethods(array(new Zend_CodeGenerator_Php_Method(array('name' => 'move' , 'parameters' => array(array('name' => 'dirn') , array('type' => 'Array' , 'name' => 'filter_array' , 'defaultValue' => new Zend_CodeGenerator_Php_Parameter_DefaultValue("array()"))) , 'body' => 'return $this->getMapper ()->move ( $this, $dirn, $filter_array );' , 'docblock' => new Zend_CodeGenerator_Php_Docblock(array('shortDescription' => 'Move the current entry' , 'tags' => array(new Zend_CodeGenerator_Php_Docblock_Tag_Param(array('datatype' => 'int' , 'paramName' => 'dirn')) , new Zend_CodeGenerator_Php_Docblock_Tag_Param(array('datatype' => 'array' , 'paramName' => 'filter_array')) , new Zend_CodeGenerator_Php_Docblock_Tag_Return(array('datatype' => 'mixed')))))))));
        // generate reorder method
        $class->setMethods(array(new Zend_CodeGenerator_Php_Method(array('name' => 'reorder' , 'parameters' => array(array('type' => 'Array' , 'name' => 'filter_array' , 'defaultValue' => new Zend_CodeGenerator_Php_Parameter_DefaultValue("array()"))) , 'body' => 'return $this->getMapper ()->move ( $this, $filter_array );' , 'docblock' => new Zend_CodeGenerator_Php_Docblock(array('shortDescription' => 'Save the current entry' , 'tags' => array(new Zend_CodeGenerator_Php_Docblock_Tag_Param(array('datatype' => 'array' , 'paramName' => 'filter_array')) , new Zend_CodeGenerator_Php_Docblock_Tag_Return(array('datatype' => 'mixed')))))))));
        // generate find method
        $class->setMethods(array(new Zend_CodeGenerator_Php_Method(array('name' => 'find' , 'parameters' => array(array('name' => 'id')) , 'body' => '$this->getMapper ()->find ( $id, $this );' . "\n" . 'return $this;' , 'docblock' => new Zend_CodeGenerator_Php_Docblock(array('shortDescription' => 'Find an entry' , 'longDescription' => 'Resets entry state if matching id found.' , 'tags' => array(new Zend_CodeGenerator_Php_Docblock_Tag_Param(array('datatype' => 'int' , 'paramName' => 'id')) , new Zend_CodeGenerator_Php_Docblock_Tag_Return(array('datatype' => 'mixed')))))))));
        // generate search method
        $class->setMethods(array(new Zend_CodeGenerator_Php_Method(array('name' => 'search' , 'parameters' => array(array('name' => 'column_name') , array('name' => 'keyword')) , 'body' => 'return $this->getMapper ()->search ( $column_name, $keyword );' , 'docblock' => new Zend_CodeGenerator_Php_Docblock(array('shortDescription' => 'Find an entry' , 'longDescription' => 'Resets entry state if matching id found.' , 'tags' => array(new Zend_CodeGenerator_Php_Docblock_Tag_Param(array('datatype' => 'int' , 'paramName' => 'id')) , new Zend_CodeGenerator_Php_Docblock_Tag_Return(array('datatype' => 'mixed')))))))));
        // generate delete method
        $class->setMethods(array(new Zend_CodeGenerator_Php_Method(array('name' => 'delete' , 'parameters' => array(array('type' => 'Array' , 'name' => 'ids' , 'defaultValue' => new Zend_CodeGenerator_Php_Parameter_DefaultValue("array()"))) , 'body' => 'return $this->getMapper ()->delete ( $ids );' , 'docblock' => new Zend_CodeGenerator_Php_Docblock(array('shortDescription' => 'Delete an entry' , 'longDescription' => 'Resets entry state if matching id found.' , 'tags' => array(new Zend_CodeGenerator_Php_Docblock_Tag_Param(array('datatype' => 'Array' , 'paramName' => 'ids')) , new Zend_CodeGenerator_Php_Docblock_Tag_Return(array('datatype' => 'mixed')))))))));
        // generate __toArray method
        $class->setMethods(array(new Zend_CodeGenerator_Php_Method(array('name' => 'toArray' , 'body' => 'return $this->getMapper ()->toArray ( $this );' , 'docblock' => new Zend_CodeGenerator_Php_Docblock(array('shortDescription' => 'Retrieve array data' , 'longDescription' => 'Get all data from single table' , 'tags' => array(new Zend_CodeGenerator_Php_Docblock_Tag_Return(array('datatype' => 'array')))))))));
        // generate getArray method
        $class->setMethods(array(new Zend_CodeGenerator_Php_Method(array('name' => 'getArray' , 'parameters' => array(array('name' => 'page') , array('name' => 'limit') , array('type' => 'Array' , 'name' => 'wheres' , 'defaultValue' => new Zend_CodeGenerator_Php_Parameter_DefaultValue("array()")) , array('type' => 'Array' , 'name' => 'orders' , 'defaultValue' => new Zend_CodeGenerator_Php_Parameter_DefaultValue("array()"))) , 'body' => ' return $this->getMapper ()->getArray ($page, $limit, $wheres, $orders);' , 'docblock' => new Zend_CodeGenerator_Php_Docblock(array('shortDescription' => 'Retrieve array data' , 'longDescription' => 'Get all data from single table' , 'tags' => array(new Zend_CodeGenerator_Php_Docblock_Tag_Param(array('datatype' => 'int' , 'paramName' => 'page')) , new Zend_CodeGenerator_Php_Docblock_Tag_Param(array('datatype' => 'int' , 'paramName' => 'limit')) , new Zend_CodeGenerator_Php_Docblock_Tag_Param(array('datatype' => 'Array' , 'paramName' => 'wheres')) , new Zend_CodeGenerator_Php_Docblock_Tag_Param(array('datatype' => 'Array' , 'paramName' => 'orders')) , new Zend_CodeGenerator_Php_Docblock_Tag_Return(array('datatype' => 'array')))))))));
        // generate getObject method
        $class->setMethods(array(new Zend_CodeGenerator_Php_Method(array('name' => 'getObject' , 'parameters' => array(array('name' => 'page') , array('name' => 'limit') , array('type' => 'Array' , 'name' => 'wheres' , 'defaultValue' => new Zend_CodeGenerator_Php_Parameter_DefaultValue("array()")) , array('type' => 'Array' , 'name' => 'orders' , 'defaultValue' => new Zend_CodeGenerator_Php_Parameter_DefaultValue("array()"))) , 'body' => ' return $this->getMapper ()->getObject ($page, $limit, $wheres, $orders);' , 'docblock' => new Zend_CodeGenerator_Php_Docblock(array('shortDescription' => 'Retrieve array data' , 'longDescription' => 'Get all data from single table' , 'tags' => array(new Zend_CodeGenerator_Php_Docblock_Tag_Param(array('datatype' => 'int' , 'paramName' => 'page')) , new Zend_CodeGenerator_Php_Docblock_Tag_Param(array('datatype' => 'int' , 'paramName' => 'limit')) , new Zend_CodeGenerator_Php_Docblock_Tag_Param(array('datatype' => 'Array' , 'paramName' => 'wheres')) , new Zend_CodeGenerator_Php_Docblock_Tag_Param(array('datatype' => 'Array' , 'paramName' => 'orders')) , new Zend_CodeGenerator_Php_Docblock_Tag_Return(array('datatype' => 'Object')))))))));
        // generate getTotalEntries method
        $class->setMethods(array(new Zend_CodeGenerator_Php_Method(array('name' => 'getTotalEntries' , 'parameters' => array(array('type' => 'Array' , 'name' => 'wheres' , 'defaultValue' => new Zend_CodeGenerator_Php_Parameter_DefaultValue("array()"))) , 'body' => 'return $this->getMapper ()->getTotalEntries ( $wheres );' , 'docblock' => new Zend_CodeGenerator_Php_Docblock(array('shortDescription' => 'Get total entries' , 'longDescription' => 'Resets entry state if matching id found.' , 'tags' => array(new Zend_CodeGenerator_Php_Docblock_Tag_Param(array('datatype' => 'Array' , 'paramName' => 'wheres')) , new Zend_CodeGenerator_Php_Docblock_Tag_Return(array('datatype' => 'mixed')))))))));
        $file->setClass($class);
        if (! MTxCore_Filesystem_Dir::getDirectories($this->_model_dir)) {
            MTxCore_Filesystem_Dir::make($this->_model_dir);
        }
        
        if (file_put_contents($this->_model_dir . DS . $_className . '.php', $file->generate())) {
            $this->_msg .= "[CREATED] File: " . $this->_model_dir . DS . $_className . '.php' . "<br />";
        }
    }
    /**
     * getKeys
     * Get primary and foreign keys
     *
     * @return  array
     */
    protected function getKeys ()
    {
        if ($this->_keys === null) {
            $this->_keys = $this->getPk();
        }
        return ($this->_keys);
    }
    /**
     * get Primary Keys
     * Aggregates data get from database
     *
     * @return  an array of data about the database architecture :
     *          - dependent tables,
     *          - primary and foreign keys,
     *          - reference map,
     *          etc.
     */
    protected function getPk ()
    {
        foreach ($this->getTablesList() as $table) {
            $table = strtolower($table);
            $infos = $this->getDb()->describeTable($table);
            foreach ($infos as $field => $info) {
                if ($info['PRIMARY'] === true && $info['IDENTITY'] === true) {
                    $this->_keys[$table]['pk'][$info['PRIMARY_POSITION']] = $field;
                    $this->getFk($table, $field);
                }
            }
        }
        return ($this->_keys);
    }
    /**
     * getFk
     * get Foreign Keys
     *
     * @return  void
     */
    protected function getFk ($ftable, $fk)
    {
        foreach ($this->getTablesList() as $ptable) {
            if ($ftable != $ptable) {
                $infos = $this->getDb()->describeTable($ptable);
                foreach ($infos as $field => $info) {
                    if ($field == $fk) {
                        if ($info['PRIMARY'] === false && $info['IDENTITY'] === false) {
                            // Dependent Table
                            $this->_keys[$ftable]['dt'][] = $ptable;
                            // Reference tables
                            $role = ucfirst($ptable) . "To" . ucfirst($ftable);
                            $this->_keys[$ptable]['fk'][$role]['columns'] = $field;
                            $this->_keys[$ptable]['fk'][$role]['refTableClass'] = ucfirst($ftable);
                            $this->_keys[$ptable]['fk'][$role]['refColumns'] = $field;
                        } elseif ($info['PRIMARY'] === true && $info['IDENTITY'] === false) {
                            // Dependent Table
                            $this->_keys[$ftable]['dt'][] = $ptable;
                            // Reference tables
                            $role = ucfirst($ptable) . "To" . ucfirst($ftable);
                            $this->_keys[$ptable]['fk'][$role]['columns'] = $field;
                            $this->_keys[$ptable]['fk'][$role]['refTableClass'] = ucfirst($ftable);
                            $this->_keys[$ptable]['fk'][$role]['refColumns'] = $field;
                        }
                    }
                }
            }
        }
        return;
    }
    protected function PasscalCase ($string, $refix = 0)
    {
        $arr = explode('_', $string);
        if ($refix == 1)
            $arr[0] = '';
        foreach ($arr as &$name)
            $name = mb_convert_case($name, MB_CASE_TITLE);
        return implode('', $arr);
    }
}