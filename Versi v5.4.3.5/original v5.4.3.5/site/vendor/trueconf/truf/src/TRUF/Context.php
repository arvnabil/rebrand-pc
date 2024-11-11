<?php

/**
 * Description of Context
 *
 * @author askra
 */

namespace TRUF;

class Context {

    /**
     * @var \TRUF\Response
     */
    protected $response;

    /**
     * @var \TRUF\Request
     */
    protected $request;
    
    /*
     * @var \TRUF\QueueManager
     */
    protected $queue;
    
    /**
     *
     * @var \TRUF\Error
     */
    protected $error;

    /**
     * Context ID
     * @var string
     */
    protected $id;
    
    /**
     *
     * @var \TRUF\Debuger
     */
    protected $debuger;
    
    /**
     *
     * @var \TRUF\Form
     */
    protected $form;

    public function __construct($_id = null) {
        $this->id = isset($_id) ? $_id : rand();
        
        $this->response = new Response();
        $this->request = new Request();
        $this->error = new Error();
        $this->queue = new QueueManager();
        $this->debuger = new Debuger();
        $this->form = new Form();
    }
    
    public function id(){
        return $this->id;
    }

    public function response() {
        return $this->response;
    }

    public function request() {
        return $this->request;
    }

    public function error() {
        return $this->error;
    }
    
    public function queue($_queue_name) {
        return $this->queue->isExist($_queue_name) ? $this->queue->get($_queue_name) : $this->queue->create($_queue_name);
    }

    public function removeQueue($_queue_name){
        $this->queue->remove($_queue_name);
    }
    
    public function debuger(){
        return $this->debuger;
    }
    
    public function form(){
        return $this->form;
    }

}
