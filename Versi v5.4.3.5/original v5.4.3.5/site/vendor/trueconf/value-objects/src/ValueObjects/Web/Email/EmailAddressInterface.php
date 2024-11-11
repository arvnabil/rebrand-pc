<?php
/**
 * @author Petr Chelpanov <chelpanov@trueconf.com>
 */

declare(strict_types=1);

namespace ValueObjects\Web\Email;

use ValueObjects\Base\StringLiteral\StringLiteralInterface;

/**
 * Interface EmailAddressInterface
 * @package ValueObjects\Web
 */
interface EmailAddressInterface extends StringLiteralInterface
{
    /**
     * @return string
     */
    public function getUserName(): string;

    /**
     * @return string
     */
    public function getDomain(): string;
}
