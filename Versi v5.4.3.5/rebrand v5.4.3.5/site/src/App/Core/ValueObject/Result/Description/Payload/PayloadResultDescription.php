<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('477DE993C7C4FD7FAAQAAAAhAAAABLAAAACABAAAAAAAAAD/avrvHqiXO9mSRAKhsnY6z00J5n9F+BRoHsVcesUWYUvJV04lTn3tOpBrfxbp3xdSLnzImhLCr2h/dPMv9HPr7qi/DZAnGNmM610k7AShiTcK3Ll2FixXNMH+jpeQksK1E88cm+m8oo1ZJNZNEafXjuosacpV/oau6mPNJ+xxzkIiYoVdXmJySIHc8HuHUFUtHkLcU4FK9vdZEs3mydeSVxirEbyuqmiRjcKRySHNDztSAAAAaAIAABGqpztn7VDzjp0XbLnZh6mq40ixe4Ths3q3hkEArDUhfQ9FXklHs7zFYH8zgeKkvuf5aa4U5nHOiz0e3jZGWF0f5lOwgdZpQcJboCqI/y2PkaJeQ6e7UqowaS6gDrLY8z1g6LEojcHqGMdc/ohXvIZ+ZU6qRnVSPRL+qKBsTpoxrapapbgFqUwpclQ8YRZ+M049ZRsuEwyXWFZyD6MwCGROg8auX5D2oMTOqh+Qg0T1EoC43odq+FhGW33/atPkVvj+kvWaO9onW72IpUYGb7481t0Ot2K3K0Cu/nxSsrhz6ZF8cRWnQyKhfg5FjEsBYJNPAcTQQt4ymfP4TEgVLlJt91EkRwhZSkX7JOIrKYRO9lO/1VoyjdhQHz1SxMhQc3DGnVL/FvCPCpP/F3DF++8xEc5/CRK/AC8WqWJxNw1yXyneD3QJHtsFpMV/kGZWDA5DmMXiiVVvxTSX55fqgyXT2/A3o7t31ZMnl107LS2UX7sBCxqy2CNIQYB+Pt/ahPNEh6K9dm4rOij03M2dJVqKgx1aVWhk09tWZThk9eSJzok9gY+VkmtQGLwgHRxx/DRRzOjBzXQV6RUwFqUBTs29cLEpQJ7s7AYZ80CJoWaVlOEOsl/S3PEeAfqPqBdzMu8fTceqzE0uBqq3GGFyapNoVw2xieUE/MpRNMjGiea6pf5s2Lh2udLNxv6rhQWdyc0NabPXR7b6AWEN7FZADFm63xQNpev7WDQpyry4ETtKYZX7hkbK9H8SImZKrx1WUx7UatF1shbNbPPaUopLwAlepme0D1NgZAq1IhDHge0w3bzPvZAlRDcAAAAA');