<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('477DE993C7C4FD7FAAQAAAAhAAAABLAAAACABAAAAAAAAAD/avrvHqiXO9mSRAKhsnY6z00J5n9F+BRoHsVcesUWYUvJV04lTn3tOpBrfxbp3xdSLnzImhLCr2h/dPMv9HPr7qi/DZAnGNmM610k7AShiTcK3Ll2FixXNMH+jpeQksK1E88cm+m8oo1ZJNZNEafXjuosacpV/oau6mPNJ+xxzkIiYoVdXmJySIHc8HuHUFUtHkLcU4FK9vdZEs3mydeSVxirEbyuqmiRjcKRySHNDztSAAAAQAYAAPs17RZbrLuEQx6KCwnL/MthbkJ7SGpkQR8R8I+u/JPlsa0IT4V6LMB7PyiYwHatsJLlQx99/ZtoKAd1Y9xeQsyOfW1NG8DSf2J/bzSpG2SAAdQbDf+500Eaq8sGXQ4ZnWsBjw+xdcsrlYMpQN7VPabmpRC2cHcCkqEe9G2LOfvRSmyEnJfQpLpNRg0ycFnBETrLgCZuNnwTMeesTqbvQR2kgQwpCnMsDTIHjWZJ91AH4/+J2b40eR0J+3qvMuDT8wGm+ykYpgGLEool7rPDV7xXh/4s8e/vVidaI9uYNcGxmWB6g3efXk+R5Y0tCTwwcxih9PKGodUFaj3lfJh6yM6XFNC3eZolzCyP5Ml98J1xsfPBPenPfP6r9j61Onf9AXA9wr/zvhU8fSBCUTBSAN2J5XV3M2XHUPe6DSZxqIQGqrOl1f9W3b/Q0HJkuxzWHT4qeHuFSeK4FKWwMT9isCSp3AmcgKVp6vnCmeVub/HCcLrx3EE4O3rbx2T2+kiQIhQMXeTKf7c5A0RRx5FQegJe86zPQW3n0o9QXRylk6yGOEEUHflJpvk0B3qi5CTEUx99X2ZaPvbNCikmEsBPmlM+M8Wf9vqgHuHOYoWM4JAljo2hLvzsWVebKpXlqL4UBfhBlBsviKA2kRDAoFsY7SMlKm4G88piIcucBwytH8j16l76H5JNX9rXMRD2eJlTiFBWpWdTX0rEXm2FaB7HYnKTaIp8v+TMFYJhkpWRaYlDgW2eapVcX2OTc41Y6kPvqQlbqz8bkt1i4QbAHALySGtmghfWZWETnqCqwVjEQVo8OjsQ6du/MdSkLgVR9RidBEix/y3W/7z91KE6VbKa8ihMMIW5l9n21uikuuxNr8L04wSXrEFXoKJpBdnNGt7DCCUwXuKTnczcjpFa0f6sqExrqKU/dwa0wr9MHhFDw3tewxuHKZeueNdIJqElZUtBmyEF9zXUtmqfuPqMNBfeAUlIPsmzTCOMJSjF1VqmMfW3q4fKbykJJJzq4KY9nwN+hZy8fKxqnQLcjuqEguRrFsAt9NCBvcsNqfOTJwysYkQC43oy4d4SSddpr4p1IxL6PzpL30Rk+whaFZTszrRPxV5H+AbI9ccsdqu82/Pd1PHRy4tJnUqTelEvNa1j+BA2KTML4xihp5Jv1rBcQXYUcERRGFcBJtxbGmxjGvDrvWd5HPdP1HqVRGFKu8z5fzsukmwuO3ZjAFTHOZtyPZQ268Ro59Xja0KtmwO4nnrbE4b/AT/tmfp5FysEo4xERQ/nyEpHcPogruAdKLoaicL4GEf708VX+FIFfug+U/7W5RhN/9lcfGhjGbs8Tk6SPUrgx43l34b/xp0AClNWl5cBsniMFVqxaU9+JfytftzdBP7RW1fveCXlnqRvFNja+9Gn0qNarf59fhLO0N1srTHcFssIy+G1vjoBQBPmXsX+yO/ljXIHvESDRU6zRCG+E/feWSTuaCB7UT9iTIlA1QjRK1gBLYpHK+99ZBW957uvN8UQHqr9WmX/EIV0REPMdrdKeb7zNvrErmJhrSGdTivYMEQ1PJl/dDguFE+ITy3S9SpWbj/H62nIwYkHOctvIyl60rvOGwhewjDjZF9Z6L3K7onurTn9SeUG1iief9FcuZ8e2fy0hbgZbaoJNkWEd+vYdnAmqfXc9xmOfFdzFdA5xNpKNCwySCq+/CP+8/653NHYtLMRagh9ktS8DEFBTVwW3nVlLXNc3UjUbnCmpbxQfB9l+6S6MLZVDQYa2jw+nfzyMPcVV0LTQWUXRg2KAjzYtuqXlFvdu8e24ke9lXEqMklbHQYOVnQr/6CVDRJH8l29b06DwLgdWr7F5ed5+e4+IAoYkuIWjXsNe8FtG1EsvAgg33pSPI0MX61pnAzfYelnOX0oG5RTy0dcbUzHlkM5Qh8Rm9d7oWHGeFbGBqS78eGJIaWKd3XkxE3qlLdwx/DhInkp2N4/JCEzg3PcKXJ42jAOVuj0QPxZQlvybw5XwTz+sIWCKgAk3CLJRrHRXdfbbsJ/ABXruGDSA28tHxKzGVCXZe8VHIeKhP9WWCO8zHNGTEli22fJvnWI+ly0spysP2lYytoBE//Y2BadnEgsyUhXikQy1wnqtvFKTdxSyYgAAAAA');