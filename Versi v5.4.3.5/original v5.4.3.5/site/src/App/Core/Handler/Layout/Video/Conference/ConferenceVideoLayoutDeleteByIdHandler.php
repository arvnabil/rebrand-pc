<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');