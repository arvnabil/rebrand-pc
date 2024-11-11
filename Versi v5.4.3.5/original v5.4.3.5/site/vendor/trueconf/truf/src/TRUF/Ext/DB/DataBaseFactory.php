<?php

/**
 * Description of DataBaseFactory
 *
 * @author askra
 */
namespace TRUF\Ext\DB;

class DataBaseFactory {

    const MSSQL = '\TRUF\Ext\DB\MSSQL';
    const PgSQL = '\TRUF\Ext\DB\PgSQL';

    public static function getInstance($db_type) {
        if (self::checkDB($db_type))
            return new $db_type();

        trigger_error("Undefined Data Base", E_USER_ERROR);
    }

    public static function getSingleton($db_type) {
        if (self::checkDBName($db_type)) {
            return $db_type::getSingleton();
        }
        trigger_error("Undefined Data Base", E_USER_ERROR);
    }

    private static function checkDBName($db_type) {
        $rfl = new \ReflectionClass(__CLASS__);
        $rfl_const = $rfl->getConstants();
        return in_array($db_type, $rfl_const) ? TRUE : FALSE;
    }

}

