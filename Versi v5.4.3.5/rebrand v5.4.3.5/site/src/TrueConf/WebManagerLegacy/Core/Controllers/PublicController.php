<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');