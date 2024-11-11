<?php

/**
 * Description of \TRUF\RequestParamsList
 *
 * @package TRUF
 * @author Adrey Kravchenko
 */
namespace TRUF;

class RequestParamsList {

    static protected $php_input = null;
    
    /**
     * Find POST param by key
     * 
     * @param string $name
     * @return \TRUF\RequestParam 
     */
    public function post($name) {
        return $this->findParam($_POST, $name);
    }
    
    /**
     * Get array of all POST params
     * 
     * @return \TRUF\RequestParam[]
     */
    public function postAll(){
        return $this->getArray($_POST);
    }

    /**
     * Find GET param by key
     * 
     * @param string $name
     * @return \TRUF\RequestParam
     */
    public function get($name) {
        return $this->findParam($_GET, $name);
    }
    
    /**
     * Get array of all GET params
     * 
     * @return \TRUF\RequestParam[]
     */
    public function getAll(){
        return $this->getArray($_GET);
    }
    
        /**
     * Find REQUEST param by key
     * 
     * @param string $name
     * @return \TRUF\RequestParam
     */
    public function request($name) {
        if (\TRUF\Request::getMethod() === "PUT") {
            $put_data = $this->getPutData();
            $_REQUEST = array_merge($_REQUEST, $put_data);
        }
        
        return $this->findParam($_REQUEST, $name);
    }
    
    /**
     * Get array of all GET params
     * 
     * @return \TRUF\RequestParam[]
     */
    public function requestAll(){
        if (\TRUF\Request::getMethod() === "PUT") {
            $put_data = $this->getPutData();
            $_REQUEST = array_merge($_REQUEST, $put_data);
        }
        
        return $this->getArray($_REQUEST);
    }
    
    /**
     * Find PUT param by key
     * 
     * @param string $name
     * @return \TRUF\RequestParam
     */
    public function put($name) {
        return $this->findParam($this->getPutData(), $name);
    }
    
    /**
     * Get array of all PUT params
     * 
     * @return \TRUF\RequestParam[]
     */
    public function putAll(){
        return $this->getArray($this->getPutData());
    }

    /**
     * Find COOKIE param by key
     * 
     * @param string $name
     * @return \TRUF\RequestParam
     */
    public function cookie($name) {
        return $this->findParam($_COOKIE, $name);
    }
    
    /**
     * Get array of all COOKIE params
     * 
     * @return \TRUF\RequestParam[]
     */
    public function cookieAll(){
        return $this->getArray($_COOKIE);
    }

    private function findParam($array, $name) {
        if (isset($array[$name])) {
            return new RequestParam($name, $array[$name]);
        }
        
        return new RequestParam();
        
    }
    
    private function getArray($array){
        $params_list = array();
        foreach ($array as $key=>$value){
            $params_list[] = new RequestParam($key, $value);
        }
        
        return $params_list;
    }
    
    /**
     * Получить все PUT параметры
     * Note: Prior to PHP 5.6, a stream opened with php://input could only be read once; the stream did not support seek operations. 
     * Поэтому мы не можем просто исползовать file_get_contents("php://input"), заместо него используем http\Env
     * @return array
     */
    private function getPutData(){
        /*
        $output = Array();
        parse_str(\http\Env::getRequestBody()->toString(), $output);
        return $output;
         * 
         */
        
        // for php < 5.6
        if (is_null(self::$php_input)) {
            self::$php_input = file_get_contents("php://input");   
        }
        $array = array();
        parse_str(self::$php_input, $array);
        return $array;
    }

}
