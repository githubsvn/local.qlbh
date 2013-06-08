<?php
class MTxCore_Controller_Action_Helper_Block extends Zend_Controller_Action_Helper_Abstract
{
    /**
     * An instance of Project_Controller_Plugin_Block plugin
     * @var object
     */
    protected $_blocksPlugin = null;

    /**
     * Initialize Project_Controller_Plugin_Block plugin
     * and blocks config
     */
    public function init()
    {
        $front = Zend_Controller_Front::getInstance();
        if (! $front->hasPlugin('MTxCore_Controller_Plugin_Block')) {
            $this->_blocksPlugin = new MTxCore_Controller_Plugin_Block();
            $front->registerPlugin($this->_blocksPlugin);
        }
        else {
            $this->_blocksPlugin = $front->getPlugin('MTxCore_Controller_Plugin_Block');
        }
        
        $blocksConfig = new Zend_Config_Ini(APP_PATH . DS . 'configs' . DS . 'blocks.ini');
        $this->_blocksPlugin->setConfig($blocksConfig);
    }

    /**
     * Add block on page by block name
     * @param string $blockName
     */
    public function add($blockName)
    {
        $this->_blocksPlugin->add($blockName);
    }

    /**
     * Remove block from page by block name
     * @param string $blockName
     */
    public function remove($blockName)
    {
        $this->_blocksPlugin->remove($blockName);
    }

    /**
     * Remove all blocks from page
     */
    public function removeAll()
    {
        $this->_blocksPlugin->removeAll();
    }

}
?>