<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');