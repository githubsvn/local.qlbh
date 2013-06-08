<?php
class Model_Users extends Model_Entities_Users
{
	public function getGroupAclUser ($idUser = '')
	{
		$rst = '';
		if (!empty($idUser)) {
			$db = Model_Helper::getAdapter();
			$select = $this->getMapper()->getDbTable()->getAdapter()->select()
							->from(array('ur' => 'mtx_acl_role_user'), null)
							->join(array('u' => 'mtx_users'), 'u.id = ur.user_id', null)
							->join(array('a' => 'mtx_acl_role'), 'a.acl_role_id = ur.acl_role_id', 'acl_role_name')
							->where("u.id = ?", $idUser);
			$data = $db->fetchRow($select->__toString());
			if(is_array($data) && !empty($data['acl_role_name'])){
				$rst = $data['acl_role_name'];	
			}
		}
		return $rst;
	}
}

