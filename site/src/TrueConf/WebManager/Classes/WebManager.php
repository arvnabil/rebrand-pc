<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');