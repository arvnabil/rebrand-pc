<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');