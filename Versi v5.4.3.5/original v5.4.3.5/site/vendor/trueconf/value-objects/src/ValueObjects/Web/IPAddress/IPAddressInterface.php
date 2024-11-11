<?php


namespace ValueObjects\Web\IPAddress;

use ValueObjects\Web\Domain\DomainInterface;

/**
 * Interface IPAddressInterface
 * @package ValueObjects\Web\IPAddress
 */
interface IPAddressInterface extends DomainInterface
{
//    const IP_ALLOWED_FORMAT = 'IP address';

    /**
     * IPAddressInterface constructor.
     * @param string $value
     */
    public function __construct($value);
}
