<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');