<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');