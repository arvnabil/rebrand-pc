<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');