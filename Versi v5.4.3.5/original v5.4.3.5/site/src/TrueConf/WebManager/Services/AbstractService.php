<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');