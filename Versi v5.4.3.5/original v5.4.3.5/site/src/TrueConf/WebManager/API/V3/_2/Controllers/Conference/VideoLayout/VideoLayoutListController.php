<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');