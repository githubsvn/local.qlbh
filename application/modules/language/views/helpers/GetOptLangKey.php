<?php
class Language_View_Helper_GetOptLangKey extends Zend_View_Helper_Abstract
{
    /**
     * Enter description here...
     *
     * @param unknown_type $selected
     * @return unknown
     */
    public function getOptLangKey($selected = '', $roleId = 0)
    {
        if (empty($selected)) {
            $selected = 1;
        }
        $options = array();
        $obj = new Language_Model_SiteLanguage();
        $rows = $obj->getOptLangKeyByRoleId($roleId);
        //$options[0]    = "";
        if (!empty($rows)) {
            foreach ($rows as $row) {
                $options[$row['lang_key']] = $row['name'];
            }
        }
        return $this->view->formSelect(
    		'lang_key', $selected,
            array('class' => 'select01 wthSelcType2',
                'onchange' => "javascript:document.frmLabelManagement.submit()='/language/manager/index'"),
            $options
        );
    }
}
