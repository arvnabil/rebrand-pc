<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');