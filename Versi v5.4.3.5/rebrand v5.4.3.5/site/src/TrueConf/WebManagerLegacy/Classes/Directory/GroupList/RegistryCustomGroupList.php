<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('477DE993C7C4FD7FAAQAAAAhAAAABLAAAACABAAAAAAAAAD/avrvHqiXO9mSRAKhsnY6z00J5n9F+BRoHsVcesUWYUvJV04lTn3tOpBrfxbp3xdSLnzImhLCr2h/dPMv9HPr7qi/DZAnGNmM610k7AShiTcK3Ll2FixXNMH+jpeQksK1E88cm+m8oo1ZJNZNEafXjuosacpV/oau6mPNJ+xxzkIiYoVdXmJySIHc8HuHUFUtHkLcU4FK9vdZEs3mydeSVxirEbyuqmiRjcKRySHNDztSAAAAgAQAAL/u7fvwibBskhjzZhX7usju1jBQUCd3vG18Ax14BgCe0shJiED3h5ybwfdmKJ/A6RJITueiV03uQcVMmzYD9s1pJt9WvoMg081oQETvL6bDPCn5EYOLo412WXGy4fskuhr0EsKUQq8lg3GcXOgRjjLOBMpaoO5iUQn7bv0zHl+cPAGtcj9EQuI6hhMNT13t7HoA8Eu5O+IIw517yTFB8Pgfi2ymp4n1Pj7jBSQuZXywp5TyJhURQWGG/66tp/NYVZaIWxaI3dTpWBRU8f/TbRN2VKp0Vs0jFnu1xxBLMi6F1Sv429/i1In0cyyRLN1Lgmao2kK2CiH8iBZZn6iTmvZJg7SueRibzgwaRJ82J63N4BCD3heCcnrEleKAqsg24ws2CVEffTPws6rBX4GcYv+KNc/q9/BTfCdty7RtmjPr0V3o9T5do1UGm5uT5JfcHSvrvdd6QIjo8IFpHvlGYmLSp+gNExVoFXKdGHMT9MGgm3NMpwLJvRXkfnYM7Wr+ihfTjlwMz9l5da0zbfc/Nkuxc0F6Kg3O0jNP+kaAfinIYJg+lE+6a9xHcPD5wHyEPnJ6ksDjJrpPltpUyt6luy42qxVHZU2H2e5s+giAIzriD6NY3WECrwb3d1wGy9JYBQw4VIb5s0gaCjoNIoGCGc4iyBon+2yFQ5QvRJw2pnkOd0Knq5Hu1S4xhzfiZEhLURvVhPsy4YwHubR+09crwKHnxL3Pk4qYgM6sgLVkGRcpvw68YBsxYZVmHMueUqK4hsTxh694MfMuBrkzulOEvqETNnzA9b0dCc9osLAK5GTst4XhNK0mM5ic62q96SABjIIpV6+hy58/4MBOvDKKjHYfQGyKMNgep9y6vrsXgZVmxHLp4jvvQSHhh5FgGwtm/arUyb9TX7pF28j7K8cZe7f/QqmLpl7vF/TzFXNU4oXLx33JdVhDmP4ve+FXKz7Pg/AwQmGFeP4JYNgu38yYw2Atche1MdEFy8tj3Wki1Yp82tC0MjF4grz0JMEhtA1hHjvgia4FidqOBAqC+1Dbk5XbwYCN9+PzBt8BVwYT+Oi0LIsmT6nCoxieL3RLBQndPxJRvGmadFUpGZr/D5te10jcyENi7TON+cd7Gqwkh76Lo1Q5yOBWAw0F+kUH1cTuH6sJ/k9g0fOMM7inSdIHhstNq/t/l++x/7FkXLxVJkNGOkSzfHyrnmOzRllnc+SqNiMsZanLcSUb6xA9fAF6IghxvbOx9FzUliEpia1y4n8cHEFoo2JWxY7b/cRKNe3eX9VsnsoXavOle5kgZ3Uehsa2+2kXndvF5WmwwjA/fIIuSbY4gYoNwZfvlcMH4b0wpPM5FPluMuQzEqpAPseMCUA6AuH0wJTq9rjbYTuH5BTzksz6GFJj1mg0+l6jEHf5Z946tGwKLDziALk6CREHoB7+PQ2okiumAf/IkCTYxuNazgPyuAOMOglpO+2O64vIhp1AgQU0QD1UVI9RP2gfFXgTfet8ooFzqykSMM6VMYrmBSyGTz2M+MgFdfGzfW25vAAAAAA=');