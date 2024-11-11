<?php

/**
 * Description of TRUF_ConfigReader
 *
 * @package TRUF
 * @author Adrey Kravchenko
 */

namespace TRUF;

class ConfigReader {

    protected $path_parts;
    protected $path;

    public function __construct($path) {
        $this->path = $path;
        $this->path_parts = pathinfo($path);
    }

    public function read() {
        $out = array();

        if (is_dir($this->path)) {
            $file_list = scandir($this->path);
            foreach ($file_list as $file_name) {
                if ($file_name === '.' || $file_name === '..' || !preg_match('/\.ini$/', $file_name))
                    continue;
                $pinfo = pathinfo($file_name);
                $out[$pinfo['filename']] = parse_ini_file($this->path_parts['dirname'] . '/' . $this->path_parts['basename'] . '/' . $file_name, true);
            }
        }elseif (in_array($this->path_parts['filename'], array('', '*')) && isset($this->path_parts['extension'])) {
            $file_list = scandir($this->path_parts['dirname']);
            foreach ($file_list as $file_name) {
                $pinfo = pathinfo($file_name);
                if ($pinfo['extension'] === $this->path_parts['extension'])
                    $out[$pinfo['filename']] = parse_ini_file($this->path_parts['dirname'] . '/' . $file_name, true);
            }
        }elseif (file_exists($this->path))
            $out[$this->path_parts['filename']] = parse_ini_file($this->path, TRUE);
        else {
            throw new \Exception('Path to settings files is not found');
            $out = array();
        }


        return $out;
    }

}
