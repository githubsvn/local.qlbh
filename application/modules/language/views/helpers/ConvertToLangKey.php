<?php
class Language_View_Helper_ConvertToLangKey extends Zend_View_Helper_Abstract
{
    /**
     * @todo convert to lang key in file lang ini(MODULE.CONTROLLER.ACTION.DEFAULTTEXT)
     * @param unknown_type $action
     */
    public function convertToLangKey($action = '')
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
