<?php
class Language_Model_SiteLanguageDefault extends Model_Entities_SiteLanguageDefault
{
    public function generateIni(Array $wheres = array(), Array $orders = array())
    {
        $mapper = $this->getMapper();
        $dbTable = $mapper->getDbTable();
        $select = $dbTable->getDefaultAdapter()->select();
        $select->from(array('c' => $dbTable->getTableName()));
        $select->join(array('p' => 'mtx_csite_language_multi'), 'c.id=p.language_default_id');
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
     * @param unknown_type $roleId
     * @param unknown_type $langKey
     * @return string|string
     */
    public function checkLangIsExist($roleId = '', $defaultText = '', $actionText = '')
    {
        //Add slashes
        $total = 0;
        //$defaultText = htmlspecialchars($defaultText);
        $defaultText = addslashes($defaultText);
        $where = array("role_id = '" . $roleId . "'" , "default_text = '" . $defaultText . "'" , 
            "action = '" . $actionText . "'");
        $total = $this->getTotal($where);
        if ($total > 0) {
            return true;
        }
        return false;
    }
    /**
     *
     * @param unknown_type $roleId
     * @param unknown_type $defaultText
     * @param unknown_type $actionText
     * @return Ambigous <number, unknown>
     */
    public function getIdLangIsExist($roleId = '', $defaultText = '', $actionText = '')
    {
        //Add slashes
        $defaultText = addslashes($defaultText);
        $id = 0;
        $wheres = array("role_id = '" . $roleId . "'" , "default_text = '" . $defaultText . "'" , 
            "action = '" . $actionText . "'");
        if ($this->checkLangIsExist($roleId, $defaultText, $actionText)) {
            $mapper = $this->getMapper();
            $dbTable = $mapper->getDbTable();
            $select = $dbTable->getDefaultAdapter()->select();
            $select->from(array('u' => $dbTable->getTableName()), array('u.id'));
            if (! empty($wheres)) {
                foreach ($wheres as $where) {
                    if ($where != '') {
                        $select->where($where);
                    }
                }
            }
            $result = $dbTable->getDefaultAdapter()->fetchRow($select);
            $id = $result['id'];
        }
        return $id;
    }
    /**
     * @todo get total language in table
     * @param array where
     * @return int >0: if exists , <0 other else
     */
    public function getTotal($wheres = array())
    {
        return $this->getTotalEntries($wheres);
    }
    /**
     * @todo add data to table mtx_csite_language
     * @param unknown_type $params
     * @return id
     */
    public function add($params = array(), $isNotAllowNull = false)
    {
        $rst = 0;
        $datas = $this->buildData($params);
        $obj = new Language_Model_SiteLanguageDefault();
        if (! empty($datas['id'])) { //update
            $obj = $this->setObject($datas);
            $rst = $obj->save(array(), $isNotAllowNull);
        } else { //add new
            if (! $obj->checkLangIsExist($datas['role_id'], $datas['default_text'], $datas['action'])) {
                $obj = $this->setObject($datas);
                $rst = $obj->save(array(), $isNotAllowNull);
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
        //$datas['default_text'] = !empty($params['default_text']) ? addslashes(trim($params['default_text'])) : '';
        $datas['default_text'] = ! empty($params['default_text']) ? trim($params['default_text']) : '';
        $datas['default_text'] = htmlspecialchars_decode($datas['default_text']);
        $datas['default_text'] = htmlspecialchars($datas['default_text']);
        $datas['action'] = ! empty($params['action']) ? trim($params['action']) : '';
        if (empty($datas['id'])) {
            $datas['date_create'] = ! empty($params['date_create']) ?
                $params['date_create'] : date("Y-m-d H:i:s", time());
        }
        $datas['date_modify'] = ! empty($params['date_modify']) ?
            $params['date_modify'] : date("Y-m-d H:i:s", time());
        return $datas;
    }
    /**
     * @todo This function save will accept value NULL. Because in table there are some field is value NULL
     * @param array $filterArray
     * @param unknown_type $isNotAllowNull
     */
    public function save(Array $filterArray = array(), $isNotAllowNull = true)
    {
        return $this->getMapper()->save($this, $filterArray, $isNotAllowNull, 'id');
    }
    /**
     *
     * @param unknown_type $roleId
     * @return unknown
     */
    public function getOptActionByRoleId($roleId = 0)
    {
        $mapper = $this->getMapper();
        $dbTable = $mapper->getDbTable();
        $select = $dbTable->getDefaultAdapter()->select();
        $select->from(array('l' => $dbTable->getTableName()), array('id' , 'action'));
        $select->join(array('r' => 'mtx_cacl_roles'), 'l.role_id = r.role_id', array());
        //$select->where("action <> ''");
        if ($roleId > 0) {
            $select->where('l.role_id = ?', $roleId);
        }
        $select->group(array('action' , 'l.role_id'));
        $result = $dbTable->getDefaultAdapter()->fetchAll($select);
        return $result;
    }
    /**
     * @todo Get list if
     * @param unknown_type $page
     * @param unknown_type $limit
     * @param unknown_type $wheres
     * @param unknown_type $order
     */
    public function getList(
        $page = 0, $limit = 0, $wheres = array(), $order = 'date_create DESC', $isJoin = false, $langKey = ''
    )
    {
        $mapper = $this->getMapper();
        $dbTable = $mapper->getDbTable();
        $select = $dbTable->getDefaultAdapter()->select();
        $select->from(array('t' => $dbTable->getTableName()));
        if ($isJoin) {
            $select->joinLeft(
                array('l' => 'mtx_csite_language_multi'), 
                "t.id = l.language_default_id AND l.lang_key='$langKey'", 
                array('id_mul' => 'l.id' , 'lang_key' , 'translate_text')
            );
        }
        if (is_array($wheres) && count($wheres) > 0) {
            foreach ($wheres as $where) {
                $select->where($where);
            }
        } else if (is_string($wheres) && trim($wheres) != '') {
            $select->where($wheres);
        }
        // Order
        if ($order != '') {
            $select->order($order);
        }
        if ($page > 0 && $limit > 0) {
            $select->limitPage($page, $limit);
        }
        /*echo "<pre>";
         var_dump($select->__toString());*/
        $uList = $dbTable->getDefaultAdapter()->fetchAll($select);
        return @$uList;
    }
    /**
     *
     * @param unknown_type $page
     * @param unknown_type $limit
     * @param unknown_type $wheres
     * @param unknown_type $order
     * @param unknown_type $isJoin
     * @param unknown_type $langKey
     * @return unknown
     */
    public function getDataForIni(
        $page = 0, $limit = 0, $wheres = array(), $order = 'date_create DESC', $isJoin = false, $langKey = 'en'
    )
    {
        $mapper = $this->getMapper();
        $dbTable = $mapper->getDbTable();
        $select = $dbTable->getDefaultAdapter()->select();
        $select->from(array('t' => $dbTable->getTableName()));
        if ($isJoin) {
            $select->joinLeft(
                array('l' => 'mtx_csite_language_multi'), 
                "t.id = l.language_default_id AND l.lang_key='$langKey'", 
                array('id_mul' => 'l.id' , 'lang_key' , 'translate_text')
            );
        }
        if (is_array($wheres) && count($wheres) > 0) {
            foreach ($wheres as $where) {
                $select->where($where);
            }
        } else if (is_string($wheres) && trim($wheres) != '') {
            $select->where($wheres);
        }
        // Order
        if ($order != '') {
            $select->order($order);
        }
        if ($page > 0 && $limit > 0) {
            $select->limitPage($page, $limit);
        }
        $uList = $dbTable->getDefaultAdapter()->fetchAll($select);
        return $uList;
    }
    /**
     *
     * @param $wheres
     */
    public function getTotalList($wheres = array(), $isJoin = false, $langKey = '')
    {
        $mapper = $this->getMapper();
        $dbTable = $mapper->getDbTable();
        $select = $dbTable->getDefaultAdapter()->select();
        $select->from(array('t' => $dbTable->getTableName()), array('CNT' => 'count( DISTINCT t.id)'));
        if ($isJoin) {
            //$select->joinLeft(array('l' => 'mtx_csite_language_multi'), 't.id = l.language_default_id', array(''));
            $select->joinLeft(
                array('l' => 'mtx_csite_language_multi'), 
                "t.id = l.language_default_id AND l.lang_key='$langKey'", 
                array('id_mul' => 'l.id' , 'lang_key' , 'translate_text')
            );
        }
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
     * @return unknown
     */
    public function getGroupActionByRoleId($roleId = 0, $wheres = array())
    {
        $mapper = $this->getMapper();
        $dbTable = $mapper->getDbTable();
        $select = $dbTable->getDefaultAdapter()->select();
        $select->from(array('l' => $dbTable->getTableName()), array('id' , 'action'));
        $select->join(array('r' => 'mtx_acl_roles'), 'l.role_id = r.role_id', array());
        if ($roleId > 0) {
            $select->where('l.role_id = ?', $roleId);
        }
        if (! empty($wheres)) {
            foreach ($wheres as $where) {
                if ($where != '') {
                    $select->where($where);
                }
            }
        }
        $select->group(array('action' , 'l.role_id'));
        $result = $dbTable->getDefaultAdapter()->fetchAll($select);
        return $result;
    }
} //end class
