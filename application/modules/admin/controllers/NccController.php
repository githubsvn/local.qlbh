<?php

class Admin_NccController extends MTxCore_Admin_Controller_Action
{
    public function getListJsonAction()
    {
        $start = $this->getRequest()->getParam('start', 0);
        $limit = $this->getRequest()->getParam('limit', 5);
        $sortColumn = $this->getRequest()->getParam('sort', 'id');
        $type = $this->getRequest()->getParam('dir', 'DESC');

        $this->_helper->viewRenderer->setNoRender(true);
        $this->_helper->layout->disableLayout();
        $model = new Model_NhaCungCap();
        $rst = $model->getList($start, $limit, array(), $sortColumn, $type);
        $total = $model->getTotal();
        echo '{count:'. $total .', rows:' . json_encode($rst) . '}';
        die;
    }

}

//end Class

