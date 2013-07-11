<?php
class Admin_Forms_Nganhhang extends MTxCore_View_Form_Abstract {

    public function __construct($view = null) {
        /**
         *
         * Zend_View
         * @var unknown_type
         */
        $this->_view = $view;
        $config = Zend_Registry::get('configuration');

        $elements = array();

        $id = new Zend_Form_Element_Hidden('id');
        $elements[] = $id;

        //init for input name in here.
        $ten = new Zend_Form_Element_Text('ten', array('size' => '50', 'class' => 'inputbox'));
        $ten->setRequired(true);
        $valTen = new Zend_Validate_NotEmpty();
        $valTen->setMessage($this->_view->translate('Tên không được rổng.'));
        $ten->addValidator($valTen);
        $elements[] = $ten;
        
        $this->addElements($elements);
        $this->_clearDecoratorForElements();
    }

}