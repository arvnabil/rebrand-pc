<?php
namespace TRUF\Ext\DB;

use PgSql\Connection;

class PgSQL extends DataBase {

    const BOOLEAN = 'boolean';
    const BIGINT = 'bigint';
    const CHARACTER = 'character';
    const ARRAY_VARCHAR = 'array_varchar';

    /**
     *
     * @var TRUF_Ext_PgSQL
     */
    private static $instance = null;

    public function __construct() {
        $this->connect_func = "pg_connect";
    }

    public static function getSingleton() {
        if (is_null(self::$instance))
            self::$instance = new self;

        return self::$instance;
    }

    public function connect() {
        $connection_parts = array();
        if(!empty($this->host))
            $connection_parts[] = 'host=' . $this->host;
        if(!empty($this->port))
            $connection_parts[] = 'port=' . $this->port;
        if(!empty($this->dbname))
            $connection_parts[] = 'dbname=' . $this->dbname;
        if(!empty($this->user))
            $connection_parts[] = 'user=' . $this->user;
        if(!empty($this->password))
            $connection_parts[] = 'password=' . $this->password;

        $this->connect_func_params = array(implode(' ', $connection_parts));
        return parent::connect();
    }

    public function execute($_name) {
        parent::execute($_name);
        $this->dbResult = pg_query($this->connection, "select * from {$_name}({$this->prepareParams()})");
        return $this->connection instanceof Connection ? $this->dbResult : false;
    }

    protected function prepareParams() {
        $params = array();
        foreach ($this->params as $param) {
            if (is_null($param->value))
                $params[] = "null";
            else {
                switch ($param->type) {
                    case self::BOOLEAN:
                        $params[] = $param->value ? "'t'" : "'f'";
                        break;
                    case self::BIGINT:
                        $params[] = (int) $param->value;
                        break;
                    case self::CHARACTER:
                        $params[] = $this->escape($param->value);
                        break;
                    case self::VARCHAR:
                        $params[] = $this->escape($param->value);
                        break;
                    case self::INTEGER:
                        $params[] = (int) $param->value;
                        break;
                    case self::NUMERIC:
                        $params[] = is_numeric($param->value) ? number_format($this->value, 6, '.', '') : "0";
                        break;
                    case self::TIMESTAMP:
                        $params[] = is_object($param->value) ? "'{$param->value->format("Y-m-d H:i:s")}'" : null;
                        break;
                    case self::ARRAY_VARCHAR:
                        $buf1 = array();
                        if (is_array($param->value)) {
                            foreach ($param->value as $item) {
                                if (is_array($item)) {
                                    $buf2 = array();
                                    foreach ($item as $value)
                                        $buf2[] = $this->escape($value);
                                    $buf1[] = "ARRAY[" . join(",", $buf2) . "]";
                                }
                                else
                                    $buf1[] = $this->escape($item);
                            }
                        }
                        $params[] = "ARRAY[" . join(",", $buf1) . "]";
                        break;
                }
            }
        }
        return implode(', ', $params);
    }

    protected function fetchRow() {
        return pg_fetch_object($this->dbResult);
    }

    protected function fieldsNames() {
        $cnt = pg_num_fields($this->dbResult);
        if ($cnt < 0)
            return FALSE;

        $fields = array();
        for ($i = 0; $i < $cnt; $i++)
            $fields[] = pg_field_name($this->dbResult, $i);

        return $fields;
    }

    protected function fieldType($_index) {
        return pg_field_type_oid($this->dbResult, $_index);
    }

    private function escape($_str) {
        return is_string($_str) ? "'" . pg_escape_string($this->connection, str_replace("%2C", ",", $_str)) . "'" : $_str;
    }

    protected function getCorrectType($_value, $_oid) {
        switch ($_oid) {
            // timestamp
            case 1114:
                if (gettype($_value) == 'NULL')
                    return NULL;
                $date = new \DateTime($_value, new \DateTimeZone('UTC'));
                if (isset($_SESSION["time_zone_offset"])) {
                    if ($_SESSION["time_zone_offset"] < 0)
                        $date->add(new \DateInterval("PT" . ($_SESSION["time_zone_offset"] * -1) . "M"));
                    else if ($_SESSION["time_zone_offset"] > 0)
                        $date->sub(new \DateInterval("PT" . $_SESSION["time_zone_offset"] . "M"));
                }
                return $date;
            // interval
            case 1186:
                if (isset($_value) && $_value != "") {
                    preg_match_all("/((\d+)-(\d+)-(\d+) )?(\d+):(\d+):(\d+)/", $_value, $matches);
                    $_value = $matches[5][0] . ' hours ' . $matches[6][0] . ' minets ' . $matches[7][0] . ' seconds';
                }
                return DateInterval::createFromDateString($_value);
            // bool
            case 16:
                if ($_value == 't')
                    return true;
                else if ($_value == 'f')
                    return false;
                else
                    return null;
            // int4
            case 23: return $_value;
            // numeric
            case 1700: return (float) $_value;
            default: return $_value;
        }
    }

}