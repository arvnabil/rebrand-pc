<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');