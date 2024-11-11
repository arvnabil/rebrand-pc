<?php

namespace ValueObjects\Base\Bool;

use JsonSerializable;
use ValueObjects\AbstractValueObject;
use ValueObjects\ValueObjectInterface;

/**
 * Class AbstractBoolean
 * @package ValueObjects\Base\Bool
 */
abstract class AbstractBoolean extends AbstractValueObject implements JsonSerializable
{
    const BOOL_TRUE_STRING = '1';
    const BOOL_FALSE_STRING = '';

    /**
     * @var bool
     */
    protected $value;

    /**
     * AbstractInteger constructor.
     * @param bool $value
     */
    abstract public function __construct(bool $value);

    /**
     * @return bool
     */
    public function getBool(): bool
    {
        return $this->value;
    }

    /**
     * @return string
     */
    public function __toString(): string
    {
        return $this->value ? static::BOOL_TRUE_STRING : static::BOOL_FALSE_STRING;
    }

    /**
     * @param ValueObjectInterface $other
     * @return bool
     */
    protected function compare(ValueObjectInterface $other): bool
    {
        if (!$other instanceof self) {
            return false;
        }

        return $this->value === $other->value;
    }

    /**
     * @return mixed
     */
    public function jsonSerialize(): mixed
    {
        return $this->value;
    }
}
