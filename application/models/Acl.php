<?php
class Model_Acl extends Zend_Acl {
	protected static $_instance = null;
	private function __construct(){}
	private function __clone(){}
	protected function _initialize($userid){
		$db = Model_Helper::getAdapter();
		if (empty($userid)) {
			if (!$this->hasRole('index')) {
				$this->addRole(new Zend_Acl_Role('index'));
			}
			if (!$this->has('index')) {
				$this->add(new Zend_Acl_Resource('index'));
			}

			$this->allow('index', 'index');
		}else{
			$sql = "SELECT *
					FROM mtx_acl_module M INNER JOIN mtx_acl_resource R ON M.acl_module_id = R.acl_module_id
						INNER JOIN mtx_acl_privilege P ON P.acl_resource_id = R.acl_resource_id
						INNER JOIN mtx_acl_role_privilege RP ON RP.acl_privilege_id = P.acl_privilege_id
						INNER JOIN mtx_acl_role RO ON RO.acl_role_id = RP.acl_role_id
						INNER JOIN mtx_acl_role_user RU ON RU.acl_role_id = RO.acl_role_id
					WHERE RU.user_id = '$userid' AND RP.status = 1";
			$roles = $db->fetchAll($sql);
			foreach ($roles as $role){
				if (!$this->hasRole($role['acl_role_name'])) {
					$this->addRole(new Zend_Acl_Role($role['acl_role_name']));
				}

				if (!$this->has($role['acl_resource_name'])) {
					$this->add(new Zend_Acl_Resource($role['acl_resource_name']));
				}

				$this->allow($role['acl_role_name'], $role['acl_resource_name'], $role['acl_privilege_name']);
			}
		}
	}

	public static function getInstance($userid = ''){
		if (null == self::$_instance) {
			self::$_instance = new self();
			self::$_instance->_initialize($userid);
		}

		return self::$_instance;
	}
}//end class
