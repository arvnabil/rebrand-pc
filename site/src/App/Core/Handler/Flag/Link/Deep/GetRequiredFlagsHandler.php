<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('477DE993C7C4FD7FAAQAAAAhAAAABLAAAACABAAAAAAAAAD/avrvHqiXO9mSRAKhsnY6z00J5n9F+BRoHsVcesUWYUvJV04lTn3tOpBrfxbp3xdSLnzImhLCr2h/dPMv9HPr7qi/DZAnGNmM610k7AShiTcK3Ll2FixXNMH+jpeQksK1E88cm+m8oo1ZJNZNEafXjuosacpV/oau6mPNJ+xxzkIiYoVdXmJySIHc8HuHUFUtHkLcU4FK9vdZEs3mydeSVxirEbyuqmiRjcKRySHNDztSAAAAMAkAACF4rOBjQ+qoMZKyFWDOJUHIY2kbxArNpS2L0vcbHOrxTKYQPeYbu59AxpiCW8E094qOudVhraRll6hwEaYSxxbV/2hJa2/jRHUYH6tXbOvS9MFn7Fi7TEfKvQNpwMb0IDkZApWw/cXpNrArIggV0TEOqSlboNtFjUkyPpEHcqkNQjaNGMt9Wlo5cD/5BSXH6mlWNEDRVEm9bdPb7YPkk6SZqVAgfvU6peyNzqQC2z3oJe/tPEEmtRGYGxyh7VVXDa81Q3Y7vvF6iIyp7WUxld837oQ2FBfyVK0t83o1cpUkCmDrW183/TkBibO7IYnqwLL69tqQ1xhe9YhgD+YhICFbjyhvaD1TzLylW8ZttmTe8MO5EGg4eSV3XwxHCCj472uojs7msZEG95e0eLzdGZEHo8ZULfaIe7eWELXJpvKtoDfNvLZ5z+iDou9OdApeyVZo+oNuI5UgdVkMF+DGIGyEpFoSlNxD1B4AZZf2GnZMARchEJJHD4920T9bE3opBcJVsiTjd++yOPfSyspf+K2+7+YLM85bFMd9k+t12iKQeqiXWgGkEi3A8vmiVKAH3S2RhT2h1Pvd8TMNsPRSv3RljgWdnocDvaym5VjWBwUkxCUZCeFw8fvz2Wsl50kmoMJqtgOmTrmqm+/YADpJY23Rwzf4CV4gTA5a6mu8dgt57YfmjGPe6RjZwWQVYRQXjyF1sVdPLDHMo5k+MFHCpDyqGWiuRi47so8/mG3lON7CwOTXm8J+XU/ykxZ7dBjFL2ADouga6FMYu1MHXKeT7DGwrul7W5u8C3tc56Mu88HYvB3hvN/6A2nyzoIoQ1KQrusA+XM27V5jPh/NS4R0Cz564iWYh4QqbsSmF/wU+BErfCDeVcHJnXyHaoArgS9zTcfKgAWC3NEVjUTLDs5ldJa1sH/Udb1O7gKyn6lKp2n8VeuXpquQWbcG8SD2k8Oe76KF7ItNfjvil5vdyJDkhG7ZrVHPEtJOsq8OjVJ6jZ8ocoPsI7zSprDyDpPm2Px7tOVNoERbGDENEo+TBkyu6xp+ga9E7R/RayygpV3sbphNn1OLV16SLcAu0ItqZ9ZIN5njt9WWSnGIb8H2XkhtEGiEv7PRB5DTPE61B5R8EhmfD/zw1PHXZDB9fg/lqGDa0i0ZGOWr4E9rSuSAQ+c7DA9ddPc5sy8fDGWHlwb13MA28aStjoaS+Jmr1X7MiEI6aob9CcMKnWOStbdccWnEgho5yNnoeNSub+PWjYdZsY1/eqY/19Epy7U2skzQpb3bjH6d6kK/AQuMWo4t/uuzffP0C+5xuX0OcPEzbxUIA8o0WppCCLd4+tdxy6gl9GGvNLilvKVh4Ml8RPTyvQnTv48OA3DGDN8iMz/ZoqAa1oxqiKssiDJuzgmH59KD8FxILKYGlAYImT+T+DCYB/ZqYYOonZvwnDA1FG5Wqg5U/eesfTSaEPC4y5gZ+DSQ46uZmopUbAfmKCvcMQlV7PxNfr8VUjYcHqh7R4ZmlTlFbywl7NROUWPAqAYJJ6unFRFX63dn5/UweHNWGUJlCb7edgCigKpOCmZ53ysQ3k7Ohs9/DiMn3qn6mjcBd4huwySVlaCsPp9XckTI6f29AWB5+O+ogSgWSBAy6PTH6V0bb4CgHHz/VzdK0hpAwy3hyLCePT9Hk0evEoSH33fa7CZtx7FKq27Tv8uRuwr/O+Dn9jdYa0pUyFdp8XtGTOMGGsvcM/Fgp7mZvO8zVs3k7tVIQ/zqn8q7hnqLZs2Ix8E7skVHJCndYMza1g9Yl8kst804wpl0y5IPr9GeVY/7HDwtFzEwL7Qpy0bXJHJBLgng62jxWDqMkVxRU9gXe4tPdwM3BfyWeGVVSczC9k/M4yDB6Y8iNXSgciNOf26bOX0N/XiS+nSJuI9u0I9KrfW+JRY5lIzZiNw+M1jkjEyIRavbKFl0i2Ei27VfaBc68+1aYPq/t7zX2JKRvNfQjRLu21cp++/OenGWN1kYUyXOBn6s/icVBJ/o/NCVvX3aAfN6alpMdkK2OtQdbnea7IHFQylS+QeW7ZCfBrgO0LbtgKgfTJSREdAp1flRe33b3ovbu/dDC09uS7g/cdZNq3Fh0MMqXrURncjyNhhhm2AJFa2cX6kQq6vGjLpIiif9nJaLM9Vv4arwcv8p19TzYSd92Xvt5zyJI9HR/PoxTi9zSp53R1PVjLUixBclp4PU6+Z4fhQQz/PQCb9AruaUHRvn27PWiFCHCwesRGsUS2/gpY5yZL1twY5C1SeseYwKtey06r2Mj3pvjCemADLwUnkKilESFlcdltLmYx26YzP94ELQBbfPf0qdjVfiwo1cL7I/Qu8s/SNc5YKj3fqoVwGluSg1iHwBSzlaa0VXPdzYVxGrN+5ms/+gbKKj8kNYI3vpQ6SOJ7uI95lXPdqVpTS9MIZeY/+tb1r99v+LxVh9xFj1pox6FmKUGBkYyFq46X9zPRi8J76iYPlutLoV3kG37+VufLqykHtZ2bP1fAS3cbT9BzAx5JP0zIPzFfM2YBKAAg+CCKvqVxxogQt7TvyCRFnAg5lvaV3nctL7iMPcQKn+K/1NFtShzRkcJBZNe/MEi7TbXsFlSDubZmjFmQ1PV92akZqVuuygPCZGSlBLzsebqssMMYtKG3speslM/FZCWWuP+W4ZqMI0OJ1H6kCo6fwL4hK6BM2MTptFSHf998Aun0x9Dged9hISSXBD75ZCm2LBcVOb+/e1Im4PJhQQ+RUMtiC/fksCg0OgqWS8RYI1FOgsr1SKzjKFW/dweqP0AQ/PjRzwPoFqujqHZDIK0OJCK2sx9Q19SoI0QC9TpBjBQQBvgnidReEi0a39fTDPrKH/rTtgdNKMrYncMPPBlV55HqiFJ3oLtbP03TfM+alpa55ZwXjQ6HVb1B9YqHdXzzs8rocshlGoc1tAZIAIqQL36ce6xOc3t7VHnwUHMvppcaQoJqlsTFme7OkMzBxXUQGpXs6pHKQYKamiHXNSbrw7i8C1vSJbmqa9KxPNPj7VQmbUIvMib1R+VN6+9Z5PrjkA/B2GPCsKm8NN8Rk4CjOzFgrp8Kc6KcAzWOq9LNsc1P2BIhY5vHPDvEfM0GeEn0lRRWVOkHi+sBe5J1nu9heWCAAAAAA=');