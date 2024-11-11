<?php

namespace TRUF;

/**
 * Description of QueueManager
 *
 * @author askra
 */
class QueueManager {

    private $list = array();

    public function isExist($_queue_name) {
        return !empty($_queue_name) && isset($this->list[mb_strtolower($_queue_name)]);
    }

    public function get($_queue_name) {
        if (!$this->isExist($_queue_name))
            return false;

        return $this->list[mb_strtolower($_queue_name)];
    }

    /**
     * @param $_queue_name
     * @return \SplPriorityQueue
     */
    public function create($_queue_name) {
        if ($this->isExist($_queue_name))
            return false;

        $queue_name = mb_strtolower($_queue_name); 
        $this->list[$queue_name] = new \SplPriorityQueue();

        return $this->list[$queue_name];
    }

    /**
     * @param $_queue_name
     * @return bool
     */
    public function remove($_queue_name) {
        if (!$this->isExist($_queue_name))
            return false;

        unset($this->list[mb_strtolower($_queue_name)]);

        return true;
    }
    
    public function getList(){
        return array_keys($this->list);
    }

}
