<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');