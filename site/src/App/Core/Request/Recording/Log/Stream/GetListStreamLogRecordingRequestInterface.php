<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('477DE993C7C4FD7FAAQAAAAhAAAABLAAAACABAAAAAAAAAD/avrvHqiXO9mSRAKhsnY6z00J5n9F+BRoHsVcesUWYUvJV04lTn3tOpBrfxbp3xdSLnzImhLCr2h/dPMv9HPr7qi/DZAnGNmM610k7AShiTcK3Ll2FixXNMH+jpeQksK1E88cm+m8oo1ZJNZNEafXjuosacpV/oau6mPNJ+xxzkIiYoVdXmJySIHc8HuHUFUtHkLcU4FK9vdZEs3mydeSVxirEbyuqmiRjcKRySHNDztSAAAAcAIAABNOLe43dMbrDZy46DSWe5kY3iICepiSuYKaRPhR2JF1ICgTNVuQXD04Z1P7liMQslf73j48HclyLscOEa7F24y1z7W35lIZ1FRIG3ookv22+Af655xTrwDjSM75uThoDs65wNY9DG+Wn2JzQX43LShWMJ/oOAvPsOTDU5Jv8N/Ggim4FbSkK+LqEEMB+hOVfT4vRIh+IXuUWzpbrgf6vUgTH3vDcSoqDp0ayaWm2jMEoXXIPNW2Nl5lKJxUJ2unN53z7mZC9WHQb1gPhEHDb2QOgGNt9/3KxOhmIkt8Q2xkfwCTnhiAtTZsV41u9MwYVY/Q1sf/hPeqSgnJyajtLU8+oCNQUNf7+9jNh/SRFcSGahSa5GjI80gomnehBctrd0cVXHbJ88olK679cwMXxjFJfc+jhn3iTAeFv5KW/nrCCQz4f8tv8qWL2fnGSqAO8Izr83OWaxFeMewDF4xIfApb9yZ6d4AZ8u9FjpO6og3KQOQWdHQqbrtOdf9cn4m1aluspq1uDe4wmiKMJBF3Ht2XNk5poLTPotrGu+7vLx6fcuHo1E5kP7i3RQmSqi1X6EKz1bLHtUbr46+/RbnEGlc4NdyU4CmiJdP1o3wcjDmVuupYvFVmBXyWNCT8fFJJ7qWSN4ByiAfBGcnZFgDGiuMM1YtwbnPOcf3hvrbzzhG1k3V5PawGrwgRZNt9/+sNIptGer1YSZTfE2EnuY1FIg492Ph0nMHTDtzIVjW99QE1Uv/iSDH0a5KNLnqPxp5VpQsR262TN3Y9tWYpRqZ5bKp1GBUjKWHZpJqQ/xfuXxvI9SjMTjXUBAZ1cvRHZ8cuuQAAAAA=');