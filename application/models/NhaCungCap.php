<?php

class Model_NhaCungCap extends Model_Entities_Ncc {

    /**
     *
     * @param unknown_type $page
     * @param unknown_type $limit
     * @param unknown_type $wheres
     * @param unknown_type $order
     * @param unknown_type $like
     * @param unknown_type $orLike
     * @param unknown_type $joinBlog : join with table sm_blog to egt blog_name that to show in BO.
     * @return unknown
     */
    public function getList($start = 0, $limit = 0, $wheres = array(), $sortColumn = '', $type = 'DESC') {
        $mapper = $this->getMapper();
        $dbTable = $mapper->getDbTable();
        $select = $dbTable->getDefaultAdapter()->select();
        $select->from(array('t' => $dbTable->getTableName()));

        if (is_array($wheres) && count($wheres) > 0) {
            foreach ($wheres as $key => $where) {
                if (!empty($key) && !intval($key))
                    $select->where($key . '=?', $where);
                else {
                    $select->where($where);
                }
            }
        } elseif (is_string($wheres) && !empty($wheres)) {
            $select->where($wheres);
        }
        if (!empty($sortColumn)) {
            $select->order("$sortColumn $type");
        } else {
            $select->order('id DESC');
        }

        if ($limit > 0) {
            $select->limit($limit, $start);
        }
        //echo $select;die;
        $rst = $dbTable->getDefaultAdapter()->fetchAll($select);
        return $rst;
    }

    /**
     *
     * @param type $wheres
     * @return type 
     */
    public function getTotal($wheres = array()) {
        $mapper = $this->getMapper();
        $dbTable = $mapper->getDbTable();
        $select = $dbTable->getDefaultAdapter()->select();
        $select->from(array('t' => $dbTable->getTableName()), array('CNT' => 'count( DISTINCT t.id)'));

        if (is_array($wheres) && count($wheres) > 0) {
            foreach ($wheres as $key => $where) {
                if (!empty($key) && !intval($key))
                    $select->where($key . '=?', $where);
                else {
                    $select->where($where);
                }
            }
        } elseif (is_string($wheres) && !empty($wheres)) {
            $select->where($wheres);
        }
        $result = $dbTable->getDefaultAdapter()->fetchRow($select);
        $count = $result['CNT'];
        return $count;
    }
    
    /**
     * Saving data
     * @param array $filterArray
     * @param type $isNotAllowNull
     * @return type 
     */
    public function save(Array $filterArray = array(), $isNotAllowNull = true) {
        return $this->getMapper()->save($this, $filterArray, $isNotAllowNull, 'id');
    }

    /**
     *
     * @param type $data
     * @return type 
     */
    public function add($params = array()) {
        $rst = 0;
        $data = $this->buildData($params);
        if (is_array($data) && count($data) > 0) {
            if (!empty($data['id'])) {
                $this->find($data['id']);
            }
            //Set data for parner and save to database
            $this->setOptions($data);
            $rst = $this->save(array(), false);
        }
        return $rst;
    }

    /**
     * Buil data
     * @param type $params
     * @param type $userId
     * @return type 
     */
    private function buildData($params = array(), $userId = 0) {
        $data = array();
        if (!empty($params['id'])) {
            $data['id'] = $params['id'];
        }
        
        $data['ten'] = !empty($params['ten']) ? $params['ten'] : '';
        $data['mst'] = !empty($params['mst']) ? $params['mst'] : '';
        $data['diachi'] = !empty($params['diachi']) ? $params['diachi'] : '';
        $data['dienthoai'] = !empty($params['dienthoai']) ? $params['dienthoai'] : '';
        $data['fax'] = !empty($params['fax']) ? $params['fax'] : '';
        $data['tk_ten'] = !empty($params['tk_ten']) ? $params['tk_ten'] : '';
        $data['tk_sotk'] = !empty($params['tk_sotk']) ? $params['tk_sotk'] : '';
        $data['tk_nganhang'] = !empty($params['tk_nganhang']) ? $params['tk_nganhang'] : '';
        $data['tk_diachi_nganhang'] = !empty($params['tk_diachi_nganhang']) ? $params['tk_diachi_nganhang'] : '';
        //$data['des'] = !empty($params['des']) ? stripcslashes($params['des']) : '';
        return $data;
    }
    
    /**
     * Delete item
     * 
     * @param array $ids
     * @return type 
     */
    public function delete(array $ids = array()) {
        return parent::delete($ids);
    }

}

