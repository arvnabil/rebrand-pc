<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');