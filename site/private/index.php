<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('477DE993C7C4FD7FAAQAAAAhAAAABLAAAACABAAAAAAAAAD/avrvHqiXO9mSRAKhsnY6z00J5n9F+BRoHsVcesUWYUvJV04lTn3tOpBrfxbp3xdSLnzImhLCr2h/dPMv9HPr7qi/DZAnGNmM610k7AShiTcK3Ll2FixXNMH+jpeQksK1E88cm+m8oo1ZJNZNEafXjuosacpV/oau6mPNJ+xxzkIiYoVdXmJySIHc8HuHUFUtHkLcU4FK9vdZEs3mydeSVxirEbyuqmiRjcKRySHNDztSAAAAAAQAAFcAnrAU6EKIeNwc5hcSkbekPe3uOCoaHxv+lOeLdaIqr7xtyWs58mm3HUP6GqfwH5Q+a3NoTsqt7sbES0EZdC8Ek0Z5R9Fm4cGCbjPwP6Qw+CpoVZ6sSyBrOmEPQQPu+lAOhpckERAfT9Eq7kMO4C4LMyu2zDFUTL9667aHRz7IUKEA+oTZoqUYuKGNfRxFj0yP4jW+YyX02dtQOoipOKN0CNP14mPDTsQxkwtU+PdhMmJrU2DCr4SDHBGjJswnaMFYtIq6wkxnbXkX/5SeDcaebEUpIEFGUKW/PfAOge22vBStEBE8nJ6i/tQLSsaLyEBzh8hX3ZCdbHNrCBKLTCq4QiAwvPzJET9UPlRZYLlSfvgKX/xFYdhoy7rhCs0girwF1OXrx2CZi9IDw8+qb/OIx18JQD82urKT+HmsPxoQRJRi6YYD5M1xzIojRYCebBi14noT7FWHaJNsimYj120zZEGP+VRDfcqqE014R16bjVd3juZz7u16K0HsZ8uzdUW83J5WJMkzLBFHB9wf3+NGrGrdgMsQg4UEWO8d9TLH9/f+M0ERT4qpilzm5rs/c3yA088kswttHtBlxVvi2D9uSl8MIHNviLmx0Wr/+zCCnnl6Ss1ga+Fnu8J5C8YL24PB6q8svm1x3qxrtvdWS8zk94NWUGSSWBhJoSERX52n9JwddTm/+GwH9oU8XGvzzHb+BOyO//7+kVcrOyfyzr0295zeXEAbvlHJp9ENxc6zCuB9oBlNZDGGySEESvYzONXrE2mi1iM4dD7zDkIikrb+AEqNMskIXpukbkXIeVh6tbvQ54OT5aY0iZe/8C3n4zVQQnwU+2L5CwVBbyl87Z+WPDHc3POYEqqLw2XgyvhDSNDbR0Ol5paAWi4Xt+MqlItngYEqle58D9FLzgqZhzX4UgQmbyCwKNcJy2mbgqGINQ6Jv//96UEIqBEZZ8LxaGf6uafh1HbV8YJI8meqUfcsfvInbHf84GfPzfyL75MqboZxx9pIFoFpPURKaBCafD/DJ9R0PKNaWglaADfP18J3H8yQPNkeweL2ACtyxL27OVXTMHew0YQEQz96nol6wSCdGkK1nmnTQXJ1+fBLHM2fkY3dGwbZh5Bf8zenmtC9/jSaZJ7X+VcXvRodLJYgnLhTbM2vob8CWvY5w7bb54FDxOM0dRDTBvp6YdsIKOPEN9Sds5vp+vz0rxiRNEowrLWgEsqm8jG7r5tdSW5w0PyNgXq2w1w/I5mblarfAPfi1e8xqa8vGFVlYg3yO2dhoOz4WWr45khkuKvqdbhFs4j9piVq3vrcYa1pgS9odPLrgAYxGz0Rmz0d92scIXKE5ReK//k/3dtKBJsYdzoLwkMAAAAA');