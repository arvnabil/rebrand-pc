<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');