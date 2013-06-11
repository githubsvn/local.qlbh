<?php
class Language_Model_Users extends Model_Entities_Users
{
    public function getUserInformation($username)
    {
        $array = $this->search('username', $username);
        if (is_array($array) && count($array) > 0) {
            $obj = reset($array);
            $array = $obj->toArray();
        }
        return $array;
    }
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
    /**
     * Check Admin Login
     */
    public function userLogin($params)
    {
        $email = isset($params['username']) ? $params['username'] : '';
        $password = isset($params['password']) ? $params['password'] : '';
        $password = $this->encryptPassword($password);
        // Where
        $where = array('`username` like "' . $email . '"');
        /**
         * Get List
         */
        $total = $this->getTotalEntries($where);
        if ($total > 0) {
            $list = $this->getArray(0, 0, $where);
            if (is_array($list) && count($list) > 0) {
                foreach ($list as $account) {
                    if (isset($account['password']) && $account['password'] == $password) {
                        // update Last Login
                        $usersObj = $this->find($account['id']);
                        $usersObj->setLastlogin(date('Y-m-d H:i:s'));
                        $usersObj->save();
                        unset($account['password']);
                        return $account;
                    }
                }
            }
        }
        return false;
    }
    /**
     * @todo Check username is exist or not
     * @param unknown_type $userName
     * @return bool
     */
    public function checkUserIsExist($userName = '')
    {
        $isExist = false;
        if (! empty($userName)) {
            $rst = $this->getUserInformation($userName);
            if (is_array($rst) && count($rst) > 0 && ! empty($rst['username'])) {
                $isExist = true;
            }
        }
        return $isExist;
    }
    /**
     * @todo Used for Language resource
     * @param unknown_type $text
     */
    public function checkUserName($text)
    {
        $mapper = $this->getMapper();
        $dbTable = $mapper->getDbTable();
        $select = $dbTable->getDefaultAdapter()->select();
        $select->from(array('u' => $dbTable->getTableName()), array('id' , 'username'));
        $select->where('u.username = ?', $text);
        // List
        $uList = $this->getMapper()->getDbTable()->getDefaultAdapter()->fetchAll($select);
        return $uList;
    }
    /**
     * @todo check email is exist
     * @param unknown_type $email
     * @return string
     */
    public function checkEmailIsExist($email = '')
    {
        $isExist = false;
        if (! empty($email)) {
            $rst = $this->getDataByFieldName('email', $email);
            if (is_array($rst) && count($rst) > 0 && ! empty($rst['email'])) {
                $isExist = true;
            }
        }
        return $isExist;
    }
    /**
     * @todo Get info role of the user(Used for Language Resource)
     * @param string $username
     * @return array list role of user
     */
    public function getRoleByUserName($username = '')
    {
        $uList = array();
        if (! empty($username)) {
            $mapper = $this->getMapper();
            $dbTable = $mapper->getDbTable();
            $select = $dbTable->getDefaultAdapter()->select();
            $select->from(array('u' => $dbTable->getTableName()), array('id' , 'username'));
            $select->join(array('a' => 'sm_acl_users'), 'u.id = a.user_id', array());
            $select->join(
                array('r' => 'sm_acl_roles'), 'r.role_id = a.role_id', array('r.role_id as rid' , 'role_name')
            );
            $select->where('u.username = ?', $username);
            $select->order('u.username ASC');
            // List
            $uList = $this->getMapper()->getDbTable()->getDefaultAdapter()->fetchAll($select);
        }
        return $uList;
    }
} //end class
