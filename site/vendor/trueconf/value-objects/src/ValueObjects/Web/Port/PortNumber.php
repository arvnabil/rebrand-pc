<?php

namespace ValueObjects\Web\Port;

use InvalidArgumentException;
use Throwable;
use ValueObjects\Base\Natural\Natural;

/**
 * Class PortNumber
 * @package ValueObjects\Web\Port
 */
class PortNumber extends Natural implements PortInterface
{
    /**
     * PortNumber constructor.
     * @param int $value
     * @throws Throwable
     */
    public function __construct($value)
    {
        if (($exception = self::validate($value)) !== null) {
            throw $exception;
        }
        parent::__construct($value);
    }

    /**
     * @param string $value
     * @return Throwable|null
     */
    public static function validate(string $value)
    {
        return $value <= static::MAX_PORT
            ? null
            : new InvalidArgumentException("$value" . " is not a valid IP address.");
    }
}
