<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');