<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');