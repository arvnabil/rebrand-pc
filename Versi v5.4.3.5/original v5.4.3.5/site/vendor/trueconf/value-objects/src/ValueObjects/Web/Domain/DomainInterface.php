<?php

namespace ValueObjects\Web\Domain;

use ValueObjects\Base\StringLiteral\StringLiteralInterface;

/**
 * Interface DomainInterface
 * @package ValueObjects\Web\Domain
 */
interface DomainInterface extends StringLiteralInterface
{
//    const DOMAIN_ALLOWED_FORMAT = 'IP address or Hostname';

    /**
     * DomainInterface constructor.
     * @param string $value
     */
    public function __construct(string $value);
}
