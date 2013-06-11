<?php
namespace ZC\DAL\Entity;

/**
* @Entity
* @Table(name="mtx_users")
*/
class Users
{

    /** @Id @Column(type="integer") @GeneratedValue */
    public $id;
    
    /** @Column(length=50,nullable=true,type="string") */
    public $username;
    
    /** @Column(length=50,nullable=true,type="string") */
    public $password;
    
    /** @Column(length=50,nullable=true,type="string") */
    public $first_name;
    
    /** @Column(length=50,nullable=true,type="string") */
    public $last_name;
    
    /** @Column(length=50,nullable=true,type="string") */
    public $email;
    
    /** @Column(length=1,nullable=true,type="integer") */
    public $status;
    
    /** @Column(length=50,nullable=true,type="datetime") */
    public $date_created;
    
    /** @Column(length=11,nullable=true,type="integer") */
    public $user_created;
    
    /** @Column(length=50,nullable=true,type="datetime") */
    public $date_modified;
    
    /** @Column(length=11,nullable=true,type="integer") */
    public $user_modified;
	/**
	 * @return the $id
	 */
	public function getId() {
		return $this->id;
	}

	/**
	 * @return the $username
	 */
	public function getUsername() {
		return $this->username;
	}

	/**
	 * @return the $password
	 */
	public function getPassword() {
		return $this->password;
	}

	/**
	 * @return the $first_name
	 */
	public function getFirst_name() {
		return $this->first_name;
	}

	/**
	 * @return the $last_name
	 */
	public function getLast_name() {
		return $this->last_name;
	}

	/**
	 * @return the $email
	 */
	public function getEmail() {
		return $this->email;
	}

	/**
	 * @return the $status
	 */
	public function getStatus() {
		return $this->status;
	}

	/**
	 * @return the $date_created
	 */
	public function getDate_created() {
		return $this->date_created;
	}

	/**
	 * @return the $user_created
	 */
	public function getUser_created() {
		return $this->user_created;
	}

	/**
	 * @return the $date_modified
	 */
	public function getDate_modified() {
		return $this->date_modified;
	}

	/**
	 * @return the $user_modified
	 */
	public function getUser_modified() {
		return $this->user_modified;
	}

	/**
	 * @param field_type $id
	 */
	public function setId($id) {
		$this->id = $id;
	}

	/**
	 * @param field_type $username
	 */
	public function setUsername($username) {
		$this->username = $username;
	}

	/**
	 * @param field_type $password
	 */
	public function setPassword($password) {
		$this->password = $password;
	}

	/**
	 * @param field_type $first_name
	 */
	public function setFirst_name($first_name) {
		$this->first_name = $first_name;
	}

	/**
	 * @param field_type $last_name
	 */
	public function setLast_name($last_name) {
		$this->last_name = $last_name;
	}

	/**
	 * @param field_type $email
	 */
	public function setEmail($email) {
		$this->email = $email;
	}

	/**
	 * @param field_type $status
	 */
	public function setStatus($status) {
		$this->status = $status;
	}

	/**
	 * @param field_type $date_created
	 */
	public function setDate_created($date_created) {
		$this->date_created = $date_created;
	}

	/**
	 * @param field_type $user_created
	 */
	public function setUser_created($user_created) {
		$this->user_created = $user_created;
	}

	/**
	 * @param field_type $date_modified
	 */
	public function setDate_modified($date_modified) {
		$this->date_modified = $date_modified;
	}

	/**
	 * @param field_type $user_modified
	 */
	public function setUser_modified($user_modified) {
		$this->user_modified = $user_modified;
	}


}