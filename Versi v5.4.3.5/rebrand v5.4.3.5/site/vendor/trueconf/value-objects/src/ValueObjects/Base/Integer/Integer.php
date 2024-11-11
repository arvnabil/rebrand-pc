<?php
/**
 * @author Petr Chelpanov <chelpanov@trueconf.com>
 */

declare(strict_types=1);

namespace ValueObjects\Base\Integer;

/**
 * Class Integer
 * @package ValueObjects\Base\Integer
 */
class Integer extends AbstractInteger implements IntegerInterface
{
    /**
     * Integer constructor.
     * @param int $value
     */
    public function __construct(int $value)
    {
        $this->value = $value;
    }
}
