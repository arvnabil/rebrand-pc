<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');