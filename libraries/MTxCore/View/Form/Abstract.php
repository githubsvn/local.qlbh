<?php
class MTxCore_View_Form_Abstract extends Zend_Form
{
	/**
	 * 
	 * Enter description here ...
	 * @var Zend_View
	 */
	protected $_view = null;
	
	public function __construct ()
	{
		/*$this->_view = new Zend_View();
        //We need to add this helper that to translate.
        $this->_view->addHelperPath( APP_PATH . DS .'modules'. DS .
        										'language' . DS .
        										'libraries' .DS.
        										'views'.DS.
        										'helpers', 'Language_Libraries_View_Helper_');*/
		$this->initializeComponent();
		//Clear Decorator for elements of Form
		$this->_clearDecoratorForElements();
	}
	
	/**
	 * Clear Decorator for elements of Form
	 *
	 * @param array $elements
	 */
	protected function _clearDecoratorForElements ()
	{
		if (count($this->getElements()) > 0) {
			foreach ($this->getElements() as $ele) {
				$ele->removeDecorator('Label');
				$ele->removeDecorator('HtmlTag');
				$ele->removeDecorator('Description');
				$ele->removeDecorator('Errors');
			}
		} else {
			$ele->removeDecorator('Label');
			$ele->removeDecorator('HtmlTag');
			$ele->removeDecorator('Description');
			$ele->removeDecorator('Errors');
		}
	}
}