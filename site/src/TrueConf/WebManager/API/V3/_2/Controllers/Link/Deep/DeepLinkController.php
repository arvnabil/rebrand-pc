<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');