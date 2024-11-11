<?php

/**
 * Description of TRUF_PageController
 *
 * @package TRUF
 * @author Adrey Kravchenko
 */

namespace TRUF;

abstract class Page {

    const ACTION_PREFIX = '_';
    const COMMON_METHOD = 'ALL';
    const EVENT_PAGE_UNKNOWN_METHOD = 'event_page_unknown_method';

    /**
     *
     * @var string
     */
    protected $action = '';

    final function __construct($action = '') {
        if (is_string($action))
            $this->action = str_replace('-', '_', $action);

        Debuger::log(array('Page action' => $this->action));

        $this->bindEvents();
    }

    protected function bindEvents() {
        Event::bind(Application::EVENT_PAGE_INIT, array($this, 'onInit'));
        Event::bind(Application::EVENT_PAGE_LOAD, array($this, 'onLoad'));
        Event::bind(Application::EVENT_PAGE_RENDER, array($this, 'onRender'));
    }

    public function onInit(Event $event) {
        // TODO
    }

    public function onLoad(Event $event) {
        $request_method = Request::getMethod();

        if (!$this->action)
            $callback_list[] = $request_method;

        $callback_list[] = $request_method . self::ACTION_PREFIX . $this->action;
        $callback_list[] = self::COMMON_METHOD . self::ACTION_PREFIX . $this->action;

        Debuger::log(array('Callback list' => json_encode($callback_list)));

        foreach ($callback_list as $item) {
            if (method_exists($this, $item)) {
                Debuger::log(array('Selected method' => $item));

                $this->$item($event);
                return;
            }
        }

        Event::trigger(self::EVENT_PAGE_UNKNOWN_METHOD, $this, "Not found a method to handle the specified action {$this->action} in page " . get_class($this));
    }

    public function onRender(Event $event) {
        print $event->context()->response()->content();
    }

}
