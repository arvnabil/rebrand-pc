<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');