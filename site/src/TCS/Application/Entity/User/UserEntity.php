<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');