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

use Schedulerman\Period;
use Schedulerman\Schedule\DateSchedule;

$timezone = new DateTimeZone('Europe/Moscow');

try {
    $now = new DateTime('now', $timezone);
    $duration = new DateInterval('PT1H');

    $start = clone $now;
    $start->sub(new DateInterval('PT5M'));

    $end = clone $start;
    $end->add($duration);

    $prevStart = clone $start;
    $prevStart->sub(new DateInterval('P1D'));
    $prevEnd = clone $prevStart;
    $prevEnd->add($duration);

    $nextStart = clone $start;
    $nextStart->add(new DateInterval('P1D'));
    $nextEnd = clone $nextStart;
    $nextEnd->add($duration);

    $periods = [
        new Period(
            $prevStart,
            $prevEnd
        ),
        new Period(
            $start,
            $end
        ),
        new Period(
            $nextStart,
            $nextEnd
        ),
    ];
} catch (Throwable $exception) {
    print ($exception);
    exit;
}

$event = new DateSchedule($timezone, $periods);

print json_encode($event, JSON_PRETTY_PRINT);

//$event->setTimezone(new DateTimeZone('UTC'));

//print json_encode($event, JSON_PRETTY_PRINT);