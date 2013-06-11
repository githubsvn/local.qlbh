<?php
/**
 * 
 * Enter description here ...
 * @author ThienLe
 *
 */
class Admin_AclController extends MTxCore_Admin_Controller_Action{
	
	public function moduleAction()
	{
		$request 		= $this->getRequest();
		$obj 			= new Model_Module();

		if ($request->isPost()) {
            $ids 		= $request->getParam('chk');
            $task 		= $request->getParam('task');
            $rst 		= null;
            if (is_array($ids) && count($ids) > 0 && !empty($task)) {
            	if (trim($task) == 'delete') {
            		$rst = $obj->deleteItems($ids);
            	}elseif (trim($task) == 'active'){
            		$rst = $obj->changeStatus($ids, 1);
            	}elseif (trim($task) == 'unactive'){
            		$rst = $obj->changeStatus($ids, 0);
            	}
            }
            $messages = array();
            if (!empty($rst)) {
            	$messages['success'][] = $this->view->translate('Action is success.');
            } else {
            	$messages['error'][] = $this->view->translate('Action is not success.');
            }
            $this->view->assign('messages', $messages);
        }
        
		//build wheres in here
		$wheres 		= array();
		$name			= $request->getParam('name', '');
		$dtSearch		= array();
		if (!empty($name)) {
			$dtSearch['name'] = $name;
			$wheres[]	= "acl_module_name LIKE '%" . addslashes($name) . "%'";
		}
		
		//build order in here
		$orders			= array();

		//Prepare data for pagination
		$config 		= Zend_Registry::get('configuration');
		$page			= $this->_request->getParam('page', 1);
		$total 			= $obj->getTotalEntries($wheres);
		$itemPerPage	= $config->site->backend->paging->item_per_page;
		
		//Get data
		$rows 			= $obj->getList($page, $itemPerPage, $wheres, $orders);

		//Assign all data for view
		$this->view->assign('rows', 		$rows);
		$this->view->assign('total', 		$total);
		$this->view->assign('page', 		$page);
		$this->view->assign('itemPerPage', 	$itemPerPage);
		$this->view->assign('pagination_config',
							array('total_items' 	=> $total, 
								  'items_per_page' 	=> $itemPerPage, 
								  'style' 			=> $config->site->backend->paging->style));

		//Assign data for search form
		$this->view->assign('dtSearch', $dtSearch);							
	}	
    
	public function addModuleAction()
	{
		$request 	= $this->_request;
		$messages	= array();
		$form 		= new Admin_Forms_Module($this->view);
		$obj 		= new Model_Module();
		$id 		= $this->_request->getParam('id', '');
	
        $isEdit 	= !empty($id) ? true : false;
		if ($request->isPost()) {
			$params = $request->getParams();
			$data	= $obj->buildData($params);
			$rst 	= $obj->add($data);
			if ($rst > 0) {
				$messages['success'][] = $this->view->translate('Action is success.');
			} else {
				$messages['error'][] = $this->view->translate('Action is not success.');
			}
		} else {
			if ($isEdit) {
				
			}
		}
		
		$this->view->form 		= $form;
        $this->view->isEdit 	= $isEdit;
        $this->view->messages	= $messages;
	}
	
	public function resourceAction()
	{
		
	}
	
	public function privilegeAction()
	{
		
	}
}