<?php
/**
 * @author Petr Chelpanov <chelpanov@trueconf.com>
 */

declare(strict_types=1);

namespace ValueObjects;

use InvalidArgumentException;
use function get_class;
use function sprintf;

/**
 * Class AbstractValueObject
 *
 * @package ValueObjects
 */
abstract class AbstractValueObject implements ValueObjectInterface
{
    /**
     * @param ValueObjectInterface $other
     * @return bool
     */
    public function equals(ValueObjectInterface $other): bool
    {
        if (static::class !== get_class($other)) {
            throw new InvalidArgumentException(
                sprintf(
                    'A Value Object of type %s can not be compared to another of type %s',
                    static::class,
                    get_class($other)
                )
            );
        }

        return $this->compare($other);
    }

    /**
     * @param ValueObjectInterface $other
     * @return bool
     */
    abstract protected function compare(ValueObjectInterface $other): bool;
}
