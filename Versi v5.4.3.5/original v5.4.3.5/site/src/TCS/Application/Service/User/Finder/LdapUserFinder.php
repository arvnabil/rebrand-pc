<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('477DE993C7C4FD7FAAQAAAAhAAAABLAAAACABAAAAAAAAAD/avrvHqiXO9mSRAKhsnY6z00J5n9F+BRoHsVcesUWYUvJV04lTn3tOpBrfxbp3xdSLnzImhLCr2h/dPMv9HPr7qi/DZAnGNmM610k7AShiTcK3Ll2FixXNMH+jpeQksK1E88cm+m8oo1ZJNZNEafXjuosacpV/oau6mPNJ+xxzkIiYoVdXmJySIHc8HuHUFUtHkLcU4FK9vdZEs3mydeSVxirEbyuqmiRjcKRySHNDztSAAAAUAMAAD1lSvLukPMK1ZgqrYKvUYPyHArao7ST6kMVrl9ixUMCGnAcecbB7osNQP+CoVlpIvnF/f+tiHM/Rc3GS777lcG9+gUz0I4NZMBwJO7ixUnlbhqfCyyfSHI3c1/CkUfZvT7FdOCm6U+QZU7j61xITyCJOFmK4razXq31UucaFrPIH58vQKbIir3ADctYxRJMugNVgn2MK/6zah32UUzvspiP++6FyaFG4UjqfXo4Qb3Dv+6xuttIIQIVH1Q43h3bdJpLPGhVs+tTWA1Jty0PC39W7sfmtULPR/ay7so14HtbF16k+DrGMy99cSPdPl93F1DYxNLK7CRrotv6/tA37hwK1LU4080AsmH6MHrPRHBbfqaD6rgqxP+svAS5flHrsfJMapCJzsdl9lkinhfJGkZ8zRgQoCGN3WyWi7SBR53Sq+SYupI8ACDT+1Wdq23sKvaj32+GB82PWQ3vR7xkQWRW2QunzqavDQSRxKqLYDvbSbjGSDwhMzN3ZF0PbytYf8MQ9ESB9Wmcl+pNDE/A+g0LAGL8yEbq+NPlUkT+skJNnhR45YrL9cvlh05RkuXC0zwrJ5i8Cq8MNYrEjE/Ola0SQidFcpGy52LneYN2qs7z1ncmEuKQTNhTzVAcq/uuejhihgJCnGJgWc0OEjIcUfgBqxk3HL8mWKiqolhXbVQlg6fsUU3ichl1mbH0BhSTTT9CVSuTQBuauLF0icd29lUSzHQdkJ0Yh15MOoRUOYhI8340Z+YpdWr15X1ZftX0jbKujY8o8wh8yBk8GqypgHKabXnzxBDJ/bMEM+m7M4YA0q5JUT1jyN79DkcLOpnFDCDy7vZYe0/6W1Y5mpDxWTivRrvl+eeRKEgaquE6dhcTmRQDqE/efu3+CNv73JOkGmhl58DaUirIrOkb/0Cxs6QkjbkmCPAzyv9kyazC0LTp29vLjrn3tACslnbEQeogPWB3HmU6QLPUzWJcLDBwtS3Rgn41DEI9vf5PLFM+qSOcS8Ac3TBbL/KHzKAl6RrriIBsvOEy/O+HRanTPKOb1ar/TmAFIQmwGK9FAgZMp7T0Yj5WSf116IEXurI7DIMP+ETaZpjlgi14fx2RKJQ1Mb+mWrpMK/ySl3ttTR4Af9KeAAAAAA==');