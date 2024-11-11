<?php

namespace Tests;

use TRUF\Settings;
use Exception;

/**
 * Description of Config
 *
 * @author chelpanov
 */
class Config
{
    const SETTINGS_FILE_NAME = 'settings.ini';
    /**
     *
     * @var self
     */
    private static $instance;

    /**
     *
     * @var string
     */
    private $registry_path;

    /**
     *
     * @var array
     */
    private $paths;

    /**
     * Config constructor.
     * @throws Exception
     */
    private function __construct()
    {
        $path_to_file = __DIR__
            . DIRECTORY_SEPARATOR . static::SETTINGS_FILE_NAME;

        try {
            $settings = Settings::getSingleton($path_to_file);
            $this->readSettings($settings);
        } catch (Exception $ex) {
            echo 'Exception file: ' . $ex->getFile() . PHP_EOL;
            echo 'Exception code: ' . $ex->getCode() . PHP_EOL;
            echo 'Exception message: ' . $ex->getMessage() . PHP_EOL;
            exit;
        }
    }

    /**
     * @param Settings $settings
     */
    private function readSettings(Settings $settings)
    {
        if (is_array($settings->path))
        $this->registry_path = $settings->path["registry_root_path"];

        foreach ($settings->path as $name => $path)
        {
            if($name === "registry_root_path")
            {
                continue;
            }

            $this->paths[] = $path;
        }
    }

    public static function getInstance()
    {
        if (isset(self::$instance) === false) {
            self::$instance = new self();
        }

        return self::$instance;
    }

    /**
     * @return string
     */
    public function getRootPath()
    {
        return $this->registry_path;
    }

    /**
     * @return array
     */
    public function getPaths()
    {
        return $this->paths;
    }
}
