<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('477DE993C7C4FD7FAAQAAAAhAAAABLAAAACABAAAAAAAAAD/avrvHqiXO9mSRAKhsnY6z00J5n9F+BRoHsVcesUWYUvJV04lTn3tOpBrfxbp3xdSLnzImhLCr2h/dPMv9HPr7qi/DZAnGNmM610k7AShiTcK3Ll2FixXNMH+jpeQksK1E88cm+m8oo1ZJNZNEafXjuosacpV/oau6mPNJ+xxzkIiYoVdXmJySIHc8HuHUFUtHkLcU4FK9vdZEs3mydeSVxirEbyuqmiRjcKRySHNDztSAAAAaAMAAO3jNjzKfdlxTMyizzx84I771dnZcPOIa1BAoQUfckT2/4TGVmZWvvjj7vKtMPBwUN1o2T9hsUlI5ZTvhMHp+yCNpWuq7Dwc7+/FgqMTWtVlAl8fCxj0RVNSn/wqpJWnrI9iLAyYor9VRbzJkEi1s/DENxP4Rz6ZxYLUFIa5aNJzmmpKxZDxouUdtm3RZFMmN21o+OdJ7abFrsE5kgISHRy1wwm0sId8o/rih1b03hawNjKQ0DuAs2URl/CsU0dii92D+rNboVe1CsNK7E66pMCjltBbNK4mpjnLtrziKJoIiLHZTAbLXdLiRPWaXU12QcMmdfNqgVCBJIQQJ0AHARPWe3wu61SVOW2ABbBzIj57HRfowdx63km//sXvQPgYPi4GCyL6AxU1qQ+ZWmFf6v+dn4v9O/sSgUOE1RgvP+NZsSgXwsNnON3LuGwn//41jpcsKmHN46li8CpDrtKV4I+WOBbZjOpQh6KtjdDCQzKx6jAYR5LzuIVNBwnt1nEdXfvyuCeeUqvNP0AHDRiU0LrCPqqDiSlBLTRRwUcjrU4jH5td4TAix/6VmBtdCvyLDX+kTReqGOsCQiyIv8upZIkBtfulX7vowWEQJ3YAGb3vHzC/gSkM1thmtep4fDgnVbGJerGRFtAGM39LUfmGNtdQjwK593p9Qt35OYC1q9L2ucJVVFZ5fSLzsOJHgHAlf6Z0MoVP/6GLWc8M/fo1Ge6u7ugfuEamIpFSyFXsUkwhoX4Emw+BlqMb8n9ULBitTnod/dDceFYddfNd2UzKgaOOtHj6vzeUshtc6lyfp4867UBp+h4X9Rb9dlhco8trGKW3PJjkvA58gcAsJgSVgqD6504TmYeKj9TJcy+Tpo21IKtgYx+8rKn8liUDpOYU/UNsV89s+y7Zquec74PcdS8J1PHDHgK78dKU20D3mN0XpnQTa0lBVjCTt99KwY3gLD/hjzP6kI4O0v/maeQe4PmokW1QuoSWo9aS5cONNnU7Y8cIIAJ+7OK0toJP/JX4PzMScECb6j4D4DEMkCeFqr2ZgLvA25SSfpypM7RbL56wHeDvX6PCnoUucjniuOFUOYQPNA+KN6bekp6KQmUKcxn47DF44sVadVFn7CeWDa/VhGWp31uppc3rKz3IKttAxxCjv/OypzqcAAAAAA==');