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

use Schedulerman\Schedule\WeekSchedule;
use Schedulerman\Season;
use Schedulerman\Time;
use Schedulerman\Week;

$timezone = new DateTimeZone('Europe/Moscow');


try {
    $now = new DateTime('now', $timezone);

    $startTime = clone $now;
    $startTime->setTime(04, 11, 00, 00);

    $endTime = clone $now;
    $endTime->setTime(04, 12, 00, 00);

    $season = new Season($now, $now);
    $season->getEnd()->add(new DateInterval('P1M'));

    $time = new Time($startTime, $endTime);
    $week = Week::createFromDays(['Monday', 'Thursday']);


} catch (Throwable $exception) {
    print ($exception);
    exit;
}

$event = new WeekSchedule($timezone, $season, $time, $week);
print json_encode($event, JSON_PRETTY_PRINT);
//$event->setTimeZone(new DateTimeZone('UTC'));
//print json_encode($event, JSON_PRETTY_PRINT);