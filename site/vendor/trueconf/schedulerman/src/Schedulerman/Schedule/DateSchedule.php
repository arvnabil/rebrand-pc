<?php
/**
 * @author Petr Chelpanov <chelpanov@trueconf.ru>
 */

declare(strict_types=1);

namespace Schedulerman\Schedule;

use DateTime;
use DateTimeZone;
use Exception;
use InvalidArgumentException;
use Schedulerman\Period;

/**
 * Class DateSchedule
 * @package Schedule
 */
class DateSchedule extends AbstractSchedule
{
    /**
     * Содержит список отрезков времени.
     * @var Period[]
     */
    private $periods;

    /**
     * MultipleEvent constructor.
     * @param DateTimeZone $timeZone Временная зона.
     * @param Period[] $periods Список отрезков времени.
     */
    public function __construct
    (
        DateTimeZone $timeZone,
        array $periods
    )
    {
        $this->timeZone = $timeZone;
        $this->periods = $this->setPeriods($periods);
    }

    /**
     * {@inheritDoc}
     */
    public function getFirstSchedule(): ?Period
    {
        return $this->getPeriods()[0] ?? null;
    }

    /**
     * Возвращает список периудов.
     * @return Period[]
     */
    public function getPeriods(): array
    {
        return $this->periods;
    }

    /**
     * Задает временные отрезки и сортирует их.
     * @param Period[] $periods временные отрезки.
     * @return Period[]
     */
    public function setPeriods(array $periods): array
    {
        if (empty ($periods)) {
            throw new InvalidArgumentException('List of periods is empty');
        }

        $sort = [];

        /**
         * Приводим все временные отрезки к единой временной зоне.
         * Используем timestamp для сортировки.
         */
        foreach ($periods as $period) {
            $period->setTimezone($this->getTimezone());
            $sort[] = $period->getStart()->getTimestamp();
        }

        array_multisort($sort, $periods, SORT_ASC);
        return $periods;
    }

    /**
     * {@inheritDoc}
     */
    public function getLastSchedule(): ?Period
    {
        return $this->getPeriods()[count($this->getPeriods() - 1)] ?? null;
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
            'date' => $this->getPeriods(),
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
        return static::TYPE_DATE;
    }

    /**
     * {@inheritDoc}
     */
    public function getSchedule(DateTime $date): ?Period
    {
        $periods = $this->getPeriods();

        foreach ($periods as $index => $period) {
            $start = $period->getStart();
            $end = $period->getEnd();

            if (($start < $date || $start === $date) && ($end > $date || $end === $date)) {
                return $period;
            }
        }

        return null;
    }

    /**
     * {@inheritDoc}
     */
    public function getPrevSchedule(DateTime $date): ?Period
    {
        $date = $this->prepareDate($date);
        $periods = $this->getPeriods();
        $lastIndex = count($periods) - 1;

        if ($lastIndex < 0) {
            return null;
        }


        for ($index = $lastIndex; $index >= 0; $index--) {
            $period = $periods[$index];

            if ($period->getEnd() > $date) {
                continue;
            }

            return $period;
        }

        return null;
    }

    /**
     * {@inheritDoc}
     */
    public function getNextSchedule(DateTime $date): ?Period
    {
        $date = $this->prepareDate($date);

        foreach ($this->getPeriods() as $period) {
            if ($date < $period->getStart()) {
                return $period;
            }
        }

        return null;
    }

    /**
     * {@inheritDoc}
     */
    public function setTimezone(DateTimeZone $timeZone): void
    {
        $this->timeZone = $timeZone;

        foreach ($this->getPeriods() as $period) {
            $period->setTimezone($timeZone);
        }
    }


}