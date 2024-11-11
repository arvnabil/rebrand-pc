<?php
/**
 * @author Petr Chelpanov <chelpanov@trueconf.com>
 */

declare(strict_types=1);

namespace ValueObjects\Web\Email;

use InvalidArgumentException;
use LogicException;
use ValueObjects\Base\StringLiteral\StringLiteral;
use function explode;
use function filter_var;

/**
 * Class EmailAddress
 * @package ValueObjects\Web
 */
class EmailAddress extends StringLiteral implements EmailAddressInterface
{
    /**
     * @var string
     */
    protected $username;

    /**
     * @var string
     */
    protected $domain;

    /**
     * EmailAddress constructor.
     * @param string $value
     */
    public function __construct(string $value)
    {
        if (filter_var($value, FILTER_VALIDATE_EMAIL) === false) {
            throw new InvalidArgumentException($value . " is not a valid e-mail address.");
        }

        $addressParts = explode('@', $value);

        if (isset($addressParts[0]) === false || isset($addressParts[1]) === false) {
            throw new LogicException($value . " is not a valid e-mail address.");
        }

        $this->username = $addressParts[0];
        $this->domain = $addressParts[1];

        parent::__construct($value);
    }

    /**
     * @inheritdoc
     */
    public function getUserName(): string
    {
        return $this->username;
    }

    /**
     * @inheritdoc
     */
    public function getDomain(): string
    {
        return $this->domain;
    }
}
