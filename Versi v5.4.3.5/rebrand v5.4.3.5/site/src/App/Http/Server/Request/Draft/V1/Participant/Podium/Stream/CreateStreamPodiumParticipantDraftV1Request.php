<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('477DE993C7C4FD7FAAQAAAAhAAAABLAAAACABAAAAAAAAAD/avrvHqiXO9mSRAKhsnY6z00J5n9F+BRoHsVcesUWYUvJV04lTn3tOpBrfxbp3xdSLnzImhLCr2h/dPMv9HPr7qi/DZAnGNmM610k7AShiTcK3Ll2FixXNMH+jpeQksK1E88cm+m8oo1ZJNZNEafXjuosacpV/oau6mPNJ+xxzkIiYoVdXmJySIHc8HuHUFUtHkLcU4FK9vdZEs3mydeSVxirEbyuqmiRjcKRySHNDztSAAAAkAQAAIn2YDmzzg3xGhVZc7dwkxyTK1mmpWqSrJws6R8wE1RANm+5S3befx7lJKuPRg9oG2IbvuncD9KlRW6cftkpLFhZfumE3hESKiquLtGFEfQKmcY57m7NK/bLiI3dQOfIa3uwToZgyv1/36GO3qAW2FXqqhgS+LgwQ3H4E2EIkJ451DG7kOxtf3aTTYSx544xUYFJnTcKOf/KE2ErhjgaLZW9GIc5FiKRe9NHFXmAkCFq6xk4ibM049ipAlwSJCSkj2NAjoN62QRMcgjDsv9x24TYx9cbGv8tLcUNFJcZepB/+1cUhZQrJoPLQ5ywDwlotJflCVQUsHKuBM+VGur6wMyjUTKVFgI+KNRLk7ElBBRWUcGlqDRTDoKdjmAcarxi+F6s3naZmLccVjqA2ufBcr2/RXp5UOPC5sma4RbYhMnh0qoQ658r8GCZZcJ7hxtAxhcQTjIj4F9pHNM9Ko5EGLlptUDdE6xRCbTBAQxYzU7UETWlzdSQ79+JxRme1h9652fUNgQuakM6HoUyBWbYUi1Eq1iDgOMx6SzL6m+PzVRlzdStpRIY4BKgcRFOiFRPu6P8CGog0kiG4kW4BiynCk7QlOvpfQkyjmCm58kmg6/Nkd+UuQZD7ZYaiYOLsxKIuq4SGFEhA96r12JPS+iLHS2CzbBc43DnCfHmABJZYVWGL1DzBhYfMtCvz0Ea+RR3idRRNU8t4q046WTgV9gsGSK97yu3dlxnFO3XoNCQzmb5+ll4hH8+bBcOmHzpWcFZ8DANku4jdLO5L7DlNdxXEPdeT8ilraoOP1BXlMqpLkfrtPfMpokNxHPT3pavXHX8DfMbdCb/56ryUmH2GpEy34I/2rHSRWizCjMd+TE8sqixl0+SUr6it4+cp3Ms0SHDtBBMpJhkNzcIOMzz1TSzERegq/0ZriYcIO7ayZEvZSaDYU7mtY3e33RsyuMhCvOLdl6SLWtteJKH0HaC3INM+VTO1TUaTmste5PfqVwhcWioSWfRwDjTXN9HAU1b7vTK6C6luSGoitMZqN+adBj4L68Woq7GgfQ4ytkXCKn3atR4IBwjHias1VcxSQTQEYekU84L6Cwt5pImIwEyNaHKj6f7lmiSSzn/5Lr4c8H2OypCkVjYaWwOz+AWaUYAdTwjr1ZjjrfePGO3K/Yw+MdN04MHs4CcCwzUu+6RePXPtEVJUo8JQMX1eET9GIIoSQepxn/yT6WCBinmJQvCAsFDHKGxdBC6Uvnmz0/ZRF2jpcC3CyrvbM5Ble2g8jCvrV0WeImu/Q98UhQfEz7lt9rDk3MMoH3GsWlGKXiwZT5j/sZEvPxTf5mZKXR9hE8OMD1GZueLHZh6rtx5IJBYp2HEQc/f3MTMH28U4uifdTrssd/NFp2F4teI/DYfc+4wmgG+HQRmvPP2vXt0VjMr9iSw1U54B+R2kzXqm3hS9bRg0AEZfgZxXrHzvzwhOFAAwTcimAIIC7v3++7JT28LplaFrjYMUOpHvjjpffkjSRMm5Et1xeZZzwnRFUJhVQNfJlbczdL/LD7wuL6xb2SGV1XVZ4cAAAAA');
