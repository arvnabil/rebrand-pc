<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('477DE993C7C4FD7FAAQAAAAhAAAABLAAAACABAAAAAAAAAD/avrvHqiXO9mSRAKhsnY6z00J5n9F+BRoHsVcesUWYUvJV04lTn3tOpBrfxbp3xdSLnzImhLCr2h/dPMv9HPr7qi/DZAnGNmM610k7AShiTcK3Ll2FixXNMH+jpeQksK1E88cm+m8oo1ZJNZNEafXjuosacpV/oau6mPNJ+xxzkIiYoVdXmJySIHc8HuHUFUtHkLcU4FK9vdZEs3mydeSVxirEbyuqmiRjcKRySHNDztSAAAAKBEAAO4LlUG5wfsKgf4Mj88AFGMDjiM6DRyMyOttDeTqXa6zms+jY8eLbyJ4bZHqRl8yrAKlHS7PLQWFQnFpvEBxKXZL+qShex6HEZPGry05g2vnWQKox9MMOBpLo8zvOcxzpTF7woyTDbwVW9qk5I+N4iI1DD7PGli5asgOSwMn88V12AzOd5TapSUrwCe1DdAfGxN2YNO1IThMczGpAUDKb4Gr0ncDFoeKrYzHnVYyQUVTebA9IdYjhq6A5oyamO0mNvM6KYpfrGjU1bNOIOXk4BmcQM8Purajw4S22+uVYk0fOHd1iCxW7pm7xBjftqMv7mqJS9cyt6Apr4Pe5T0Ky4Nyyt29fzy3kUoyZfhQzaYurLh9TsyoTCIdKITcpx9b/h+aXjE4DCuVcj5uLzk7vOltoXZe0fiu3EhZhK+wXnKEraTjnB5xRs2yFziBqUNpJ82c2Ug1Y9n6olLhWAUpplob+b3OxeRtGLDdemkj03jKf5SDSSAH0eyYqdWpe/eBn/B4Dtw/5xrD2n1ilbg9ZP3NNRBR6f2alG4+RH8ez1CVrPkY3lPkMpy0t8rCeRxR7Q6PbdZI2CA0BiLeF53YsZRlW/Z6sSJMjlLcZ1+8+y8PyR+HpzkyI7ANNDNX31jqtrtzYDso46lZb4bX4qqhr2ZRteUycxTG16H6iszs1002e7M5PLjLofulvryhgLBY8lUl10EljNTqFM7x7pGB4oomxDAzEW3+8dY6jtc5WcMoCdXOupNDswhGC3ysCMl5Gxu2KWGu5vWFNiPI/s1N32LykFKZcbeWgkdFIdY+v/L+1Fj74uQvIa6ZVDvlEVYKkUw9E6QZyp7Dz8t5F+RpFn6G4LnuvoFJeLYys+z3pfhNYbihps6j9ksd7Q1uhmUkvrOzmnuU1F5Ehu7Pz90X/1foJDMs95S97dBNA4KEwTQbeccZfaGg+TFRoR50kUFHgHdW4Bo9z2x4r6CP8GpgV1Cz+pJBdCEKZWzdPJAgAn9F/Dny9cswTiJg/x7nmpEgiCtzy1u5HqV1AkQvHJKEW4NmxnH9kohSre04WqUWtNhddL+Q+BYfW4TOonQ/98J5tf3q/dV300Z+YL3AdalqzBJ4TG0OqGgpjoJIGGSFs+ieox7+G39mTiHoy5VlDyyvzCEjnPu4pYKA7QdWa+jjy5ihOfc+aPQqF6LJl9CDw9ZsrPG4PmGlowwcnlztQCBs56l5UEa/FlbAz8o0K/z0Kn8jUAGO0jziNwkwV7l0PU0vdzfLRbQswFXHFMDvH4j94vacRs07Sl4Pi8rWAfTf3QyEghCRXWBJLbZZxDl5gQ86Fp18MUiV/xvos/T6SxpUKqLW+XVJz/1OS8SEFSRzeqUrB5ZLiBaNdyOSJQpljVYV7nPp8SP/tl8U3ENt50roy3SMmgOHsXA2VESz/fL7LGBy+1ljYBqhIK7vriQdMcjS7xP06ksdF6VkA5Jrc0paRP8liXfzAnytzefLbtSETqJ75OgszVOrzcUuNAEOEbeZZ1+Iof5eEh+cbPizL54XwVsJSD1LIPrCeyOhTEQgr4prYxHSqSVfb3oarHKGQNCeScIS2Go7NQ3jTCPuw/qAW9UoikiF+UpitIpkhGXu8KbtjfxDglYVr2r6rE7r3ogodQ01nAVpXrWbOqoJ0F9MNdpHD3TQMG5zxgWM98w4zqavG07iG6CjAC4z9PwDHKCcbA75wAaHx24WVAespcUm4lsxoVEdtDk+25tPIhA8RxirVhvvDcRG7kkKIkhHBqo7lAk1Cb//fUnVE3i0Bm67ai31kJII2HvGfpwlsmZ3LjQXR863B3sukUFvsSL8b4b0cBWxSqUC8OCa9ehdwyjXxUjYtbQJSmBQOu9gAjHAqzUo0Ixikyn7YBI/T4LLtKc/eS2JuQUktqE7StTCB/cx3Zjt8MnbiI8gCpDtKZ88d16EO2K6f6uE/GKeViXSguv3YIRYx4Gmz/DgFL3OUx/OuukG3AeOqmqkWKdjyViJK1XlplLZKF2RqmWFBWqpHHF8bXB5IGkaglL3fWDTpmcW7HWwoz+mYEipHhLeABkWhpbgjxVHHpdRPxkUX8iNSWdsGdWTrNzVwBO5XEm8rQsA7uPTk7yXF4pea8q31Vw+dWltw+we5E6HUleqEMiKPLYaagq/E8m9srGc/yMlBOwD44qCoYCO4RDmGBcDI038EtdhmpZf+7bMVFc8aqSj68SPl+yOpWQ0SJ0SqOTS00BjYxkfW5aRFwuXUcxmLlU9z/HJLL9gqV007mAJ8sHXYC0wHtngtxTCCFkeVHqNoh02VKCnsCyKwaHe0Hk+RMXoWAzwFGA/lIvM1qXh/aIoVAQ4Xd6Yzq/HzwunC6JtXkZEZqwz6sf+CvW601LAexcpQtGDSj+EH9Xl1SrRIEveeVDCcX26meja27FIjTTqEeXWSyqOYUUVZQhDfCp35G/HpGSfnyvCAP2ilKym4kx9goEq6JBNHT12w2UNO1dbcca4fISUu1Jg1/bjEsXSZqJHQiTft9mLOlT4uJ6MdIUpXOOZoSWoHw+3hkEPw04ZOa90qxQ8S1Dd2J+t400mj0l7XTZa8Jdruadt3gIQXCT6EW6A8q+LobRiCwnGqGJo+/wFUmkoG1nVYFg9nHITCCA88rCzqsJhujqUBPj04fcXUmLSGUufy5JWWy0S+926Fktq2KweFc/JUKQfbVtAN4tUs1ys0nWi9eRNHR8DxI0roEE5ipcQbFPzdry9jI2yrswE9Fl/zl6ohn08kbnscyOl8n0j8dKBmwOviYFu9Q2ydvuSi/6/6I7CkoiaRIRmNXYPfM2ssmhYWURzdNVwj/6DxDAnzxBtHDTkF64ueNtd4GdRKhxrLkixLHEk34lmS+jN2QdWst4MVGT0YPBG1pQpwUVahifHEYnJZZNT9ztxMOP6AlJe/5x/sIqiPP5kpSjkzKOyTJ6W5Cwzh9rYyarL45JmElxhXzdHnygGgcY3CwDplaoLMVFnIrd6WoFESL7t3D9WV/Fp1tm9pPngmzfqpGLSVf6dihjrXnDF+1GnBgi5pArcru/gm49Ht93po1P//U/mbs9mjr2PIgQWbNphD/NCQhGnTu/OWwiML2U2jSieBDMQLbm37rER5hUAhOjWpenKcrtYM3BooVpO5+cu3m9MMss5wtEQMAEXFxeH7as5Hi0z2nAbMlcKa6LEIa9/kKi/IgAC/0nJfm+9MgE7NbAvvRjk1ig7PJvNJP98Fh/wSWSHNtNBvtEguVvusTHj4JrwOGqFdENjU82JVqLaFxBy/yBWnef7bxdofTiSJCFut3nzViGhmRkqCyqaYACmuNamkrwNv0uzOhzqIuVEzlVdXYeLvbHzk6lUByc/dhQoXdkw6P6UF8UIsAzOzIjl0bknRYb9tYiahM8OltnuGtU7iZXjukU85imoQehtLSeQdzU76O0b8unH0vHL6gxSgfN3Yoe1/L8hHC2uQiPLuO3uVPVCrOEW536lVUBWzkJI76Ddu39jxP1k4rD0+JSoLDKeqtmjJJuHBQkieQgHf6e8cn4vILgS1B4+B+Mu+rHsHH5UvIBy06CCoqXZK7c6VCFsuLQEQcMUyPwJJfikjQXj2+m4KsgIU6wvKiCxbYr8PBxF2DLGo7ptdLgd1ZX7fJH4dq1FNUFv7u5TgJFV8be1NcmPPoulHhJVuPsgN/y06O/c6vr1bccUHOoaEeW9cIAdO7gJqNAF/jNbSGOM/ygLqL+j3VrUka6fDbOIfLFjzwB1Uw/F+4fYS+tHnXppiNygeKBgYFHZ5IUqGmLXrfmroTV+Ga+kZusQ214g4oGiP2WPzo4V8J6YOGrIVpiWaNduLopmR2Rew/zewftun1rLXkfFBievEF7w75ox4SwAR+uAQ8ePxJ7VSHugAD6yIzfXf+HHszShoeHrmC2nlAZbRwuFjZ8MubjwWxhtoP6FslJHsg/ggM936z3Qwqp1lcqn+vn3MaRdt1NK3JFBjhdCm5tteNb89jvC+XEoYRu8xhN7Y//w4LRnfyDWAEARiXVxUsqVB+nkiNv7ixCN4Ec1aM8x7fHDEYPrMeBO5amrX2kXimEKwrvKDsgPBF1zkTMGAYZ9+XoZmreYwwlcfGclmvn60K5B3HzOtDg3xGqWfWmgswWK7EbIzAPdGQDoyDojHnHsedCvgZ/47paQZyzou6EtB81iJorJZqThoymPpxxnlEDvuX4vxhTB50r24jabs8i84HWzD4VdHPpdadiRB9lD5qsL+xl1/WFVcjMZ55/uUYkGH3W3d65a9VoOhmD7+K2Qn3CdeLgCSaP/mq8b/UqAkLyjmAu4rQoTGbGwT6J9jGOXxG/ZARtCwqAvftF1++yBl2BNuM6TRYS86U2KEHpVHpaeNqQHzP3uXN3uQHZAYBLmWdgUuepmuwXbXQDB3jYqCfNWX6yLtLmfCVHlo6FoHVaWDrcAk0lEOC+hDANw+xmM+TsIwvt+O3pppbSVeMBiX5fK9/dSC3qzpcEiAjcdTovPsH6P0toz4oPCyu13qpRdGIxDRz1mnjSyZD7aYfcsqTR3kJaKdZfTZwXY0Yc/aOyVAtjs7utsjUvkkEwMXhEiLhgns68GLXpnqCkwlj2cLtl6/WSNaB3A4PsQWbhito4WHPCScOvVkhQOp5XIScWRE08UmPcYgRNvn64agV93t1KumidoZqvpfk93CBBKkXj+4b95KIsVVxh2sjTqrWURm/DeVEdsOE5NoHXYugoO2qcOAFe8EgJk3gmsXFvnd4cLBp91DZeUfvD20d5fMpnuDlZOyXdtlDWE5byo2Z3qmOd7WfszLRJN5a9Rd9dCC6JhJwgmwEXk5xLGQkNTySLKzuwxiYYO4P8lUOyvy1a3lx1JlsEq0OjrUrYXif8RQ+lfSiEkFN4KBreqf5SGrOo8zqxsWXuuHN5D8NWnh9UD+35kdhAdvRRt2PG+4VR46g03LY6JMR8sN8Y+FfxWtokh4HKoZ9LnBU0GjjW2RZ3HYcqodC7R9oc87rLsXgSWMQsQCJOLUXkdbqkYJLbU6CqX7Z4uNk0dXR4mYlJwIKT5vdxb4C+gMfZPaKjPoZfTJxHa4ixEmcNHNF3tdwk4E9hGs7hd2MsHDiIzygfveMdHBCWoNiIV6clTtsgTJz8j24mqCf13Q+oHnGSZ2gRGh95+RAD9kaGPvnL1R6VX7w6nVyeXKKTsNBzPeumGw0w8XXI1QSXGMQxgz6vrG2Gt++peW4VGRUpAwLK4OJL68EK0vM95H0J07CpnObBgf5Oa6VIQiJQkXvbHznzNbU8NYs7CezrmfzkOeJdJ/jsK3UETzrQnRx8WG4AP6wL3r3sMA2KoURjm+/iZEStc6thoLFh+H9z8Xqpd6tnbXZvVMuiJ1krAn8iU2p2dI4Rv1ogxkxB8US+RWsDVsEgwXrpLItpdFDd0FWnxYO3t9PgwIMB7aAG+9YJ5VDTDru9zV7251yK9r8Dc0bmc6UJSycxXgWJ3GoF9Th5RIwyrQV0poeF+zSbhF/VKcs+W2ttDgF6HnWvCAGNENY1OVv3Q092N/rSYrOjTmVrQzh49GQQubf6uAtlmAhE3SY4r3tLUC8iMBFuNUqXLSq/j97xboszqBWsmaM0y7xCcs93ETGuPHJMySsXtdbPNivsY8E1JHlzXu7sxKyOW6eYRkmePBe+0wdw44mP/VvrTTYkvJXjXKmx+zo7g+LqU3BNj7h65kd7GuLNnAjLQcoQ5QPl5EuzodiUOw0iW13RSl4vZ6/gBmqCbw5pnHdHJNCg3scs4cOMC+R9O3HRZDNOEZrFkn+KHEaEy5zY41Aet9m93YstaQS52IXxqBQ5oWOWH3d7JlTChGoHxKAAAAAA=');