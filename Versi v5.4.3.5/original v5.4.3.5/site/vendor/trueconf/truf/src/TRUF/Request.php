<?php

/**
 * Description of Request
 *
 * @author askra
 */

namespace TRUF;

class Request {

    protected $path;

    public function __construct($_path = null) {
        $this->path = $_path;
    }

    public function path() {
        return $this->path;
    }

    public static function getMethod() {
        return isset($_SERVER['REQUEST_METHOD']) ? $_SERVER['REQUEST_METHOD'] : false;
    }

    public static function getReferer() {
        return isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : false;
    }

    public static function getProtocol() {
        return isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == 'on' ? 'https' : 'http';
    }

    public static function getHost() {
        return isset($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : false;
    }

    public static function getServerURL() {
        return self::getProtocol() . '://' . self::getHost();
    }

    /**
     *
     * @param number $part Index of path part
     * @return string
     */
    public static function getPath($part = null) {
        $key = \TRUF\Settings::getSingleton()->route_param;
        if (empty($key))
            throw new \Exception('route_param parameter must be specified in the configuration file');

        $path = self::getParams()->get($key)->trim('/');

        if (is_int($part)) {
            $parts = explode('/', $path);
            return isset($parts[$part]) ? $parts[$part] : '';
        }
        return $path;
    }

    /**
     * 
     * @return \TRUF\RequestParamsList
     */
    public static function getParams() {
        return new RequestParamsList();
    }

    public static function isAjax() {
        return (isset($_SERVER['HTTP_X_REQUESTED_WITH']) &&
                strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest');
    }

}
