<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');