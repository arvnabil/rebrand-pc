<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');