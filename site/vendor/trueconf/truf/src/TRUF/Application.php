<?php

/**
 * Description of TRUF_Application
 *
 * @package TRUF
 * @author Adrey Kravchenko
 */

namespace TRUF;

class Application {

    const EVENT_APPLICATION_ERROR = 'EVENT_APPLICATION_ERROR';
    const EVENT_APPLICATION_ERROR_FATAL = 'EVENT_APPLICATION_ERROR_FATAL';
    const EVENT_APPLICATION_EXEPTION = 'EVENT_APPLICATION_EXEPTION';
    const EVENT_APPLICATION_SHUTDOWN = 'EVENT_APPLICATION_SHUTDOWN';
    const EVENT_APPLICATION_INIT = 'EVENT_APPLICATION_INIT';
    const EVENT_PAGE_INIT = "EVENT_PAGE_INIT";
    const EVENT_PAGE_PRELOAD = "EVENT_PAGE_PRELOAD";
    const EVENT_PAGE_LOAD = "EVENT_PAGE_LOAD";
    const EVENT_PAGE_RENDER = "EVENT_PAGE_RENDER";
    const EVENT_DEBUG_RENDER = "EVENT_DEBUG_RENDER";
    /**
     * Контекст приложения
     * @var \TRUF\Context 
     */
    private $context;
    
    /**
     * Коллбэк успешной инициализации приложения
     * @var \Closure 
     */
    private $initCallback;

    public final function __construct(Context $_context = null, \Closure $_init_callback = null) {
        $sid = session_id();
        if (empty($sid)) {
            session_start();
        }

        /*
         * Set application context
         */
        $this->context = isset($_context) ? $_context : new \TRUF\Context(rand());
        
        /*
         * Set init callbacks
         */
        if($_init_callback !== null){
            $this->initCallback = $_init_callback;
        }
        
        
        /**
         * Set Context object referense to core static classes
         */
        ContextListener::loadContext($this->context);

        /*
         * Initialize general interpritator error handlers
         */
        $this->initSysEvents();
        
        /*
         * Bind  TRUF default event handler
         */
        $this->bindDefaultEvents();
       
        
        /*
         * Unload current Context from stack
         */
        ContextListener::unloadContext();
    }
    
    public function getContext(){
        return $this->context;
    }


    final public function run(\TRUF\Router $_router, \TRUF\Request $_request = null) {

        ContextListener::loadContext($this->context);

        Debuger::log(array('Context ID' => $this->context->id()));       

        Debuger::log(array('Trigger Event' => 'Application::'.self::EVENT_APPLICATION_INIT));
        Event::trigger(self::EVENT_APPLICATION_INIT, $this);

        $_router->createController($_request);
        
        $events = Array(self::EVENT_PAGE_INIT, self::EVENT_PAGE_PRELOAD, 
            self::EVENT_PAGE_PRELOAD, self::EVENT_PAGE_LOAD, self::EVENT_PAGE_RENDER, self::EVENT_DEBUG_RENDER);
        
        foreach($events as $eventName){
            Debuger::log(array('Trigger Event' => 'Application::'.$eventName));
            Event::trigger($eventName, $this);
        }

        ContextListener::unloadContext();
    }

    private function initSysEvents() {
        $_this = $this;

        /*
         * Set init callbacks
         */
        if($this->initCallback !== null){
            Event::bind(self::EVENT_APPLICATION_INIT, function() use($_this){
                call_user_func($_this->initCallback, $_this->context);
            });
        }
        
        set_error_handler(function($errno, $errstr, $errfile, $errline) use($_this) {
            if (error_reporting() !== 0) {
                \TRUF\Event::trigger($_this::EVENT_APPLICATION_ERROR, $_this, array(
                    'type' => $errno,
                    'message' => $errstr,
                    'file' => $errfile,
                    'line' => $errline
                ));
            }
        });

        set_exception_handler(function(\Throwable $exeption)use($_this) {
            \TRUF\Event::trigger($_this::EVENT_APPLICATION_EXEPTION, $_this, $exeption);
        });

        register_shutdown_function(function()use($_this) {

            ContextListener::loadContext($_this->context);

            $error = error_get_last();
            if (!is_null($error)) {
                \TRUF\Event::trigger($_this::EVENT_APPLICATION_ERROR_FATAL, $_this, $error);
            }

            \TRUF\Event::trigger($_this::EVENT_APPLICATION_SHUTDOWN, $_this);

            ContextListener::unloadContext();
        });
    }

    protected function bindDefaultEvents() {
        Event::bind(self::EVENT_APPLICATION_ERROR, array($this->context->error(), 'onError'));
        Event::bind(self::EVENT_APPLICATION_ERROR_FATAL, array($this->context->error(), 'onFatalError'));
        Event::bind(self::EVENT_APPLICATION_EXEPTION, array($this->context->error(), 'onExeption'));
        Event::bind(Router::EVENT_ROUTER_UNDEFINED_ROUTE, array($this->context->error(), 'onNotFound'));
        Event::bind(Router::EVENT_ROUTER_MISSED_REQUIRED_PARAM, array($this->context->error(), 'onNotFound'));
        Event::bind(Router::EVENT_ROUTER_DOUBLE_ROUTE, array($this->context->error(), 'onNotFound'));
        Event::bind(Page::EVENT_PAGE_UNKNOWN_METHOD, array($this->context->error(), 'onNotFound'));
        Event::bind(IoC::EVENT_IoC_EXPECT_PARAMS, array($this->context->error(), 'onIoCError'));
        Event::bind(IoC::EVENT_IoC_WRONG_TYPE_OF_THE_RESULT, array($this->context->error(), 'onIoCError'));
        Event::bind(ContextListener::ERROR_CONTEXT_RELOAD_CONTEXT, array($this->context->error(), 'onContextError'));
    }

}
