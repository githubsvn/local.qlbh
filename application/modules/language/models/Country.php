<?php
class Language_Model_Country extends SMCore_Model_Country
{
    /**
     *
     * @param unknown_type $wheres
     */
    public function getOpt($wheres = array())
    {
        $mapper = $this->getMapper();
        $dbTable = $mapper->getDbTable();
        $select = $dbTable->getDefaultAdapter()->select();
        $select->from(array('t' => $dbTable->getTableName()), array('id' , 'name' , 'key'));
        if (is_array($wheres) and count($wheres) > 0) {
            foreach ($wheres as $where) {
                $select->where($where);
            }
        }
        $select->order('name');
        $result = $dbTable->getDefaultAdapter()->fetchAll($select);
        return $result;
    }
    /**
     * Functions below is used for Language Resource
     */
    /**
     *
     * @param unknown_type $role_id
     * @return unknown
     */
    public function getOptCountry($wheres = array())
    {
        $mapper = $this->getMapper();
        $dbTable = $mapper->getDbTable();
        $select = $dbTable->getDefaultAdapter()->select();
        $select->from(array('t' => $dbTable->getTableName()), array('key' , 'name'));
        if (is_array($wheres) and count($wheres) > 0) {
            foreach ($wheres as $where) {
                $select->where($where);
            }
        }
        $select->order('name');
        $result = $dbTable->getDefaultAdapter()->fetchAll($select);
        return $result;
    }
} //end class
