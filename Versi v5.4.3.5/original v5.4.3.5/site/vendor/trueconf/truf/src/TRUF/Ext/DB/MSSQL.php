<?php

namespace TRUF\Ext\DB;

class MSSQL extends DataBase {

    const DATE = 'date';
    const TIME = 'time';

    protected $port = '1433';

    /**
     *
     * @var TRUF_Ext_MSSQL
     */
    private static $instance = null;

    public function __construct() {
        $this->connect_func = "mssql_connect";
    }

    public static function getSingleton() {
        if (is_null(self::$instance))
            self::$instance = new self;

        return self::$instance;
    }

    public function connect() {
        $this->connect_func_params = array(
            implode(strtoupper(substr(PHP_OS, 0, 3)) === 'WIN' ? ',' : ':', [$this->host, $this->port]),
            $this->user,
            $this->password
        );
        parent::connect();
        mssql_select_db($this->dbname, $this->connection);
    }

    public function close($refresh_params = true) {
        if (is_resource($this->connection))
            mssql_close($this->connection);

        parent::close($refresh_params);
    }

    public function execute($_name) {
        parent::execute($_name);
        $query = "exec  $_name {$this->prepareParams()};";
        //print $query;
        $this->dbResult = mssql_query($query, $this->connection);
        return is_resource($this->dbResult) || $this->dbResult ? $this->dbResult : false;
    }

    protected function getCorrectType($_value, $_type) {
        switch ($_type) {
            case 'int identity':
            case 'int':
                return intval($_value);
            case 'datetime';
                if (gettype($_value) == 'NULL')
                    return NULL;
                if ($this->time_zone_correct) {
                    $date = new DateTime($_value, new DateTimeZone('UTC'));
                    if (isset($_SESSION["time_zone_offset"])) {
                        if ($_SESSION["time_zone_offset"] < 0)
                            $date->add(new DateInterval("PT" . ($_SESSION["time_zone_offset"] * -1) . "M"));
                        else if ($_SESSION["time_zone_offset"] > 0)
                            $date->sub(new DateInterval("PT" . $_SESSION["time_zone_offset"] . "M"));
                    };
                    return $date;
                } else {
                    $date = new DateTime($_value);
                    return $date;
                }
            case 'real':
            case 'float':
                return floatval($_value);
            default:
                return $_value;
        }
    }

    protected function prepareParams() {
        $params = array();
        foreach ($this->params as $param) {

            // конвертация кодировки на случай, если форма была отправлена не в UTF8
            $this->prepareParamCharset($param);

            if (is_null($param->value))
                $params[] = "null";
            else {
                switch ($param->type) {
                    case self::VARCHAR:
                        $params[] = "N'" . str_replace("'", "''", $param->value) . "'";
                        break;
                    case self::INTEGER:
                        $params[] = (int) $param->value;
                        break;
                    case self::NUMERIC:
                        $params[] = is_numeric($param->value) ? number_format($param->value, 6, '.', '') : "0";
                        break;
                    case self::TIMESTAMP:
                        $params[] = is_object($param->value) ? "'{$param->value->format("Y-m-d H:i:s")}'" : null;
                        break;
                    case self::DATE:
                        $params[] = is_object($param->value) ? "'{$param->value->format("Y-m-d")}'" : null;
                        break;
                    case self::TIME:
                        if (is_string($param->value) && preg_match('/^\d{2}:\d{2}:\d{2}$/', $param->value)) {
                            $params[] = "'{$param->value}'";
                        } elseif (is_object($param->value)) {
                            $params[] = "'{$param->value->format("H:i:s")}'";
                        } else
                            $params[] = null;
                        break;
                }
            }
        }
        return implode(', ', $params);
    }

    protected function fetchRow() {
        return mssql_fetch_object($this->dbResult);
    }

    protected function fieldsNames() {
        $cnt = mssql_num_fields($this->dbResult);
        if ($cnt < 0)
            return FALSE;

        $fields = array();
        for ($i = 0; $i < $cnt; $i++)
            $fields[] = mssql_field_name($this->dbResult, $i);

        return $fields;
    }

    protected function fieldType($_index) {
        return mssql_field_type($this->dbResult, $_index);
    }

    public function nextResult() {
        return mssql_next_result($this->dbResult);
    }

    public function prepareParamCharset(&$param) {
        if (is_string($param->value)) {
            $charset = mb_detect_encoding($param->value, array('utf-8', 'windows-1251'));
            if (!preg_match("/utf-?8/i", $charset))
                $param->value = iconv($charset, "UTF-8", $param->value);
        }
    }

}
