<?php

/**
 * Description of TRUF_RequestParam
 *
 * @package TRUF
 * @author Adrey Kravchenko
 */

namespace TRUF;

class RequestParam {

    private $key;
    private $value;

    public function __construct($key = null, $value = null) {
        $this->key = $key;
        $this->value = $value;
    }

    /**
     * Checks for the existence of the parameter in the query
     * @return type
     */
    public function isNull() {
        return is_null($this->key);
    }

    /**
     * Return key of the query param
     * @return type
     */
    public function key() {
        return $this->key;
    }

    /**
     * Return value without any changes
     * 
     */
    public function raw() {
        return $this->value;
    }

    /**
     * Return value as string
     * 
     * @return string
     */
    public function string() {
        return (string) $this->value;
    }

    /**
     * Return value as Int
     * 
     * @return int
     */
    public function int() {
        return intval($this->value);
    }

    /**
     * Return value as Bollean
     * 
     * @return bool
     */
    public function bool() {
        return !$this->value ? FALSE : TRUE;
    }

    /**
     * Return URL decoded value
     * 
     * @return string
     */
    public function urldecode() {
        return urldecode($this->value);
    }

    /**
     * Return  value trimmed
     * 
     * @return string
     */
    public function trim($charlist = " \t\n\r\0\x0B") {
        if(is_array($this->value)){
            return array_map(function($value){
                trim($value);
            }, $this->value);
        }
        
        return trim((string)$this->value, $charlist);
    }

    /**
     * Return HTML escaped value
     * 
     * @return string
     */
    public function htmltrim() {
        return htmlspecialchars(preg_replace('/[<>]/', '', (string) $this->value), ENT_QUOTES);
    }
    
    public function __toString(){
        return $this->string();
    }
}
