<?php
/**
 * @author Petr Chelpanov <chelpanov@trueconf.ru>
 */

namespace Schedulerman;

use DateInterval;
use DateTime;
use JsonSerializable;
use RuntimeException;
use Throwable;
use function intval;

/**
 * Class Time
 * @package Schedulerman
 *
 * Объект с датами старта / остановки отражающие только время.
 */
class Time implements JsonSerializable
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
            'start' => $this->getStart()->format('H:i'),
            'end' => $this->getEnd()->format('H:i'),
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
        $this->start = clone $start;
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
        $start = $this->getStart();

        $this->end = clone $start;

        $h = intval($end->format('G'));
        $m = intval($end->format('i'));

        $this->end->setTime($h, $m);

        if ($this->end <= $start) {
            try {
                $this->end->add(new DateInterval('P1D'));
            } catch (Throwable $exception) {
                throw new RuntimeException("Cannot add DateInterval", 0, $exception);
            }

        }
    }


}