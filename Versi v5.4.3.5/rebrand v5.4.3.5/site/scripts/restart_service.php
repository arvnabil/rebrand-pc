<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');