<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');