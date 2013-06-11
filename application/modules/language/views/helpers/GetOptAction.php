<?php
class Language_View_Helper_GetOptAction extends Zend_View_Helper_Abstract
{
    /**
     * Enter description here...
     *
     * @param unknown_type $selected
     * @return unknown
     */
    public function getOptAction($selected = '', $roleId = 0)
    {
        if (empty($selected)) {
            $selected = 0;
        }
        $options = array();
        $obj = new Language_Model_SiteLanguageDefault();
        $rows = $obj->getOptActionByRoleId($roleId);
        //$options[0]    = " ";
        if (!empty($rows)) {
            if (count($rows) == 1 && $rows[0]['action'] == '') {
                return false;
            }
            foreach ($rows as $row) {
                $langKey = $this->convertToLangKey($row['action']);
                $options[$row['id']] = $langKey;
            }
        } else {
            return false;
        }
        return $this->view->formSelect(
            'action_id', $selected, 
            array('class' => 'select01 wthSelcType2',
                'onchange' => "javascript:document.frmLabelManagement.submit()='/language/manager/index'",
                'style' => 'width:100px;'),
            $options
        );
    }
    /**
     * @todo convert to lang key in file lang ini(MODULE.CONTROLLER.ACTION.DEFAULTTEXT)
     * @param unknown_type $action
     * @return string
     */
    private function convertToLangKey($action = '')
    {
        $text = '';
        if (!empty($action)) {
            $arr = explode('/', $action);
            if (is_array($arr) && count($arr)) {
                for ($i = 0; $i < count($arr); $i++) {
                    $arr[$i] = strtoupper($arr[$i]);
                }
            }
            $text = implode(".", $arr);
        }
        return $text;
    }
}
