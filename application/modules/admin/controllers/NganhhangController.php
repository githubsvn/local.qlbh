<?php

class Admin_NganhhangController extends MTxCore_Admin_Controller_Action
{
    /**
     * Get list nha cung cap
     */
    public function getListJsonAction()
    {
        $this->disableLayout();

        $start = $this->getRequest()->getParam('start', 0);
        $limit = $this->getRequest()->getParam('limit', 50);
        $sortColumn = $this->getRequest()->getParam('sort', 'id');
        $type = $this->getRequest()->getParam('dir', 'DESC');

        $model = new Model_NganhHang();
        $rst = $model->getList($start, $limit, array(), $sortColumn, $type);
        $total = $model->getTotal();
        echo '{count:'. $total .', rows:' . json_encode($rst) . '}';
        die;
    }

    /**
     * Adding new Nha Cung Cap
     */
    public function addAction()
    {
        $this->disableLayout();
        $jsonReponse = array('success' => false, 'msg' => $this->view->translate('Thao tác không thành công. Xin vui lòng kiểm tra lại dữ liệu nhập'));
        $form = new Admin_Forms_Nganhhang($this->view);
        $model = new Model_NganhHang();
        $params = $this->_request->getParams();
        if ($this->_request->isPost()) {
            if ($form->isValid($params)) {
                $id = $model->add($params);
                if ($id) {
                    $jsonReponse = array('success' => true, 'msg' => $this->view->translate('Thao tác thành công.'));
                }
            }
        }
        echo json_encode($jsonReponse);
        die;
    }

    /**
     * Delete nha cung cap
     */
    public function deleteAction()
    {
        $this->disableLayout();
        $jsonReponse = array('success' => false, 'msg' => $this->view->translate('Thao tác không thành công. Xin vui lòng kiểm tra lại dữ liệu nhập'));
        $id = $this->_request->getParam('id', 0);
        if ($id) {
            $model = new Model_NganhHang();
            $rst = $model->delete(array($id));
            if ($rst) {
                $jsonReponse = array('success' => false, 'msg' => $this->view->translate('Đã xóa một mẫu tin.'));
            }
        }
        echo $jsonReponse;
        die;
    }

}