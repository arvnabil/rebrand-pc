<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');