<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');