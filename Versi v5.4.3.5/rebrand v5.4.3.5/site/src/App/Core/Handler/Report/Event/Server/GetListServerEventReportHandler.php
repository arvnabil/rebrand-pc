<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');