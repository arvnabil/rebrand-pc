<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');