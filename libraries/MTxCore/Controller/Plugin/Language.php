<?php
class MTxCore_Controller_Plugin_Language extends Zend_Controller_Plugin_Abstract {
	public function routeShutdown(Zend_Controller_Request_Abstract $request) {
		try {
			if (! Zend_Session::isStarted ()) {
				Zend_Session::start ();
			}
			$langsession = new Zend_Session_Namespace ( 'langsession' );
		} catch ( Zend_Session_Exception $e ) {
			echo "Cannot instantiate this namespace since langsession was created";
		}
		$config = Zend_Registry::get ( 'configuration' );
		$requestParams = $this->getRequest ()->getParams ();
		$language = (isset ( $requestParams ['language'] )) ? $requestParams ['language'] : false;
		if ($language == false) {
			if (! $langsession->current_lang) {
				$language = $config->site->lang_default;
				$langsession->current_lang = $language;
				$langsession->setExpirationSeconds ( 1 * 60 * 60 * 12 ); // one day
				$langsession->lock ();
			}
		} else {
			if ($langsession->isLocked ()) {
				$langsession->unlock ();
			}
			$langsession->current_lang = $language;
			$langsession->setExpirationSeconds ( 1 * 60 * 60 * 12 ); // one day
			$langsession->lock ();
		}
		
		$locale = new Zend_Locale ();
		$options = array ('scan' => Zend_Translate::LOCALE_FILENAME, 'separator' => '=' );
		$translate = new Zend_Translate ( 'ini', APP_PATH . DS . "languages", 'auto', $options );
		$language = $langsession->current_lang;
		if (! $translate->isAvailable ( $language )) {
			throw new Zend_Controller_Action_Exception ( 'This page dont exist', 404 );
		} else {
			$locale->setLocale ( $language );
			$translate->setLocale ( $locale );
			//Zend_Form::setDefaultTranslator ( $translate );
			//setcookie ( 'lang', $locale->getLanguage (), null, '/' );
			Zend_Registry::set ( 'lang', $locale->getLanguage () );
			Zend_Registry::set ( 'Zend_Locale', $locale );
			Zend_Registry::set ( 'Zend_Translate', $translate );
		}
	}
}


