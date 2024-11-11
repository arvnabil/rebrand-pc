<?php

namespace ValueObjects\Web\IPAddress;

use function filter_var;
use InvalidArgumentException;
use Throwable;
use ValueObjects\Base\StringLiteral\StringLiteral;

/**
 * Class IPAddress
 * @package ValueObjects\Web\IPAddress
 */
class IPAddress extends StringLiteral implements IPAddressInterface
{
    /**
     * IPAddress constructor.
     * @param string $value
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
        return false !== filter_var($value, FILTER_VALIDATE_IP)
            ? null
            : new InvalidArgumentException("$value" . " is not a valid IP address.");
    }
}
