<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');