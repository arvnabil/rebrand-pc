<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');