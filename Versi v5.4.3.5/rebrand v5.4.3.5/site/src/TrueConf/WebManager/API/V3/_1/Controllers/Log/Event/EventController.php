<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');