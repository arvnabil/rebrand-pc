<?php
/**
 * @author Petr Chelpanov <chelpanov@trueconf.ru>
 */

declare(strict_types=1);

namespace Schedulerman\Schedule;

use DateInterval;
use DateTime;
use DateTimeZone;
use Exception;
use RuntimeException;
use Schedulerman\Period;
use Schedulerman\Scheduleable;
use Schedulerman\Season;
use Schedulerman\Time;
use Schedulerman\Week;

/**
 * Class WeekSchedule
 * @package Schedulerman\Schedule
 */
class WeekSchedule extends AbstractSchedule implements Scheduleable
{
    /**
     * Флаг отвечающий за необходимость "сместиться" назад.
     */
    private const SHIFT_BACK = 0;

    /**
     * Флаг отвечающий за необходимость "сместиться" вперед.
     */
    private const SHIFT_FORWARD = 1;

    /**
     * @var Season
     */
    protected $season;

    /**
     * @var Time
     */
    protected $time;

    /**
     * @var Week
     */
    protected $week;

    /**
     * WeekSchedule constructor.
     * @param DateTimeZone $timeZone
     * @param Season $season
     * @param Time $time
     * @param Week $week
     */
    public function __construct(
        DateTimeZone $timeZone,
        Season $season,
        Time $time,
        Week $week
    )
    {
        $this->timeZone = $timeZone;
        $this->season = $season;
        $this->time = $time;
        $this->week = $week;
    }

    /**
     * {@inheritDoc}
     */
    public function getFirstSchedule(): ?Period
    {
        return $this->getNextSchedule($this->getSeasonStartDate());
    }

    /**
     * {@inheritDoc}
     */
    public function getNextSchedule(DateTime $point): ?Period
    {
        $seasonEnd = $this->getSeasonEndDate();

        if ($point > $seasonEnd) {
            return null;
        }

        $startTime = $this->getTime()->getStart();

        $start = clone $point;
        $start = $this->copyTimeFromTo($startTime, $start);

        $days = $this->week->getWeekdaysAsArrayString(Week::FORMAT_L);

        $try = 0;
        while (true) {
            $day = $start->format('l');

            if (in_array($day, $days) && $start > $point) {
                break;
            }

            $start->add(new DateInterval('P1D'));

            $try++;

            if ($try > 7) {
                throw new RuntimeException("Unexpected behavior");
            }
        }

        if ($start > $seasonEnd) {
            return null;
        }

        $endTime = $this->getTime()->getEnd();
        $diff = $startTime->diff($endTime);
        $end = clone $start;
        $end->add($diff);

        return new Period($start, $end);
    }

    /**
     * @return DateTime
     */
    private function getSeasonEndDate(): DateTime
    {
        return clone $this->copyTimeFromTo($this->getTime()->getEnd(), $this->getSeason()->getEnd());
    }

    /**
     * @return Time
     */
    public function getTime(): Time
    {
        return $this->time;
    }

    /**
     * @param Time $time
     */
    public function setTime(Time $time): void
    {
        $this->time = $time;
    }

    /**
     * @return Season
     */
    public function getSeason(): Season
    {
        return $this->season;
    }

    /**
     * @param Season $season
     */
    public function setSeason(Season $season): void
    {
        $this->season = $season;
    }

    /**
     * @return DateTime
     */
    private function getSeasonStartDate(): DateTime
    {
        return clone $this->copyTimeFromTo($this->getTime()->getStart(), $this->getSeason()->getStart());
    }

    /**
     * {@inheritDoc}
     */
    public function getLastSchedule(): ?Period
    {
        return $this->getPrevSchedule($this->getSeasonEndDate());
    }

