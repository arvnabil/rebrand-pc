<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');