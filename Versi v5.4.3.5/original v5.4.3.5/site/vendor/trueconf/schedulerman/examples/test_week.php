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
$requestTimezone = DateTime::createFromFormat("T", "+09:00")->getTimezone();

try {
    $startSeason = new DateTime('2019-04-08', $timezone);
    $startSeason->setTime(0, 0, 0, 0);

    $endSeason = new DateTime('2038-01-19', $timezone);
    $endSeason->setTime(0, 0, 0, 0);

    $season = new Season($startSeason, $endSeason);

    $startTime = new DateTime('2019-04-08', $timezone);
    $startTime->setTime(22, 00, 00, 00);

    $endTime = new DateTime('2019-04-08', $timezone);
    $endTime->setTime(23, 00, 00, 00);

    $time = new Time($startTime, $endTime);
    $week = Week::createFromDecimalNumber(32);

} catch (Throwable $exception) {
    print ($exception);
    exit;
}

$event = new WeekSchedule($timezone, $season, $time, $week);
$event->setTimeZone($requestTimezone);
print json_encode($event, JSON_PRETTY_PRINT);