<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');