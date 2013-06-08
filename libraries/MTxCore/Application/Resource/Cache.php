<?php
class MTxCore_Application_Resource_Cache extends Zend_Application_Resource_ResourceAbstract
{
    public function init()
    {
        $options = $this->getOptions();
        foreach( $options as $name => $opts ) {

            $frontend = "Core";
            if ( isset( $opts['frontend'] ) ) {
                $frontend = $opts['frontend'];
            }
            $backend= "Sqlite";
            if ( isset( $opts['backend'] ) ) {
                $backend = $opts['backend'];
            }

            $frontendOptions = array(
                                "automatic_serialization" => true,
                                "lifetime" => 3600
            );
            if ( isset( $opts['frontend_options'] ) ) {
                $frontendOptions = array_merge($frontendOptions , $opts['frontend_options'] );
            }

            $backendOptions = array( "cache_db_complete_path" => "/tmp/cache.sqlite.cache.db" );
            if ( isset( $opts['backend_options'] ) ) {
                $backendOptions = array_merge($backendOptions , $opts['backend_options'] );
            }

            Zend_Registry::set( $name,
            Zend_Cache::factory(
            $frontend, $backend,
            $frontendOptions, $backendOptions
            )
            );
        }
        return $this;
    }
}