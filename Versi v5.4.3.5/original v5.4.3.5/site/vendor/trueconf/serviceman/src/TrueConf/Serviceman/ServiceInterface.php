<?php

declare(strict_types=1);

namespace TrueConf\Serviceman;

use Throwable;

/**
 * Interface ServiceInterface
 * @package TrueConf\Serviceman
 */
interface ServiceInterface
{
    const SERVICE_UNKNOWN = 0;
    const SERVICE_STOPPED = 1;
    const SERVICE_RUNNING = 2;
    const SERVICE_START_PENDING = 3;
    const SERVICE_STOP_PENDING = 4;

    /**
     * @return string
     */
    public function getName(): string;

    /**
     * @return bool
     * @throws Throwable
     */
    public function start(): bool;

    /**
     * @return bool
     * @throws Throwable
     */
    public function stop(): bool;

    /**
     * @return int
     * @throws Throwable
     */
    public function status(): int;
}