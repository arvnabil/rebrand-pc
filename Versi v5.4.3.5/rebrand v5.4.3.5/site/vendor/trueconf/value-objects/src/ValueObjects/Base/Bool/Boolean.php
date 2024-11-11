<?php

namespace ValueObjects\Base\Bool;

/**\
 * Class Bool
 * @package ValueObjects\Base\Bool
 */
class Boolean extends AbstractBoolean
{
    /**
     * Boolean constructor.
     * @param bool $value
     */
    public function __construct(bool $value)
    {
        $this->value = $value;
    }
}
