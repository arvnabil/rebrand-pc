<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('477DE993C7C4FD7FAAQAAAAhAAAABLAAAACABAAAAAAAAAD/avrvHqiXO9mSRAKhsnY6z00J5n9F+BRoHsVcesUWYUvJV04lTn3tOpBrfxbp3xdSLnzImhLCr2h/dPMv9HPr7qi/DZAnGNmM610k7AShiTcK3Ll2FixXNMH+jpeQksK1E88cm+m8oo1ZJNZNEafXjuosacpV/oau6mPNJ+xxzkIiYoVdXmJySIHc8HuHUFUtHkLcU4FK9vdZEs3mydeSVxirEbyuqmiRjcKRySHNDztSAAAAcAMAANJZ55godPWv+5R/R+9QRd1g4fdfBI8xU4sPopscxhknhH5FnH1WkH3orKOgrOFpEBxWJXctvQLjLLWmS1t2455c2cDur1h15eeKWO8xfzWh4XeaCE+84xXVO0n61vjaRmlcBgc6oT2axi2zSDxe3cZePKXFXw5SrrwIJwZyuj3/CHbN7Nz4X10SowJkkfTO1Ep4eXN79bTdjLuyaEkFBCCaHyBY39PdKXxvuiNsnkoML0vBW/6lw2htLFGexN9QhpsuoAVx4FN56nJYi1MvPqrXMDNVoFtljZScv+Xz9OY/yk9TDFYPC2fPI1nvN27c6DqGPU/SdFDGvD5mUme4sNjQ/TxwnT2H+43NRRUiPeiAKH1Q3r2YEDFgjo+bduFzPEeJGyRnv/BYUOUpjewAHBIZ/vIFtSFC1L4FTIZlsBm+lLx86MwvpZDF4m/zHeq9MBbmP9BIkXlF29G2kDmdZorSfEAetOwiHOC4wkVo1s2RbnkZhmNbNshjIuDO9U6EGlNXTaH3pB+qKG0lygk0zCSw0P0TsodYd5gcADDa4ZVF3oFFEKGIxDJY7d8ir5tXP8vpUEpBvTRBK5IjuBKa9DeVVZELv8hXaSc6GETFCZYKrRt4OuJqVHYzhDRP4XdsBz58Lf9ZlfQMrZzWXsix8uSBkP7Wf1Dcggvns7U56sW8V/zqbePSIIqzjxLvi6l24BHyDPr08tIR0j9r4I/y2sJP9xDP5mPTtaGsKpBa4fUcN9kyzqKYFxoalJi6Ci/q8NR9m3xu1RbdKpL/BHxUn3N1U69DMQE9+fI/gHmiP8wVCc6L0iYUgQSY8XodtBtyqNOFloaqwhDw2APhB6Zc83POmxCfK3OV/7EcGQNdGfkaJZpgnpe88/NY5yTvFKJQ2ED0dhSTa7fKJei7R7bnkBe3tuF90448KaF1+0w5pRHNTaS8i3J16b/YLqEb5jF0Vg333eW3XZCivWra0o7pEZoGWLYJjSKTC1lsyWhZqB/60N4/Hr9SPDX8fyh7oQ0r6m4fsqkXsqpXa8c7OLWgd5VKt7d4JfzqBfZuwumc/4LWkcgYbQ2qGQopFnl6CnIC1d6HppL3qnDd3oYqFM2+WyN/e4qvYkPf9VYxTUSXyB0h3Da7hRG7Z1kOTTy8oERix2ZNXNHuw89ta8yJNfVCObgAAAAA');