<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');