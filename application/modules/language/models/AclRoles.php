<?php
class Language_Model_AclRoles extends Model_Entities_AclRole
{
    /**
     * @todo Get option of Role
     * @return array list of role
     */
    public function getOptionRoles()
    {
        $mapper = $this->getMapper();
        $dbTable = $mapper->getDbTable();
        $select = $dbTable->getDefaultAdapter()->select();
        $select->from(array('t' => $dbTable->getTableName()), array('acl_role_id' , 'acl_role_name'));
        $select->join(array('l' => 'mtx_site_language'), 'l.role_id = t.acl_role_id');
        $result = $dbTable->getDefaultAdapter()->fetchAll($select);
        return $result;
    }
    /**
     * @todo Get option of Role
     * @return array list of role
     */
    public function getGroupRoles()
    {
        $mapper = $this->getMapper();
        $dbTable = $mapper->getDbTable();
        $select = $dbTable->getDefaultAdapter()->select();
        $select->from(array('t' => $dbTable->getTableName()), array('acl_role_id' , 'role_name'));
        $select->join(array('l' => 'mtx_site_language'), 'l.role_id = t.acl_role_id');
        $select->group(array('t.role_id' , 't.role_name'));
        $result = $dbTable->getDefaultAdapter()->fetchAll($select);
        return $result;
    }
    /**
     *
     * @param unknown_type $fieldName
     * @param unknown_type $fieldValue
     * @return unknown
     */
    public function getDataByFieldName($fieldName = '', $fieldValue = '')
    {
        $array = array();
        if (! empty($fieldName) && ! empty($fieldValue)) {
            $array = $this->search($fieldName, $fieldValue);
            if (is_array($array) && count($array) > 0) {
                $obj = reset($array);
                $array = $obj->toArray();
            }
            return $array;
        }
    }
} //end class
