<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');