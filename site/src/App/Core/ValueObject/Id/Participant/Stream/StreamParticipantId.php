<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('477DE993C7C4FD7FAAQAAAAhAAAABLAAAACABAAAAAAAAAD/avrvHqiXO9mSRAKhsnY6z00J5n9F+BRoHsVcesUWYUvJV04lTn3tOpBrfxbp3xdSLnzImhLCr2h/dPMv9HPr7qi/DZAnGNmM610k7AShiTcK3Ll2FixXNMH+jpeQksK1E88cm+m8oo1ZJNZNEafXjuosacpV/oau6mPNJ+xxzkIiYoVdXmJySIHc8HuHUFUtHkLcU4FK9vdZEs3mydeSVxirEbyuqmiRjcKRySHNDztSAAAAaAQAAFrovNgvN4To6QUMk0X4+zN9k298J5tkWWycXqyY0+2GT5pRP8vA9r7uKdfDJTUlNqWMr3B/trv2O4vSAJySiGrLHUh42iI1goU4AQ+Uv9B+2xrdUHQ6FczafwgkC2q5IXx74m8BBMYrH5yw4uvO4PKRtD32nxwcfK1/jaKOQf4zF30IOXbQDWQdu06zd6nqTHvbvH36phdmE9Kf2qFLKQgiuirPl3Be73fuvPmcVlPsOrVzyihLUMkg7BgQe7mxgJDBw1GDc0CdIvcImWJ8mrQ3nrZfYSFeRA15jWI0itFHNp076gEr8X8YDifUUlP8XW7jiUreQOIaqzC2ss1vmX5uvdJX2+z0JOGgTYZ9wGe0TCL19EBoP5D/u/90LfrCvAaCPEUQJtV4WuWyieHMH4xYmAIYZzl8i1A3K4sHjcSHCATv/bOlE4bmUfS5FyQWYI2Rhn3640RbP/XReDM1Fw829raGD5Ibm+2lOkp9BRjePG2BUnyuIfgA9MY/MRW7CU19iattQx6ubOv25szBcmwr6hSAars5KuAxBaxLeW/t9sN59GA65zpi/0K1NNw1xBx8TQKlytTMOwf4pse5L8yIa7pt9DaAH2ReaBvlC7e1f9Ox/+jTtLBnZf5uMcPxmxCLFmeQfWQ1aGyFAt5lAxiT9zDCS9pVPrdf3+rq3uLGj7aFwyEqabZgsucgkF0HAlpxsXPAW+nc4dyFOFAoo82eggTf5TVq/j9OsyWEzfGJG7+ucVng1T67pmOjKyGR4IfOWkMWylGFtD3ZBCY8lXlTtew+IIQIU/yMnms2IfbC1lImglG3Tu97+Pd1ZKg3Y/Rjk9eqIe/ngnFSSHNg6Z6O258pBOL80cqR9wGnzuG3ufh7qDf6mJMhfImFBC7pCIMPFUHspyodzTVnIDdvh7w5VpkpZ6V26ClvUINa7+vjinEoJr4ybXYCCoOz+z0VtrUwUVrbPWRj3HqoWGTJRgZ5xVyOUoZVBW7UUsISFW5eMx5q503UUQp91DMsHgR84Tm/iV3z5/u66FoODUPbTu4AmgMgJnwXikEUl70sbwwMKk7c80uAfO0FbrGBY94lVMKnOoMLkIjSlgEkteBe1pMm3pCnkyrJ00GoIKN1/Tx1yAYZgbTWSRk/rcWkIVzzdmbreLlyfK498EXqLVzfDIqdIy0LLL0e2Mmv03InM+G5noz0GQMy9u7VrcBJElFTonniCvvj/eIihljX3Yd5w8/iH4WawjifL/nWuuPffenNlbTpFjbNAaSgzu20Sqn2CD9+ZnZFlCu2q/EVpSm3W7QkC8/c4VTWBdl3hl/HPMm2ckH080pAawUbNQaWsWw9gDyEI69TsuqGHlEiK2aejYFAV9LAMT1zyghGaMfVNrcKGB9WuFTZg4ojy1GdU3myLz1GDHb2gPTMeHY3YFNm2IaTWa1sReRgfPCai/MmXT+DA56Clwv99CR1SFJzJUn/E/LjLxQKE58PkQlhxkB5FEpHQvq8RgvwJQAAAAA=');