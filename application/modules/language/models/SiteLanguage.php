<?php
class Language_Model_SiteLanguage extends Model_Entities_SiteLanguage
{
    public function getArrayLang($wheres = array(), $orders = array())
    {
        $mapper = $this->getMapper();
        $dbTable = $mapper->getDbTable();
        $select = $dbTable->getDefaultAdapter()->select();
        $select->from(array('c' => $dbTable->getTableName()));
        $select->join(array('p' => 'mtx_country'), 'c.lang_key=p.key', 'p.name');
        if (is_array($wheres) and count($wheres) > 0) {
            foreach ($wheres as $where) {
                $select->where($where);
            }
        }
        if (is_array($orders) and count($orders) > 0) {
            foreach ($orders as $order) {
                $select->order($order);
            }
        }
        return $dbTable->getDefaultAdapter()->fetchAll($select);
    }
    /**
     *
     * @param unknown_type $role_id
     * @return array
     */
    public function getOptLangKeyByRoleId($roleId = 0, $wheres = array())
    {
        $mapper = $this->getMapper();
        $dbTable = $mapper->getDbTable();
        $select = $dbTable->getDefaultAdapter()->select();
        $select->from(array('l' => $dbTable->getTableName()), array('id' , 'lang_key'));
        $select->join(array('r' => 'mtx_acl_roles'), 'l.role_id = r.role_id', array());
        $select->joinLeft(array('c' => 'mtx_country'), 'c.key = l.lang_key', array('name'));
        if ($roleId > 0) {
            $select->where('l.role_id = ?', $roleId);
        }
        if (is_array($wheres) and count($wheres) > 0) {
            foreach ($wheres as $where) {
                $select->where($where);
            }
        }
        $select->group(array('id' , 'l.lang_key' , 'c.name'));
        $result = $dbTable->getDefaultAdapter()->fetchAll($select);
        return $result;
    }
    public function getList($page = 0, $limit = 0, $wheres = array(), $order = 'date_create DESC')
    {
        $mapper = $this->getMapper();
        $dbTable = $mapper->getDbTable();
        $select = $dbTable->getDefaultAdapter()->select();
        $select->from(array('t' => $dbTable->getTableName()));
        $select->join(array('t1' => 'mtx_acl_roles'), 't1.role_id = t.role_id', array('t1.role_name'));
        $select->joinLeft(array('c' => 'mtx_country'), 't.lang_key = c.key', array('country_name' => 'c.name'));
        if (is_array($wheres) && count($wheres) > 0) {
            foreach ($wheres as $where) {
                $select->where($where);
            }
        } else if (is_string($wheres) && trim($wheres) != '') {
            $select->where($wheres);
        }
        $select->group(array('t.role_id' , 't.lang_key'));
        // Order
        if ($order != '') {
            $select->order($order);
        }
        if ($page > 0 && $limit > 0) {
            $select->limitPage($page, $limit);
        }
        $uList = $dbTable->getDefaultAdapter()->fetchAll($select);
        return @$uList;
    }
    /**
     *
     * @param unknown_type $wheres
     * @param unknown_type $order
     */
    public function getLangGroupByRoleLangKey($wheres = array(), $order = 'date_create DESC')
    {
        $mapper = $this->getMapper();
        $dbTable = $mapper->getDbTable();
        $select = $dbTable->getDefaultAdapter()->select();
        $select->from(array('t' => $dbTable->getTableName()), array('t.role_id' , 't.lang_key' , 't.id'));
        if (is_array($wheres) && count($wheres) > 0) {
            foreach ($wheres as $where) {
                $select->where($where);
            }
        } else if (is_string($wheres) && trim($wheres) != '') {
            $select->where($wheres);
        }
        $select->group('t.role_id', 't.lang_key', 't.id');
        if ($order != '') {
            $select->order($order);
        }
        $uList = $dbTable->getDefaultAdapter()->fetchAll($select);
        return @$uList;
    }
    /**
     *
     * @param $wheres
     */
    public function getTotalList($wheres = array())
    {
        $mapper = $this->getMapper();
        $dbTable = $mapper->getDbTable();
        $select = $dbTable->getDefaultAdapter()->select();
        $select->from(array('t' => $dbTable->getTableName()), array('CNT' => 'count( DISTINCT t.id)'));
        $select->joinLeft(array('c' => 'mtx_country'), 'c.lang_key = p.key', array(''));
        if (! empty($wheres)) {
            foreach ($wheres as $where) {
                if ($where != '') {
                    $select->where($where);
                }
            }
        }
        $result = $dbTable->getDefaultAdapter()->fetchRow($select);
        $count = $result['CNT'];
        return $count;
    }
    /**
     *
     * @param unknown_type $roleId
     * @param unknown_type $langKey
     * @return string|string
     */
    public function checkLangIsExist($roleId = '', $langKey = '')
    {
        $where = array("role_id = '" . $roleId . "'" , "lang_key = '" . $langKey . "'" , "`default` != 3");
        $total = $this->getTotal($where);
        if ($total > 0) {
            return true;
        }
        return false;
    }
    /**
     * @todo get total language in table
     * @param array where
     * @return int >0: if exists , <0 other else
     */
    public function getTotal($wheres = array())
    {
        $mapper = $this->getMapper();
        $dbTable = $mapper->getDbTable();
        $select = $dbTable->getDefaultAdapter()->select();
        $select->from(array('u' => $dbTable->getTableName()), array('CNT' => 'count( DISTINCT u.id)'));
        if (! empty($wheres)) {
            foreach ($wheres as $where) {
                if ($where != '') {
                    $select->where($where);
                }
            }
        }
        $result = $dbTable->getDefaultAdapter()->fetchRow($select);
        $count = $result['CNT'];
        return $count;
    }
    /**
     * @todo add data to table mtx_site_language
     * @param unknown_type $params
     * @return id
     */
    public function add($params = array(), $isNotAllowNull = false)
    {
        $rst = 0;
        $datas = $this->buildData($params);
        $obj = new Language_Model_SiteLanguage();
        if (! empty($datas['id'])) { //update
            if (! empty($datas['lang_key'])) {
                $obj = $this->setObject($datas);
                $rst = $obj->save(array(), $isNotAllowNull);
            }
        } else { //add new
            if (! $obj->checkLangIsExist($datas['role_id'], $datas['lang_key'])) {
                if (! empty($datas['lang_key'])) {
                    $obj = $this->setObject($datas);
                    $rst = $obj->save(array(), $isNotAllowNull);
                }
            }
        }
        return $rst;
    }
    /**
     * @todo call all function set of the object
     * @param unknown_type $datas
     */
    public function setObject($datas = array())
    {
        $obj = new $this();
        $classMethods = get_class_methods(get_class($obj));
        $funcName = '';
        if (! empty($datas['id'])) {
            //If to tave id we will excute add action
            $obj->find($datas['id']);
        }
        if (! empty($datas) && is_array($datas)) {
            foreach ($datas as $key => $value) {
                if (! empty($key) && $key !== 'id') {
                    //build function Name
                    $arr = explode("_", $key);
                    $funcName = 'set';
                    if (is_array($arr)) {
                        for ($i = 0; $i < count($arr); $i ++) {
                            $funcName .= ucwords($arr[$i]);
                        }
                    }
                    if (in_array($funcName, $classMethods)) {
                        //call set function name
                        $obj->$funcName($value);
                    }
                    $funcName = '';
                }
            }
        }
        return $obj;
    }
    /**
     * @todo Build data for SiteLang
     * @param unknown_type $params
     */
    public function buildData($params = array())
    {
        $datas = array();
        $datas['id'] = ! empty($params['id']) ? $params['id'] : '';
        $datas['role_id'] = ! empty($params['role_id']) ? $params['role_id'] : '';
        $datas['lang_key'] = ! empty($params['lang_key']) ? trim($params['lang_key']) : '';
        $datas['translated'] = ! empty($params['translated']) ? trim($params['translated']) : 1;
        $datas['default'] = ! empty($params['translated']) ? trim($params['default']) : 2; //2 unpublish
        $datas['translated_date'] = ! empty($params['translated_date']) ?
            $params['translated_date'] : date("Y-m-d H:i:s", time());
        if (empty($datas['id'])) {
            $datas['date_create'] = ! empty($params['date_create']) ?
                $params['date_create'] : date("Y-m-d H:i:s", time());
        }
        $datas['date_modify'] = ! empty($params['date_modify']) ? $params['date_modify'] : date("Y-m-d H:i:s", time());
        return $datas;
    }
    public function getLangDefaultByRole($roleId = '')
    {
        $langKey = 'en';
        if (! empty($roleId)) {
            $wheres = array("t.role_id = '$roleId'");
            $mapper = $this->getMapper();
            $dbTable = $mapper->getDbTable();
            $select = $dbTable->getDefaultAdapter()->select();
            $select->from(array('t' => $dbTable->getTableName()), array('t.role_id' , 't.lang_key' , 't.id'));
            if (is_array($wheres) && count($wheres) > 0) {
                foreach ($wheres as $where) {
                    $select->where($where);
                }
            } else if (is_string($wheres) && trim($wheres) != '') {
                $select->where($wheres);
            }
            $uList = $dbTable->getDefaultAdapter()->fetchRow($select);
            return @$uList;
        }
    }
    public function getLangDefaultOfRoleId($roleId = '')
    {
        $langKey = 'en';
        if (! empty($roleId)) {
            $wheres = array("t.role_id = '$roleId'" , "t.default = '1'");
            $mapper = $this->getMapper();
            $dbTable = $mapper->getDbTable();
            $select = $dbTable->getDefaultAdapter()->select();
            $select->from(array('t' => $dbTable->getTableName()), array('t.role_id' , 't.lang_key' , 't.id'));
            if (is_array($wheres) && count($wheres) > 0) {
                foreach ($wheres as $where) {
                    $select->where($where);
                }
            } else if (is_string($wheres) && trim($wheres) != '') {
                $select->where($wheres);
            }
            $uList = $dbTable->getDefaultAdapter()->fetchRow($select);
            return @$uList;
        }
    }
} //end class
