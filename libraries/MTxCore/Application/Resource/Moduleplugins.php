<?php

class MTxCore_Application_Resource_Moduleplugins extends Zend_Application_Resource_ResourceAbstract
{
    /**
     * Initialize resource
     *
     * @return mixed
     */
    public function init()
    {
        $bootstrap = $this->getBootstrap();
        $bootstrap->bootstrap('frontcontroller');
        $front = $bootstrap->getResource('frontcontroller');
        $pluginLoader = $front->getPlugin('MTxCore_Controller_Plugin_PluginLoader');
        $options = $this->getOptions();

        foreach ($options as $pluginName) {
            $pluginLoader->registerFrontControllerPlugin(
            strtolower($this->getBootstrap()->getModuleName()), $pluginName);
        }
    }
}