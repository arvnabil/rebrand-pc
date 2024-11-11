<?php
/**
 * @author Petr Chelpanov <chelpanov@trueconf.ru>
 */

declare(strict_types=1);

namespace Schedulerman;

use DateTime;

/**
 * Interface Scheduleable
 * @package Schedule
 */
interface Scheduleable extends Timezoneable
{
    /**
     * События с определенными датами.
     */
    public const TYPE_DATE = 0;

    /**
     * Повторяемое событие с определенными днями недели.
     */
    public const TYPE_WEEK = 1;

    /**
     * Возвращает тип события.
     * @return int
     */
    public function getType(): int;

    /**
     * Возвращает первый запуск события.
     * @return Period
     */
    public function getFirstSchedule(): ?Period;

    /**
     * Возвращает последний запуск события.
     * @return Period
     */
    public function getLastSchedule(): ?Period;

    /**
     * Возвращает следующий запуск относительно даты.
     * @param DateTime $date
     * @return Period|null
     */
    public function getNextSchedule(DateTime $date): ?Period;

    /**
     * Возвращает запуск относительно даты.
     * @param DateTime $date
     * @return Period|null
     */
    public function getSchedule(DateTime $date): ?Period;

    /**
     * Возвращает предыдущий запуск относительно даты.
     * @param DateTime $date
     * @return Period|null
     */
    public function getPrevSchedule(DateTime $date): ?Period;
}