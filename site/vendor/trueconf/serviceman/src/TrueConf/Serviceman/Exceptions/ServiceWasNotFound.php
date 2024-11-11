<?php

declare(strict_types=1);

namespace TrueConf\Serviceman\Exceptions;

use Throwable;

/**
 * Class ServiceWasNotFound
 * @package TrueConf\Serviceman\Exception
 */
class ServiceWasNotFound extends InvalidArgumentException implements Throwable
{

}