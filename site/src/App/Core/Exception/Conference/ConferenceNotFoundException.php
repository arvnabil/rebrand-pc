<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('477DE993C7C4FD7FAAQAAAAhAAAABLAAAACABAAAAAAAAAD/avrvHqiXO9mSRAKhsnY6z00J5n9F+BRoHsVcesUWYUvJV04lTn3tOpBrfxbp3xdSLnzImhLCr2h/dPMv9HPr7qi/DZAnGNmM610k7AShiTcK3Ll2FixXNMH+jpeQksK1E88cm+m8oo1ZJNZNEafXjuosacpV/oau6mPNJ+xxzkIiYoVdXmJySIHc8HuHUFUtHkLcU4FK9vdZEs3mydeSVxirEbyuqmiRjcKRySHNDztSAAAA0AMAABCFFgKOUja0z5z5LY8kCyGZKUWVgRoLru7dqzv23m9Sv/0PTowoKE91JoFsXuRx3GMjurfaDaz604VlDbrp1+zAde2IEOYDxz5lMPiRUng7urjrSKPkoPWi2aHPorc4goQ8bE91V9VzNS7IOMMnVHgQvpaKEm1xoSNwkDCjbmHUEr8JrxeqGB+2nK9Csg90TN+kKen5y1O97/jsnfgKGgtVGV1k88nVIt/lStNIUJV7QHjS4YZxmczM9JFFXqF4CQk07fPYEhoNtfln9Ig8HyLRE7Xd0j9rpFDJqfjAUOUeFg+zb3NfRA0+bJFbleRIeFRstb6ip0h7L2xWBWOOhL4DvVdY6cgn/q61GPhrtUnHOqD0wAmcM5mBu98PJFv7lK9CmStsFwYz40s+7DqxX5b2YMllw+MbPvrav0fBYrzZxQ8sJwXdPjC/XrBeH13D5icGRPTYInQjSQkD/nibSHOwAGDiQY6t0DTHd+xMlAGuej4Xi3bkrCrCOeY/u+TIaNYHitXTwXRKD81zFauDwQOAvr3KWT3pICO/DXNj/ntU18VVsXnM818PWem2NHzmfwEMsMizESc0lkZLSoBfn0s1QekWeo9kASWw8nCkuvy09jR+48zcThxrA8KSPPxgAgWsqd1PGqbO4YyBqFfyX8+JUzlrOTysxXi0X63qrWB4gAGNkqioC8YSigWV2M2NPx4vJI1EUfS9d+e7S9RyFxJc9dhGA3/VK//1XSc7vG7XRx+hrcThZtNu25wcv3xaoFex/4IucULp3c5FT+XHPPqB8yz0husiZjVp4K0hNBo+2iVpoV5SNuujbc9vzLnOgRTtbXws6HvBMO5KXxeKRNSqE0g5Lk87RG0nPlzG6r8zOCcyxkOoOFKdQf2O2V9chPXMFhcDgtuXiA3Fe+AyPBcgIJjPIkcokQH5i36VQ6BGiSH+rFG7MawREV/KO1fgxSHxJtlAtTDuwNTo28UfCXFzXzWCNBwUDEWMS4Gn0Z0n5cvwtotHSiW8ztNoWp14R//3BRuI6xD+/g+j/uni11f72Vgdswu8eIFW9bDGHy27gb9WGD9zwDyIDy2py33g0vAX5Vj9TyGjqSW0F2D4qUuhvM70SvR40Qtm3BfRG/ECjaEraZjSzQg1+uprjNlUBAQKSCpPE4R7Z43IM0l0d3AMDkxH+iU92nMPpKzUFzgmyJ0gBWUrDenUGqUhxs0H8NWQer65/g5xPAlEBsZWSGwmhZhN6VvcYP5PQBNOyc7odraHFHWNTy5U5YMUEk1XArMW6wv+FND6+vy5C8UY2KUAAAAA');