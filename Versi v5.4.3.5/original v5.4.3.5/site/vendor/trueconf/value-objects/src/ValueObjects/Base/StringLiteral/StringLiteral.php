<?php
/**
 * @author Petr Chelpanov <chelpanov@trueconf.com>
 */

declare(strict_types=1);

namespace ValueObjects\Base\StringLiteral;

/**
 * Class StringLiteral
 * @package ValueObjects\StringLiteral
 */
class StringLiteral extends AbstractStringLiteral implements StringLiteralInterface
{
    /**
     * StringLiteral constructor.
     * @param string $value
     */
    public function __construct(string $value)
    {
        $this->value = $value;
    }
}
