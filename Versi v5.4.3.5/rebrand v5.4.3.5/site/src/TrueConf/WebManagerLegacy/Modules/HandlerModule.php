<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');