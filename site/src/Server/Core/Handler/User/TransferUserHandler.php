<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');