<?php

namespace ValueObjects\Web\Url;

use ValueObjects\Base\StringLiteral\StringLiteralInterface;

/**
 * Interface PathInterface
 * @package ValueObjects\Web\Url
 */
interface PathInterface extends StringLiteralInterface
{
//    const PATH_ALLOWED_FORMAT = 'URL path';
    const PATH_REGEXP = '^[^?#]*$';

    /**
     * PathInterface constructor.
     * @param string $value
     */
    public function __construct(string $value);
}
