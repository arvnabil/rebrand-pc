<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('477DE993C7C4FD7FAAQAAAAhAAAABLAAAACABAAAAAAAAAD/avrvHqiXO9mSRAKhsnY6z00J5n9F+BRoHsVcesUWYUvJV04lTn3tOpBrfxbp3xdSLnzImhLCr2h/dPMv9HPr7qi/DZAnGNmM610k7AShiTcK3Ll2FixXNMH+jpeQksK1E88cm+m8oo1ZJNZNEafXjuosacpV/oau6mPNJ+xxzkIiYoVdXmJySIHc8HuHUFUtHkLcU4FK9vdZEs3mydeSVxirEbyuqmiRjcKRySHNDztSAAAAeAQAAGPG/aSGCGcgy7tdH4q04nuhYrBrBpqhdEdYnx2Rpt7q8U+9hG+X5oztKdOD6YszEIQzfj3IsPpvDPETPXRC25H1M76OztVi6WOxi73cbJnTEn/7cf8AsOSprgSGvJvsorbqiP3yo2Sa61ytI2K2pEBxT6FbajQJF/JUSq5amdaweqqjyUQRJykXZfC91kZOoYJo58g4HAWxSSMugMFc7yvQH/3eL4nhviwTNwyJpsfTGhNqONb3dVd4N4IC5lc2mk8gQpokEPWiZe6gzgmLAmd2IXPTq0HedSggshrlT1NNsJR/Temz+qEaWOAe51hKRKLRy8dasZF5Tl2CCqO4hyYEFQsu8MVM6N7vwMJIGrF+PchOwNCBVv8bcFW7TFk3EF/ZTFum+12hsoJmFqWizzZxYIkMXhfpt7yHw6eECkjoJZg+b7kuydm5m33XRjXfSF+daqddnUE+XtEbRlBPdlr4GQGv2+zst2mHbQUoFArpJaJBuCyfE8RWRP5RlJ0fRlWk2haBGL2xiBmRl61weEGqL8OenMQk2tIJvc1wbnnW01MLixH6Z7UBq3fo5Z64udy07UJSkfQ5NAFolpSpQoYHv8f2TVYV4AZZW+CAkcuxPAGvf1RDuJsWyZVf6r33mxpOniHxd4O03ZUlJfRwtI9cbsY5TpVi38z2Ly+3X5a9ZQjnkjIG2T5N4QlVviCEuw6wn/OBRhI9a8hyEjlY3lXaBT/kHfpFBjUl+CD3LsvQJ0iS0P4u+XI/KSDfhfKpVo5QlNOn5MaNrgYGmhoPx6G3vrfjQrwlbg1ReZfCXubiUae5UUjEcBl5rwFkmBkKZ9Rfrh5ZRrfon4XdSlSEQEliPeTgJBfpW75xNlgLnMQL8MnpeT4hiGvQYB1hfuuLua3EmHpOH5Ticv8NiNv9rpLopAk/0a6kW/CWYD6JTMY44r70z7zY/guRpuJX3Q72ivuholndBJhWuzkXygccslrtNaZpuTpKjX9v2AIvFZ3vKuDXTEf9kJQD+wC66HzdxP79Sy0JorkryPP6fkiAhZtkpCXozAEO3MKfsIZ5vqhor2i8pU12lQ9A3Lng7DYGyKEiR+ELJWM+HMxxTwnk41ztbyVOUEU5aYR/hkHcOQ/N6XhkvneFhsLvL0LsrZtlHJBXrEB63TKfOo7AOeRrqjeYfNmHXnXWh5nSmrUCIGnjVWOJXzmJOwp4sMtTQgT6kD/0SDzTv6QajOBeBaw0EhAH7SLwPHhJqek175vw4B73nkk7FRmeR8/R2sEt+SvAfz82TEyuFMOyXuafdGwXGhPyDVcoJ5R0KpNxesLYopNjtRzUFTaDG+dLNroP0wPtfE5wpDXhrvkozRPzdX9eGYr91cb9B46UgRMhRzzzsoXjo0o3eSyyZiB8/6alt8JBOzTRsF0iSC035IBom43L14ep9eKDVF+pvDHcLJUJ/F7NOIBZYjq9STI/3h+EnOUk1H+s92T+d+JZ5z9fSrpLRbJam1j1Isg40pK7UO78oTtFHM1cvtTwZDoAAAAA');