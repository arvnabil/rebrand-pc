<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');