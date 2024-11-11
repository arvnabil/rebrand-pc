<?php

/**
 * Description of TRUF_Response
 *
 * @package TRUF
 * @author Adrey Kravchenko
 */

namespace TRUF;

class Response {

    const REDIRECT_301 = '301 Moved Permanently';
    const REDIRECT_302 = '302 Found';

    protected $content;

    /**
     * 
     * @param string $value
     * @return string
     */
    public function content($value = null) {
        if (isset($value))
            $this->content = $value;

        return $this->content;
    }

    public static function redirect($_url, $_status = self::REDIRECT_302) {
        if (!isset($_url))
            return;

        header('HTTP/1.1 ' . $_status);
        header('Location: ' . $_url);
        exit();
    }

    public static function setCookie($key, $value, $expire = 86400) {
        setcookie($key, $value, time() + intval($expire), '/');
    }

}
