<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('477DE993C7C4FD7FAAQAAAAhAAAABLAAAACABAAAAAAAAAD/avrvHqiXO9mSRAKhsnY6z00J5n9F+BRoHsVcesUWYUvJV04lTn3tOpBrfxbp3xdSLnzImhLCr2h/dPMv9HPr7qi/DZAnGNmM610k7AShiTcK3Ll2FixXNMH+jpeQksK1E88cm+m8oo1ZJNZNEafXjuosacpV/oau6mPNJ+xxzkIiYoVdXmJySIHc8HuHUFUtHkLcU4FK9vdZEs3mydeSVxirEbyuqmiRjcKRySHNDztSAAAAsAMAACdFBVectyfXo7SGRJ4mQD8WaYfW3P/76DMpOiRdW+qAhrQtxijcZfkx4fe79xVBt5ZfXVLPK5E5NiFSXXwWYFTohOEwuellqb5GbKPqexBA9rZ+blBiEeG4YkfZiy243liP+58tP8AmWGHQ1dcFnfQSvvwha6FYNK3URKP1ZO97dmo4M6YUdBn4YXYysYirmZzP5VumxwF/G7j1de83Q90nY0pbSY3a880ZpodDMK5uBrLM/Hd/rbjeICLvx4x6wTIVGeu9KE29BCsRqB23qxiNgQht1J19VtFT6umvSBbtmmYNoIoAqBkV5PbBpVLMi/JaePNPphePhN9f0+pAKLCjqovgJXzccAYHeoQB7fqFhLK1qL5/4HTLTmWJmhmwYXlOwB0WEH8mEp4/76c3DgAYFqiOkAbi1D6NCaXyH7gC1CVl5F+9qc2P2ex5dkUGMUCtwKlKPqxhrI9NFtDYDONsJ77JuNRJPvjTAtz7kXfaUNy8VAUgVJrua4MSQoEjNZqCQYtTyL4g+JNbq2Hgwb4+S05/kSWl+9ZwaVUagIgNTL2tfnCsi05BovQr5UYdXOy5Gk8Xd3VkPRaTFbEd7vj85Dooddq65BPXC4KI9hRdyv8WyazFLgdwcU2uaMH4DFpqGIB9McCMR4lef+eFDFD8KVbSgG2yjotNdUPSD9M2aO37Rm8KUQAzNAFZwpNERUe79QILkjVo13JOcxO7lYOrUMMsZOH7cYZjfelqBq2F0o0iWpfpnZdHG+4d4rByy20rJGIUC8grM5As/YseHnDXr7Zv7AzE4zOvRxWCzH/tRyvmEN+OqnUw1dN8zOPgiTKkVnbQdp+ysnWAfUcQCxIYCM4AMjeiQIXLQ8xo+hQLjxsWyNOH44QzwTNEqfPQhzOAQA63BVTgoTP3ouP6yOXsOOXCrMgFse3o3QBIOTJqMvxmMHnUcH+XINpMw1B4ub4OHz3+MkFmXFoBIuWiLP1AYqZM+Y1BzjJYMUQ1qHxOvWJEGEQVbD68HTIbYw/x7HyGYxeuEegWjwJLMN3IRSYJTaLc84r5zqEevyUqqSq9O/0k/U2vP+/SzhW2B6O3EQDtiWgHr3YXPok8uMjmGuF6IH4IMpFf9ueYtBNAcw/ZEagPp25eUl4IQs07wFhO/Ku0X8g3XC5khWwbLcHby9mJlWwTrlRg7c4Rvxn7+DhuJiZW6m9NqrXUjrSI/s3nY6drbaHoEuJ+YWDSZFpmqWKJZEgH1ccEaeUj/GhpfwOoAAAAAA==');