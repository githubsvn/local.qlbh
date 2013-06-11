<?php
class Language_View_Helper_MySQLDate extends Zend_View_Helper_Abstract
{
    /**
     * @todo convert to lang key in file lang ini (MODULE.CONTROLLER.ACTION.DEFAULTTEXT)
     * @param unknown_type $action
     * @return string
     */
    public function mySQLDate($action = '')
    {
        return $this;
    }

    /**
     * Get Current Date Time
     */
    public function curDate()
    {
        $gmtTime = time();
        $gmtTime = gmdate('Y-m-d H:i:s', $gmtTime + 7*3600);
        return $gmtTime;//date('Y-m-d H:i:s');
    }

    /**
     * Convert Date
     */
    public function sqlDate($strDate)
    {
        $date = explode('/', $strDate.'//');
        if(checkdate($date[1], $date[0], $date[2])) {
            $date = date('Y-m-d H:i:s', strtotime($date[1].'/'.$date[0].'/'.$date[2]));
        } else {
            $date = date('Y-m-d H:i:s');
        }
        return $date;
    }

    /*
     * Date to mysql DATETIME
     */
    public function toMySQL()
    {
        $config = Zend_Registry::get('configuration');
        $format = $config->datetime->format->mysql;
        $date = new Zend_Date();
        return $date->toString($format);
    }

    /**
     * @todo Format mysql datetime
     * @param $sqlDateTime
     * @param $format
     */
    public function formatForMySQLDate($sqlDateTime, $format="Y-m-d")
    {
        $sqlDateTime = strtotime($sqlDateTime);
        return @date($format, $sqlDateTime);
    }
}