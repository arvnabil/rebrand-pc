<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');