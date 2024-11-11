<?php

namespace ValueObjects\Web\Url;

use ValueObjects\Base\StringLiteral\StringLiteralInterface;

/**
 * Interface FragmentIdentifierInterface
 * @package ValueObjects\Web\Url
 */
interface FragmentIdentifierInterface extends StringLiteralInterface
{
//    const FRAGMENT_ID_ALLOWED_FORMAT = 'Fragment identifier';
    const FRAGMENT_ID_REGEXP = "^.*$";

    /**
     * FragmentIdentifierInterface constructor.
     * @param string $value
     */
    public function __construct(string $value);
}
