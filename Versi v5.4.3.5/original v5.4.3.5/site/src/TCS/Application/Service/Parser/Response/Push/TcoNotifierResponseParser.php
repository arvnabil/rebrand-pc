<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');