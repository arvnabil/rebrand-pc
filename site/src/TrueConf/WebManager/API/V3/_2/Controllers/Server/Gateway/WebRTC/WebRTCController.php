<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');