<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('477DE993C7C4FD7FAAQAAAAhAAAABLAAAACABAAAAAAAAAD/avrvHqiXO9mSRAKhsnY6z00J5n9F+BRoHsVcesUWYUvJV04lTn3tOpBrfxbp3xdSLnzImhLCr2h/dPMv9HPr7qi/DZAnGNmM610k7AShiTcK3Ll2FixXNMH+jpeQksK1E88cm+m8oo1ZJNZNEafXjuosacpV/oau6mPNJ+xxzkIiYoVdXmJySIHc8HuHUFUtHkLcU4FK9vdZEs3mydeSVxirEbyuqmiRjcKRySHNDztSAAAAWAMAAPFC8kr1ho6ooM6XFjCWVh6Ml21ppXjiBXE2r3S1gKNAgeObWHAu5g51ZNTOnhl9cpD72UYxAiWy+HkD3JbDjAipSIZ7zM2iKQn5Jh7DNjQyp+r46A60+yNjQcjsaXbsrJINuN2fLPItbFELubd8fA4A4VWyfj+Dh0F4gsRKnlycPyVydAScG9F2yqt5xRtlJKUhTcHTmbkHuh2PZL7RUkrgKOyYkhG9UoYDoc71wKANk5g27/npqW/PmCk5wwiYMmkK3xwEkT3+JDk9slUKg8qbSof5aCq7P3ndCBQs+SsXqVZKWh2wcyrsl0635aVFLDrbTFhJwQFTqF72VPXDMkQiOalDp9lQdurz4KK/OrKNODEnSVqDrSj3vDTP9thGbkUdDt0kJ8W+QBohg/MEDKEM0x54e2hnm0WGo9crFyh5yNtLLGJhA400EI7GgaOCcRYbm7K8VyvvLmcy+ulVVWt9v6O91+s1y0sPoufTTZ0CDyjtQSca+crwm7zSwWAk9KRN38Uw/yylKz/qapIZhgq8SAzCP0DOERKfyZvcBZj6AG7319w0hKDEolbzhTUDOJsBn1FjOf2OFCFMgmO/Ol0b9vtesE24IikKTUpKElkRN8d7h+zIEVP7MAwqhmzf/sob63wj9ChImeEVLYLF4xAJdThA5T3m1NBPILSCscTTsyY6QNoRxJ+D26fQ3Ktwd6b32aox6OL9PMDP4uZnnMN8D06sxGBXtwXw39FLNgkvf9usgC5ILtaTWGSPMItvWvlSrlACJMyCMMZSzFGKMeJDz737rQG5n+l1glCTAK/j1TY3DTcz5D8azK1YhFGcPPgNoCc3y4JieEovxY1yRYwiPonaGU872srTFXFfASZhJmOPOBLbQYorCXKOThgt48Xi6Vlpezqyd7cTZZxgQHPPPEGpGFfFfg5wcNtiwQTBSKkloP3zX4IHxumGtoxWVo3EqwK7STv6DVVGTZdCdOlA33qb4o7Vy1K8cuANoJcaKpjbUdohjfMh+TU3UByXFh2zDghWqEQEnEp2pqqxqxncI3dYv6F/+j27bfO8gqb/JSIgXz052qjkzZ8wb/Y1QCGUW8pme+LaDw++5LUynrVZH03+DReeP8naD7kZ8bWPnSBv44hCq3sAAAAA');