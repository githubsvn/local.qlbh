<?php
class MTxCore_Controller_Action_Helper_Messenger extends Zend_Controller_Action_Helper_FlashMessenger
{
    public function showmessage($messages, $type = 'message')
    {
        $msg = '';
        foreach($messages as $item)
        {
            $msg .= '<p>'.$item.'</p>';
        }
        $html = '<div class="errorMsg">{MSGs}</div>';
        
        return str_replace('{MSGs}', $msg, $html);
    }
}
?>