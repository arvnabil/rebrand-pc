<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('477DE993C7C4FD7FAAQAAAAhAAAABLAAAACABAAAAAAAAAD/avrvHqiXO9mSRAKhsnY6z00J5n9F+BRoHsVcesUWYUvJV04lTn3tOpBrfxbp3xdSLnzImhLCr2h/dPMv9HPr7qi/DZAnGNmM610k7AShiTcK3Ll2FixXNMH+jpeQksK1E88cm+m8oo1ZJNZNEafXjuosacpV/oau6mPNJ+xxzkIiYoVdXmJySIHc8HuHUFUtHkLcU4FK9vdZEs3mydeSVxirEbyuqmiRjcKRySHNDztSAAAAcAIAAM6XpLvN8RlL/6yLAjJupYQ+1DcvAAdQE6B2SnR2elsWiQQH9meIjoA69g76jdWhPswacbmqLRJUfJwYPiRRv/njW9xv8n7cZcQrI5fF+eI+wPYMlqV7z8GQ7eeUFdi6fOR3ODMSgVBeYUt6H+h18hc1WAAyy160rNPK1bDSSVPJfqTu54FRGWcBngMmLpSqZLgB0jR2qtXrmfIDpyT3/rl31l/NKtzKaxrQGbS/3PpPNZkXJTo+wgO14DQ2Xk0GRCkcV7COAAF/3mjqDSxjcG/0GH6Cwt3hllgarVpxhWjk5lXb0zcTBoF53a1d0ZYaOaMed0oveB9u1lru140lwPonEHzVXdGxHID01TfwlKl6r6IToChnbIPArNOVxLk5o0qr4WxDA5QGq9tW1yrCS1U2zuim8Oe4fAnFcc7saRczyXI9wg0R8rRIDGj22o0rtc5WaDmnwT5bONDr6fpMcJEAwWf68UZTJszERd8nosZbJdDSS5SssnxO4DcgkaKvHAvVPaXgJ5/QJi5duEMIs5U9rjv4lrNzikaavByvWac4VVd7AH+LetuXqE5KD6uvnJPBq8P/UGExiwaq4HOXbneAIzyRZi1eqjVshZ9ok+laT/6rzzHU/zh+uw9Lo9JFSJ6Fe2WcTczro1BRFQO0PiMcXImlrnYflYf2nPYt6hS/j6s6fysxPGJkNgexRHZZ8FOZG96lLAzd0eSS8rB3K1buQ2i5DatIWiMhFUlQG7j++M4M3s26282VCIQCDkOMv+ZmsfphG7OsBpHldaYwj7eVC0WGirSTy/WtB7GVSDVVVhr3VPj/fVKKy2XD/OEh/gAAAAA=');