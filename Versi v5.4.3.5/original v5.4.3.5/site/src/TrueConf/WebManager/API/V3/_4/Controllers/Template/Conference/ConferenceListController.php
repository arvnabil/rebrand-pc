<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');