<?php

class Model_NhaCungCap extends Model_Entities_Ncc
{

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
    public function getList($start = 0, $limit = 0, $wheres = array(), $sortColumn = '', $type = 'DESC')
    {
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
            $select->order($sortColumn, $type);
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

    public function getTotal($wheres = array())
    {
        $mapper = $this->getMapper();
        $dbTable = $mapper->getDbTable();
        $select = $dbTable->getDefaultAdapter()->select();
        $select->from(array('t' => $dbTable->getTableName()), array('CNT' => 'count( DISTINCT t.id)'));

        if (is_array($wheres) && count($wheres) > 0) {
            foreach ($wheres as $key => $where) {
                if (!empty($key) && !intval($key))
                    $select->where($key.'=?', $where);
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
}

