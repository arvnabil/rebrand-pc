<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');