<?php
class MTxCore_Soap_Manager
{
    
    // define filters and validators for input
    private $_filters = array(
        'title' => array(
        'HtmlEntities' , 'StripTags' , 'StringTrim') , 'shortdesc' => array(
        'HtmlEntities' , 'StripTags' , 'StringTrim') , 'price' => array(
        'HtmlEntities' , 'StripTags' , 'StringTrim') , 'quantity' => array(
        'HtmlEntities' , 'StripTags' , 'StringTrim'));
    
    private $_validators = array(
        'title' => array() , 'shortdesc' => array() , 'price' => array(
        'Float') , 'quantity' => array(
        'Int'));

    /**
     * Returns list of all products in database
     *
     * @return array
     */
    public function getProducts()
    {
        $obj_product = new MTxCore_Model_Products();
        return $obj_product->getArray(1, 0, array(), array());
    }

    /**
     * Returns specified product in database
     *
     * @param integer $id
     * @return array|Example_Exception
     */
    public function getProduct($id)
    {
        echo 1; die;
        if (! Zend_Validate::is($id, 'Int')) {
            throw new MTxCore_Soap_Exception('Invalid input');
        }
        $db = Zend_Registry::get('Zend_Db');
        $sql = "SELECT * FROM products WHERE id = '$id'";
        $result = $db->fetchAll($sql);
        if (count($result) != 1) {
            throw new MTxCore_Soap_Exception('Invalid product ID: ' . $id);
        }
        return $result;
    }

    /**
     * Adds new product to database
     *
     * @param array $data array of data values with keys -> table fields
     * @return integer id of inserted product
     */
    public function addProduct($data)
    {
        echo 1; die;
        $input = new Zend_Filter_Input($this->_filters, $this->_validators, $data);
        if (! $input->isValid()) {
            throw new MTxCore_Soap_Exception('Invalid input');
        }
        $values = $input->getEscaped();
        $db = Zend_Registry::get('Zend_Db');
        $db->insert('products', $values);
        return $db->lastInsertId();
    }

    /**
     * Deletes product from database
     *
     * @param integer $id
     * @return integer number of products deleted
     */
    public function deleteProduct($id)
    {
        echo 1; die;
        if (! Zend_Validate::is($id, 'Int')) {
            throw new MTxCore_Soap_Exception('Invalid input');
        }
        $db = Zend_Registry::get('Zend_Db');
        $count = $db->delete('products', 'id=' . $db->quote($id));
        return $count;
    }

    /**
     * Updates product in database
     *
     * @param integer $id
     * @param array $data
     * @return integer number of products updated
     */
    public function updateProduct($id, $data)
    {
        echo 1; die;
        $input = new Zend_Filter_Input($this->_filters, $this->_validators, $data);
        if (! Zend_Validate::is($id, 'Int') || ! $input->isValid()) {
            throw new MTxCore_Soap_Exception('Invalid input');
        }
        $values = $input->getEscaped();
        $db = Zend_Registry::get('Zend_Db');
        $count = $db->update('products', $values, 'id=' . $db->quote($id));
        return $count;
    }

}

