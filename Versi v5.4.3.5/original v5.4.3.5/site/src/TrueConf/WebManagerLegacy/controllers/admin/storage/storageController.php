<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');