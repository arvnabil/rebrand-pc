<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('477DE993C7C4FD7FAAQAAAAhAAAABLAAAACABAAAAAAAAAD/avrvHqiXO9mSRAKhsnY6z00J5n9F+BRoHsVcesUWYUvJV04lTn3tOpBrfxbp3xdSLnzImhLCr2h/dPMv9HPr7qi/DZAnGNmM610k7AShiTcK3Ll2FixXNMH+jpeQksK1E88cm+m8oo1ZJNZNEafXjuosacpV/oau6mPNJ+xxzkIiYoVdXmJySIHc8HuHUFUtHkLcU4FK9vdZEs3mydeSVxirEbyuqmiRjcKRySHNDztSAAAA8AQAAMaRigdwCVe8PXky0DP2TGUQX2Gt6BqGB2ZSJVDRKVVTxku9LFXxcNycfBGCEr/PoQXDxrZ3nXhOgtajwSd3azLZ/eoFwX0tPpLWmnSvgVIxpB+/IVBOXWcwiD034KnxS2kfnQe8LwIIR1cnsQEG20xJ5V7/kqF7ZTog+So0WUchsuXBPKKG/mkTFNitWq5Wap358K3P+WCEjRcu7klu2hUTu0Pgqfdgz1tQ42c7GlUf2kU83PvY+/XNvoPgk0a5hzbzoBUmnF89oGdSCfoYrM8DzIsjavCqp/NhW7f3sLvR4y0PGmb/kbJhDqxoYoinfiPrEIP2WOpCl+Ym+73eLR8EonRQTJrJ8/k7DgFuthyslcEtGlFoTKtdoAX/Xavnmnq0NrCtIn5iuN6/1VEDSNJeSZaKldFemYd7M3CneVR300EAmM3kNr+9chP2jtXbUB2RqZRI6FAzLz1HbJvzNm/HaDFkQNiPOcIgT1eM34qa/1LbdBGimKbH5jksrXwxwKHuBJCWqL3v42RiP42+ENP7ViQ7rngDdUH22KT5pwreaXkJtMAaI4zcrSs9YW51aWG3RYX2vkkqUCZD7PXfOdH8bf/Mt50sxyBhbwZGtbBXfOP3jaxTX5NF55bzve71ETMLnRDYr/lCwfWzX3vscADTjuH07NjYfMtxllye6axrKkVzJSy2KkzfGh6ffV82MG5qsUn1j0MP5NsqrxHTPfyc1lG3aLhHRz3SOqFRo5YJDK5JcAYB+2W3BAUrvt6rAIH4JrVpHG5KSd1cPNbDIxT10oHSmEqqWSRewid0rVZ58/g8BDPNORS1DM2c1bJLlEZCOSEdUAJhH0dvB2Nrvm3VcHrvPT9xNC5edzYBWogY/5vkaxY7bEsHv4UTLrGkb/qQ+OLG8MPzqACvySOwrwBjIhYLb2AAahddnlU44taLJ1Q+7FBC4+s+uoYdaD43CLs9vhjHFoy1Ke9nFKif7nNe3T3jYVOiS7QojSxjhKTOoN/4FPpFlw1WDX/YQnxueUMOmMswzxbcaELzGGlvYaxvkB7km45X4yB0bna+ATIkeXFjGkt1YPa4AkcRcRyY/zeUjNtoUZs+rI/s8AsmMB31ch1IDvxdzZGoqarz3GfmojIjbJjPMUEl51vU8noevOjJgaexrJijLfH7HQKwqPwnSXU9s+F/hR8IjBsXFnuu6NST8uaTvYas728WL8jNKJ60s2Pugxo6EZ2KWEOJWv+ybcKVrtdYCgA41J/b06Gxxf6090pA+NMlYCMBye8//7ptfO9tyT9FWt0T/x0HEKPoOj2+Q1lYZQtpNWdz+sfp2TPbC/IlN4iL7bTWq6zdA0RPX+rb542t7oLIKzjHLkXvUBzfQJMOwSYD1j9volg0bD+detsR1re5/JxlPvEDy24Ul1+gcawrY3V317ttoa7FPtpnGrEIFIG4mzPazRVGnIeDxVBnAquGGYdHQNoFmY39sjxT+9tpZON/VXtLUZatenxINik52hkJl8/Zv1vvGG9sIEBKpvq7R0lAAPcPsou68vqZUZHXpN3mNOYyRRm4WA3knAL9m3kM9Z3QLXHhhp8jM/PFRQdzyi01uD0Uo02h9rH3d5YNzx/IR5fo0T9VlZ1F4CJSBcLCXv+EGoPw7Z++PG2C+ZzmHAUOtzy92wZrQcQDIGB5ZvNq1O3RL2cAAAAA');