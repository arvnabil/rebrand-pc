<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('477DE993C7C4FD7FAAQAAAAhAAAABLAAAACABAAAAAAAAAD/avrvHqiXO9mSRAKhsnY6z00J5n9F+BRoHsVcesUWYUvJV04lTn3tOpBrfxbp3xdSLnzImhLCr2h/dPMv9HPr7qi/DZAnGNmM610k7AShiTcK3Ll2FixXNMH+jpeQksK1E88cm+m8oo1ZJNZNEafXjuosacpV/oau6mPNJ+xxzkIiYoVdXmJySIHc8HuHUFUtHkLcU4FK9vdZEs3mydeSVxirEbyuqmiRjcKRySHNDztSAAAAoAQAAEj2SpjXczKEtWo+lFHSJmZrRM2oKt5+VQ8GPfB0K2+l/wSRxk3Cv2ERXAJaVjLnfYkmSMD+8E6j/RhtQs6UCxWcuKJD4F6eDBPMJHzigYfT81co1wZCjqtzPMIWmuxij+61zJA1wN2miPp8jRfooEG6xbWzrpXZzM8AVdEALeu5iLHL6vAKlnZbth7JBfhvj1stHwhmL6Dl4cKG8rryZ/Z6TdNSYeU7ayQlzoyTYCmbkOa1tDZXum6I6ljJ/2PhDPhGP7hA+BGNmBdjr7DlzlMbbhqs473s0ryc+T+DO+1wMIU+jBpwE8JI5i0913cm4IySW6uYXAjkfURU4mhc1bUuDdxKWxkllr4FkkZSQeedafVoVZr2DH7d9JrW5vlb4lsXH3X/TAMZtu2o4/bVBgo0S7aoTfGhjWK98kzF+TPtiC8I/3OpYgUdytjTVpEAAOb4GniAnD6OK87ytwWhN7N+dmCoaK6KFbAmU8K7GEa/hAxUlj/3RrJId3n7zGwkDUN91x6dz2JynpjKKogeAqZJE6uET7tDtgnWDIACoEPufFuuOhoJ+7oyAfp09cnBgqwvAleyiXT6av7UHYX2/aV7eBF1HwgV6Pyq3dXbV4cF0yxktqaMKkysnTLlSwisSNhdmVAY4kRHYtej30zr6ZdL6F1prC1Hp43jl+WmA5SadXAZvy7OxUhmWVnmols8FdvcPfPEo2IWWoynwxT/74T/5/pVr0wD1Des+JrcF3n4bHTJx79XvoSgwX/cG1Q6hKG1StgsNklaEeFnjdncWBg3zUlt6s7/cWI31iPdpIWPDiUyZzXpVwQbffLD17dOsW0b12P2FsctYTOmipDonIwElitUfDkET65pBCMm/qv2pu4isIEuKqKwb1iW9lYLKb6dfYjNdoA/d+60wsncw6j634b9JWJuEwwqHR6thNKWfuyYzSsmpA7W7GcqO2KtbhVXipapNGSvOn8E3dkVzifD/aV/M7xTEJy90nTv6RLs0wcunjpSWVgFuk8KvpODImosI8hM71sYiGa6RvnKpMrJZ8MuyGtqcj9Rrs7NIl1kAXS4yXQYmGwxdmS2ky9OSXmLLVhHIvNPnq6IvCTUXNW6WxjmoSwCm0Pa58PZZ1UdYwHWzN/TEVtfpzEqggS840x2l9v1QG5wSzIZZ8yKh7LDwNP+dwaw3Ka2BPQFg9dYY9AY7oFr2TM+FV3LCrmA1WQUsmK47VtoCyn9Z7KXAvpkvycYUZtymVMFoST8U3J1cYlpHKvokzwvg6ukjliCURgVrGWPHM6XZRs55eXTXq5ZqbERVvDx82Fit2aWajk6ybS6XlUxPHVdXEiXBNZKv5qE1RtU4bIbvbG0HK/hep2k/dwF49znXvFMpDKi9YgFzTe90b12FFWCMKr1Vve/SZ3eIVz13w7k3ooWpUotphPE5d0hsAwR47L0AzF7OkjZf/057p1RVPYt6YsZi+x+0yx0UX0TKPCMHgemeY7wjWbdYXtT4/bF2q1dqU9XGmwu1aHSp+h7yXcyTam/S84vS2L3XMddfX/1ZOb0wr20q+3FBscOs9dTaDdEbgJpFPq+AAAAAA==');