<?php

namespace TRUF;

/**
 * Description of IoC
 *
 * @author askra
 */
class IoC extends ContextListener {

    const EVENT_WRONG_ENTITY_NAME = 'EVENT_WRONG_ENTITY_NAME';
    const EVENT_IoC_EXIST = 'EVENT_IoC_EXIST';
    const EVENT_IoC_NOT_EXIST = 'EVENT_IoC_NOT_EXIST';
    const EVENT_IoC_EXPECT_PARAMS = 'EVENT_IoC_EXPECT_PARAMS';
    const EVENT_IoC_WRONG_TYPE_OF_THE_RESULT = 'EVENT_IoC_WRONG_TYPE_OF_THE_RESULT';
    const ioc_prefix = 'ioc_entity_name_';
    const ioc_singleton_prefix = 'ioc_singleton_prefix_';

    public static function bind($_entity_name, \Closure $_callback, $_type = null) {
        if (!is_string($_entity_name)) {
            Event::trigger(self::EVENT_WRONG_ENTITY_NAME, __CLASS__, $_entity_name);
            return false;
        }

        $queue = self::context()->queue(self::buildQueueName($_entity_name));

        $element = array(
            'callback' => $_callback,
            'type' => $_type
        );

        if (!$queue->isEmpty()) {
            $queue->insert($element, 100 + $queue->count());
            Event::trigger(self::EVENT_IoC_EXIST, __CLASS__, $_entity_name);
            return false;
        }
        $queue->insert($element, 1);
    }

    static public function make($_entity_name) {
        if (empty($_entity_name))
            return false;

        $args = array();
        if (func_num_args() > 1) {
            $args = array_slice(func_get_args(), 1);
        }

        $query = self::context()->queue(self::buildQueueName($_entity_name));

        if (!$query->isEmpty()) {
            $element = $query->top();

            $callback = $element['callback'];
            $type = $element['type'];

            $refl = new \ReflectionFunction($callback);
            $req_cnt = $refl->getNumberOfRequiredParameters();
            if ($req_cnt > count($args)) {
                Event::trigger(self::EVENT_IoC_EXPECT_PARAMS, __CLASS__, array(
                    'name' => $_entity_name,
                    'required' => $req_cnt,
                    'given' => count($args),
                    'file' => $refl->getFileName(),
                    'line' => $refl->getStartLine()
                ));
                return false;
            }
            $result = $refl->invokeArgs($args);

            if (empty($type) || ($result instanceof $type)) {
                return $result;
            } else {
                Event::trigger(self::EVENT_IoC_WRONG_TYPE_OF_THE_RESULT, __CLASS__, array(
                    'name' => $_entity_name,
                    'required' => $req_cnt,
                    'given' => count($args),
                    'file' => $refl->getFileName(),
                    'line' => $refl->getEndLine() - 1
                ));
                return false;
            }
        } else {
// Default object builder by ClassName
            if (class_exists($_entity_name)) {
                $refl = new \ReflectionClass($_entity_name);
                if ($refl->isInstantiable()) {
//                    $c = $refl->getConstructor();
                    //var_dump($c);
                    return $refl->newInstanceArgs($args);
                }
            }
            Event::trigger(self::EVENT_IoC_NOT_EXIST, __CLASS__, $_entity_name);
            return false;
        }
    }

    static public function singleton($_entity_name) {
        if (empty($_entity_name))
            return false;

        $args = array();
        if (func_num_args() > 1) {
            $args = array_slice(func_get_args(), 1);
        }

        $queue = self::context()->queue(self::buildQueueName($_entity_name, self::ioc_singleton_prefix));

        if (!$queue->isEmpty()) {
            return $queue->top();
        } else {

            $obj = call_user_func_array(array(__CLASS__, 'make'), array_merge(array($_entity_name), $args));

            $queue->insert($obj);

            return $obj;
        }
    }

    static protected function buildQueueName($_name, $_prefix = self::ioc_prefix){
        return $_prefix . mb_strtolower($_name);
    }

}
