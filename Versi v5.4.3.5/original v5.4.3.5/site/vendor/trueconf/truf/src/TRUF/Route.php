<?php

namespace TRUF;

/**
 * Description of Route
 *
 * @author askra
 */
class Route {

    protected $pattern;
    protected $callback_handler;
    protected $callback_filter;

    /**
     *  Route obeject constructor
     * 
     * @param string $pattern URL path regexp pattern
     * @param [string|Closure] $callback Handler name
     */
    public function __construct($_pattern, callable $_callback_handler, callable $_callback_filter = null) {
        $this->pattern = $_pattern;
        $this->callback_handler = $_callback_handler;
        $this->callback_filter = $_callback_filter;
    }

    public function pattern() {
        return $this->pattern;
    }

    public function handler() {
        return $this->callback_handler;
    }

    public function filter() {
        return $this->callback_filter;
    }

}
