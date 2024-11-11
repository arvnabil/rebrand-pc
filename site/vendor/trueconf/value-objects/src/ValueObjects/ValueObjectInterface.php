<?php
/**
 * @author Petr Chelpanov <chelpanov@trueconf.com>
 */

declare(strict_types=1);

namespace ValueObjects;

/**
 * Interface ValueObjectInterface
 * @package ValueObjects
 */
interface ValueObjectInterface
{
    /**
     * @return string
     */
    public function __toString(): string;

    /**
     * @param ValueObjectInterface $other
     * @return bool
     */
    public function equals(ValueObjectInterface $other): bool;
}
