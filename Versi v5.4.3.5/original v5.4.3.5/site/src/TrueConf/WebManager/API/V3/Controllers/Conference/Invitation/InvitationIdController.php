<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');