<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');