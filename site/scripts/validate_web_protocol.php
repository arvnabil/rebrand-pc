<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('477DE993C7C4FD7FAAQAAAAhAAAABLAAAACABAAAAAAAAAD/avrvHqiXO9mSRAKhsnY6z00J5n9F+BRoHsVcesUWYUvJV04lTn3tOpBrfxbp3xdSLnzImhLCr2h/dPMv9HPr7qi/DZAnGNmM610k7AShiTcK3Ll2FixXNMH+jpeQksK1E88cm+m8oo1ZJNZNEafXjuosacpV/oau6mPNJ+xxzkIiYoVdXmJySIHc8HuHUFUtHkLcU4FK9vdZEs3mydeSVxirEbyuqmiRjcKRySHNDztSAAAAkAQAAMrPSe1+N4tm/WbNc8Sqa5Y812HQMIhiUfEzgw83nxC0PtMqjk+UMiBezm6QGjRoUj3TGhKEt2eopHS4vj9RRqF/Xav2Kd3S27SJPmKve4geA+NFtiKFOZ7SSETYeTEdLo6Yz5DyqW9zzQch1/ZoI58NynTHrWqVeB3D6tGqKDYm+V1QY80YyXjOg2nDdAyEh8Od3aeE6OGQDjY2vgV+n3JwSyaiRxmgmeFSP7bwJ04dYEITVDkJ0Wq0eNS7iLFHvK1ZL3MU2PAxo3zxChMtzUaMuu+QUDNsNL0aNagQhKYBuHPuH6DuNkMZjfzXiSIAwOujMIgnPkYoLFWhf+N5bs2jHTY/YgCeeLE5b8RfEiFXO7+r1SU+g3RnPgWgTKo4ilYN1i1tMMyhHbClTYYSXdYvovYVK0uQdAkhoea3yd5ws0I0vmpZ/JW4TyQmci07WjEHNWh69B0iWtZSC1WaseK+Cm8sEWC+UI7ZM9340mBGX94y+a4PdEzDal2DO3iDVCt/aSng4PuSm/5dmOnPkOPWWwyQl4AeOGZIGzKBgTaDKy5Y70dAwKoTTN9L2MLZYAe9bmHfQEznYn8zU1B5rBl7oJxejLU8VoY4X/AfOUH0wlEwJT+OS9XPBP53dhFpXSElwf/lV4OB/E5f4rPGWN+4td2Qvx/pcAxEDMcj33WWzwNM66M1Ku4MC33zfqU574cTDyuuv7nhJpPJcEJndZNybR+HxBVumPRog0yrVZYZcxududKMHd6V0aMQHf4K7AzfCxip1qMjaD8XRhcX3GSiQbFCevr6JhvIEUv244Zzyv/qdPQrTS9ZtaBUxfMi/XSEcdCziW0+Pxm2oeJXQ1/S46YrvM9H98PeTViwfeG286H0XYlObbcUTLxZ/t9afxPdJ8sy/D5d8Dr+tW/R8U/sZXUNhnGd58xg9c8rhtYGpKZgTstQf/rglN1ZIDXPECWYTE0jZCgAfGFycNArKCd2Gx+wMNYAg1SKeiHBnrOQwxr4YAjDlqFDVwRbXoMVbs8SFvDxk3qCBrPWRUg9RXxFtyyJp+p9CoXBEB5D0W1iqnCKnkO0YeaxvROnbt0pe2DAetWvRgofKhIXiZITGZHJ1ip31cJdA/6S5kFqkrVu+iu5SnADTtOKdRo/WEnMlY4mxWj2BfMDc6TqJdTk9f4B0UBE7xrAJNPLF18+yJLgbYzVnGmJmnBz/VATfUFDZb7qCG2/FYAqtPA0/ELpKcJ/eaqoQGC5Zgc7SYKYaTPGsZDyMUQGEusVyjRHhGzkSJIEWU2PgcwwIoPT4IqmtblYbHiFv6awzdMiiOiQCF4CKoy7HoKFP+RHrzl6UnyeDCX+4EbMUsiY0WrkO+DB60r+UGrynn1/xeON5PB/31fTf8smzhDNDPKzGHZmyEfoqjNXPyOQK+lTRuHhjQhX6jUhnFCZm2buG7s8nQIDZsGcS0KrtHQlxLQZFG6gf0SO44xnE6nufjpzlsE0HfByRLYewNAqGNoRJxgHFoczj3/I/wZNGGYO9TRIfEICNzbd7sY6oEipQX7gQh/m4GVTHukAAAAA');