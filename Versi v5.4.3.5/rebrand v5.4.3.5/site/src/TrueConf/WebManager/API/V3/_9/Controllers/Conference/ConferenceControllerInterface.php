<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('477DE993C7C4FD7FAAQAAAAhAAAABLAAAACABAAAAAAAAAD/avrvHqiXO9mSRAKhsnY6z00J5n9F+BRoHsVcesUWYUvJV04lTn3tOpBrfxbp3xdSLnzImhLCr2h/dPMv9HPr7qi/DZAnGNmM610k7AShiTcK3Ll2FixXNMH+jpeQksK1E88cm+m8oo1ZJNZNEafXjuosacpV/oau6mPNJ+xxzkIiYoVdXmJySIHc8HuHUFUtHkLcU4FK9vdZEs3mydeSVxirEbyuqmiRjcKRySHNDztSAAAAgAMAAPIvUlYT0fV5dCzjUTols3fIVuR1Wh54wZq0WOOGMvEKyv5ZhHd/EcmBxu35+wJVFoo/flg9Hgsq1VKpTPzWwUdTEpGc/UHHKVJ3ODQ0felZzPjklK9686M3/D64ZvQDenJb9TSfyD3ikVxkAp2KuBwI9p8OX3x2huOufMo0leGlYT4FAgSsc1Hp3z5vAr1JuUcSHd9Qbu8A3PTjf0O9wzHMFlntumqaeUuc/p3GRV8EfWd9M0YGSKicdxD+dngPGSxcr+qFLeXUVQimFlgOcTw+nJjHhQRjzVmsleIRlJxKXCvEiaNUkzSQSbvPcBPcpf0KMmDZtA+eqGCtMfz8TN67GQGn3yfSQPgxTnNaitCb6264inp/XEWLMFHEBQss3gLYZ3sOPuXkxN4nbLz3zy3Pb8dit9M+BrrHErZhh7LgEiApRYOA3XRswQunt6L9ccwSpA08R+vYTVRlN8cpTzsoPbipusFbOdwq6MJkZHkYVQF8H/Q2C4B7N4DXPRT/UkouZKBjFGtg0sHryVfEuRQGXqNomFGBSHP0n4QCTmzTpEM/wWPdTz7CQJ2AM1vzOcQzBHC+D3cdBDOkUw5D3iPJUKK2Tz+s5hEIbm2PJ6ksTU4yYyVt3pRTUio0oydmhQivdt2oVnUMULVXLDduNu2BurhP9r6I0gbQjM4o3VRi+0nNtx0jpKCLyPtjo4hPslgFdmyLXQ8Y1FdcJ+DSVjL72GscoX71fhGmJCWf15NYWj/dyyEdtj2sF1GhpHkobLclP7UnKlyMBvPlAYkhzdlfuOGMj97qgycaj5MHE5FE/3Ivmy2Z4EmY/8GP4IjJfV7/y2Jxg884kfFj1GOR9HPq+oOnJk0vZERWTtoHy2CQSr9w1c04eQvEk8BVecSEs1MDpa05yWso7VPWI9BsUngL1cG3DgJw1tzBYDzwZseg4sKvMv6V0CZJ1VO0w6kPG8YlZJQo21n2MLHdsNvE/nFeanmInBgqUvMuIpcr8l8jnWhJB1kMyFISeqZLK9Vn15jGPtTnGiiIjy5kC8dtqM228uqZJ4fcU5bPpi/haI0zLasZ4owvAyKjZFTg7BoL4Zzy1cjj1/yc28TpkPDEYQAGYhHmbMdMj5r5e4cBYZ7yaKjCbKwMhmLsgm9GgH8BBcyIMJT3y3Z6lnS1de0qK0cvpNr2yzGfIWEgF0N9D5uSAAAAAA==');