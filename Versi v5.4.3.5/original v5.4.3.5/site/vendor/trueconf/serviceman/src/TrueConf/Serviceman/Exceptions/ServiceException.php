<?php
/**
 * @author Petr Chelpanov <chelpanov@trueconf.com>
 */

declare(strict_types=1);

namespace TrueConf\Serviceman\Exceptions;

use Exception;
use Throwable;

/**
 * Class ServiceException
 * @package TrueConf\Serviceman\Exceptions
 */
class ServiceException extends Exception implements Throwable
{

}