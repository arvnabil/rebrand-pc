<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');