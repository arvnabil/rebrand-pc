<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');