<?php

namespace TRUF;

class ContextListener {

    const ERROR_CONTEXT_RELOAD_CONTEXT = 'ERROR_CONTEXT_RELOAD_CONTEXT';

    /**
     * Контекст текущего приложения
     * @var \TRUF\Context
     */
    public static $context_stack = array();

    /**
     * Get Context Object
     * 
     * @return \TRUF\Context
     */
    static public function context() {
        return end(self::$context_stack);
    }

    static public function loadContext(Context $context) {
        array_push(self::$context_stack, $context);
    }

    static public function unloadContext() {
        $context = array_pop(self::$context_stack);
    }

}
