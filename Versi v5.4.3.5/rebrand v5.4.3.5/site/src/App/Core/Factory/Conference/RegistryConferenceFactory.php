<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');