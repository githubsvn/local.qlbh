<?php
class MTxCore_Controller_Plugin_Block extends Zend_Controller_Plugin_Abstract
{
    /**
     * Here's a states for each block (enabled or disabled)
     * @var array
     */
    protected $_blocks = array();
    
    /**
     * Blocks config with specified module, controller
     * and action for each block
     * @var array
     */
    protected $_config = array();

    /**
     * Enable block by block name  (set enabled flags)
     * @param string $blockName
     * @return void
     */
    public function add($blockName)
    {
        $this->_blocks[$blockName] = true;
    }

    /**
     * Disable block by block name (set disabled flags)
     * @param string $blockName
     * @return void
     */
    public function remove($blockName)
    {
        $this->_blocks[$blockName] = false;
    }

    /**
     * Disable all blocks (set disabled flags to all)
     * @param string $blockName
     * @return void
     */
    public function removeAll()
    {
        foreach ($this->_blocks as $blockName => $blockEnabled) {
            $this->_blocks[$blockName] = false;
        }
    }

    /**
     * Hook on postDispatch event. Disable or enable blocks.
     * @param Zend_Controller_Request_Abstract $request
     * @return void
     */
    public function postDispatch(Zend_Controller_Request_Abstract $request)
    {
        if (! $request->isXmlHttpRequest() && ! empty($this->_config)) {
            $this->_layout = Zend_Layout::getMvcInstance();
            $this->_view = $this->_layout->getView();
            
            foreach ($this->_config as $blockName => $options) {
                if (isset($this->_blocks[$blockName]) && $this->_blocks[$blockName] === true) {
                    $this->_layout->{$blockName} = $this->_view->action($options['action'], $options['controller'], $options['module'], $request->getParams());
                }
            }
        }
    }

    /**
     * Set blocks config
     * @param Zend_Config $config
     * @return void
     */
    public function setConfig(Zend_Config $config)
    {
        $this->_config = $config->toArray();
    }
}