<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');