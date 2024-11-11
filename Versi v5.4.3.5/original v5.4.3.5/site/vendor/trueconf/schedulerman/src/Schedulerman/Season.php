<?php
/**
 * @author Petr Chelpanov <chelpanov@trueconf.ru>
 */

namespace Schedulerman;

use DateTime;
use InvalidArgumentException;
use JsonSerializable;

/**
 * Class Season
 * @package Schedulerman
 *
 * Объект с датами старта / остановки отражающие только даты сезона (без минут и часов)
 */
class Season implements JsonSerializable
{
    /**
     * Содержит время запуска.
     * @var DateTime
     */
    private $start;

    /**
     * Содержит время остановки.
     * @var DateTime
     */
    private $end;

    /**
     * Time constructor.
     * @param DateTime $start Время запуска.
     * @param DateTime $end Время остановки.
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

    public function jsonSerialize(): mixed
    {
        return [
            'start' => $this->getStart()->format('Y-m-d'),
            'end' => $this->getEnd()->format('Y-m-d'),
        ];
    }

    /**
     * Возвращает время запуска.
     * @return DateTime
     */
    public function getStart(): DateTime
    {
        return $this->start;
    }

    /**
     * Устанавливает время запуска.
     * @param DateTime $start
     */
    public function setStart(DateTime $start): void
    {
        $start = clone $start;
        $start->setTime(0, 0, 0, 0);
        $this->start = $start;
    }

    /**
     * Устанавливает время остановки.
     * @return DateTime
     */
    public function getEnd(): DateTime
    {
        return $this->end;
    }

    /**
     * Устанавливает время остановки.
     * @param DateTime $end
     */
    public function setEnd(DateTime $end): void
    {
        $end = clone $end;
        $end->setTime(0, 0, 0, 0);

        if ($this->getStart() > $end) {
            throw new InvalidArgumentException("The end date cannot be earlier than the start date.");
        }

        $this->end = $end;
    }


}