<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');