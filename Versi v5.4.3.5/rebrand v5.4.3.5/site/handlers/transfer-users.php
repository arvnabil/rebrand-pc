<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');