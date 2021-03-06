<?php
/**
 * 
 * Enter description here ...
 * @author ThienLe
 *
 */
class MTxCore_Application_Resource_Log extends Zend_Application_Resource_ResourceAbstract
{

    /**
     * Logs
     *
     * @var array
     */
    protected $_logs = array();

    /**
     * Default adapter
     *
     * @var boolean
     */
    protected $_defaultLog = null;

    /**
     * Retrieve initialized Log
     *
     * @return null|Zend_Log
     */
    public function getLog($log = null)
    {
        // check if the Log is valid
        $log = $this->isValidLog($log, true);
        if (is_null($log) && is_null($log = $this->_defaultLog)) {
            return null;
        }

        $options = $this->getOptions();
        if ((!isset($this->_logs[$log]) || (null === $this->_logs[$log]))
        && (in_array($log, array_keys($options)))
        ) {
            $this->_logs[$log] = $this->_initLog($log);
        }
        return $this->_logs[$log];
    }

    /**
     * Defined by Zend_Application_Resource_IResource
     *
     * @return void
     */
    public function init()
    {
        if (is_null($this->_defaultLog)) {
            $defaultLog = null;
            foreach ($this->_options as $key=>$logOptions) {
                if (null !== ($log = $this->getLog($key))) {
                    if ($this->isDefaultLog($key) || is_null($defaultLog)) {
                        $defaultLog = $key;
                    }
                }
            }
            if (!is_null($defaultLog)) {
                $this->_defaultLog = $defaultLog;
            }
        }
        return $this->_logs;
    }

    /**
     * Check if a log key is valid
     *
     * @param string $log
     * @param boolean $revertToDefaultLog
     * @return string
     */
    public function isValidLog($log = null, $revertToDefaultLog = false)
    {
        if (is_null($log)) {
            $revertToDefaultLog = true;
        }
        if (!in_array($log, array_keys($this->_options))) {
            if ($revertToDefaultLog) {
                $log = $this->_defaultLog;
            } else {
                throw new Zend_Application_Resource_Exception('Invalid log specified');
            }
        }
        return $log;
    }

    /**
     * Initialize log
     *
     * @param string $key
     * @return Zend_Log
     */
    protected function _initLog($key)
    {
        $logOptions = $this->_options[$key];
        if (isset($logOptions['writer'])) {
            $log = new Zend_Log();
            foreach ($logOptions['writer'] as $writerOptions) {
                $writer = null;
                switch (strtolower(trim($writerOptions['type']))) {
                    case 'db':
                        $db = $writerOptions['params']['db'];
                        $table = $writerOptions['params']['db'];
                        $columnMap = $writerOptions['params']['db'];
                        $writer = new Zend_Log_Writer_Db($db, $table, $columnMap);
                        break;
                    case 'firebug':
                        $writer = new Zend_Log_Writer_Firebug();
                        break;
                    case 'mock':
                        $writer = new Zend_Log_Writer_Mock();
                        break;
                    case 'null':
                        $writer = new Zend_Log_Writer_Null();
                        break;
                    case 'stream':
                        $streamOrUrl = $writerOptions['params']['streamOrUrl'];
                        $mode = isset($writerOptions['params']['mode']) ? $writerOptions['params']['mode'] : 'a';
                        $writer = new Zend_Log_Writer_Stream($streamOrUrl, $mode);
                        break;
                    default:
                        $writer = null;
                }
                if (!is_null($writer)) {
                    $log->addWriter($writer);
                }
            }
            if (isset($logOptions['filter'])) {
                foreach ($logOptions['filter'] as $filter) {
                    if (isset($filter['priority'])) {
                        $priority = $filter['priority'];
                        if (!is_integer($priority)) {
                            $c = 'Zend_Log::' . strtoupper(trim($priority));
                            $priority = constant($c);
                        }
                        $logFilter = new Zend_Log_Filter_Priority($priority);
                        $log->addFilter($logFilter);
                    } elseif (isset($filter['message'])) {
                        $message = $filter['message'];
                        $logFilter = new Zend_Log_Filter_Message($message);
                        $log->addFilter($logFilter);
                    }
                }
            }
        }
        return $log;
    }

    /**
     * Is this log the default log?
     *
     * @return void
     */
    public function isDefaultLog($log)
    {
        $log = $this->isValidLog($log);
        if (isset($this->_options[$log]['isDefault'])) {
            return $this->_options[$log]['isDefault'];
        }
        return false;
    }

}
