<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');