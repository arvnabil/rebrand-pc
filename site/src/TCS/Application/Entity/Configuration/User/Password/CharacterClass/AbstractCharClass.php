<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('477DE993C7C4FD7FAAQAAAAhAAAABLAAAACABAAAAAAAAAD/avrvHqiXO9mSRAKhsnY6z00J5n9F+BRoHsVcesUWYUvJV04lTn3tOpBrfxbp3xdSLnzImhLCr2h/dPMv9HPr7qi/DZAnGNmM610k7AShiTcK3Ll2FixXNMH+jpeQksK1E88cm+m8oo1ZJNZNEafXjuosacpV/oau6mPNJ+xxzkIiYoVdXmJySIHc8HuHUFUtHkLcU4FK9vdZEs3mydeSVxirEbyuqmiRjcKRySHNDztSAAAAmAMAAKkKvOq/asnSEe3OCB7+3dQBHENVa1IYqAz43/Y1Mm1njwqomWnZWYffCq5LF52wlfrdFxLmGYhFe1ZLU7ahgckGotfFzDQmFOqkeBQg+wSd60dhZz1aXGBxvxsltG0PzVw4ka7o4gM8hmp5IacN7uerN9YMmWS2rwCq4ZKOv6Lr6v+iOBUf7JtKLcG5EwV2GkIcnnIOt33n1zPdZURwBfjEx9Qwxf/BTl5pKSoA2HKg0GtRjYIUcw1p9MG9Ma6R7UD/cTDOiIZnsB9pAl+Oo19JgTHAORxE487MUsYNL1uyL/ZDIAM3nmyVXIT48zTSr8uAGQCL2X7W/OCN2PFqLvsmYeIkdG8A45JPMRwOg5XA+vGZTzXUeK86Rg3MRvGQVdof4WCAugmx+UozU8CXwfOcI/5fAQ5FA7dUTUuxOy+SA14dhWsPFlQi3zqPpsk5xr4RRmjw5PWVSZIF+bFyKDi5dy2v86Jf/+L04GG4c8tQbuudRRXgaG6HDmWO7p2TtBQK6KhOK3+uYeLnbDzpxX5kPA1n8NfNUbZccJt96PYheB0ENgVlIAEHqJqShlExnpGwLne3tQ7PEhOUloSkEsffV30UNJMJaz3KBULTfcL94Jr7OQMni6hVKVTMPc81EpZk/9FN7HBlhPud6Bfe1+HJT1+DHB9oQvVr6PmQGXbwfBvoB6D1H/8iot9ozn4yWK2fAsPVUz2WgHWQixo/MgU+UBEL6ULQ1IKOnt0Egui24KUV3z0j/bvCeqg3bqiqHoNrpB96CJ2Q2GoQY5eYcHBe0OPiH+yu+3NyU2jJK+k7dp5skhVM9E9mUkf0ctbSNBbhvCSyGiSEeM9yL3QiCWSQnqig33+6XsKDaW5yIsi3BpszJo6MayORYXGdU6XvuOp/p7Z2Pq+x0CVQ3ptQsW1w7bh0taLc4wdpzurLb9hDmKSHUJX9ZGeUB6/Wjy2vgVNS0U6vxXOCJZPfu7DbUFtPuu420Ku+zfZmZkHIpSNog2bJAMzaYLTP17CKTKP0kSSCWT2ysGr7/8akHAm1ODYeE8FBDqm2UEKNnZehx/4xdJxv10a6CypSGjocrbKiR8CKT/MSY3V3E/AYYIizaPgoNZyORWcaUgt9lRaT9M/NHQd29nYRnKCN/PR64sfwCuBLLoz59gIFjumpsiGPRrlstikr7LRZkl7oLL0Z1PTV2IfgFu1fSlRRw+uR4gNB7iOpoOXzALgwAAAAAA==');