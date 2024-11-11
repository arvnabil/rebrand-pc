<?php

namespace ValueObjects\Web\Url;

use InvalidArgumentException;
use function preg_match;
use Throwable;
use ValueObjects\Base\StringLiteral\StringLiteral;

/**
 * Class SchemeName
 * @package ValueObjects\Web\Url
 */
class SchemeName extends StringLiteral implements SchemeNameInterface
{

    /**
     * SchemeName constructor.
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
        return preg_match('/' . static::SCHEME_NAME_REGEXP . '/', $value)
            ? null
            : new InvalidArgumentException("$value" . " is not a valid URL scheme name.");
    }
}
