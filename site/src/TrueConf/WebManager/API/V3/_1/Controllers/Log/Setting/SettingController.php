<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');