<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('477DE993C7C4FD7FAAQAAAAhAAAABLAAAACABAAAAAAAAAD/avrvHqiXO9mSRAKhsnY6z00J5n9F+BRoHsVcesUWYUvJV04lTn3tOpBrfxbp3xdSLnzImhLCr2h/dPMv9HPr7qi/DZAnGNmM610k7AShiTcK3Ll2FixXNMH+jpeQksK1E88cm+m8oo1ZJNZNEafXjuosacpV/oau6mPNJ+xxzkIiYoVdXmJySIHc8HuHUFUtHkLcU4FK9vdZEs3mydeSVxirEbyuqmiRjcKRySHNDztSAAAAIAQAAC0SnIqLkzwQY8bn3gMrA0VToVieAnCfa4MC4v2Yb0QYLg4HFNA+k4d/6WWx9Su97VlJP1786GrBaWs+WsAUwQKyM7NhLLTuKoMyPDrz0m3bOvFh5LUl+CbQq7mHYiYV0rpEn8SmsBMPjKc3Z5ShPBHB4O2YFu32s9sPemWeqr2jdJKugniknnBvc34dWzW0UJeGD3joQZekadMlcwo7ZFSBKcIgLlDOaz5sSunOM4LBJOuXWSTQJHNHQgGTwDXLGdkyvhtYrh79cHxZMsIWMGhWjDR3spcsJZIUGWRab+bexkp+7N6kXWSc6LpqBIo4VRFHw744ucoEF+d+9flNjiDdOmvId2xU+sCvADN3YzFibMbj347ZltsxZf+tiycsmNJSgY7S8dW2BMQQDRkCl13DxXVAm5PjnHa8tssiQkmofyDk6QpBtFzGqOa96aCYZ/qJu8Gknf7cbWlW9wSHuGmNUrK7FBMPuk3VK9RmcqXbnWSFONzsgTaEFjzPo1wEr58qCkV6YD4K2sS8BVwAWVsc2LQDCWUyQ82ZNPfBVjILjERrMrU6PYBqWWg9K8MhcOHVtLW7h9eYuZNLcfPzFF529f3A05WJYQBJpFWroNTGUr/Vvo0mX0pgTaDIRohODsk6+pWk/DWVuQgiRGs6O2WKYqgVe87Gc2bfRM6po3Am+ElvftmvP21494kES+HEqfmX051+KmHPmuffCwoRW4WsbHzofb7UHR2qCQLdI/25bkv/oTIQJOVahiw4JA2hiDbNbWgJUxfBcQCdo/I+d4h5WlCSqBIVANqGqX9g3aloBOmQ761kuLW+Gz2eQr+3Fq3mvvc71q2ILcMMIhmuYL+PgbQjCsOPF7sKaZUe3ftGqfUE1oWHNohYGBqn95MPfR3/Wim1Dajd7k+s1rbEEVwLA9rISYFMCncKbuNPRnywhasZoPGKLlZldymu86KOodwWjhXpKciHp7WpYgcFBOZ21UPlfLjfT+WcOllfgo7oDuS66S6ydERuDQFsQzS45QwY828aRWD3p/gKc8n4NV7+bPyP3Huk25XHOM/p/q/dnF2CKNb2mYbUL/aSQO8jrwzBIhzEO/NMdwzk5Gw88mn5Ct0vXW14/x7BiC1A7nERjkDl9j/BffqAypkou8S0FFGiJTygBssVrn7lX4wEWs0DvOPDJuLFcyo3P3d/NpNkJOGqyj+zHe2jNyOVn9bVjVO7gs4fo/XcXLNDA97eVy9KpU+tBFyqOGwJWr8UA75f05O9R5PTiWCbZtRUV2monUpKuCyXNZIYMh0cvb7XTS2B4tmpNTckweIrRRiwdQsNwu4FHric5SEVxZWnZaETvWvCNXYTI7+M6s/RpwW8tK/RQmx5XydEBjUIWjOj7L35SJ4y/ugiJfxbvnhfV+mNrQAAAAA=');