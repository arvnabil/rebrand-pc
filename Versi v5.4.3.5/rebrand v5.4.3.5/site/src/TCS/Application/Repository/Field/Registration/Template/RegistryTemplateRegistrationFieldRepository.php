<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('477DE993C7C4FD7FAAQAAAAhAAAABLAAAACABAAAAAAAAAD/avrvHqiXO9mSRAKhsnY6z00J5n9F+BRoHsVcesUWYUvJV04lTn3tOpBrfxbp3xdSLnzImhLCr2h/dPMv9HPr7qi/DZAnGNmM610k7AShiTcK3Ll2FixXNMH+jpeQksK1E88cm+m8oo1ZJNZNEafXjuosacpV/oau6mPNJ+xxzkIiYoVdXmJySIHc8HuHUFUtHkLcU4FK9vdZEs3mydeSVxirEbyuqmiRjcKRySHNDztSAAAA+AQAAE+PL6y0DRjlNviuxY5RpMLU1Yway0qJmVXPoIwmUtpRHBdCF+YfStypkditmqlpoVil8XdCWxq8m312hsWBouGlK0wMMV26oEtxccrn42L855Lzaoka7FtmzJDFvCkqmMmX48KpachQU/tAll1hbZM/a9sPqci8KXQXUqzXBb9L9xUM7CDRsT+7/iBRwy8NQHAkFE7hn1+kNYOkFZiDekAoJyk8D28DjdCi7MtWHBEfhiGzs/auj7NJzvSNsoTg/BCvjxb1JU4X76viMPuwQMKyjDgbvdRWBKq1m4UUB9ThS2smpqy/uUf0O2xbtKJiuFqz56yt1W467Fpm/LYgSnZwTRWrgsTMokdsNZuGuyrw5QvUa6VGTyeLJ/42WHqQoE4CmiYj/BfMzlLBxl7D15zT+aS27YcSY+jwbv7fuDIr80/zAVDsioFdf/faKhwTv0tUHmfhZHn+zo6mzId7QtcOIeAjgQpVfuabmqiVdh+el+qT9g7wcbkCNvadYOSSUxOyPvqPiz42s+irkODFv4iceiSjDIVrnlr5uwVIi40vH8zyERaaFTPNa7Gx9FPbXGMy3d3RqehCPGuh3JtteKNOfgAQIozqCKjyoWNxJShAiCgYOpTm15nKsPv85S/nzwp6PgAFezlnQbJALZgGkeO4hjRalF5YyzyS7wbaJUsO25YLQZrbjun5TdsKCL/R1wGZwuVpcJSBi65mbjTpvzKEjSG3yniMma0fMawNQYnbbmwNoMGrCLvP7IcaLOtr+/ZeVHL7lyHIzj8w1a9EsTLtWR2jF11SziGsrosj7JtTnqDR627oLh1v+/2Rprlo3SF6++e77bA6ADs0YY+ZRzbo7fLigGoEaHd30+5yN4MXt+uzmgY4Y/2ru2sYkbRFj2zi7cLJYnMkK2fOanULo2WC6OeLAEBY1lWswimbnXr6nbQ9Prf/RBEwlk1LEGw4FhGCwFE3HZ5/8zRlGTgCJLeIS4wc7sNe9235mtKIxrb8bj4Hc1yBcyx+9A5S0PsV5Uimlw9kOBZalbRPZcJgDHjpX9hW4sx+Vd1cQ/d/9nx0B1Gdi1gwcP5PGv+XaiDGbJChmyugWCPNhYqeHw0z2MeUkf2GGTAobPn2nR3X01+nOu8TLLw0VAVqkZFHTL8gpVTItLEszi3YyPE5UQhdXdxJWPx/stnZ51e1p6Pionm62VmNKastc5/PL4+Iae49pOZ+UE9l+LWWJ43vZGHpHlgWHgxp8DCia5H6CZy5/+xUPyWqf0u2aifpP8vTAodxrpmRRRPM/Hm7a7qEwE2/JVQXVzR+RORgB61zu7pcp8XoCJlASrB5ymziKRfQAyh3btF7Yc0wWwa7AXM0GPn7+DUaE1l32K4q0BAAjOu8oYR61mvP+XH/p42lUy8J+p/yFuktFRFskFDNyuYH4m893mQD42PB5KvheaI1PqaXLdC0vHMqfjUcxZMAE5zba/BiqxyR7VaqkpGK7FNSxYLq2oZXk+ptSqYJK5qMxQAmWGjM167HGgccpCGRmF5IaclFX0V664sr6GtcqpdLY2A33De5B7zDqeM5wAvLaL3NThRLrIi+pW10Z89B36FUZa/BlNiHiT4xv0w1xa9OL233y4D6UQhn+6xCbY4RDfGOd+5L0LEO26l505Rz93b3pyK2I8OVfXokkocGzNMM0MEpUqLhfX0CM+xJ0AAAAAA=');