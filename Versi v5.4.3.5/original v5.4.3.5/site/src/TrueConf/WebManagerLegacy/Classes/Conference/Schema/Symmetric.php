<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');