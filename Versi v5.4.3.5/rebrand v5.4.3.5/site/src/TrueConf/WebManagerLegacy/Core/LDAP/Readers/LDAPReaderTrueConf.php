<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');