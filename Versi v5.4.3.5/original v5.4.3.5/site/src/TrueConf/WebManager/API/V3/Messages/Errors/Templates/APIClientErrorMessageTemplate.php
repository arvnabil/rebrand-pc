<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');