<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('477DE993C7C4FD7FAAQAAAAhAAAABLAAAACABAAAAAAAAAD/avrvHqiXO9mSRAKhsnY6z00J5n9F+BRoHsVcesUWYUvJV04lTn3tOpBrfxbp3xdSLnzImhLCr2h/dPMv9HPr7qi/DZAnGNmM610k7AShiTcK3Ll2FixXNMH+jpeQksK1E88cm+m8oo1ZJNZNEafXjuosacpV/oau6mPNJ+xxzkIiYoVdXmJySIHc8HuHUFUtHkLcU4FK9vdZEs3mydeSVxirEbyuqmiRjcKRySHNDztSAAAAsAQAAIS2gNT5Sp4hukqpje7pcFPD0+Dm5n7vYc4IEUwe8XclzPCSfW+9335xHVkYjTFZNYusFDBegbTpHWIlClZFum5L2BbtVeGxGqYV3S+NtWGG3vU7o017k/8S1vfCGOhvo304DEtzDdZRIK7Pd38eMdnShdFuGYEAJR0zSa0DDR45qA7Gzcth4TqM+dif1L5gHiT47y+4peaCK3L+Uo8CuOYqUOEOtOTmWObakdovy9eEkGhxeI/oQhh4B+TBqNMkQeaWopmCKCi2p55Qboz4pObJEO7UKhNvPhGfmUcJ6jJDcZXjlyllR9s9+Au9mW9k1nQFotgO/LeSgVpnaDNQ7mN19EdKxwaqS1JV53d5/rDG2C3mYos9GT2I6pTD9ZRphTZw9eZgck2OpnpxjFm/uLPUBJUneUuUk7NaaiYrBt0hshxftjIJULLDhQ7TU/RblPbZRi0++pZURSIXSfhq5F4JyG3Ois6QI1htoTbRzQSLlnmB/d45LxbzrJBOaYupZlr0z91dz1VqsD1VvhzOjPcS80E3prJaAKfcq9af0/bkBWBMZ9inKtcMe49jf9n1+WpL/SpirHpbbNzFLMlxmsWc3RXPWr6BL43+72VzGrbMvbYgP8bzAUBRBAiUJgXViUyQUrlWgNUmO5msvIceHsNUP5DJA4Qv8ILIFGH6EaQWQF6lFdGHvBMxWL9QXmrcO85tMT+sjTW5KpEETFmBwFEpwaTVPOV5DIui0lMgKdXlioR2Gyw2lzBFeTwhZgI17+WB3sRnm4WEzDc8GqyDCjH0v9PKGjLosIiC+27kf6ZsSuQO97bZ4JwYaQRx+yhHheCUnphyauVeY1t8Kvi22sAyuM3UtmEl8pNOq9Sgyj7kM5+rsW3dFolIZm0z1opZBu2K+zJ+jC0FSHIZB00fTWMr+lxzDmJ0C9OTKZNmkA7W7dzsyM3pDXisSPb/TbXHMyQ/XEzMLHRfrS/Ep/U1k4qb1ksslxQ2LvN9yu2P9uiXE7SjMMXcBnYBTsuFNa3Si6EaE9TlxG/2RqEWcJBie2KDojV+rbp27CyD411VRkbigY2i+K/7+oSHsJgtJ0w4cm8RJwtbW+EjP1RkiLx3LoYEo5IzRiQHxmQ00FvF957rYOMp7Qcm9uvXfP7VetLjXJVOQC+vuaO9VkQnAvmEQbxKPJOv+j95Z1zlYBGuOUB/hJBFv3uEqHuzf3/FjYlC29PEUorMP8IsbNnGrzF4KUY13xpZGGeT9oZM4SwSF14+zXl6y9M5uqrqnZ7ARdYYn3bTw06ds2tV2HUPjPL6cygLM5Nm/ViIoTP6tevB/+pGnr+YT0/jvqAGtUgHKRuworP01nANDuegzJuTDLOzH0ful/gvZTyXqoG7emBG1dP7ZJknJc9XgMQqF63MvKYjAn9snu247XQatHpZAlY1WQXPjUxKawyajUTFcVfh45mPRVWJZSCkjalhtPdFXcSL+NDarBz1lCqk6sHPILAMdRDRCEdFmBfcssZX/OMschK+JyQDO9Zbms+JUjNsn21JfpS9uHJdhjFchKCQuLBYplSRDrk2LEBHv9UUtL6wkT3RFrFPX/nQs+b+rbWUheHzugAAAAA=');