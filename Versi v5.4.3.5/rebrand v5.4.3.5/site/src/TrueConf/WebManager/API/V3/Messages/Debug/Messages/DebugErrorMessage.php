<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');