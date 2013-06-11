<?php
class Language_Model_SiteLanguageMulti extends Model_Entities_SiteLanguageMulti
{
    /**
     * @todo add data to table sm_site_language
     * @param unknown_type $params
     * @return id
     */
    public function add($params = array(), $isNotAllowNull = false)
    {
        $rst = 0;
        $idLang = 0;
        $datas = $this->buildData($params);
        $obj = new Language_Model_SiteLanguageMulti();
        if (! empty($datas['id'])) { //update
            $obj = $this->setObject($datas);
            $rst = $obj->save(array(), $isNotAllowNull);
        } else { //add new
            if (! $obj->checkLangIsExist($datas['language_default_id'], $datas['lang_key'])) {
                $obj = $this->setObject($datas);
                $rst = $obj->save(array(), $isNotAllowNull);
            }
        }
        return $rst;
    }
    /**
     *
     * @param unknown_type $roleId
     * @param unknown_type $langKey
     * @return string|string
     */
    public function checkLangIsExist($languageDefaultId = '', $langKey = '')
    {
        $where = array("language_default_id = '" . $languageDefaultId . "'" , "lang_key = '" . $langKey . "'");
        $total = $this->getTotal($where);
        if ($total > 0) {
            return true;
        }
        return false;
    }
    /**
     *
     * @param unknown_type $roleId
     * @param unknown_type $defaultText
     * @param unknown_type $actionText
     * @return Ambigous <number, unknown>
     */
    public function getIdLangIsExist($languageDefaultId = '', $langKey = '')
    {
        $id = 0;
        $wheres = array("language_default_id = '" . $languageDefaultId . "'" , "lang_key = '" . $langKey . "'");
        if ($this->checkLangIsExist($languageDefaultId, $langKey)) {
            $mapper = $this->getMapper();
            $dbTable = $mapper->getDbTable();
            $select = $dbTable->getDefaultAdapter()->select();
            $select->from(array('u' => $dbTable->getTableName()), array('u.id'));
            if (! empty($wheres)) {
                foreach ($wheres as $where) {
                    if ($where != '') {
                        $select->where($where);
                    }
                }
            }
            $result = $dbTable->getDefaultAdapter()->fetchRow($select);
            $id = $result['id'];
        }
        return $id;
    }
    /**
     * @todo get total language in table
     * @param array where
     * @return int >0: if exists , <0 other else
     */
    public function getTotal($wheres = array())
    {
        $mapper = $this->getMapper();
        $dbTable = $mapper->getDbTable();
        $select = $dbTable->getDefaultAdapter()->select();
        $select->from(array('u' => $dbTable->getTableName()), array('CNT' => 'count( DISTINCT u.id)'));
        if (! empty($wheres)) {
            foreach ($wheres as $where) {
                if ($where != '') {
                    $select->where($where);
                }
            }
        }
        $result = $dbTable->getDefaultAdapter()->fetchRow($select);
        $count = $result['CNT'];
        return $count;
    }
    /**
     * @todo call all function set of the object
     * @param unknown_type $datas
     */
    public function setObject($datas = array())
    {
        $obj = new $this();
        $classMethods = get_class_methods(get_class($obj));
        $funcName = '';
        if (! empty($datas['id'])) {
            //If to tave id we will excute add action
            $obj->find($datas['id']);
        }
        if (! empty($datas) && is_array($datas)) {
            foreach ($datas as $key => $value) {
                if (! empty($key) && $key !== 'id') {
                    //build function Name
                    $arr = explode("_", $key);
                    $funcName = 'set';
                    if (is_array($arr)) {
                        for ($i = 0; $i < count($arr); $i ++) {
                            $funcName .= ucwords($arr[$i]);
                        }
                    }
                    if (in_array($funcName, $classMethods)) {
                        //call set function name
                        $obj->$funcName($value);
                    }
                    $funcName = '';
                }
            }
        }
        return $obj;
    }
    /**
     * @todo Build data for SiteLang
     * @param unknown_type $params
     */
    public function buildData($params = array())
    {
        $datas = array();
        $datas['id'] = ! empty($params['id']) ? $params['id'] : '';
        $datas['language_default_id'] = ! empty($params['language_default_id']) ? $params['language_default_id'] : 0;
        $datas['lang_key'] = ! empty($params['lang_key']) ? trim($params['lang_key']) : '';
        //$datas['translate_text'] 		= !empty($params['translate_text']) ? addslashes(trim($params['translate_text'])) : '';
        $datas['translate_text'] = ! empty($params['translate_text']) ? trim($params['translate_text']) : '';
        if (empty($datas['id'])) {
            $datas['date_create'] = ! empty($params['date_create']) ? $params['date_create'] : date("Y-m-d H:i:s", 
                time());
        }
        $datas['date_modify'] = ! empty($params['date_modify']) ? $params['date_modify'] : date("Y-m-d H:i:s", time());
        return $datas;
    }
    /**
     * @todo This function save will accept value NULL. Because in table there are some field is value NULL
     * @param array $filterArray
     * @param unknown_type $isNotAllowNull
     */
    public function save(Array $filterArray = array(), $isNotAllowNull = true)
    {
        return $this->getMapper()->save($this, $filterArray, $isNotAllowNull, 'id');
    }
    /**
     * @todo Get Id of sm_site_language_multi by language_default_id
     * @param unknown_type $langIds
     * @return multitype: array id of the table sm_site_language_default
     */
    public function getIdsByLangDefaultId($langIds = array())
    {
        $obj = new Language_Model_SiteLanguageMulti();
        $idMuls = array();
        if (! empty($langIds)) {
            foreach ($langIds as $value) {
                if (! empty($value)) {
                    $rst = $obj->search('language_default_id', $value);
                    if (! empty($rst) && count($rst) > 0) {
                        foreach ($rst as $objMul) {
                            $idMuls[] = $objMul->getId();
                        }
                    }
                }
            }
        }
        return $idMuls;
    }
    /**
     *
     * @param unknown_type $langDefaultId
     * @param unknown_type $langKey
     */
    public function getLangMulByLangIdAndLangKey($langDefaultId = '', $langKey = '')
    {
        $obj = new Language_Model_SiteLanguageMulti();
        if (! empty($langDefaultId) && ! empty($langKey)) {
            $id = $obj->getIdLangIsExist($langDefaultId, $langKey);
            $obj->find($id);
        }
        return $obj->toArray();
    }
} //end class
