<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');