<?php

namespace TRUF;

/**
 * Description of Debuger
 * 
 * Инициализация дебагера должа происходить в колбэке инициализации приложения
 * 
 * Пример включения дебага
 * 
 * $app = new \TRUF\Application(new \TRUF\Context(), function($context) {
 *      $context->debuger()->startTrace();
 * });
 *
 * @author askra
 */
class Debuger extends ContextListener {

    const LOG_QUERY_NAME = 'LOG_QUERY_NAME';

    protected $default_target_list = array(
        '\\TRUF\\Application',
        '\\TRUF\\Router',
        '\\TRUF\\Page'
    );
    protected $target_list = array();
    protected $counter = 1;
    protected $is_enable = false;

    public function __construct() {
        
    }

    public function isEnable() {
        return $this->is_enable;
    }

    /**
     * Add any debug data to trace log
     * 
     * @param type $data
     */
    static public function log($data) {
        if (!self::context()->debuger()->isEnable())
            return;

        $target = self::backTraceInfo(2);

        // build event type from class name
        $event_type = '\\' . trim($target['class'], '\\');

        Event::trigger($event_type, $target, $data);
    }

    /**
     * Start trace log and render debug info
     * 
     * @param array $class_name_array  List of Class
     * @param type $trace_callback  Log event handler 
     * @param type $render_callback Handler for render trace log info
     */
    public function startTrace(Array $target_list = array()) {
        $this->is_enable = true;

        $this->target_list = count($target_list) ? $target_list : $this->default_target_list;

        foreach ($this->target_list as $event_type) {
            \TRUF\Event::bind($event_type, array($this, 'onTrace'));
        }

        \TRUF\Event::bind(\TRUF\Application::EVENT_DEBUG_RENDER, array($this, 'traceRender'));
    }

    /**
     * Stop trace
     */
    public function stopTrace() {
        $this->is_enable = false;

        foreach ($this->$target_list as $event_type) {
            \TRUF\Event::unbind($event_type);
        }

        \TRUF\Event::unbind(\TRUF\Application::EVENT_DEBUG_RENDER);
    }

    /**
     * Trace event handler
     * 
     * @param \TRUF\Event $event
     */
    public function onTrace(Event $event) {

        $target = $event->target();

        $loginfo = array_merge(
                array('target' => $target['class'] . $target['type'] . $target['function']), $this->prepareLogData($event->payload())
        );

        $this->saveLogData($loginfo);
    }

    /**
     * Log data normalizing
     * 
     * @param type $data Any data
     * @return Array
     */
    protected function prepareLogData($data) {
        $result = array();
        if (is_array($data) || is_object($data)) {
            foreach ($data as $key => $value) {
                $result['key'] = $key;
                $result['value'] = $value;
            }
        } else {
            $result['key'] = null;
            $result['value'] = $data;
        }

        $result['total msec'] = round(microtime(true) - $_SERVER["REQUEST_TIME_FLOAT"], 5);
        return $result;
    }

    /**
     * Stora trace info in the TRUF Query Engine
     * 
     * @param type $data Any data
     */
    protected function saveLogData($data) {
        // prepare TRUF Queue for loginfo store
        self::context()->queue(self::LOG_QUERY_NAME)->insert($data, $this->counter++);
    }

    /**
     * Get array of trace info from TRUF Query Engine
     *
     * @return array
     */
    public function getLogData()
    {
        $list = array();

        $queue = self::context()->queue(self::LOG_QUERY_NAME);

        foreach ($queue as $item) {
            $list[] = $item;
        }

        return $list;
    }

    /**
     * Get metadata about target object
     * 
     * @return array
     */
    static protected function backTraceInfo($_depth = 1) {
        $trace = debug_backtrace(false);
        $class = $function = $type = '';
        $depth = is_int($_depth) ? abs($_depth) : 1;
        if (isset($trace[$depth]) && ($caller = $trace[$depth])) {
            $class = isset($caller['class']) ? $caller['class'] : '';
            $function = isset($caller['function']) ? $caller['function'] : '';
            $type = isset($caller['type']) ? $caller['type'] : '';
        }

        return array(
            'class' => $class,
            'function' => $function,
            'type' => $type
        );
    }

    public function prepareRender() {
        $list = $this->getLogData();

        $cnt = count($list);
        for ($i = 0; $i < $cnt; $i++) {
            $list[$i]['prev offset msec'] = round($list[$i]['total msec'] - ($i > 0 ? $list[$i - 1]['total msec'] : 0), 6);
        }

        return $list;
    }

    /**
     * Render log data to browser console
     * 
     * @return type
     */
    public function traceRender() {

        $list = $this->prepareRender();

        print '<script type="text/javascript">'
                . 'var truf_debug_data = ' . json_encode($list) . ';'
                . 'console.table(truf_debug_data);'
                . 'console.log("total processing time", ' . round(microtime(true) - $_SERVER["REQUEST_TIME_FLOAT"], 5) . ');'
                . 'console.info("For filter debug table by columns key and value write:", ["console.table(truf_debug_data, [\"key\", \"value\"]);"]);'
                . '</script>';
    }

}
