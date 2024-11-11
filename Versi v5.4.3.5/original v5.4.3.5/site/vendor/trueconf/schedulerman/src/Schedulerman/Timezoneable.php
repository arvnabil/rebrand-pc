<?php
/**
 * @author Petr Chelpanov <chelpanov@trueconf.ru>
 */

declare(strict_types=1);

namespace Schedulerman;

use DateTimeZone;

/**
 * Interface Timezoneable
 * @package SchedulermanOld
 */
interface Timezoneable
{
    /**
     * Возвращает временную зону.
     * @return DateTimeZone
     */
    public function getTimeZone(): DateTimeZone;

    /**
     * Устанавливает временную зону.
     * Влияет на все связные объекты DateTime.
     * @param DateTimeZone $timeZone
     */
    public function setTimeZone(DateTimeZone $timeZone): void;
}