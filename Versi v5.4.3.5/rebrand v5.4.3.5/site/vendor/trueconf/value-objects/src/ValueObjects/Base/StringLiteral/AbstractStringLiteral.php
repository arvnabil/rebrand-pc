<?php
/**
 * @author Petr Chelpanov <chelpanov@trueconf.com>
 */

declare(strict_types=1);

namespace ValueObjects\Base\StringLiteral;

use JsonSerializable;
use ValueObjects\AbstractValueObject;
use ValueObjects\ValueObjectInterface;

/**
 * Class AbstractStringLiteral
 * @package ValueObjects\StringLiteral
 */
abstract class AbstractStringLiteral extends AbstractValueObject implements StringLiteralInterface, JsonSerializable
{
    /**
     * @var string
     */
    protected $value;

    /**
     * AbstractStringLiteral constructor.
     * @param string $value
     */
    abstract public function __construct(string $value);

    /**
     * @param ValueObjectInterface $other
     * @return bool
     */
    protected function compare(ValueObjectInterface $other): bool
    {
        if (!$other instanceof self) {
            return false;
        }

        return $this->__toString() === $other->__toString();
    }

    /**
     * @return string
     */
    public function __toString(): string
    {
        return $this->value;
    }

    /**
     * @return mixed
     */
    public function jsonSerialize(): mixed
    {
        return $this->value;
    }
}
