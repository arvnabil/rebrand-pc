<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('477DE993C7C4FD7FAAQAAAAhAAAABLAAAACABAAAAAAAAAD/avrvHqiXO9mSRAKhsnY6z00J5n9F+BRoHsVcesUWYUvJV04lTn3tOpBrfxbp3xdSLnzImhLCr2h/dPMv9HPr7qi/DZAnGNmM610k7AShiTcK3Ll2FixXNMH+jpeQksK1E88cm+m8oo1ZJNZNEafXjuosacpV/oau6mPNJ+xxzkIiYoVdXmJySIHc8HuHUFUtHkLcU4FK9vdZEs3mydeSVxirEbyuqmiRjcKRySHNDztSAAAA2AkAALN0QHJOsxbFACvEeTPOhb1C0BX5/ba/Nqu7B3hPNcqM5WUkeAoK2aA3cZwRrNoxUTtYhlPYFwd4Tzy+rVvxU0cKM3TjEJ8JcyhwfFuYxpV/8MpgclOnAE7pNNK5dW5XwYZiqOMg/HXkQMh4BeupNSqISSO+ppmiwb6yzPogk43Y588YOEEgOVO1XKgjf4nwf9IKLuzTKC7HWdTk35O2CpnFZFjXv2dQvmfOCU9hHvS2kY0J4Gk488/hObzUmW37OlVS6y0Hiqom70vV33meiR47CP2f3epWIK4ArTL+hmF/uBT/OuEmAKqpyZY2uITKLFwSOgKfXjfChORYG70P+gZLzmvdXPN896eIZSCHS4+baDt3eblpE7LyZCBFnPX1e29X3NXAegOYpXkktNeBZvgMXZ9AjlF0luF+pMPNk6mRzC7u5W8na4NO0P/kttGQFRUzoToaJ5uTbTcenQhpyKctEmB0B/BDrChUv1x7PJM3mFMBiVXXZu1Bhah/zjkZS3GBiwf+rKGJ0a1916c0HaBQvD43cJiO+BXnRTgwjOO1hPQbT/dD0hc6h98rVtWu5zk4gACDNsyYTAkgdTo/ahTI7eBOlYJGFubo+27YjZchbQF0pdYDiJBj9FRHqY2rSbfJdCaNcv6WY26EJtS4wofPWSEvAgOi6FKJN3twqfg3h5BQpovvh7ZMmIZt73axeesQWmD0kXUwmusxk9QNaiAwAGx56V+22NMcdeopBKCTlILzxayp0TRUKBlHg82MupkVost46iO0cQEgpQauQEOo6vQljxeAZV9wp0JZVNI6WHR9z56nmNQbPM8iRIkqB9fJaCQHgwmC3fUNL9gyjR0vCir7StvngEzjbZGV0NnTxmrDDVQr3BqITihLIUoCWSqskrz2yuPyUL+epNkvG72ipQMqloSidO+n2xgtIA7uM3XQbIIQ7lm24vUfS5i1fKv5SvHMgSl+xQ0C5eHSqoy0FJAWiDs43BbSfKswoNhfP4IuoEzreV1UFWcpw7bCg5D8tqtarQF0wEJYnMUvY1h/HE2fn5PaWI1lTKLSOy1PEZtvl7iSUDDEJgvmftCvSxpBM+5rNfTB47F+fZWsdS7X2ocueBhpTLjXMFmWAT1xF/Disycp2zUIfm2OaJbz8UQvLrc2eGR1zoQhM+7oppIOiYBjpDlAF6ufvTPU0J2RCWljN4nCDvUjkCiRnvUAOyOdb1drPMJ2sNcoLd7q6Qpg2ghglUW42KIQpsoqm7IAXMqgah8rgIqqwNweZSDD99jxk5Oq8ms64c8SJZv9C8lLxR/PBPRKdtY1+i1lpCOLzwI4+chskzjiUxLLK0jZOHctr7fiR9DgWFlczsrrwDLBdPDqx1z/eynu/viBErQkUoxVUeZpWwkqrRV8r0w74cbz5CCNuS+Rp9ic7F9NBUuZBKjESqmakWoTfcFdq93EimVYkMitwNgkNle/x23UOqFJA74oPNRfc7ZJvs7DRF7agmLwuVugM8zWIKOdP8S4uydUQGCB5/p3AibmvI7zKOH845kVCOAKn6yYChyYUUPlMV/mrsmFd6xtjR5ImVo3L93/IGGYyRJ8GoaRd3JyAx4UiK+g9CK4ynnn8uJ7G5nEL+UJpgemDLnKst4CwDsRR3P4UrQT8nD6DRipN7z8+TIYBpIlhjjHeU0eJ6RRXFvzpXunMgT8HIUobyD2WgnJzavj/f6r6NslB38wKaiWeCbM6zeUqCaUBwZUFmdK+hdXSwqb36BQfcMQKuuaw8wfvMpDJP77RZcRZ2lypEosdqK7PRSZfJmUpyD7dFpCWb3o1pUPoAXRynsICzvdGZDzSJvl1JEjzxx1FnE/eOjNBqGCPZosSnGMXp9n28HCnVfqZgaSI8VjOI5yiD7rYC2IB160/eDc5PPZL8gdJJcSjlvxAv+HleL6H01paucvtu7+Lrg/se2rLVdxQ1hsLCzI4zvbB+Km3zSi6Q1GyuThbfvRT+J/mugcqgt233RhIWwChA1jQzgqLnsf/0WaTWo8+pngdHiSaaQLi6qZcNzWQ7wiGA9Kf/jYQnkW608SohEkc94hbeqj8zzvNQ5RPz2KO7rk6tEpJuznFdqOWsS9rqJLWeC1uevVdfFUQ+xF7HKYgiS2hWKJPXX7c/dXYQ0OjyiViG3dKmpwo5PliK+/Uzadrqeo4Izn3YqmIEjFbg4t2ji32+B31n7qcbc7aUXIw2JhjbOfLUzSZjtgASYdSqm9MbZkjQnsXafNTPdE5JN4iW7XSM4kjx/b2z/YFsa9irLm04xXvlcsBK5P7+7emVbVA/H6RIsnAIh41T9rKu1Y+Z9nBWIP9Uu2O5XAuXmAgaoTTmq49i260SNmDYayWVohSamVW+8wKe80joOKI8FOCV5Oss7UlcxvDm4GLWd10zEdpYw/QzQxyn27ib8C3aCFMp1+PLBQbgQWkyZ0wOWH1wgax+PtUna6xHleQFD011N7IHkLjWTZcoPBSYOKc4iZt2cYVrnb9Hw/RDH14wLOBcZJhzZomxPMN4Juq3A7HOIBXLgXUVQW17YeL//2OKDnp2aDfAp7Ha+Jdqt+tf2o7D08KR2op8W1gFn0HDwZX7/wZRDRVe7d9XWv79zpkUQkRaNBvaMwmKiUblw3f2mNiV3ciL/AqLYGsmLuL9fz6K2SwT4iRUfgNUkSjEsfi8h8L+q1VAtVaWaMirmGziuH9WNW2sT0cclpyXdsMz2qnWNvNwtYaQb/AQx+r7K4Re8o00KwkVHssnjbCKumydZ0UAmwyphbuSxTrGEpQLF+bre2iMia+W3eCa/c2MEI1AS7OlwlYR5oD2C9TlJGX0pIXZvF2F/ADij6CbPhWXhCgHsYvIuOp0xN7+Wmgjs8o0SKCHuZYzFAUPo7z6Eh7v2QuqXg5nHJhK4KhNLZViYB3I19u92QZLhbwuhN7PYG2kIU+xM9Of+/V+fGG4Zc08I6wtj2lbrVPzpYFR+DNv9lJq5M3WarSUH9xdmwma3llHzyGSWMCFBzV9ya1HdFli44rYBT7p8es8t+NmNqIjMhVUv7pQaC4NZY4kQOrDw0E9KkZzU/o9oqnQaok6ri9dePrmlW+Xv+vmIitgdj7OxBiwmIN8yAIHf1zXQJiPwRIBbLw3F0jjk9pQB6k0cceVGfGwDCYd7IV48wpp4ZfZdVq4SMLq4loC+wqUa86GlqYmhhrWl3obv5hGLSkry6VCqIUc/5fscHk0GAal4VURPBqS9Kx/XS6PJIfydK1lb2QQstCQ5jjcqOE/VX/K0DhpIMNOsA6VDYUOjFNtcxhrZTsyHjtZ1TiD8LS5oFzsMQkPoYhLuSY/rBJDzShNDhYdYFPRhqquelQAAAAAA=');