<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');