<?php
class Admin_Forms_Ncc extends MTxCore_View_Form_Abstract {

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
        
        $mst = new Zend_Form_Element_Text('mst', array('size' => '50', 'class' => 'inputbox'));
        $elements[] = $mst;
        $diachi = new Zend_Form_Element_Text('diachi', array('size' => '50', 'class' => 'inputbox'));
        $elements[] = $diachi;
        $dienthoai = new Zend_Form_Element_Text('dienthoai', array('size' => '50', 'class' => 'inputbox'));
        $elements[] = $dienthoai;
        $fax = new Zend_Form_Element_Text('fax', array('size' => '50', 'class' => 'inputbox'));
        $elements[] = $fax;
        $tk_ten = new Zend_Form_Element_Text('tk_ten', array('size' => '50', 'class' => 'inputbox'));
        $elements[] = $tk_ten;
        $tk_sotk = new Zend_Form_Element_Text('tk_sotk', array('size' => '50', 'class' => 'inputbox'));
        $elements[] = $tk_sotk;
        $tk_nganhang = new Zend_Form_Element_Text('tk_nganhang', array('size' => '50', 'class' => 'inputbox'));
        $elements[] = $tk_nganhang;
        $tk_diachi_nganhang = new Zend_Form_Element_Text('tk_diachi_nganhang', array('size' => '50', 'class' => 'inputbox'));
        $elements[] = $tk_diachi_nganhang;
        
        $this->addElements($elements);
        $this->_clearDecoratorForElements();
    }

}