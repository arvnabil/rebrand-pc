<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');