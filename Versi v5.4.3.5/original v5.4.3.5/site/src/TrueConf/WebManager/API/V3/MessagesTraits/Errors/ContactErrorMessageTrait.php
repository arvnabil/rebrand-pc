<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');