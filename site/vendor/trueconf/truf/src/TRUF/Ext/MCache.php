<?php

/**
 * Description of MCache
 *
 * @author askra
 */
namespace TRUF\Ext;

class MCache {

    protected static $memcache_obj = null;
    
    public static function getInstance($host, $port, $timeout = 1){
         if (!isset(self::$memcache_obj)) {
            $memcache_obj = new Memcache();
            self::$memcache_obj = @$memcache_obj->connect($host, $port, $timeout) ? $memcache_obj : false;
        }
    }

    public function get($key, callable $callback, $expire = 3600, $last_modify = null) {
        $key = (isset($_SERVER["HTTP_HOST"]) ? $_SERVER["HTTP_HOST"] : "") . $key;
        if (self::$memcache_obj === false) {
            return call_user_func($callback);
        } elseif (($cached_data = self::$memcache_obj->get($key)) !== FALSE) {
            if (isset($last_modify) && $cached_data->last_modify < $last_modify) {
                $cached_data->last_modify = $last_modify;
                $cached_data->data = call_user_func($callback);
                $this->set($key, $cached_data, $expire);
            }
            else
                return $cached_data->data;
        } else {
            $value = call_user_func($callback);
            $cached_data = new TRUF_CacheData($value, time());
            $this->set($key, $cached_data, $expire);
            return $value;
        }
    }

    private function set($key, TRUF_CacheData $obj, $expire) {
        self::$memcache_obj->set($key, $obj, MEMCACHE_COMPRESSED, $expire);
    }

}

class TRUF_CacheData {

    public $last_modify;
    public $data;

    public function __construct($data = null, $modify_time = null) {
        $this->data = $data;
        $this->modify_time = $modify_time;
    }

}
