<?php

namespace ValueObjects\Web\Hostname;

use function filter_var;
use InvalidArgumentException;
use Throwable;
use ValueObjects\Base\StringLiteral\StringLiteral;

/**
 * Class Hostname
 * @package ValueObjects\Web\Hostname
 */
class Hostname extends StringLiteral implements HostnameInterface
{
    /**
     * Hostname constructor.
     * @param string $value
     * @throws Throwable
     */
    public function __construct(string $value)
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
        return false !== filter_var($value, FILTER_VALIDATE_DOMAIN, FILTER_FLAG_HOSTNAME)
        && false === filter_var($value, FILTER_VALIDATE_IP)
            ? null
            : new InvalidArgumentException("$value" . " is not a valid hostname.");
    }
}
