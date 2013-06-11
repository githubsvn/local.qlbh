<?php
class MTxCore_Auth_Storage_Db implements Zend_Auth_Storage_Interface
{
    /**
     * Storage object member
     *
     * @var mixed
     */
    protected $_storage;
    protected $_session_id;
    protected $_user_ip;
    public function __construct (MTxCore_Model_StorageSession $session)
    {
        try {
            if (! Zend_Session::isStarted())
                Zend_Session::start();
        } catch (Zend_Session_Exception $e) {
            echo "Cannot instantiate this namespace since \$lsession was created\n";
        }
        $this->_storage = $session;
        $this->_user_ip = $_SERVER['REMOTE_ADDR'];
        $this->_session_id = session_id();
    }
    public function isEmpty ()
    {
        return $this->_storage->isEmpty($this->_session_id);
    }
    public function read ()
    {
        return $this->_storage->read($this->_session_id);
    }
    /*
     * write data to database
     * @var array $contents
     */
    public function write ($contents)
    {
        if (is_array($contents) && count($contents) > 0) {
            Zend_Json::$useBuiltinEncoderDecoder = true;
            $data_storage['session_id'] = $this->_session_id;
            $data_storage['user_ip'] = $this->_user_ip;
            $data_storage['time'] = time();
            $data_storage['data'] = Zend_Json::encode($contents);
            if (isset($contents['username'])) {
                $data_storage['username'] = $contents['username'];
            }
            if (isset($contents['id'])) {
                $data_storage['user_id'] = $contents['id'];
            }
            if (isset($contents['is_admin'])) {
                $data_storage['is_admin'] = $contents['is_admin'];
            }
            if (isset($contents['client_id'])) {
                $data_storage['client_id'] = $contents['client_id'];
            }
            if (isset($contents['guest'])) {
                $data_storage['guest'] = $contents['guest'];
            }
            $this->_storage->setOptions($data_storage);
            if (isset($data_storage['user_id']) && isset($data_storage['username']) && $data_storage['user_id'] > 0) {
                $this->_storage->save();
            }
        }
    }
    public function clear ()
    {
        $this->_storage->clear($this->_session_id);
    }
}