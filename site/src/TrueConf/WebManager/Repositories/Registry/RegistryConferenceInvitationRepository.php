<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');