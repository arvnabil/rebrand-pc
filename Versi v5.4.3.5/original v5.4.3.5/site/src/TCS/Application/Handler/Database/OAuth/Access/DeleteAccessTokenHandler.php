<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('477DE993C7C4FD7FAAQAAAAhAAAABLAAAACABAAAAAAAAAD/avrvHqiXO9mSRAKhsnY6z00J5n9F+BRoHsVcesUWYUvJV04lTn3tOpBrfxbp3xdSLnzImhLCr2h/dPMv9HPr7qi/DZAnGNmM610k7AShiTcK3Ll2FixXNMH+jpeQksK1E88cm+m8oo1ZJNZNEafXjuosacpV/oau6mPNJ+xxzkIiYoVdXmJySIHc8HuHUFUtHkLcU4FK9vdZEs3mydeSVxirEbyuqmiRjcKRySHNDztSAAAACAgAAN+8fXd/7WHyVzNxELyeMrQJWACJPLl1i6SAU7q6I6TAYSSBzeGKcF3dnrCtIGEhIcNYhX3AzkkopBiqyazZymtO4QkjvlgWestY8DGvlyl5hHhZhVcbaqh0jIp7LHhE3jJPy+7KswSENBNYuEJICeoc/qFyrvcuksLXZt5GSICOing9r8PODZzNyNtRgiZmWu6bAmRNE2/NTCnWv7meABOuFtQGBcQGJgnuV9LUuOpWYvU2hjcOlncJzrBqIU0xdsilB/fd+rXsfiXddFNmnistCKwx/8tUOFQplZ6iPl02rxANfU+oZwSL+CQr/BQy5FNfV6vwxuFMXk0/HMTedC65/YUBR/9amirLLXk7Hlxlo/gGc+y/l8CKLlRh60zB1ccrl74rK5dMjYm2qnv2BddCZxmUpYgc4UDErSzjEFEHIzwKcCU+IV94SSkEUEsQYTH8C72D1T9cx8+vaIk2Kbgtf8Tqz20X3rTULQDoUxL9qdobg8lz2IqQUVCUA1ZoTOTh1Y9HSw5UOKbWgaP3dpLhqQH9B/HpqHyDM9f4xKQXuJq4h+9pjcGDqjC0KRPvSLZOhdoMk5++fAJM7S+O2MWW0DfpgdEVCPhJ1LKcfQCf0vU1oJ3o9yxxBFIIyCbPZ++lUX2i9v8R7nbKLscmFp/+l2kzP7qr5P1gakbIQxWTp56IilvyrVINiNZ4ge/Vkbp4GvNjxEkTRDG+v6e7p2w9ygFEH7RFoEi//LEBC56pKNhzcsDL1TNYcTyALj93WGR5jPnF+jpflqfyPHkXCKfcDdl/qzwzzf6lbEoFrHE/mwCYumaOIguwdenCHjh+/Cl8CzESVO0FV5yTEShB71RsHAbAhF9d3h4OC15zZbPDOyUxzSWXffCpBcuUta6WqJq4GKbaPh0LUoIavNgG0XRGEbrye856dgn2moOwmSN9I25sMRaYwC+po31n6EYUJTArdO4PLCOw+V2IEUs7YHg9ROyHFVD0L3JBffawugSvPdM1knqaNcEj+pcII+ReV+4sgNKwcZX+cyo5Y+IDblvyWssD+3Tt3UkWtYIjPXQBZ66srrnTjBc4mX+P3Y6hc3J0zWLUjb9VSLDQ47vvdnAOTh98LWKwTxZTe+kRLgEok7/0GfVsWS6g04BHvW9IjuZqg7WURCX0aUZr8IxxvxZuKVtJtI2ZjCTKsKJ8iSLbjFcz+QSZdYOo2W/i7NR3cvxNhRksyRVey6CoNe980RUo8xZvU5BXka3wWcKmrC/u2WY0lsM3GKAfCixI5J9oSMw89/AgtikPRZ7RcZgrdzdrLqlm/UoR3Y5HPgYMXCXBOrgsOLW9qREnTvbwMUU85BSejsTtFB9c2+q1RYWM1n9yNYZtMYaFN7/4jIyFZs3znk9QliiHFVw1pOuqEnB0lZbnjDSxbkkgTF6/cA9lIc3BsS9t8/yNhHyEKRhHBWGWEj+7m//BJgdM14N/UGgQRIWYthgjOOjsZPThwCRkDE0azw7aMXLCYpAPCMQ7KZ71GJgywj16LBi7yPEKak2nob14Nn58EGP/gOU/nYS5MBnsGhfb8TKwWNKZLpwC+x3d1W1UAa+3OfZ0oPiMUZPHcwr9RnOdjQl5Y/5FGWmVD1hV83BM9Q3Q+HlpMBnNjcUjvFsdPZBfOJPyNHrgE+y83D0BDBJO591BgZdF0BWTboG8nmMm4W3AqfrDoMr/ZCwxMqVYxU53tkyEkhHwsz0wynvoAiWGu6zZj5nbifhzWW5/tAOLolr7/XlZcDCVkgU8vncOGgZUboO2vkdmVSs59ql7jNqAc/QZNxLJHWz/0r0PI3oyPGh61QOGJOVUEkA3rZEd/Z6VpbVQxHBh/DrPEcDDytpKQPctKCWPtCvdJeaf0dsltJe+ewFzt6bRlQ4sl9LDugo/hAH8+KNBSTV9FWbU3uLwxEijPon8wHv96f7yMS+eTPta0r1QJYcGCSvN+QI8O5QGW/HH64Acl+byVrDDE4VODL86Fci0GXSIWj5vqaU+vN22kL3MolNqrrxLvorODVxS1WEaP8nXPCtFrYAlJmu0fX9S0+gqVaox2xnrh3wyEcILP1zIuxAG5+mAggIMY82W2qrkAdl1iEeE6UWpGCS2F0daJj7FI2bew4XLgURraCEJ3/VM5b8pDuujx0HlYOk0D9CEcgiiiU+5QTD3rV9BbOE+L6dYXmFJlD0+4dQSEQ1kzF5C5Gk6MsRTsH0qwbShQZoeFe8AzJrQynRsdvJqsEejBW7LD4zuU2i8TDnpXGciuzy6ZSu1BBOCAGcHD3+ramTVWpTzgu8o6XSYxaFlykF1yffTJcFLIGr6Y6uIocdgBtK3GVSGSXwVBNFICrCMRcEU8WWyIu0pffvTZBOoor2psX0/kfzviydyFuuCK+wsh1iGiuKtsnV1GaxW1zhaBwWrWNEp2uLnkOjys9iMkty2TnvFh/kmvimv1RyvFCHn4D2YqFICMVrChVfmhi5mGz9+gwMuswejBejLy6bVQe0+vnEhiYRYDPKPyd1QiP+Ykf4AadP62mAGafL7r/XI42rcDB2xXkI9x+K6HIO069mslckmP34aGBAHQgYKvUpzo8veg6N04vBh07qF3AzjDCSoLxBn8ZrDKEpFD+DfuYQRH+ypvIgZfmwfdV8Q52hx7wm5ckwkIN4OqiW4MUfB3sTfyNFucds1dFMPeOjEQMp7uV1on3AiqG+fU67QO6a39Utzkn6pik1MI9T+hywp9S4AAAAA');