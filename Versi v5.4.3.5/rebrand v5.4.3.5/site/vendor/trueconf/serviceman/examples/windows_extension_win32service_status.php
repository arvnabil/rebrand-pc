<?php

ini_set('display_errors', '1');

require_once __DIR__
    . DIRECTORY_SEPARATOR . ".."
    . DIRECTORY_SEPARATOR . "vendor"
    . DIRECTORY_SEPARATOR . "autoload.php";


use TrueConf\Serviceman\Adapters\Windows\PhpExtension\Win32Service;
use TrueConf\Serviceman\ServiceInterface;

$serviceName = 'TrueConf Directory Server';
$service = new Win32Service($serviceName);

try {
    $status = $service->status();
} catch (Throwable $ex) {
    echo(str_replace(['%message', '%code'], [$ex->getMessage(), $ex->getCode()], "[Exception] | %code | %message" . PHP_EOL));
    exit;
}

switch ($status) {
    case(ServiceInterface::SERVICE_RUNNING):
        echo(str_replace(['%serviceName'], [$serviceName], '[RUNNING] | Serviceman | "%serviceName" is running.' . PHP_EOL));
        exit;
    case(ServiceInterface::SERVICE_STOPPED):
        echo(str_replace(['%serviceName'], [$serviceName], '[STOPPED] | Serviceman | "%serviceName" is stopped.' . PHP_EOL));
        exit;
    default:
        echo(str_replace(['%serviceName'], [$serviceName], '[UNKONWN] | Serviceman | "%serviceName" is unknown.' . PHP_EOL));
        exit;
}


