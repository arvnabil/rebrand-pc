<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('477DE993C7C4FD7FAAQAAAAhAAAABLAAAACABAAAAAAAAAD/avrvHqiXO9mSRAKhsnY6z00J5n9F+BRoHsVcesUWYUvJV04lTn3tOpBrfxbp3xdSLnzImhLCr2h/dPMv9HPr7qi/DZAnGNmM610k7AShiTcK3Ll2FixXNMH+jpeQksK1E88cm+m8oo1ZJNZNEafXjuosacpV/oau6mPNJ+xxzkIiYoVdXmJySIHc8HuHUFUtHkLcU4FK9vdZEs3mydeSVxirEbyuqmiRjcKRySHNDztSAAAA0BMAACbI6+mvcAwVY1QEuOrGf1PqmkmHibyxUxEPOMRKNHrgirhwnwFihMV6tCXk2muLz+dzc0u0sL8U3Ff0tleX7ceSOQwk6HrndoqJclSGzoyT4TEkQ3HRB9fGko4rSuhNz0LJK1MwxYszeT9vHSqbyKwjnvwOm2VwNzP0BYjI8Gk9dNAc4zoYNBodfYSnhrJSu3cTXWtGENlLB1CdVxEPFFkYbw4FOUrgn1D+3oIDZJuF4V435uq6E77nPe5PR02QBBRraZCVs4nC5jur19yt06KBkAE/rIoIXC8d/Iqu+3erd0jxFkeS8U5mE4sOoXey+K0I2yWjM1yIds8eEggjW1GgseVbqnO92JWGetLcSIBQA3dQGkXDTvp07Vow0vGB8jPzV8V1F+3Tasngx19KXpfhEVcCtcP7RpqI4NlSatUkabHeKFWsENdLokyQYkI4PFyFfCqUhKGsOY4VtaTK278x1QLwQGJJnGhV7Ia3UTj5CBEBj1n/kz2kV9wRzRyzppvz1PULxLzlRaHr2q/680IZ5csBvgcVyhv6YgOcdwiuB+BJIDM4N2IPMzvCFhfcXr+8ozo0Iap0KlTfFzgkJsxVFUGVZGTOHpKuH/HzsTBtB1+O6hARBGB6yq1SA0mJSKseRmkcYNIHXJQCxQcmehjNKDVLpPWynNXe8IFUz5Cevv6t8RKJCuHhLq2pUgo5UX2RYTC0S7E2TuqPnQ4LV97fiURovgiuTJpDQXkvUbxM2aZ/HoA51mKnMj1ap2UpCZQOHprnWo5fbpSprInts9b1MMRqFF+hNU1ISO3mB8kfTe+HhNLaGTR9oklvABtxhkh/k/R4od6B1qddzolGzuW62KA47ABrtxwuugvvDLKpEHaVPuhS+kQszzzoRJexETKNRM/SKx2rtxvmiM0Z6OteBNyY5HkkWnbP8DhtkaWCCxGQtHLAGXanjDsTzQkcCGcAitQR1fJUh/LCWDB+xjiOnX+bQa2ZBQiRwCf5vkBhA+T/UC6ghppAXvAblwbYv65edbwTaBge2QYHqzYjy/XJ1pmjjOHZ/4peT0m77zSSIYKqyBzVixWpKzJCnNnIqWYUwhdpoy/zRQRU2NPdXgnbP8hFjvC3/JXVXxLFrWIW6c1RonMSpMGX5d4ddelPJpRNmPtgFmF7Esx72xpMr/A/yfNzPIAcPaBAqjNRp3BUc9U2V2FCQuXJJSiTethkN2fpEs+X176WXh98DQmSjTH6BhePPcVPpU9+hkokV8KbChmQAK81nZqQlupk8plqHeqgoiMnxtWA1AUtx9O3ZfERs/GoEQtdTGxE+2K7K9zib20QavQKPL4k353ZQIIMa2hLB/knqpULjcytaPEdwxT6DvqVEEG8q9pz9+Ylw4mlVdG/oGBnBlMMaOHEZSxbKpMJPojyU4UrU9n3f/W+GjX+8+Xpc1KXPB/Yd/Iz/jTZVdx3wnY0XSYmz8UGw17x5ZX07MWhhK3170PanY0RtcGKqLtaol1ACtOL+H9nXv46ok9bDnC/ibbIOWgVtp9h6PtGcYpCHmDMB1LoFcLKgvYi9tL//OtI9GO//A0U7AIkTb2ZJVmy9iJdV088wxlN2fa7B8mTUnK8ZVlsz4pSWPMa/ffV9L4qlNhQ5fMuNiWjqNq7QjoKWictedIaRMEbu80n1qG8jROZD5iy0Od+xt5V0Go0FxajlQ2vsYp4IZLif5FcRv0iZZiy+CKvixCmnqu4pJWti2KdgYqWgfoV+NQkWJWd5hJzHozjPy0VucgYKPpvjPHLfeT7AkVC6o0Tjd4ebF74MIb7K7ECfR3ovKspKbd9EQ6MBQaQCjNYTgOevEMxVDrsKyVh436reYAMG6zG4DDMdx296FpAjXFEwyQFJy0oNMgt7+OEcFW55sj/uv1OyGw6879cbC3DZNOlU4zSlfrU7kpPMOd8PcGgAxhXM/CP3qlZ3rJH4VAACVOX5seNiWNRfh2oO8o3fxcQ3o45GYhnBXFOWI4NPT0mmvt4XDHpW1vp/5ujVcihirdgYcQA2VeR6k34XzqxiIKC+cZ+jToPjTcCM9Sb52MFbGBuM87CC2HzCEI3eYBh44ig59wNw1q1rqw5/IF0wjtC3I/Bpz2wmaCG9PsmnplBOMNZoxju8bNrqYyiiRx1YDCcCrTkdwLMDoQapvSR7Y1y3Oz4emqvqrbAehfRsCdecY/egmFqwXO9xiebVqz26zIBBBfl+WgzI/XXK03JX/mVRktThu92vcgKeq4PQTI3HzR0Q95KDeTNLunrA3tDEKeDuoRcdcPQ6CxbU/I6pkAJ3Cov9Tv+mLCe4ljlqFuNQdNvogNRGele8P4dmFnFOFzvcOix6juhVL88Tcmv6viDXnxweV8wFY51zlImp/c4THEcMkYvwBuQGmb4ija9h1LCK7bwV7Z6wwnq31EO9jHx9VfVVotY0KRk7Ovzy5stEA49Tx4KGCWH8vet76p0NEsDBG7pUD1rDwC/hC6cm3UsisKYzutnvwTk0/J8BOsngCxXv/VNFw1mgJv4ikHKyNNbZIBW39IC8mlBJ9q7ONhOi4hKkd9jZoTL12lTQKJOJCehGsi8n9maxiXIUyJobT24kcQv3lrAp4WZ4NaYMGLBRgHZcX2wsYFzlpxfqzAhGAtsaD+EZOywS4wvXQPoovXHQd83AwfOLVtvmW3pXX9Zc5Qm1ji/Ulih3gq6UBbk0xY7bpB1DUh0+vwik/x5fYIIHnRah3lkA459H5PV00iMDipn7Fc37RElpkNykAI0jKFYtFHVOrITecLSIs5T2VTmjLOz2NRnK3AH5MV07Lk4exnZ3ZwBrQY6tzWXaTz0ogAhk5dN7J2NK6AHLhApStHTv9Q+DrAGc9AcHWMJVaIKQfpgpwDcCexsPNVN5KIjN7Wioc2K/N/7AG8DQnpXZU4/koyl2jFpX8jh9AVQIV2keA+ycg2COzQeg/aaBuLu7gg7pRSGniSW22OSUA9QdgF9h04sYZ+hJjygZPcwlxmdkPJrKzotgLcwGmFeWmSSEIXdltTKEr7NuPBSgO/g5RW2EfhPVL+SSPtd5+5qPuXP+b9q62SUWqUg91g8oYbJ/HsNWaqx8NyXatEbISLeC2cI9j+PoVWMwOul9Lisd5/NSMVmWmtWQQQBSeuBHY2CZIJX7+juJVd6ULHmOjP9RheTcrsdKyTPUJ4kYbj3ghoSJbNtLbWRFMBxg0TX5SM/BtxAUnA+iPGB5+zh3L552JFwxBahZQUdQAmDfWeBVauwTrlZTODbUUtwQZvpJG1Yxv3E2gPAnf69TMB0AUaxu5jqngJFvVwLI/DwQrreiFHAWNtYSI3Ay15qxZ+sQM7BOJAlM4w8S5c6a9rlewRjw4fjOo8drogoxcEKUMWR7YLKvbO8brMgpNlNjnM6BaJjZ8OpQDuEMnQRE/+kBqSWHPHKRyqI7/4hEAhysf2mYKHc6Yiz6Ruy/AYrpVIH8maAANIAGv7BYXh9cnjgngY/Y9wq2liJXAK3G+ZZbctgr+CJY6xk720x8sPmLlEIEP+/aPUdekFqzg5r7vqtX3/q9oT6t+EmRxspD3z5bgwPg9otP3FKT01yS68ij4cYjeSsGHltyGuT5s4LVx3PNP8qPciZw4ord4ekSVnOvbFgYrt6gRSWyuWlFUpUJcdVyrKVRgCWxvIYLmhHVD+3ZNzbMXJxV1dkb7F2fl52CEQBPhFlg2h7M6xQcTH6PSHbJ8LLmvk/1bVvGH5esP/Ot2Oa3ZmhBS4/xsMnCAlmrnVDfE8+yWOO3+ao4P+Qpb0VaDABtw3cj7j1kzPY3dYFToMGv259KMLm9++4XQ5JQ3hbR4LKlkqUPQ03Tl8QeG3bgTvnzEAcwWPQQWJHQnQWTbQ0Y5G5LfwZoRnBI2vc1Q+1EPwbeiOIQz/lQE7TkD9fj49eVsGa6gvfYtt+rYGY1MiE+d+/3rOwr6Jf35bAatPLAJje6TVEmgCsvuEbuXZsNf9XG0nV016l9kt2zwKsfRFvQbsE5wi6CsiXlJXF3yKkEaGM+SyvUPOpfNFBJWaCwKCf5juKYn2bKy136HSg/VdJC8R9e/DBlcdasCK8txMAZ8fVqaYbn3ZLDJCPq0SVH0s+1aVpXBxLodGTzb2ce3uo6icR6EDok1tHExfra9pkMqEWGLfxd+ofGiEeEzU3pVgAEFgx4KKf8b2jQl1zc6Xmgsj3czKB9HL2WR/iwL+LLfGg2VZrV5NrLk04uMTmDf4jh+5TO/p/5URDdV64gXnkft/X+v6MlXjffv0r+nSssX7q/GAT1Ir28OyiF+wx5FKSAKEX1xfZU+40Yc4uOcDskJhxVDgJCEzwCiVGuqWEgLGj32h0wvlEP8VUKC2rF5fqUJ47qEO8HVBzA2N4UkhtSAVLK518r5EIvAw5gvleQ/mkCZNLKcLpgnAqnKhQ3meco346LgFgW2OzGf/x6iwgaipcIiWl2eSEZWJuqGVoe2p1J+xaXibS1Xnertf4rv6+AnyU9GlnyngphKhrB1JQvZTJSj8KjsKRBWQGFH3IcPyhkeI4wF9IpSN7g8nSXeei+l2asFALgpGNZC91H62hZ3xV1vWEbDoQD4I3ZzcLxkYNu19zR2Ye6iArNqmlmYishsOt+BPXWc/gITkN4q8tBlw1sd4ukoa7wS5qcRHkReef+JhiFd+M6g9o3b2UtGmtu5cN1nGQMc/Fe0WaIg+NZL8TbbNnQkwyWJv9ROCjlQW2uUc/T8HcZqFG0BnGCg9jrXp16y3D+wyCmLU5wWvmLCLzBjVcst30KqD0QNTWwrmsHqS/hjY58HodnoknYZO+fGbFGNYZiz8PwabqeRZ9v/b75mcIC8RPEDcx8LDPQsN5+S1nRG/hYktMcM17aR6PZMlAdiDA9uoW81h9aBO5J4CnlSU8B5LQs10V2olVGV7JjSLZ/jQTKZ53tkJQ/tDjfzCtTQ+iPplXSce/xFtZYfRFO3HVf54uA+GcwatoTaU6e//dnfPw/xFLBFitkjicwaMwDBFqv/C+Sz7ET3A3dIC9w/QYCNlFwDm7FJtQMcukOgODpXUB00RxC8/Dm1wY9n+ku3M3JHeQvLFged7C7OAGGiaPdeoMDi60r7WtP7PPXV7HrS5xbT53Qs/JqcxET1zsXYHyxcOqLEIw0CoZwi+XLVz/xBffpTfGbhVNuOVC0mFFghXo8s56U1cJvx9ElZepOwSB4WGe+e41OaMAvSIscCc5r9+XqqsbjkmpuEAHSQNKCugdflKqWouwctDfa4zhxh0ZdOsGn86OyvHn6oHGsb54nohSZsGB25Uu388WeFLF7R1hE5PRf5JXYiE1sG1irhvhi5FKRQ9RzzhhHmgcoArA2zqFuUAZKG27XEs+ouXfTxmAukKvp8kicQF2MXwAYGdXPlZWZwX58/CeZXbluKDCzx1cdg0gtyNX4m2cAodsKvxscSIkiX6ofpGGGFJeUEbOGZluQNa6y3nQiEGqiicmUe7y4Ug4daPWidnnomwc4w6UuGW7oh2bzOn2bbGuUOkTHcSIHaaKUfvt2rUjOMZ4cl2d/LshVbfluqovp1mVH5A4gvyd4fzeRF3aXWyZVxGoIr4mrCgwbuvSMwWsvC1nCuKrVZl+rJeG8EGOtlQBGZhWsZk2930lFJlAbGs2zwV7f9TycVt4qytqa11cz5u8N2E8GGW3OvibioFJYqDrI/1d9k2eA/GhJmQWKHJdVHT67X37pqrN8//zjEQn3gv01dNGMeIhdo0y2LIUA6vdINK3bQ0J9stt6ti3UW2gYYkuGqwzl4obzOIKEZUI9nnZ1HOy2Tqt2OGq/7V37DEU1j6nOLgtH3sCrzxmx+mZtx3BQojX+JAoNMuoulIl4sfeVQPkWHowq7sTtvBaFjjEKrP0fI27ENTDpXrww9SzX5tY9uObYwB8RRaUBbZrQuCa/bV6+pM6lwCNlpYp5abvUo4goWVCsH1szuqMdHevMOj2P0wNZs9Q8CdJsOq5mjh0ZSy4NtVd3UYa88BKwCMriYSjGDH2f78nYPb7mg/mKpXX3dRGpJDIRndPVCXkmeqlCUXvKdT90RBH8bZY/d0gkgKnIdi9w1MINnptzJzuxgvpgsSoy3Lq6QU3G/jLJZP57xFHO5kk9r3UNfHKyaaKZ+oBvlzs8myY06OeNj/blM523uhow7szCQk/IrWePGfTc7laV90wILUZAPju4M5+fTqhg5YUWZR4VMIkIVZC0cuYnGVBWxQ8ku+DqBDGQlJIutqhFQMAk1iXPgt6PSCgmqO2wztD2SnwT+NX74zdCMs2QB9BeR27lONf4c2h1CZczMjeCfIG/8zxuyIlEOTwWGl5KNnwRZcDckuph71HYr5o1PCSY7mjj+YJ35sxfXspfvNdaw7I3Z+IItkF7CIi1ugczZV/6VCR8OfQP5oLieiMRuEx+e/yFfHYQCSfdotpq8Ogpui1J8Ma3vANsbOXAph4MxdqgfrLuOXMs2ccQLP6LrSLVG0S/Xc/MYhEQ+ujRL7sS2C3JCUgcthjepnQTVK4Qe8k6gcDsk2mX72Wjl2SdMho2H/sPM9+q+Wtz4nuym+FYL6P6xxkeVpneDXBIxWhP+FOX0rBu/4ehxcdBGYtEETPFaXBXYHVhSAgP2IMCPCrLYhdfgU9KjJuGazj0sIViSz04565vSdk2nF5zUplG6rDWjbFZWw32avY1gZdS+RVYyTc+o21AOcCVItf4dh8hRm8kwLpGuxidsW7hIA+mEySqopXsKWHX16HAAAAAA==');