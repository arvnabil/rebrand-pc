<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');