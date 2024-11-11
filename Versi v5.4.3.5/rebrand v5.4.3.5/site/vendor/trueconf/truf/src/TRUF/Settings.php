<?php

namespace TRUF;

class Settings extends \TRUF\ConfigReader {

    const SET_ENV_CONFIG = 'CONFIG_NAME';
    const DEFAULT_CONFIG = 'dev';

    protected $settings = array();
    protected $settings_list = array();
    protected $current_config = '';
    private static $instance = null;

    /**
     * 
     * @return \TRUF\Settings
     */
    public static function getSingleton($path_to_file = '') {
        if (is_null(self::$instance))
            self::$instance = new self($path_to_file);

        return self::$instance;
    }

    /**
     *
     * @param string $path_to_file  File path or Dir path
     * @throws \Exception
     */
    public function __construct($path_to_file) {
        if (!file_exists($path_to_file))
            throw new \Exception('Wrong path to configuration file');

        $parts = pathinfo($path_to_file);
        parent::__construct(is_dir($path_to_file) ? $path_to_file : $parts['dirname']);

        $this->settings_list = $this->read();
        $this->gatherConfig();
        if (isset($this->settings_list[$parts['filename']]))
            $this->current_config = $parts['filename'];
        else if (isset($_SERVER[self::SET_ENV_CONFIG]) && isset($this->settings_list[$_SERVER[self::SET_ENV_CONFIG]]))
            $this->current_config = $_SERVER[self::SET_ENV_CONFIG];
        else if (isset($this->settings_list[self::DEFAULT_CONFIG]))
            $this->current_config = self::DEFAULT_CONFIG;
        else
            throw new \Exception('Unknown settings file', 101);

        $this->settings = $this->settings_list[$this->current_config];
    }

    public function __get($name) {
        return isset($this->settings[$name]) ? $this->settings[$name] : null;
    }

    public function all() {
        return $this->settings_list;
    }

    public function debug() {
        var_dump($this->settings);
    }

    private function gatherConfig() {
        foreach ($this->settings_list as $conf => $item) {
            $result = $this->getConfigTree($conf);
            $prop_list = array();
            foreach (explode("/", $result) as $item) {
                if (isset($this->settings_list[$item])) {
                    foreach ($this->settings_list[$item] as $key => $value) {
                        $prop_list[$key] = $value;
                    }
                }
            }
            $this->settings_list[$conf] = $prop_list;
        }
    }

    private function getConfigTree($file_name, $tree_str = null) {
        if (isset($this->settings_list[$file_name]['base_config']))
            $tree_str .= $this->getConfigTree($this->settings_list[$file_name]['base_config'], $tree_str) . '/' . $file_name;
        else
            $tree_str = $file_name;

        return $tree_str;
    }

    public function isDebug() {
        return isset($this->debug['enable']) && $this->debug['enable'];
    }

}
