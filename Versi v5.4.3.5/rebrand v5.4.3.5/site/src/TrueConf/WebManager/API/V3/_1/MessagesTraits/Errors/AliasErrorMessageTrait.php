<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('477DE993C7C4FD7FAAQAAAAhAAAABLAAAACABAAAAAAAAAD/avrvHqiXO9mSRAKhsnY6z00J5n9F+BRoHsVcesUWYUvJV04lTn3tOpBrfxbp3xdSLnzImhLCr2h/dPMv9HPr7qi/DZAnGNmM610k7AShiTcK3Ll2FixXNMH+jpeQksK1E88cm+m8oo1ZJNZNEafXjuosacpV/oau6mPNJ+xxzkIiYoVdXmJySIHc8HuHUFUtHkLcU4FK9vdZEs3mydeSVxirEbyuqmiRjcKRySHNDztSAAAAIAQAAI5zD77fxuilTz6wd5XdAas4JlyndCez33c1iNGBTbcMUo5z/mVqUwgfqThAPl1zZl7g3tyqZ+asUKwecpp7dAGnIn+4JtymhKlQ19Svj//2ZfSLe8UnnyN4D/qFjKjBKN0s26cRQAmCVweuKz27sZvHElE689Uzg44yha/PmiOOMxjS4X7Vegm8LJSpY+w6vBJ4mQVzvmx9d0da3D8y5SAfYlyXBYe1roGmE/JK7R8/wn2HHi6HcQN8bS04sAaUnyyECn6/2DkybPRL1B4ioqIyaGLFgp0z+BolTUJjckzPxDQA754h1cqpQVVuK/ir+SNQ5X8CK/NSvBBPS0gx5GatBAjVHwCi47vW2BQgp94NsFvkhZozhDL9E3C1t+rof8u9P7WPKh2g1K0Yd9OZhM0I5c6iAO3csQ7zIJbYHcntZuy8utHpl6/MPLxNWrGvfj4VlmaRlpyNeRcmjQbvRUGkUA5Us0+597LJVLf+YyKid4CiQfyvMdnuDrmos6+P3ShI3CoCazn+ehxKWxbSg9UDa9xbi+wXzS7teEFDfNnMDTaRWV6rRJ3lZwwFBi+7Kr/I3eZua6uHLaA4HQ32NxwDZlY3Y0rbfVC1wky5bsN79UQlY9ZJUmcIPdORG90EDwffcf5UuMcHul9xVSlzYBMTyV6w4z6evw4f27RLU0LmHMXH9awxPYnGy3K7w8VnHeA1wzWjkILaWP4MBXY0XdLZ7klXG+90R9mtPHMOvo/fxY8FIYNg7fyou9kchd6DrOTC6Mn6WnvTBFdTS82MsXlUXfCz+bF0S59lQ4fyI4i9wzOnWmQbIDhOSnm9sUU9RR5XAfNve1vB2Lt/IHLw6S9ljisbGFTCVSG2Byy7cIxkGZEatJqeipXCj3g023mEBhg2GVd5idEfzchIPNM1Ik0QS6odx++rv+biSglbhNywrxGwgG4iAFo4HZulPHdoXCtbCy5IVuihzSDLBefvBhZLdjVufC0UAbcn7oIYVRgXkDYK6QjlUiu7Axo/+oCQ6EMzOMmYvnm8ABGnhRR3i+/zJzpL3q7k/KvmKSg2IRaZxpguDr8Vn7yL8o1K4X+xVTYZVymjJGoP+MCzknb3uoFkRD0ySiukkDQw/jMxSHSwZxyD2zDiwVNID9Z/FHFSsFCjZR0vVKa6ceLEIEyUSL84zzz5ZbknwzjmkD7Q+rjSmMjxGyCJwH6pkZJW4sZJHtatCRQcf+EKhOBsjsTFQZyFRY09fBsfh1FF37272A0BbOrGiwXOGSZAHjPQ91ApcQ6lyIrX+VGTuPxobEfyVmsdnRQAQ+ykDDBQ6Z4+I8qVdAPckFGyIZ1b7AKiHu0u43ko6AQPH/3EiQNdzgLEeeqBkN0K4fSwaXOQkP/QPgBi0E37JkEaqYoPXy4ol9GGtwAAAAA=');