<?php

namespace ValueObjects\Web\Url;

use ValueObjects\Base\StringLiteral\StringLiteralInterface;

/**
 * Interface SchemeNameInterface
 * @package ValueObjects\Web\Url
 */
interface SchemeNameInterface extends StringLiteralInterface
{
    const SCHEME_NAME_REGEXP = "^[a-z]([a-z0-9\+\.-]+)?$";

    /**
     * SchemeNameInterface constructor.
     * @param string $value
     */
    public function __construct(string $value);
}
