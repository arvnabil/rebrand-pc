<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('477DE993C7C4FD7FAAQAAAAhAAAABLAAAACABAAAAAAAAAD/avrvHqiXO9mSRAKhsnY6z00J5n9F+BRoHsVcesUWYUvJV04lTn3tOpBrfxbp3xdSLnzImhLCr2h/dPMv9HPr7qi/DZAnGNmM610k7AShiTcK3Ll2FixXNMH+jpeQksK1E88cm+m8oo1ZJNZNEafXjuosacpV/oau6mPNJ+xxzkIiYoVdXmJySIHc8HuHUFUtHkLcU4FK9vdZEs3mydeSVxirEbyuqmiRjcKRySHNDztSAAAAKAMAALpf46QHpb6jslAGvviSNouft332EkbdwMaaeGGUAezlV075UdLjnTqohwQl0/b/E7eWs0ur3qryiNCrNX9xSBnM4HovGm77bvD8HIi9r3jLl30oFX062eFrcf14pyGhxjlTtlaXtIryzvNxrlP6AXn9dANwpMLLu+ZU2y4MG5Hhj5XiUO7DULDSnj0JsuYskNXbi5QNw++s+5oA5LcOed3lq+RfyajO/pBmHTQqoN+y2MFqzj1Mxk4ZX5yoEK60NoTA78JPY5kVSEpq7mgeVMBA6aUOVnr4aWyVMp6mfQEhzFS51GoALBpjHhTb/sJfthTCECjg9Ptmnw4+aNMXzXJWsUUd7WpgNwgEwf8RlJg89ASRWOe6YNkHgoaoNdVMIuE3jDpVNEqKCOGp5RZAej05w9+Z/PlysvXyi8DR2j0Tv6fiCkM6sbWDtKrgsO5X7gth7tF+bJKAkf4opgOvwTWbl9hVxIbZ1op6GpcgrINjMGugeKeHnN2gc0aw/h5rESW3CFbHERTWkvqtZcvZeeZXFiPRSdfSIq5P8Fc0Bat/1JBx+Ah1Oy+HVRoEtiRIeeJtzecTDZy7486I687dxkX4a5OOmtBXIqxWYCWAgItL4bNpQqpqApzswMEfGVqWFfcpU+8xFGlpz9vdxruzQsN2DegoEVF6r5DyuolymIox6A8pGasj1w8JyRJEanNECKiFuyg8+hGbOccWoB16QLUbnEyvN5Hc5MHWVer9osKQzvCWodA8SG+NXf36sZAn4jqYLRqJ5ZUX/MkOBMSB8nJrEFDSr37iTg1YN03ePifZiThjIqNOe28nimwc8ms+56sjAJJbGXEnOwLp0T2WXK9t4EAMMB5HFpvUwBmQBu642iiTVgZqXY0VhY56+01/7JVdj3tdXMe/pYA6iISb3TwFl1wlQ9wCnTmIy87s0O86w3SaEYmWtsKmWcr8umLOSKIXcB5Uxa7C2fRiGmcDNBZ+zG2JDMn4yj/aLANJPkggTnL/EVdSbpk7p4cGeNKwWw5yIiSt8DWCbv3V/j6L/sVIzWsXTcykTxX2z805FU7BTe+nGm+HsqUAAAAA');