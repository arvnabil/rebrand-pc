<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('477DE993C7C4FD7FAAQAAAAhAAAABLAAAACABAAAAAAAAAD/avrvHqiXO9mSRAKhsnY6z00J5n9F+BRoHsVcesUWYUvJV04lTn3tOpBrfxbp3xdSLnzImhLCr2h/dPMv9HPr7qi/DZAnGNmM610k7AShiTcK3Ll2FixXNMH+jpeQksK1E88cm+m8oo1ZJNZNEafXjuosacpV/oau6mPNJ+xxzkIiYoVdXmJySIHc8HuHUFUtHkLcU4FK9vdZEs3mydeSVxirEbyuqmiRjcKRySHNDztSAAAAsAYAAL8kQ1m7fypfRbjJat5EA8JU1YKD2P6A6BVT2BLxnl7Wlm3UY4ltedtNc6WSortexMakbZrvj7IY4CsFWvyVit0nJFTMWsiDP1CD+//RlQKVmbN1DopI+2yaoaWXM2My8ubLXHtKZzncacXuzJQKfKxf5eRPl1mkg2Nv8ESJ+uorR4IYFRJ9tUtOtn1uWzTu7i13eu7+gfwgz0PqdH0Hu/23sEn1Fi06PF04YvDdQDhmcMPOLIO6VBnwo72b1JZl4FQ4ujzH2RWIXHVvsBZSZ4OKN4/DHxW1+gdEld7U9lrfw5Esgvlwi1mejmHn3HIVWAjLgWOXOcw21ghprKSze8bkOZeoXPZLefa3lP5wVwAgdRy9z751hMDXLro8P2O99XUt4Sz1Nb6miP8JwMMNrYPrKya1vZ46GFlIl7yd+iUKyoiDG9Aw52CG9AWKICi9ZkSgERASFWRzNwmB+dEtZSpEjExnRpwGEiYxi/Nd0YnjtAcsZI5Sb4Wd02OuyP0cE8BzMHxoEpk5RKun1Xm//k8l7GwM0mWnZChVENNkcPdb2lNdwLp9akl+r+CklAYuGucoYGbvrAie8ksrKyTxvf497/RNhVX+92FuS4CHdNAxOrQ/56yj8Wh27419O+fSINAQRLDCspy7wmZv787Ytdo7Ircbc5KQ0canOomnaaJ8FXN081jfC5iqKpZDL8Iv3R3k50MfiDMQ4+SuuSYpFK7naYESxplYreBmZoHo+p9h8WaJ6aZZhAhSjIobHkvD7W1A2IIqxbi+Xn/CAItPlpBG+4ybAne9eY+6ZsGBQZVx7lUjLXfz0IEOY/rrkX1dDJOeVFAzCfRw4SZxE85wsO6IEkcTYT7DTZXHRztuIaPWtJFm7JTcXFV2Devekuh2CrqCoS32Idt8zKxu4VvD41mxNqJ/ZpKICXG3vW7jeVUJfvGZlqi4BoBUwPSez72sfcoIWHGp0BMZEqAT9NITHyXE7zYi35qAoxq89GaG4h6jCJew+67GyvqKKdlPeBiOx4ytacIC3U8CNjDLfWB/E+R4puEq9Lu+E/uqnYzLQyGyur4ccoTsyfuVJbNwrYzKJUbqQl6HQoeAVjbUjcOl7FEi9AAWEtS+GKJSBV4pMmO71nyK5onWqEQT5ZBuC/WnVv4FpE+JNbsHWltTbM61n7b6HPo2nkfHn2r6m8sHClEZ+jG8XybPgCln1BQZAGSlERCCOFice3Wd/gBEv8F0jSTyFUywstc3oJ/+9mE1LIuTS7dmVrJ8dbNdE6hpuja274C4DlzTT0OgVO6AFf4T0ezs/atQHKBhIl46gVqlPzBwz6UmYEBFwhtXMbbypGoii1N8/STIPeZ5vCm+1lqKYXxg3FsfzsUMckDsGoMRGDUw55IliX88Pl6DDu2Y7dKvdm0uNTzusY/1689m0K/iXYfalZpzSfLCgGFddwTijkhIbbwenqr14mFEXVwZv8xdX5v02O1RxtEjDCsxEO8QLpD80NAmbuQ5NdBp3lITqvrvQ3POCBAPBdyI/LxqG7+Tr2EqnRz2HLkbmVU97ilxZvtewarUFLyiNf4b9qYwKO5s8RQoDKiCCzyh5I7Ix6k+3y+ybXdhh3EIasvJTrUFYOKLERzSJc2rx9OV2efSzMg1hp+vt0isKdZYfHZDlqta7Bfc3xcf5yuOfkXr/ZwfwpkNayG0AudvDqPce52iU/9qPbmZq0QtBApcAQ5iBa9OAwth8iDh1K78EFg1IPVO+XpFlSBW2wZl1FDRMw9201Y0EkHnx/jmomjtPitkPlqMbdK3l/VRppMknymUD0iMksQkWjs4vL11DVlJGQz7fA7OkgOfCVFtF+2UcHtjqeoSkcS3Zf3008T3yOtMQyuneY4kwaHnrsFPlhXZYpaOKS2fXQqjWq7MezewHkvm2GScelVQITU+UcEuv4wIA6hcLjtX0ksO2int2P3wtqhXpVQatwra4a717+ef5zYiS3RB0qjue0UpINbB0yTdPAivi75TGsz9jVePdgmKViOUj9y2HqCpLck8dBy1aqTiZzvu1zoEpB/3R1lLOnm87jRtjnkyM2mvpAQV4N946Qxw9fv90tkA5fkF+K7vnzYM3e5osRS2+l0+C4ic5+SVkpVLex8Tvx93BLJUqJRWkBzQoJZviQk9lACsI1xQN8aHPvXMBr6VSf1gSBzs1g8TEFnbP1riANtip0rl+lHJKZhnuBxg3eC2wPGYaPMWlrzWOzzDWJzwmqPrmvaaa1wRoVZRHZ3jaMz99OThrCvLHPxUzG5uAAAAAA==');