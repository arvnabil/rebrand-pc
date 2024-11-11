<?php

namespace TRUF\Ext\DB;

use PgSql\Connection;

abstract class DataBase {

    const INTEGER = 'integer';
    const NUMERIC = 'numeric';
    const TIMESTAMP = 'timestamp';
    const VARCHAR = 'varchar';

    protected $params = array();
    protected $connect_func;
    protected $connect_func_params = array();
    protected $connection;
    protected $dbResult;
    protected $current_row = 0;
    protected $time_zone_correct = true;
    protected $host = '';
    protected $port = '';
    protected $user = '';
    protected $password = '';
    protected $dbname = '';

    public function host($value = null) {
        if (is_null($value))
            return $this->host;

        $this->host = $value;
        return $this;
    }

    public function port($value = null) {
        if (is_null($value))
            return $this->port;

        $this->port = $value;
        return $this;
    }

    public function user($value = null) {
        if (is_null($value))
            return $this->user;

        $this->user = $value;
        return $this;
    }

    public function password($value = null) {
        if (is_null($value))
            return $this->password;

        $this->password = $value;
        return $this;
    }

    public function dbname($value = null) {
        if (is_null($value))
            return $this->dbname;

        $this->dbname = $value;
        return $this;
    }

    public function connect() {
        $this->connection = call_user_func_array($this->connect_func, $this->connect_func_params);
        if (!$this->connection) {
            trigger_error("Connection isn't created", E_USER_ERROR);
            return 1;
        }
        return 0;
    }

    public function __destruct() {
        $this->close();
    }

    public function close($refresh_params = true) {
        if ($refresh_params)
            $this->refreshParams();
    }

    public function getState() {
        return $this->connection instanceof Connection;
    }

    public function addParam($_type, $_param) {
        $param = new \stdClass();
        $param->type = $_type;
        $param->value = $_param;
        $this->params[] = $param;
        return $this;
    }

    public function refreshParams() {
        $this->params = array();
    }

    public function execute($_name) {
        if (!$this->getState())
            return FALSE;
    }

    public function readItem($_obj = null, $_fields_array = array()) {
        if (!$this->dbResult)
            return false;

        $row = $this->fetchRow();
        if (!$row)
            return false;

        $fields_names = $this->fieldsNames();
        foreach ($row as $key => $value) {
            if (count($_fields_array) && !in_array($key, $_fields_array))
                continue;
            $index = array_search($key, $fields_names);
            if ($index === FALSE)
                continue;
            $type = $this->fieldType($index);
            if (isset($_obj))
                $_obj->$key = $this->getCorrectType($value, $type);
            else
                $result_array[$key] = $this->getCorrectType($value, $type);
        }
        return isset($_obj) ? $_obj : $result_array;
    }

    public function readList($_className = null, $_fields_array = array()) {
        $list = array();
        while ($item = $this->readItem(isset($_className) ? new $_className() : null, $_fields_array)) {
            $list[] = $item;
        }
        return $list;
    }

    public function TimeZoneCorrect($flag) {
        $this->time_zone_correct = $flag;
    }

    abstract protected function getCorrectType($_value, $_type);

    abstract protected function prepareParams();

    abstract protected function fetchRow();

    abstract protected function fieldsNames();

    abstract protected function fieldType($_index);
}