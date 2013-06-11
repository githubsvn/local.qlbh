<?php
class Language_View_Helper_GetOptRole extends Zend_View_Helper_Abstract
{
    /**
     * Enter description here...
     *
     * @param unknown_type $selected
     * @return unknown
     */
    public function getOptRole($selected = 1)
    {
        if (empty($selected)) {
            $selected = 1;
        }
        $options = array();
        $obj = new Language_Model_AclRoles();
        $rows = $obj->getOptionRoles();
        if (!empty($rows)) {
            foreach ($rows as $row) {
                $options[$row['role_id']] = $row['role_name'];
            }
        }
        return $this->view->formSelect(
            'role_id', $selected,
            array('class' => 'select01 wthSelcType2',
                'onchange' => "javascript:document.frmLabelManagement.submit()='/language/manager/index'"),
            $options
        );
    }
}
