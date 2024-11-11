<?php

/**
 * Description of Event
 *
 * @author askra
 */

namespace TRUF;

class Event extends ContextListener {

    const ERROR_WRONG_EVENT_TYPE = 'error_wrong_event_type';
    const ERROR_EMPTY_TARGET = 'error_empty_target';
    const ERROR_NO_SUBSCRIBERS = 'error_no_subscribers';
    const QUEUE_PUSH = 0;
    const QUEUE_UNSHIFT = 1;

    protected $type;
    protected $target;
    protected $payload;
    private static $stop_propagation = array();

    public function __construct($_type, $_target, $_payload = null) {
        $this->type = mb_strtolower($_type);
        $this->target = $_target;
        $this->payload = $_payload;
    }

    /**
     * Get object of Target
     * 
     * @return Object
     */
    public function target() {
        return $this->target;
    }

    /**
     * Get Event Type value
     * 
     * @return string
     */
    public function type() {
        return $this->type;
    }

    /**
     * Get payload data
     */
    public function payload() {
        return $this->payload;
    }

    /**
     *
     * @param string $_event_type
     * @param callback $_callback
     * @param int $_priority
     * @return void
     */
    public static function bind($_event_type, callable $_callback, $_priority = 100) {

        if (!is_string($_event_type))
            trigger_error(self::ERROR_WRONG_EVENT_TYPE, E_USER_WARNING);

        self::context()->queue($_event_type)->insert($_callback, $_priority);
    }

    public static function unbind($_event_type) {
        self::context()->removeQueue($_event_type);
    }

    /**
     * 
     * @param string $_event_type String identifier for the event
     * @param object $_target The object that generated the current event
     * @param array $_payload The data transmitted with the event
     * @return void
     */
    public static function trigger($_event_type, $_target, $_payload = null) {

        if (!is_string($_event_type))
            trigger_error(self::ERROR_WRONG_EVENT_TYPE, E_USER_WARNING);

        if (empty($_target))
            trigger_error(self::ERROR_WRONG_EVENT_TYPE, E_USER_ERROR);

        //        error_log($_event_type . '  ' . self::context()->id());

        $queue = self::context()->queue($_event_type);
//        error_log($_event_type . '  ' . self::context()->id());
        foreach ($queue as $callback){
            $event = new self($_event_type, $_target, $_payload);
            if (is_callable($callback)) {
                call_user_func($callback, $event);
            }
        }
    }

    public function stopPropagation() {
        self::$stop_propagation[$this->type] = TRUE;
    }

    public function isPropagationStopped() {
        return !empty(self::$stop_propagation[$this->type]);
    }

}
