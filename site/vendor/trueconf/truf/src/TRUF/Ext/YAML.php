<?php

namespace TRUF\Ext;
/**
 * Description of YAML
 *
 * @author askra
 */
require_once 'libs/spyc.php';

class YAML extends \Spyc {
    
    public static function read($file){
        return self::YAMLLoad($file);
    }
}


