<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');