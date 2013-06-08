<?php
/**
 *
 * Enter description here ...
 * @author ThienLe
 *
 */
class Model_Module extends Model_Entities_AclModule{
	/**
	 *
	 * Enter description here ...
	 * @var Zend_Db_Table_Abstract
	 */
	private $_db;
	/**
	 *
	 * Enter description here ...
	 * @var Model_Entities_DbTable_AclModule
	 */
	private $_table;

	public function __construct($options = array())
	{
		parent::__construct($options);
		$this->_table 	= $this->getMapper()->getDbTable();
		$this->_db 		= $this->_table->getDefaultAdapter();
	}
	
	/**
	 * Get items in table mtx_module follow cond and to have pagination.
	 * @param init $page
	 * @param int $limit
	 * @param array $wheres
	 * @param int $order
	 */
	public function getList($page = 0, $rowCount = 0, $wheres = array(), $orders = '')
	{
		$rows 	= array();
		$select = $this->_db->select();
		$select->from(array('t' => $this->_table->getTableName()));
		if (is_array($wheres) && count($wheres) > 0) {
			foreach($wheres as $where){
				$select->where($where);
			}
		} elseif (is_string($wheres)) {
			$select->where($wheres);
		}
		
		if (is_array($orders) && count($orders) > 0) {
			foreach ($orders as $order) {
				$select->order($order);
			}
		} elseif(is_string($orders)) {
			$select->order($orders);
		}
		
		if($page > 0 && $rowCount > 0){
			$select->limitPage($page, $rowCount);
		}
		$rows = $this->_db->fetchAll($select);
		return $rows;
	} //end getList()
	
	public function deleteItems($ids = array())
	{
		$rst = 0;
		if (is_array($ids) && count($rst) > 0) {
			$rst = $this->delete($ids);
		}
		return $rst;
	}
	
	public function changeStatus($ids = array(), $status = '')
	{
		$rst = array();
		if (is_array($ids) && count($ids) > 0) {
			foreach ($ids as $id) {
				if (is_numeric($status) && is_numeric($id)) {
					$this->find($id);
					$this->setStatus($status);
					$rst[] = $this->save(array(), false);
				}
			}
		}
		return $rst;
	}
	
	public function save(Array $filterArray = array(), $isNotAllowNull = true)
    {
        return $this->getMapper()->save($this, $filterArray, $isNotAllowNull, 'id');
    }
    
    public function add($data = array())
    {
    	$rst = 0;
    	if (is_array($data) && count($data) > 0) {
    		$this->setOptions($data);
    		$valid = $this->validate();
    		if (!$valid['isError']) {
    			$rst = $this->save(array(), false);	
    		}
    	}
    	return $rst;
    }
    
    public function buildData($params = array())
    {
    	$data = array();
    	$data['acl_module_name'] = !empty($params['name']) ? $params['name'] : '';
    	$data['status'] = !empty($params['status']) ? $params['status'] : 0;
    	return $data;
    }
    
    public function validate()
    {
    	$view = new Zend_View();
    	$view->addHelperPath( APP_PATH . DS .'modules'. DS .
        										'language' . DS .
        										'libraries' .DS.
        										'views'.DS.
        										'helpers', 'Language_Libraries_View_Helper_');
    	$valid						= array();
    	$valid['isError'] 			= false;
    	$valid['msg']				= array();
    	$data 						= $this->toArray();
    	if (empty($data['acl_module_name'])) {
    		$valid['isError'] 		= true;
    		$valid['msg']['name'] 	= $view->translate('Module is not empty.');
    	}

    	return $valid;
    }
}//end class
