<?php

namespace ValueObjects\Web\Domain;

use function filter_var;
use InvalidArgumentException;
use Throwable;
use ValueObjects\Base\StringLiteral\StringLiteral;
use ValueObjects\Web\Hostname\Hostname;
use ValueObjects\Web\Hostname\HostnameInterface;
use ValueObjects\Web\IPAddress\IPAddress;
use ValueObjects\Web\IPAddress\IPAddressInterface;

/**
 * Class Domain
 * @package ValueObjects\Web\Domain
 */
class Domain extends StringLiteral implements DomainInterface
{
    /**
     * Domain constructor.
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
        || false !== filter_var($value, FILTER_VALIDATE_IP)
            ? null
            : new InvalidArgumentException("$value" . " is not a valid domain.");
    }


    /**
     * @param $domain
     * @return HostnameInterface|IPAddressInterface
     * @throws Throwable
     */
    public static function specifyType($domain)
    {
        if (($exception = self::validate($domain)) !== null) {
            throw $exception;
        }

        return false !== filter_var($domain, FILTER_VALIDATE_IP)
            ? new IPAddress($domain)
            : new Hostname($domain);
    }
}
