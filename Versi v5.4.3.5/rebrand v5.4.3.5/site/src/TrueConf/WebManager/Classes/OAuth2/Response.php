<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('477DE993C7C4FD7FAAQAAAAhAAAABLAAAACABAAAAAAAAAD/avrvHqiXO9mSRAKhsnY6z00J5n9F+BRoHsVcesUWYUvJV04lTn3tOpBrfxbp3xdSLnzImhLCr2h/dPMv9HPr7qi/DZAnGNmM610k7AShiTcK3Ll2FixXNMH+jpeQksK1E88cm+m8oo1ZJNZNEafXjuosacpV/oau6mPNJ+xxzkIiYoVdXmJySIHc8HuHUFUtHkLcU4FK9vdZEs3mydeSVxirEbyuqmiRjcKRySHNDztSAAAA2AYAAOv/+oM87kuRQWP7Wt0Z9GxHgGcIc05qdqqr3vN0wdl7/vtvug7iyOY+Gb4YRDZwwpBlnF6q2MIYcpjLHBfCG7QFWGV1YBkko7r3aU5Xste5MEkRKo8a7FbaJllqF2D2bm5MUaR2zbmuCYzee3M2yfSHXQmtkIXibPd0rhMf62pkImCJRWKtR00wesf6eFJL8G6s4h9hXk9WU6rLU4eH1YakMyQy5DnaUdn/Gymu0o2rBzcAEuo+W1mVRbfMf4YrDTLtUVtg7P7qUEAP0A1w4rUhCeFnY9Q7n1GwvbHY14qnnv0ISA1yI3DRtCeYbKZdIewvp2CTD7NAo0NUyabUMddApWOR03G+GAbuHrI0dXzfDiZJ+bdBiL/ZGSrFRhy9222zctsawNaCz53YL1rylQ46hQasHJtw3N6B4RyaGfCeN/BKo1Dhtm7XN3PsSsD5speWHmtbnSgU2Ii2mVmgr6MlWURxX9e8gvqGUw0XS1SXRe/mVWsCCtlgqlL+Atqro1P+WMUH1kCarpPP5ga1IP8ykWvaYF/P+XPlKs2Ns+6MNvL0fWti4BpwCO9qNcbOw3pmB1K+jXP1BPavW2i77+jO/YowRRKDrVa3pLVN9C1bIP6KLskQU2n9PTaHB3ufEFD7ghQT6axnqUawxVhMLIp1/ZdrGprSlDL0nel6r/Z3rTsbNHhIprXSasYEViyvUahR1aqoViDVQtjepN4u+7Gkv7OaQOJv7xLoHbXpWEkC1qFiLkR+LisXGgI8pNEjjgFBO9DgaRwygDBC9bXZHo5GvbFLl8g7heg0xEbENn3F2Dv4WkilEKxXrAqIw5H+W2CcKvNb+JZGKBK77LztV8h+9pnK6b5pRVwgHFbcAeRoosr2to2zAnNGhSTgN6MftgpwgfmcUwe8+h/uM62oepZQK8QZ3yltIcAMyHEhZGTyjsEmb4XiZArSJwRU4EcRaGrCqX0QLqQz8JGdj3fr1M/eGDzSi/7pF6kFDCG83zTcCtY3wCyXo68x8uMJxCk2sr4A7tP/TknbhVqm+DrlIG1Els0cEh3QpPZHJKzziYIWRWTaaN3oOLGfvo/1rHVCtGJQyIpXUHzWtptldp6tJWPv8WYYN7274XdCduOd0xbozmmAMVD7RPROMeknzegiHsS/Q3Wi3v4jtontnPv55EgD3Muhjwdd/PyKof0fxZmrQnyDfO1nXm5a5c0RTN+TiDmazTTBRg+IQiEwK1h6+LvcaYCK8KAyh3qkCHFg54jfZceK1WAvwpxJEOUHzC2vviV6DtaPnxEY9Qs2pHWxuuHTsYrK3fhVpd+Lr2yf3WtUFz09OaWp4xOmaGTb7hxtRCixJytpvMNEZuytMz5bN97olcyiAmZOaWhgMmnuykYjKebBa/hUagDhPITbViBO+6q9RvGucgCymx48CYcNe6y/0gVkmVhr6JLHQWj0pxhSBFmLkPE4c1xlmxnEoYkkTB35EorAk8sC9krXZfvIVfsSicmu/trOmQTToKNE+NvCRuwPBcEm9H0yTQ/5PMeurIlSKlLcVj+rmIT95GApSWPyqVxjI+qAqnLZj6o5Jaqx+QhGOU3AqMg3ksuJAvulH4885ITeXggd4VN70PHx2n7DfdIQLTcy3SZtxa6po4nhLSeDgqBp39bKyUIJgPBb45Gjmno/BzLqMjo5vJKCqJuquG8YLdAnjiGfxLyvF54m/mOtF5GfIrVam61kunsEeRchfks34momi0vBC3HBc3vqMDfoOJ/j8/gkFEbrIniVarorWAas4ozzouELHtFO0K9GxVuyp5EF2FSiSjVbOcNsiqS59cYrCpqw9DIX0ALK6j/0emt2g7uLzLzS4rKLMbrguh4QCaRNCRMKabB+Ym8Co9VFJCxw3Zst6aA5ujW73Ko3VIf2UBlmkvIptH1eCc2D1bK0/4PlZFuG7WhmL84QLkGBnNh/yxkbhxAN926mlqkz1oWOB58DhAkkRn4UyUz/BXJq7wFuwIDtyEmvZtfH+Hq4zCeYEcPqxa+kJh3/MRtdHfHZu//zu43n9PHtB78137b8qu6807W8KuBikQyf5mw0seVZC697FMBlW/re3q1h9Cm2ETPuXieXPwgtTRyPJnPlEhUAYh3Befmj+xNRZGl973x8kJP/qzEXlrQi8Qdr8DrfpHtpuT7azn0ZM3O+PS9YCMGgqE3vFn8o+N+e2K5rdkfXld026RJHW5R3ehUj3YtLRW35PGvNab5m3P0YhFFvhZx1VJUIZRBLxfOC0Vf3A81SjDYUaaeaTx/kvZ65NbXyMbyhE3C/vEx5LDi8qfu66lUi0o7pM/ahxBLqNWmxWVrIDAAAAAA=');