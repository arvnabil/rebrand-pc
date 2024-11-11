<?php

/**
 * Description of TRUF_Router
 *
 * @package TRUF
 * @author Adrey Kravchenko
 */

namespace TRUF;


class Router {

    const EVENT_ROUTER_UNDEFINED_ROUTE = 'event_router_undefined_route';
    const EVENT_ROUTER_DOUBLE_ROUTE = 'event_router_double_route';
    const EVENT_ROUTER_MISSED_REQUIRED_PARAM = 'event_route_missed_required_param';
    const EVENT_ROUTER_FILTER_RUN = 'event_route_filter_run';
    const EVENT_ROUTER_FILTER_FAILED = 'event_route_filter_failed';

    /*
     * URL path
     * @var string
     */

    protected $request_route = '';

    /*
     * @var \TRUF\Route\Filter
     */
    protected $current_filter = null;

    /**
     *
     * @var callable 
     */
    protected $current_callback = null;

    /**
     *
     * @var type 
     */
    protected $route_list = array();

    public function route() {
        return $this->request_route;
    }

    /**
     *  @return \TRUF\Page
     */
    public function createController(\TRUF\Request $_request = null) {

        $this->request_route = isset($_request) ? $_request->path() : \TRUF\Request::getPath();

        Debuger::log(array('Request path' => $this->request_route));

        foreach ($this->route_list as $route) {
            /* @var $route \TRUF\Route */

            if (preg_match($route->pattern() . 'i', $this->request_route, $route_match)) {

                Debuger::log(array('Match route pattern' => $route->pattern()));

                $this->current_callback = $route->handler();

                // get list name of argument
                $route_callback = new \ReflectionFunction($this->current_callback);
                $array_args = array();
                foreach ($route_callback->getParameters() as $param) {
                    if (isset($route_match[$param->name]))
                        $array_args[] = $route_match[$param->name];
                    else if (preg_match('/require/i', $param->__toString())) {
                        // Обработка параметров, которые помечены в сигнатуре обработчика, как обязательные
                        if (stripos($route->pattern(), $param->name) !== FALSE) {
                            // Если не нашлось именованной группы в шаблоне, но сам шаблон сработал, то присваиваем этому параметру значение NULL
                            $array_args[] = null;
                        } else {
                            Event::trigger(self::EVENT_ROUTER_MISSED_REQUIRED_PARAM, $this, 'В регулярном выражении отсутствует шаблон обязательный для обрабатывающей функции');
                            return;
                        }
                    }
                }

                Event::bind(self::EVENT_ROUTER_FILTER_RUN, array($this, 'runFilterHandler'));

                Debuger::log(array('Trigger Event' => 'Router::EVENT_ROUTER_FILTER_RUN'));
                Event::trigger(self::EVENT_ROUTER_FILTER_RUN, $this, $route);

                return is_callable($this->current_callback) ?
                        call_user_func_array($this->current_callback, $array_args) :
                        null;
            } else {
                Debuger::log(array('Does not match route' => $route->pattern()));
            }
        }

        Debuger::log(array('Trigger Event' => 'Router::EVENT_ROUTER_UNDEFINED_ROUTE'));
        Event::trigger(self::EVENT_ROUTER_UNDEFINED_ROUTE, $this, 'Not found a callback function to handle the specified router');
    }

    /**
     * Add handler in to route list
     * 
     * @param string $_pattern_route URL path regexp pattern
     * @param callable $_callback
     * @return \TRUF\Router
     */
    public function addRoute($_pattern_route, callable $_callback, callable $_filter = null) {
        $filter = is_null($_filter) ? $this->current_filter : $_filter;
        array_push($this->route_list, new Route($_pattern_route, $_callback, $filter));

        return $this;
    }

    public function setFilter(callable $_callback_filter) {
        $this->current_filter = $_callback_filter;
        return $this;
    }

    public function clearFilter() {
        $this->current_filter = null;
        return $this;
    }

    public function runFilterHandler(\TRUF\Event $event) {
        $route = $event->payload();
        
        if(!($route instanceof \TRUF\Route)){
            return;
        }
        
        $filter = $route->filter();
        
        if(is_null($filter)){
            return;
        }
        
        if (!is_callable($filter) 
                || call_user_func($filter, $event) == false) {
            
            Debuger::log(array('Trigger Event' => 'Router::EVENT_ROUTER_FILTER_FAILED'));
            Event::trigger(self::EVENT_ROUTER_FILTER_FAILED, $this, 'Route filter check failed');

            $this->current_callback = null;
        }
    }

}
