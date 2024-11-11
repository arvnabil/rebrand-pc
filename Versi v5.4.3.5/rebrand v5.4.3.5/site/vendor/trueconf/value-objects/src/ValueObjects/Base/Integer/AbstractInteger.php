<?php
/**
 * @author Petr Chelpanov <chelpanov@trueconf.com>
 */

declare(strict_types=1);

namespace ValueObjects\Base\Integer;

use ValueObjects\AbstractValueObject;
use ValueObjects\ValueObjectInterface;
use function strval;

/**
 * Class AbstractInteger
 * @package ValueObjects\Base\Integer
 */
abstract class AbstractInteger extends AbstractValueObject implements IntegerInterface, \JsonSerializable
{
    /**
     * @var int
     */
    protected $value;

    /**
     * AbstractInteger constructor.
     * @param int $value
     */
    abstract public function __construct(int $value);

    /**
     * @return int
     */
    public function getInt(): int
    {
        return $this->value;
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

        return $this->__toString() === $other->__toString();
    }

    /**
     * @return string
     */
    public function __toString(): string
    {
        return strval($this->value);
    }

    /**
     * @return mixed
     */
    public function jsonSerialize(): mixed
    {
        return $this->value;
    }
}
