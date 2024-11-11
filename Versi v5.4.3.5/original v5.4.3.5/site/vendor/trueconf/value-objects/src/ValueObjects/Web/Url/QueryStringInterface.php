<?php

namespace ValueObjects\Web\Url;

use ValueObjects\Base\StringLiteral\StringLiteralInterface;

/**
 * Interface QueryStringInterface
 * @package ValueObjects\Web\Url
 */
interface QueryStringInterface extends StringLiteralInterface
{
//    const ALLOWED_FORMAT = 'URL query string';
    const QUERY_STRING_REGEXP = '^[^#]*$';

    /**
     * QueryStringInterface constructor.
     * @param string $value
     */
    public function __construct(string $value);
}
