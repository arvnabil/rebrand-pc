<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('477DE993C7C4FD7FAAQAAAAhAAAABLAAAACABAAAAAAAAAD/avrvHqiXO9mSRAKhsnY6z00J5n9F+BRoHsVcesUWYUvJV04lTn3tOpBrfxbp3xdSLnzImhLCr2h/dPMv9HPr7qi/DZAnGNmM610k7AShiTcK3Ll2FixXNMH+jpeQksK1E88cm+m8oo1ZJNZNEafXjuosacpV/oau6mPNJ+xxzkIiYoVdXmJySIHc8HuHUFUtHkLcU4FK9vdZEs3mydeSVxirEbyuqmiRjcKRySHNDztSAAAAiAQAAKHq2uRec3eON6r+/tb50N+PstU26xXSXW3LQojbIFJSm4bUx+HFoz+n4F7vOVPpoZN/2Shqs5pCU93PpKwifw8qzh6QZsbmxpS+TSPo87+B9KbqkXN1kcpt8BUPiTZ46Ab00bEK3SeU/YDBoD6NBLBxqJANlyzQsIM2w591uOyHyvD4a6TWDfSzTjYsnTqABLrXQ66maLa3ZkWse3EET7sJWw+N37E37OS8YA0mORLlicEfMUW3BKxAZIv2UtlIrGM/7ALuKDNXH3Nokomuz2zfMqWHyc3NrtBNXaFTLa4howADNRPgmAxmMZ8g+m/vx9RqBOE6oig64g/aU8aWYrgASDk9IouuW45gFdjVndfW6S3z4zEyO4lnYkR7e2yNhMTxYZGIYH+II5D/ye0bE2uMGRyqaUHZmWIVkSD7GdDjtYYdVnSRyCC5ncijESUiW6PrXLKDHvuiDnMd8yR0O0WnjihMFO+odJcJ/lJMizWnfViBLjv8fT3n9wX8SUP/XyZIbndbrCng+eIiZ/RLJlpyX67AKBIgiByNmFUZTQJ0gHPShWXsC2E57OvWod5hdjqg2M41hneQ4hA1yGi5AUA5OGo7iJqAiQpTXlr78a9bLSqUDVWln30bnRaLklP6JP2z5zTV01LegmYBycSMPmC7mymPMeBcHCX+ZqA/eJ9CLCM+AlkIWAI2rsOkgoQAOvY/VEG6fmVySLjnaOJhRNsVX9JJDwgYLdNbp+6hxeeyC60bDrMl1tt05PmbXULiAque17KLDXmI6zfuQ0MjHShMBJQB0DOXv36uO4w+wV6zLx7Ympz20MNpETor4/qf7uuzVdwTkwzteVq+BdMf9/xdsO0AOdyiSpSiOglsXP4SSiDyhbAC+1QKzD9s/GBoyZgNifbOc1mqNMtFOPTRD7QUVfpx5EXNzspUbbv5QV6oyhuZonWmwFK+G/N8QQOfJf+Wwx+8DmgjFIL2n/xtbqKBHeb0aaMycNr/Rr6VH+KFQNA2fn0H/wI6ex2/ABU9zClKu223zKlFdswS19LBLqnuoVq5APiLGiiufMh1qhMaALxajPkXwn2PjDAKZAxUzwI9Llt3jMs/+kjf36ktagEHOFNSNRwI2bnxn/Z905Cyvh7bn5Kd4olIWzuHB4ij4fsgAsddPvLLkeXiE/n/WY5GlIbWf16bruvaUP1ScsFZXSBJrzsSJ3gPyJJ5QF+3myjJNvVNf0rrOvOkDglnwbvVGnuzDmxJHyQIBf2CQLzM83F0y7pMcAeW+cCjs1+BM0iH4+WdaXZiJLNRatByfIte6UYKEt9MAWAqQoE98i7lorLz7mYHF3q+xC0ewk94d9DFQVrb5zG85muFxzBwJDAEQ6yMh1Led+GpyRaANTDAy8DdUYowYxT3Lm/uMhWejJ275EjAeCTEJDwfQstdnLBRVrl3wLYl/7DqGFvgYf9Wl2OAGCM3DwvexyWFYYkqsDFJb0wXdZ+BBewybhQrTjSyWK2A2qZECFDyGIH32Gj/ruqYTj2c8qop8G6kmzfIuiNkjtABwDW8AAAAAA==');