<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('477DE993C7C4FD7FAAQAAAAhAAAABLAAAACABAAAAAAAAAD/avrvHqiXO9mSRAKhsnY6z00J5n9F+BRoHsVcesUWYUvJV04lTn3tOpBrfxbp3xdSLnzImhLCr2h/dPMv9HPr7qi/DZAnGNmM610k7AShiTcK3Ll2FixXNMH+jpeQksK1E88cm+m8oo1ZJNZNEafXjuosacpV/oau6mPNJ+xxzkIiYoVdXmJySIHc8HuHUFUtHkLcU4FK9vdZEs3mydeSVxirEbyuqmiRjcKRySHNDztSAAAAcAoAABF7pAmGqW0K0V9hnvOz9Jwooo+sOi3n0M9Li37/AQJHNgwkwAjmAW57npb/hewg/tK/+pO/h77lrncENlT0Uij6yuw9v4JjjYhW5+d9tEQ/ucblIfWOLpg+kGv1STrepnRY2mAs4Dogj/mc4FpUfyy35T9uNwekZU7082OUUNOaNaSP0OUVuraJ8u73fwITxJ+c2MGBAolcCtVyDpSkIT6eErq25c+Y/QJNDbR8GZifbyqSdY9cdy7WZFYjKncl9veDx5hbTJqzcv9URtiXxYmAAdatUWQQlOd3sXMTqaEI8VVvhLPa2nRDjNfGU3/lNNRose5G8dfW0JmPOqhhsQwYGIjcl/Fw/wfffrtkhxULThDww9zLF2pgREeIut7MVqzkcTuwEmaOJKcuBGkiepaSwgjQsizfvTUgW2KjUAgihgKcfh3ibBr8jcguUBODyYGcy9odgzy5ZXW0FL+S1U25L6noX3ZoqDRot1AT7YZYSPOS3Z1fuoQ3yoO9Y741X0PJ+seVVOGLUZEs8ITLZnSMYNjyhn9aO9rGqTcm92hhY1p7Z0GCy4Nt6MvfikLlWNOwsayZo1iFp3ARTURwr5bL6YCWEA2BrvREKy2jiIZNA9rXaVec/0LshqtZ9NygVwocqvT5ZL0xmXPTOXUY4HzCCImjR/VFErd7ywGGRUlKxTjuTIV6sgF7GB06jk85hrXaE5zyqzwP2r7643VTU+Cru+Dvxpswl6273ViPogwB7sE5yFGsrWNIruaXAxsJS8f99cCPBdQhAyecfyBn3YoK1uUheYIcFkziO+UfEXHKt7kOBEUUEYp3cg0tctdCW2XJ77ONF0Y+dkRq1WjR0GzdRimTqLqrowZUjsD54QNhCHhucZGoX3rwAaEykaeq16by4iqeK8F7ybV1av1tUoYCuQOGyxmmDxlKfj9FIKK3j+rC4eBV4xchJ+8zhRREo0iaNpe3XVE19QILntQQO/qebvX80sGn016KfN957jIN5DiwtYbl+rWqjq2XKUeQ0szfr4j86wo/zLsYSqgs6uTjmk2juUf9S/noqCLwFwd3x3yLPbCbk1H0hLAxn52uUmRcSx/JTEjSLfxOqq5c6XwggAyqrdPsm8pOzoeqZdrVfOINqWBpeM2zS1xAjoAoWi9s6kzZ5bUHaWa3ow4na8Vj9dTEiGbiUmIbuckMqvdERrZ52pJ/UrOGktJlI245CYRMLZUTBP7cmrTYpHYf+wt/GYDwRSkw9NUlPDlIq8+04+Qkis4nk7G7iLiOzRhl0V7zyNq67Y907B4/sCpvT+bbP+APhXMJXoaiI3IYmr6DrfZgLglmLFl7jZUqy7u4k82itmtAy/mIoJXe0UqPjbh7cgTdBZlHzT0CnzhpfKJVNB7mwnotdViy2vvlMcTmOth8Z59AMm3QND/hGkM0an/Vun1Qhoahwy75koysK1ftpikkZmMkEfQXwTup3CUw8w1VhWgPn6bkiqw0m0FjLUfIq6BwIXMto2wg+bBlihnEPzc3eI5rvQMZPb5cwWcSCdhBeN6n7FohVLGPF+e0Yw3nG6jTe8qTKUliy0oMNxIkIl1DWJzKm+GGPm1oO3bmxUwvNsJ71ISdsMEIPhV1rWpNttb/n7pnNL/4OAv6QdcEkZvbFk3fr5F8mKRF6+GIDdzuVbEBqbd+8u9lz3Bwfa6UmtfYFaEkAmPmL+4Xx1qzzZQP81+oZAmllvQ5VqYN0aWGuBAyinC669jKW4oD4lyDzL3sVyEr85r4cuw9AOsbtwCRvYFBkxqpUzrJuEmXyhMwLYdG/KDNjmM8ZQgVGf+0GwuGPWdOzCfEFrAryt9tXLfIh/GCHW+zQmrHDL6+OQvcH9r+mstNQb/kMlRe4eL7bF7g7IGDYcj4FzM56wh1Q2RZyUEJFIDvPamohr4f0RoPaIWP2t1un+pfndKV00qXYgtl20egyGQiqG1YHjkViapnhMt1uxM7smhDgMwg4B008zqYTHJwU1I8kvpe3+AwAEUJvw/QadjYb05Z6AVWK6fqtDnMjAiKAc/3p+zA+X0quOCFUaaB4/UAm7x1iMQF9gUNjEQT9F+tV7+TVlTDDf2oDuYIXJAm6foWHK+cei7rQCUu4CHXxMZf4BAgNkB/LlgAWOMz0/H4q9Xk5ywbm1riP0648Cp+05aN7kJ8s6RPVB/GFsyVliQfKaeIxkfrzdQZ2g0ECBYnRPYUtNl/mq3TikaY9c2uHvg/dcuGQMt0513s4zD270RgCdpb/ZlyqNOuKlPrdNtGAA2o3s86r6AscBfkf0MDds2pM7EZvpU9HU2Hi89d3dfpaGcu+aepQRYppSBLIkNorY4Q4zRq4s83ADghpDwrX/WbAGNPKivJKFUdj+P6tNdUPjLLZkefVbTPLtLWzd3SorrWwMPm3BQGAN/o1xKDWVjKG/Qfb1xxjfoFfp1kjBDCDwQnuA+zmfTzuYebU5rfRsghwSZVwzTI5cxdVJZmIIud+rhwPZslcyJTG5SvFLnovEgiYsHNFG83yCiSqug/pvEQs7/wwA6TGsz/jZaTRseRs9hyIZ+v1/Jw3VvO0VijoAhLwwdsd3ZYx1KuyAeS0dfL412s9fxhghnADA/XqpmDfqD4KZj7wR3K6LLrSb/eoDP0UOvuz3B3U9q8rjgDNB6v78KFnhxYcKqiTYomR4UizA4JXKEv67bE9kXi34l3h4qtrRolmUEWg2qNAevq2Fx0ra0jSH0AoBp1wfSu147RavAlX97r+Dgn7uV21SWCNxaBLujsAkQzyVTISaBynxOZiCv6qlpIk/DgU2r+M9wjQGRUOHnfiWCTsc88cQKBpAZxUJ4I3KNX2l8jFmyEp302l+1h++RS4raMc1kZfKk0mI72vE2cpc8cIzvubZsK5wOuHdOpkeoftYE4yQitLgWXdRnVUIbcQFl77AD6fZoHPuiHLmbb8MvzvCLSCnky+4wl8lpcqJDGlIIcmeWeJTbvC8s6cwmwnlJgyPgDW0HDXA0BXk3JxGKME/6ajgELZiAr5/Yh4k2qp+wpWoy+vhI6h6URtndKHbqydJeAajQU6SdNh8Uzd3hyozFFALh7P3dXHt1LYhghbb6tPUC0UIiIr2kAfREUOKHHDIrNi7ItDGVReB8vyN9ssIXtGjqucTeEQ0tx2gKdJwyCmhufsg73/dKkBSkOh86FUXDqEsp3eRfqlyz2+b+tvVKM75WN5QRmSFAcudyA397wBX9sYgSiWmEkJSNVgXcUHf1cksPJk4wRBg9NF+vAZiyZvP+xNpN9lACBZnKny7DlXAWBdp5cTq5YaJpS5flAvvlqfObhoUjkvgB7cX+iZaJmxno18C3NWK+ujYHRaUOvcRK8Dob5shkEkSUdczktmB6TSxwzGrs7+kFsONWW7ZrECzmaRnaQX9+gfb7ryPPVLWhV6X9Ceybch2DAWjcdkWHXhL2JWDiMJfzRTAFfF6Pai/RWiZK4Z7yRxqs5zfwphH93PW4wJCjRgiH3tWQdWGZpzMBzPmR4Du5CVO9SQdV3BLbSCeG6G7Vpf4is3l28CJ+cMrJ684uaAAAAAA==');