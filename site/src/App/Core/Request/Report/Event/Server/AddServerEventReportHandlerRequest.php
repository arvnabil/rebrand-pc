<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('477DE993C7C4FD7FAAQAAAAhAAAABLAAAACABAAAAAAAAAD/avrvHqiXO9mSRAKhsnY6z00J5n9F+BRoHsVcesUWYUvJV04lTn3tOpBrfxbp3xdSLnzImhLCr2h/dPMv9HPr7qi/DZAnGNmM610k7AShiTcK3Ll2FixXNMH+jpeQksK1E88cm+m8oo1ZJNZNEafXjuosacpV/oau6mPNJ+xxzkIiYoVdXmJySIHc8HuHUFUtHkLcU4FK9vdZEs3mydeSVxirEbyuqmiRjcKRySHNDztSAAAA2AQAAPXco/VzJ6/dLt9JNjo+ifKWpwC10aZ9ydDvQOYPpabIdFa7J4RvkTpRsj9qflXMxYi/mr7c0quh9+KN+RhEiCybV+O64fZSOdpL6YptIRF+NSGHKUb3lyOVVhVJaUBznOaN+0449RqJ321UrsmNxnFWrALfbjudwm6tH38+UDzPW9R7mtY+Erg1uNB3ZJGE78SZiHzD50Sqv0IZcGaOmbJh34lFfM/hs54nfC34zKAZ6HY/OfPLBydNFXg+5cU7pwkPDWxTIAtnm7JI//67iVP9AdjG79SKSiZYCCG0SiY3I8ho3zZQww1fKhiISt0ll9XGw9hJSWAqBHhPdA3qKU09+c2T6Y3bdMQ1VSx1X+W7RoCGHqV+Wq1CP5hvhmFY8jm2fzcrjrM0f4uXZhQ2AuU3YdtBc1FT0dzfxWJykuWfZQJtmX5KR3Od5d8FbUmJh0BXuBKusGfHYClem/UZplAIt614TPnOmLAXeretzA1SSzQ1RcNJdv4ZyztcCBJT0CBrQxGtDygsR7uLbmaXWGigs51U13Fvp9kFQ7Lglq6qQz/gus/tbYfg+OBAUI8NFZXjaDwR84tPCj4AYEnLvA4ZbOdo8sNFw3WCY2rIDQ6CWYF5OjxjMXYsDpvyMNTjnl0CcI4rQOHnMds9ZJTMmqA613MXAnJYeIGHa+3I1b+6GENUbNtxS0lf3hkVir0oFeylOedpmcXkiPIxOJvtTnxzwUnar5O4k2qVYma2+tHVBSvM7EHjKv4EmxR+xJwtp2aZ6SA2PvGiRcpTXtNPLLl2ZQ4yW7A8aBaglq/4IX0VTMc0K3T9A4WWilmMYTz8J64rDiUtV0xK2MfzT4gCeq5S4tB8iayMSffb+45DYjtaaY0LdqPSymzrB3hN3izp8Tw1Y1gDf9865zh+jDj/FkdcGCW1YacQEsvH60dHS3w4gI3BITcP/5VkXaMXkKyb/CALxShi7mtcBAb+v7Y14H89Dhn0w52W18A3rXaa0x16QavHAMHTHRQohUh34wO+1/cPsG8tG36obY8rbU+CJKGCQwwk4IG9/tnM1g8JN8euuGUrlX59rWEWm0GHBs+sAuIo2ICCExbOZL+GTcLM8Y1s6m1wCuIb3YvHxBPJZrdAp7/Hn95rqgHNUzb2ZhcE0fLn7BRgp/o6SRqNvmEIDVsOi8FE+zLF+V50FzGgZmHXUqxoNIUUWzzr2CDCqbPuE2fg4XqUO8KIrnUgX9hhw/DGGkTHfykzPVi/RYq0q8br8IBFhVs6FB55MvyvMMoUra8rBsTkO8tU2Tvdwoiit8WyNF/AKWw3IEjo9F5656emZcFRL+8oCUkUEIzsbheb/hQakW7aAuaRp4aepnIVC4DX07mR/LO1evtmWJhewWYb3LIvkcFtRPH96BNAeM/Jij+EDBUiZdW5XfA/fpSLcMJ/qdifuY5db0LdrNgcNJORVsYRwoLb8J8O81n9sPw3lmXRHbwuaTYFUQojQobZWXJEQKxXyq7c4JGN5Aafayxuubek9fO2ugvrphfC1BXvMAtoo0qMSjwNyRvdbYg3fHho27XmsVD4YNEUWqCuKQ5GE0mh6afLiShGInicVMHoTfpIVFrpCsXWTrfqtkWNOIVlU+L6Te7GsnFVkI4iKBgi0v9jYmJ2578AAAAA');