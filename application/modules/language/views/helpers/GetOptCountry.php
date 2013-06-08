<?php
class Language_View_Helper_GetOptCountry extends Zend_View_Helper_Abstract
{
    /**
     * Enter description here...
     *
     * @param unknown_type $selected
     * @return unknown
     */
    public function getOptCountry($selected = '', $wheres = array())
    {
        if (empty($selected)) {
            $selected = 1;
        }
        $options = array();
        $obj = new Language_Model_Country();
        $rows = $obj->getOptCountry($wheres);
        $options[0] = "";
        if (!empty($rows)) {
            foreach ($rows as $row) {
                $options[$row['key']] = $row['name'];
            }
        }
        return $this->view->formSelect('country_lang', $selected, array(), $options);
    }
}
