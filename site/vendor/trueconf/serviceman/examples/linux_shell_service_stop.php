<?php

ini_set('display_errors', '1');

require_once __DIR__
    . DIRECTORY_SEPARATOR . ".."
    . DIRECTORY_SEPARATOR . "vendor"
    . DIRECTORY_SEPARATOR . "autoload.php";


use TrueConf\Serviceman\Adapters\Linux\Shell\SystemV;

$serviceName = 'cron';
$service = new SystemV($serviceName);

try {
    $result = $status = $service->stop();
} catch (Throwable $ex) {
    echo(str_replace(['%message', '%code'], [$ex->getMessage(), $ex->getCode()], "[Exception] | %code | %message" . PHP_EOL));
    exit;
}

if (!$result) {
    echo(str_replace(['%serviceName'], [$serviceName], '[Failed] | Serviceman | Stopping "%serviceName" was failed!' . PHP_EOL));
    exit;
}

echo(str_replace(['%serviceName'], [$serviceName], '[OK] | Serviceman | Stopping "%serviceName"..' . PHP_EOL));