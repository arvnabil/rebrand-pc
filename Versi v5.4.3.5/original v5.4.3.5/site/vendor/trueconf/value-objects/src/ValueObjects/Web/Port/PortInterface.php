<?php

namespace ValueObjects\Web\Port;

use ValueObjects\Base\Natural\NaturalInterface;

/**
 * Interface PortInterface
 * @package ValueObjects\Web\Port
 */
interface PortInterface extends NaturalInterface
{
    const MAX_PORT = 65535;

    /**
     * PortInterface constructor.
     * @param int $value
     */
    public function __construct($value);
}
