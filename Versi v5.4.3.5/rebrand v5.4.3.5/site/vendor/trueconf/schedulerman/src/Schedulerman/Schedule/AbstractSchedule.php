<?php
/**
 * @author Petr Chelpanov <chelpanov@trueconf.ru>
 */

declare(strict_types=1);

namespace Schedulerman\Schedule;

use DateTime;
use DateTimeZone;
use JsonSerializable;
use Schedulerman\Scheduleable;
use Schedulerman\Timezoneable;

/**
 * Class AbstractSchedule
 * @package Schedule
 */
abstract class AbstractSchedule implements Timezoneable, Scheduleable, JsonSerializable
{
    /**
     * @var DateTimeZone объект временной зоны.
     */
    protected $timeZone;

    /**
     * Приводит к внутренней временной зоне и откидывает секунды/микросекунды.
     * @param DateTime $date
     * @return DateTime
     */
    protected function prepareDate(DateTime $date): DateTime
    {
        $date = clone $date;
        $date->setTimezone($this->getTimezone());
        $date->setTime(intval($date->format('G')), intval($date->format('i')), 0, 0);
        return $date;
    }

    /**
     * {@inheritDoc}
     */
    public function getTimeZone(): DateTimeZone
    {
        return $this->timeZone;
    }

    /**
     * @param DateTime $to
     * @param DateTime $from
     * @return DateTime
     */
    protected function copyTimeFromTo(DateTime $from, DateTime $to): DateTime
    {
        $to = clone $to;

        $h = intval($from->format('G'));
        $m = intval($from->format('i'));
        $s = intval($from->format('s'));
        $u = intval($from->format('u'));

        $to->setTime($h, $m, $s, $u);

        return $to;
    }
}