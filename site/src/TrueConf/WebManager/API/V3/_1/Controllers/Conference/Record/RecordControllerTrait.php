<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');