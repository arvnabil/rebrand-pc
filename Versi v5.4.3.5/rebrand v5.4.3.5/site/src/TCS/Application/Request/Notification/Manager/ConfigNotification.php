<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');