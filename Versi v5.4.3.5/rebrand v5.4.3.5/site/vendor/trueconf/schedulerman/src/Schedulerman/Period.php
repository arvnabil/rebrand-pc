<?php
/**
 * @author Petr Chelpanov <chelpanov@trueconf.ru>
 */

declare(strict_types=1);

namespace Schedulerman;

use DateTime;
use DateTimeZone;
use InvalidArgumentException;
use JsonSerializable;

/**
 * Class Period
 * @package Schedulerman
 *
 * Соддержит в себе отрезок времени. (начало->конец)
 */
class Period implements JsonSerializable
{
    /**
     * @var DateTime начало
     */
    private $start;

    /**
     * @var DateTime конец
     */
    private $end;

    /**
     * Period constructor.
     * @param DateTime $start начало
     * @param DateTime $end конец
     */
    public function __construct
    (
        DateTime $start,
        DateTime $end
    )
    {
        $this->setStart($start);
        $this->setEnd($end);
    }

    /**
     * Устанавливает временную зону для отрезка времени.
     * @param DateTimeZone $timeZone
     */
    public function setTimeZone(DateTimeZone $timeZone)
    {
        $this->getStart()->setTimezone($timeZone);
        $this->getEnd()->setTimezone($timeZone);
    }

    /**
     * @return DateTime
     */
    public function getStart(): DateTime
    {
        return $this->start;
    }

    /**
     * @param DateTime $start
     */
    public function setStart(DateTime $start): void
    {
        $this->start = clone $start;
    }

    /**
     * @return DateTime
     */
    public function getEnd(): DateTime
    {
        return $this->end;
    }

    /**
     * @param DateTime $end
     */
    public function setEnd(DateTime $end): void
    {
        $start = $this->getStart();

        if ($start > $end) {
            throw new InvalidArgumentException("The end date cannot be earlier than the start date.");
        }

        $this->end = clone $end;
    }

    public function jsonSerialize(): mixed
    {
        return [
            'start' => $this->getStart()->format(DateTime::ISO8601),
            'end' => $this->getEnd()->format(DateTime::ISO8601)
        ];
    }

}