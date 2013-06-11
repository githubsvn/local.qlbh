<?php
/**
 * Load specific plugins per module
 *
 * @category   Kernel
 * @package    SMCore_Acl
 */
class MTxCore_Acl_Acl extends Zend_Acl
{
    private $_db;
    
    public $_userRoleName = 'Guest';
    
    public $_user = null;
    
    public $_tablePrefix = 'sm_';

    public function __construct($user)
    {
        $this->_user = $user ? $user : 'guest';
        
        $application = new Zend_Application(APP_ENV, realpath(APP_PATH . DS . 'configs' . DS . 'application.ini'));
        $bootstrap = $application->getBootstrap();
        $bootstrap->bootstrap('db');
        $this->_db = $bootstrap->getResource('db');
        
        // init resources and roles 
        $this->initResources();
        $this->initRoles();
        $this->setRoleName();
        
        // generate user role
        $acl = $this->_db->fetchAll(
            $this->_db->select()
            ->from(array('per' => $this->_tablePrefix.'acl_permissions'), array('per.permission'))
            ->joinInner(array('rol' => $this->_tablePrefix.'acl_roles'), 'per.role_id = rol.role_id', array('rol.role_id', 'rol.role_name'))
            ->joinInner(array('res' => $this->_tablePrefix.'acl_resources'), 'res.id = per.resource_id', array('resource_id' => 'res.id', 'res.resource'))
        );
        if(count($acl) > 0)
        {
            foreach ($acl as $key => $value) {
                $this->allow($value['role_name'], $value['resource'], $value['permission']);
            }
        }
    }
    
    public function isUserAllowed($resource, $permission)
    {
        return $this->isAllowed($this->_userRoleName, $resource, $permission);
    }
    
    private function initResources()
    {
        $resources = $this->_db->fetchAll(
            $this->_db
            ->select()
            ->from($this->_tablePrefix.'acl_resources')
        );
        
        foreach ($resources as $key => $value) {
            if (! $this->has($value['resource'])) {
                $this->add(new Zend_Acl_Resource($value['resource']));
            }
        }
    }

    private function initRoles()
    {
        $roles = $this->_db->fetchAll(
            $this->_db->select()
            ->from($this->_tablePrefix.'acl_roles')
            ->order(array('role_id DESC')));
        
        for ($i = 0; $i < count($roles); $i ++) {
            $role = $roles[$i];
            $roleParent = $this->getRoleById($roles, $role['parent_id']);
            if($roleParent)
            {
                $this->addRole(new Zend_Acl_Role($role['role_name']), $roleParent['role_name']);
            }
            else
            {
                $this->addRole(new Zend_Acl_Role($role['role_name']));
            }
        }
    }
    
    private function getRoleById($roles, $id)
    {
        $result = array();
        for ($i = 0; $i < count($roles); $i ++)
        {
            if($roles[$i]['role_id'] == $id)
            {
                $result = $roles[$i];
                break;
            }
        }
        return $result;
    }
    
    private function setRoleName()
    {
        $role = $this->_db->fetchOne(
            $this->_db->select()
            ->from(array('rol' => $this->_tablePrefix.'acl_roles'), array('rol.role_name'))
            ->joinInner(array('usr' => $this->_tablePrefix.'acl_users'), 'usr.role_id = rol.role_id', array())
            ->joinInner(array('user' => $this->_tablePrefix.'users'), 'user.id = usr.user_id', array())
            ->where('user.username = ?', $this->_user)
        );
        
        if($role) $this->_userRoleName = $role;
    }
}