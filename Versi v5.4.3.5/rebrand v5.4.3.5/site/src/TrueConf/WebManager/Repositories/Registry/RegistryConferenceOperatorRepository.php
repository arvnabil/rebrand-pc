<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');
