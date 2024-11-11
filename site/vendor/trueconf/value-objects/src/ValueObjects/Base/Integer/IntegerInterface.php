<?php
/**
 * @author Petr Chelpanov <chelpanov@trueconf.com>
 */

declare(strict_types=1);

namespace ValueObjects\Base\Integer;

use ValueObjects\ValueObjectInterface;

/**
 * Interface IntegerInterface
 * @package ValueObjects\Base\Integer
 */
interface IntegerInterface extends ValueObjectInterface
{
    /**
     * @return int
     */
    public function getInt(): int;
}
