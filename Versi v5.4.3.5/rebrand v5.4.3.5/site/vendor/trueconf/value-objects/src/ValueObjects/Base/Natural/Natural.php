<?php

namespace ValueObjects\Base\Natural;

use InvalidArgumentException;
use JsonSerializable;
use Throwable;
use ValueObjects\Base\Integer\AbstractInteger;
use ValueObjects\Base\Integer\IntegerInterface;

/**
 * Class Natural
 * @package ValueObjects\Base\Natural
 */
class Natural extends AbstractInteger implements IntegerInterface, JsonSerializable
{
    /**
     * Natural constructor.
     * @param int $value
     */
    public function __construct(int $value)
    {
        parent::__construct($value);
    }

    /**
     * @param string $value
     * @return Throwable|null
     */
    public static function validate(string $value)
    {
        return $value >= 0
            ? null
            : new InvalidArgumentException("$value" . " is not a valid access token identifier.");
    }

    /**
     * @return mixed
     */
    public function jsonSerialize(): mixed
    {
        return $this->value;
    }
}
