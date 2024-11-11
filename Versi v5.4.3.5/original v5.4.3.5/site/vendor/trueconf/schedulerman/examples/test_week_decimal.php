<?php
/**
 * @author Petr Chelpanov <chelpanov@trueconf.ru>
 */

error_reporting(E_ALL);
ini_set('display_errors', 1);

require_once __DIR__
    . DIRECTORY_SEPARATOR . '..'
    . DIRECTORY_SEPARATOR . 'vendor'
    . DIRECTORY_SEPARATOR . 'autoload.php';

use Schedulerman\Week;

$week = Week::createFromDecimalNumber(43);
var_dump($week->getWeekdaysAsArrayString(Week::FORMAT_L));
