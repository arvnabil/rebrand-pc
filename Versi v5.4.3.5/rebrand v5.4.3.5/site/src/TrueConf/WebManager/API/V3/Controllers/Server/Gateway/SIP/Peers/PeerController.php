<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');