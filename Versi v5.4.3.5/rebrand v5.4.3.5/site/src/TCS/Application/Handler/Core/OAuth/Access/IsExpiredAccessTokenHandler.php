<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');