<?php

/**
 * Description of TRUF_Ext_Autoloader
 *
 * @package TRUF
 * @author Adrey Kravchenko
 */
namespace TRUF\Ext;

class Autoloader {
    
    static public function register()
    {
        ini_set('unserialize_callback_func', 'spl_autoload_call');
        spl_autoload_register(array(new self, 'autoload'));
    }

    /**
     * Handles autoloading of classes.
     *
     * @param  string  $class  A class name.
     *
     * @return boolean Returns true if the class has been loaded
     */
    static public function autoload($class)
    {
        if (0 !== strpos($class, 'TRUF\Ext')) {
            return;
        }

        if (file_exists($file = __DIR__.'/../'.str_replace(array('\\', "\0"), array('/', ''), $class).'.php')) {
            require $file;
        }
    }
}
