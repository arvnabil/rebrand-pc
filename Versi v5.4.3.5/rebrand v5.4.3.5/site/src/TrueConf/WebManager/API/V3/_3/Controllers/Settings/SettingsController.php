<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');