<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');