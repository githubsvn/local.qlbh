<?php
class Smsoap_IndexController extends Zend_Controller_Action
{
    public function soapAction()
    {
      // disable layouts and renderers
      $this->_helper->layout()->disableLayout();
      $this->_helper->viewRenderer->setNoRender(true);
      //$this->getHelper('viewRenderer')->setNoRender(true);
      
      // initialize server and set URI
      //$server = new Zend_Soap_Server(null, array('uri' => 'http://zendframework.localhost/index/soap'));
      $server = new Zend_Soap_Server('http://zendframework.localhost/smsoap/index/wsdl');
      // set SOAP service class      
      $server->setClass('MTxCore_Soap_Manager');
      
      // register exceptions that generate SOAP faults
      $server->registerFaultException(array('MTxCore_Soap_Exception'));
      
      // handle request
      $server->handle();
    }
    
    public function wsdlAction()
    {
      // disable layouts and renderers
      $this->_helper->layout()->disableLayout();
      $this->_helper->viewRenderer->setNoRender(true);
      //$this->getHelper('viewRenderer')->setNoRender(true);
      
      // set up WSDL auto-discovery
      $wsdl = new Zend_Soap_AutoDiscover();
      
      // attach SOAP service class
      $wsdl->setClass('MTxCore_Soap_Manager');
      
      // set SOAP action URI
      $wsdl->setUri('http://zendframework.localhost/smsoap/index/soap');
      
      // handle request 
      $wsdl->handle();
    }
}