<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');