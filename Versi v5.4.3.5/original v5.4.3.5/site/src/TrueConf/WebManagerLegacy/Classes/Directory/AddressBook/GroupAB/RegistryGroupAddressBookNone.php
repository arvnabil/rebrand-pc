<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('477DE993C7C4FD7FAAQAAAAhAAAABLAAAACABAAAAAAAAAD/avrvHqiXO9mSRAKhsnY6z00J5n9F+BRoHsVcesUWYUvJV04lTn3tOpBrfxbp3xdSLnzImhLCr2h/dPMv9HPr7qi/DZAnGNmM610k7AShiTcK3Ll2FixXNMH+jpeQksK1E88cm+m8oo1ZJNZNEafXjuosacpV/oau6mPNJ+xxzkIiYoVdXmJySIHc8HuHUFUtHkLcU4FK9vdZEs3mydeSVxirEbyuqmiRjcKRySHNDztSAAAAMAYAAFnlB7tnTmyfniMHuYKCvzIJESm5fevk5PAfrsur0kZRlAcQOGrtafzcwA89NKDdJOTLhlvn74pc3YG6bBeCAfPfBaEN7rM/VG/D2Usy2MBYDHEHC29K00L4gen2uRl6aFTQKgzc/FprQd74r7qu9htOSKqJWt2mF1x5a9wV9p7tsnproOfAblredfvf+pwk9TfE0uJ5M1ME6BJO+dMdyeiXikRKlFpc0UmzeknpQUHqPk64LQS1s/mn/q4PWtqpaTKOqr7QXmoB9LM2t/Vmg2CC50VSPEEFAqVGTYBe83mFRnDOXatEIEhfq/82dd6t3/SsOof+FzNcvmrLwDid5n3XXX86TLJ3uDKmYxRi2VwXFzqbEoJrbx3rJAM/hEtFTBvrEtSpCRGx/wyVR1RBHECcIWTx6ntcIGI52SiCVaBgIe6d1En/eBplhEtMFKj06C0S0jKehDl+Rcxzd9JrxFPfUN/OTFu/162DJpCf2jcIO1KQA4OY97BmbmYMbVR3l53H4Jc+WCIxz0/8WiNhY4crt8P8MH3vuaBl1sGZhKDMNMvLUnw/VPmGka8b9Ki3s4nx421XY007evWvDNmS1tF/iXfqMf7N9VWqDP4+loNvAgk5uA50nzus7gn+j2sGxtU1ahjHhQT0AJDNzxfrP+kwtPZ3pNz64SAgjWijD5HO2WYIpaEhqfuVSZW8RB0tdY9QJe+DEfQxatLfDDePhhpeEsLC3xLwqz8ibiEM3L7d2x2YmKlgEwPQgt/cw6MjOKIKqJI5ZGUCaoFO7XfV9/21o0rQX9V+b/LAlw7bDROljnP0uwNW/z6NccycXllXjEN0X7HYE3d7YcYUj8r1qMenvqQIg9ovhUvMOw3rl4BMyOGqtJfSD/wtOUorIGiiZw3f2HjLEASTRbC0xLqSaaGV2O0uuS7YH6G741hgNP4HNDpT1dUdKaCMCVaipMJK/r5K8TbZJMaScCLEpeIl9WEZetJ17bHpF1b1uCk1tiB+WfONDNREUOd3IsW2+BYjlhBtnTxHVcgsLFZ4GQO2j3j4Q2AoNy0bUSP9+4+Kd9r1m9am6Y5Lc/XOegJ3ZSaLjb2WTJ2fEyqOJo7zbufM67eIXrTRliAabNPkMga4wdKJ/sKVLNTzfNnVEvwiTJUkGkRk/ykVDyuY1gYyovFcNP35w+guG+kp57bUEoJJvwJzUG6pNaamFFTVKB7llFHCLcX03O6LTUeUXejLdaacppnLCbo3aYwnqKitUClNnvTOnT2VE4LuGd+P78fMvfwl8oAxKrpAPEjyzWnt6Xi2zCJy4bUaafAsRUzFnPgAMEAEZWfa7h/cU8+WdQR3Vk3gN+PcNHw1FEHKe5ycD9OAueqBVcOOtC52dWA99CxkyguVZKXfPdLaF5F9gDtHYLWtQIMhcxnIj4DOHEPz9M2/PxDnkSI3rSJ6faQmh6lGHKG64VXwch1tW/Jn2gNUyfuQ72UW1QW3Y4KPJnOh13i4HHH9VQNFSeb7GF5Unpar8fHg8jhHuSH/mLx/FAc1YrTum24o8WVNwXsnsRIT0i64xP4GO0vP6giYeHDrMMqGo2+jBkxSQAG0BYilvsa/J+MRlAgrGedH1mOK4yf+b3/XRPSvPglGcWplb6ZsJrjSMlDP7vNKJR18PNKBdiQFpoZ7l14WuCrkeQ9oJs4Dhi2FRhpqHY12FuQ3zmkR7WKTkPCoGedCxFdnCEBloDEaTDNrB7Nbwi3OBTTroO0sI9Lai7jN8yh5rGM9zmCrK8SsVsFEmIqh1ajfC38AhaHPshK68WtV0iWn8bbc6bUwU+Hkb115Rub749pxi1RllTj1OvGYL2J8H2AS+cnWiSnwI/WuPXnB06pG8pptVF4xbYzkJbM9neo4XYklfknhYNAbiBWO2lIk6ssts6JPbO721fs3lfINIhr/YpOEFXzDwr3P9IxWy2cHYaF93uDJoRo5vnhTFVzmF+rOdLrqNK4BbfSgxaYEZi/mjZmJVG+meZpeFqqd81nqD0Zwp9nEpgNk9YM2PBopd2wFgByys+TBPApuMY2nc+eyD3Ps1/2pc3TSvXK9v7UQ6/N+FfNfKFm5F2QEAgvb0xgbD70KEbT9/EGhWwAAAAA=');