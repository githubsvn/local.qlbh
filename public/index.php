<?php
if (version_compare ( phpversion (), '5.2.4', '<' ) === true) {
	echo 'http://framework.zend.com/manual/1.10/en/requirements.introduction.html' . '<br />';
	die ( 'ERROR: Your PHP version is ' . phpversion () . '. CMS requires PHP 5.2.4 or later.' );
}

defined ( 'DS' ) || define ( 'DS', DIRECTORY_SEPARATOR );
defined ( 'PS' ) || define ( 'PS', PATH_SEPARATOR );

// Define base path obtainable throughout the whole application [Document Root]
defined ( 'BASE_PATH' ) || define ( 'BASE_PATH', realpath ( dirname ( __FILE__ ) . '/..' ) );

// Define path to application directory
defined ( 'APP_PATH' ) || define ( 'APP_PATH', realpath ( BASE_PATH . DS . 'application' ) );

// Define path to libraries directory
defined ( 'LIB_PATH' ) || define ( 'LIB_PATH', realpath ( BASE_PATH . DS . 'libraries' ) );

// Define path to data directory
defined ( 'DATA_PATH' ) || define ( 'DATA_PATH', realpath ( BASE_PATH . DS . 'data') );

// Define application enviroment
defined ( 'APP_ENV' ) || define ( 'APP_ENV', (getenv ( 'APP_ENV' ) ? getenv ( 'APP_ENV' ) : 'production') );

// Ensure libraries/ is on include_path
set_include_path ( PS . LIB_PATH . PS .
					get_include_path () . PS .
					APP_PATH . PS .
					APP_PATH . DS . 'modules'
				);

// Zend Appliaction
require_once ('Zend/Application.php');

// Create Application, bootstrap and run
// Set APP_ENV in .htaccess file
$application = new Zend_Application ( APP_ENV, realpath ( APP_PATH . DS . 'configs' . DS . 'application.ini' ) );
try {
	$application->bootstrap ();
	$application->run ();
} catch ( Exception $e ) {
	echo '<pre>';
	echo 'File : ';
	print_r ( $e->getFile () );
	echo ': ';
	print_r ( $e->getLine () );
	echo '<br /><br />';
	print_r ( $e->__toString () );
	echo '<br /><br />';
	echo 'Exception  Messages : <br />';
	print_r ( $e->getMessage () );
	echo '<br /><br />';
	echo '</pre>';
}
?>