    /**
     * {@inheritDoc}
     */
    public function getPrevSchedule(DateTime $point): ?Period
    {
        $startSeason = $this->getSeasonStartDate();

        if ($point < $startSeason) {
            return null;
        }

        $startTime = $this->getTime()->getStart();

        $start = clone $point;
        $start = $this->copyTimeFromTo($startTime, $start);

        $days = $this->week->getWeekdaysAsArrayString(Week::FORMAT_L);

        $endTime = $this->getTime()->getEnd();
        $diff = $startTime->diff($endTime);

        $end = clone $start;
        $end->add($diff);

        $try = 0;
        while (true) {
            $day = $start->format('l');

            if (in_array($day, $days) && $point > $end) {
                break;
            }

            $interval = new DateInterval('P1D');
            $start->sub($interval);
            $end->sub($interval);

            $try++;

            if ($try > 7) {
                break;
            }
        }

        if ($start < $startSeason) {
            return null;
        }

        return new Period($start, $end);
    }

    /**
     * {@inheritDoc}
     */
    public function setTimeZone(DateTimeZone $timeZone): void
    {
        $start = $this->getSeasonStartDate();
        $shift = $this->getShift($start, $timeZone);
        $end = $this->getSeasonEndDate();

        $start->setTimezone($timeZone);
        $end->setTimezone($timeZone);

        $startTime = $this->getTime()->getStart();
        $startTime->setTimezone($timeZone);
        $endTime = $this->getTime()->getEnd();
        $endTime->setTimezone($timeZone);

        $this->setSeason(new Season($start, $end));
        $this->setTime(new Time($startTime, $endTime));

        if ($shift === static::SHIFT_BACK) {
            $this->week->shiftBack();
        }

        if ($shift === static::SHIFT_FORWARD) {
            $this->week->shiftForward();
        }

        $this->timeZone = $timeZone;
    }

    /**
     * Сигнал о необходимости "сдвинуть" даты/дни недели.
     * Может быть равен null, 0, 1
     * null - сдвиг не нужен
     * 0 - сдвиг назад
     * 1 - сдвиг вперед
     *
     * @param DateTime $dateTime
     * @param DateTimeZone $timeZone
     * @return int|null
     */
    private function getShift(DateTime $dateTime, DateTimeZone $timeZone): ?int
    {
        $dateTime = clone $dateTime;
        $weekday1 = intval($dateTime->format('w'));

        $dateTime->setTimezone($timeZone);
        $weekday2 = intval($dateTime->format('w'));

        if ($weekday1 === 0 && $weekday2 === 6) {
            return static::SHIFT_BACK;
        }

        if ($weekday1 === 6 && $weekday2 === 0) {
            return static::SHIFT_FORWARD;
        }

        if ($weekday1 > $weekday2) {
            return static::SHIFT_BACK;
        }

        if ($weekday1 < $weekday2) {
            return static::SHIFT_FORWARD;
        }

        return null;
    }

    /**
     * @throws Exception
     */
    public function jsonSerialize(): mixed
    {
        $timezone = $this->getTimezone();
        $now = new DateTime('now', $timezone);

        return [
            'zone' => $timezone->getName(),
            'type' => $this->getType(),
            'week' => [
                'season' => $this->getSeason(),
                'time' => $this->getTime(),
                'days' => $this->getWeek()->getWeekdaysAsArrayString(Week::FORMAT_L)
            ],
            'current' => $this->getSchedule($now),
            'prev' => $this->getPrevSchedule($now),
            'next' => $this->getNextSchedule($now)
        ];
    }

    /**
     * {@inheritDoc}
     */
    public function getType(): int
    {
        return static::TYPE_WEEK;
    }

    /**
     * @return Week
     */
    public function getWeek(): Week
    {
        return $this->week;
    }

    /**
     * @param string[] $week
     */
    public function setWeek(array $week): void
    {
        $this->week = $week;
    }

    /**
     * {@inheritDoc}
     */
    public function getSchedule(DateTime $date): ?Period
    {
        if ($date < $this->getSeasonStartDate() ||
            $date > $this->getSeasonEndDate()) {
            return null;
        }

        $period = $this->getPrevSchedule($date);

        if ($period === null) {
            $period = $this->getNextSchedule($this->getSeasonStartDate()->sub(new DateInterval('PT1M')));
        } else {
            $period = $this->getNextSchedule($period->getStart());
        }

        if ($date === $period->getStart() || $date === $period->getEnd()) {
            return $period;
        }

        if ($date > $period->getStart() && $date < $period->getEnd()) {
            return $period;
        }

        return null;
    }

}