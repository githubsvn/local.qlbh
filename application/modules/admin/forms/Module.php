<?php
class Admin_Forms_Module extends MTxCore_View_Form_Abstract
{
	public function __construct($view = null)
	{
		$this->_view = $view;
		
		$elements = array();
		
		//init for input name in here.
		$name 		= new Zend_Form_Element_Text('name', array('size' => '50', 'class' => 'inputbox'));
		$name->setRequired(true);
		$valName 	= new Zend_Validate_NotEmpty();
        $valName->setMessage($this->_view->translate('Module name is not valid.'));
        $name->addValidator($valName);
        $elements[] = $name;
        
        //init for input status in here.
        $status 	= new Zend_Form_Element_Checkbox('status', array('class'=>'inputbox'));
		$status->setValue('1');
		$elements[] = $status;
		
		$this->addElements($elements);
	}
}