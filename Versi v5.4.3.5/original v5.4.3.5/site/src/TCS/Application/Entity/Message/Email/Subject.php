<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');