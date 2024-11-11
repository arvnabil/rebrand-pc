<?php

namespace ValueObjects\Web\Hostname;

use ValueObjects\Web\Domain\DomainInterface;

/**
 * Interface HostnameInterface
 * @package ValueObjects\Web\Hostname
 */
interface HostnameInterface extends DomainInterface
{
//    const HOSTNAME_ALLOWED_FORMAT = 'Hostname (RFC 1034, RFC 1035, RFC 952, RFC 1123, RFC 2732, RFC 2181 and RFC 1123)';

    /**
     * HostnameInterface constructor.
     * @param string $value
     */
    public function __construct(string $value);
}
