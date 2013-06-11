<?php
class Language_Libraries_View_Helper_Translate extends Zend_View_Helper_Abstract
{
    private $_langResource;
    public function __construct()
    {
        //Get params
        /*$request = Zend_Controller_Front::getInstance()->getRequest();
        $params = $request->getParams();
        $this->_langResource = Language_Libraries_Application_Resource_Language::getInstance($params);*/
    }
    /**
     * Enter description here...
     *
     * @param unknown_type $key
     * @param unknown_type $module
     * @return string
     */
    public function translate($defaulText = '')
    {
        //return $this->_langResource->translate($defaulText);
        return $defaulText;
    }
}
