<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');