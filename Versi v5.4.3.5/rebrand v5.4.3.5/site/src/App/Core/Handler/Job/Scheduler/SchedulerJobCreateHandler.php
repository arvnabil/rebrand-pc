<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');