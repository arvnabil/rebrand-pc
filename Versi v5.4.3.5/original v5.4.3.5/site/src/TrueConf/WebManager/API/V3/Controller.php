<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');