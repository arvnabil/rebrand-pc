<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('477DE993C7C4FD7FAAQAAAAhAAAABLAAAACABAAAAAAAAAD/avrvHqiXO9mSRAKhsnY6z00J5n9F+BRoHsVcesUWYUvJV04lTn3tOpBrfxbp3xdSLnzImhLCr2h/dPMv9HPr7qi/DZAnGNmM610k7AShiTcK3Ll2FixXNMH+jpeQksK1E88cm+m8oo1ZJNZNEafXjuosacpV/oau6mPNJ+xxzkIiYoVdXmJySIHc8HuHUFUtHkLcU4FK9vdZEs3mydeSVxirEbyuqmiRjcKRySHNDztSAAAAkAMAAK/ZdSatx3bERCTGz+mRccpmBz7I6IhcrM38FBw2DuBYKcoJhIH3t+i3tUKMXetgGPVqIxXKIlgCDRcJ0821TjSw3o4yed4AlgwlGTdp67BA/CQXVsUku8xpJjZmo3vK6EwCtORONOiwnElSdBckieC6g+15WcxJIwepI1wsc6oBJqDrI427Nj1jP12/qAqp9eji5FerHT+7SbOIi/yN2H827ue3wW7s8k0cSIm+4BCGF9ia2Dwup7s3RLJNb9Bz0axMhbsu6rUijoaX9UD/6nlSRSUvJWBOdy2MZnv24QmmqaC2qH/FqXsa/wQ+jMmVddTMHFpXAJVr9cUuh5V/juwv9xDc+mg/QLVz6mBEy96cAnLofMDXleVrbjISwiPpNM6lVqiFiwyZ4++8KF+YdBipZ/0mHQZ+l+0PK7mE/2tuzb+7eFvyzaVCBFylCyUpoSnepl8GFJNq8MrM61DyDmMweolCWl0jUtPYfqTjRgDOH3s9hDSxnN4V/Ig0Pq793CTw3M/DX0cgWcP4E4ck9pCb+H0K7lEaiWvO7cpocap7MVgmIWW7nTa5Gwc1gAoCrz3jb3DJvfQWq6fuwGcl59LRm+tJCCosbE5f2qX3gZ9fdWp71mCzZuHZGUHOD6bbcl5oyo+YG5MzvLbcU/tijaOBPDD8rQEEGAzQd/WlsQK+DT0s8VUpR1GpPHFUiNlrdH03IEHWIpxiNH4U7rEVP9ysEJ929qJm6IhKbRAtmSXS0qnknX94f1vLBfR4VmW2ZNnUtsbapWBWxc2d2BMh6du0QDe/rU7LiBNO2W/kdNgJqeNVfQ+gN/xJFkE8HYuDPaQR/Jn56Elv+eMsnBoHf/5JBufB/w79K+mEGhgZyDTppJSM+rXDaDc+iN6P1m/t2k+C0JfFMrrfMrNoWyC3/n4+54XDqea5Fcbt2K0HJ/t0s/Vj07aoDq9yZ4dIZ8RRz+kFw8cPQIW1db5a7WknjMMpR1rxEITju0luXXN8MpI85YNMJ9Q9Vh+mj10hJqTzbvdvjOznHJ0dGoRfHdgY5LaixmwdA2XaW0eZGeEywHtgxKV33GC+e3WcAhefNrMK2SaksC9GPWFaKabB/rO2R4YQXsf8nAe/XcIWh2h7s7C3GdYOtRZ8sjO1g9YrBvYVTlHBcs23ebWR/6SnFofbFoqzO4RTalyIlv05Qv2d9W1W+/l5Og7U3LxjkzIV2Mkz/AAAAAA=');