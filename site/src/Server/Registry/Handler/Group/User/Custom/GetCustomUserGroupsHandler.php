<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');