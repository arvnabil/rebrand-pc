<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('477DE993C7C4FD7FAAQAAAAhAAAABLAAAACABAAAAAAAAAD/avrvHqiXO9mSRAKhsnY6z00J5n9F+BRoHsVcesUWYUvJV04lTn3tOpBrfxbp3xdSLnzImhLCr2h/dPMv9HPr7qi/DZAnGNmM610k7AShiTcK3Ll2FixXNMH+jpeQksK1E88cm+m8oo1ZJNZNEafXjuosacpV/oau6mPNJ+xxzkIiYoVdXmJySIHc8HuHUFUtHkLcU4FK9vdZEs3mydeSVxirEbyuqmiRjcKRySHNDztSAAAAeAQAAE2xeULXu57JDSuJKUaRIpcBNCW/fNFWPiesYMyYpfPn+v36XkCsRDB9de92hoFCm+N75cPxdGrN8vb2Kb7O72kSa7vvyAbDMOv3WB/icF1zLQliVw2YPHgt5m1G/kSG7w/m7W+KF7U1FZpuUlo7zOmk6EYxGg/FJXe85bFZ+irnO5ZZK9R0n36wGag4L2co6GNisH7w5OJ4JrhI3DaqeRIKRqGVURyaQHDDK01S11V2nYzIVJajXm0CDoM1pPjPPcEZyVT39H3STcGcC+aoXJqp4ZB/b1KQxBL2uuSeT7TJkkUMkDh99Jf5FO2XseGoCyQY1qvoacl08t+6gT6zEsdeQenYdEdksFKJcndnAY64vGIv1Ir2+iCq+FTm5k/4oP2n1wiXzNnCp4FlpdZzMJerFkF1xK9ET2xSqJ2FAIK9awnmchqwt4F4CVN5Ny1VAOLULrmNFuDQE/WXdbOomJn0FtACTkqey/eNB7R/pJekf+gG69TWDsxlLxD/zrWV85hgkQ1P0IIB4rn/o1IUMWM34FxlJIu14gjlP3o+I6/CsV5dF9aAz10q2NON9T80yX/qRTxbGiDsGHJmfTBYmXLFp545DRMC9EtV8comdVwvOrShokp/PAR+sqcje+YlxgS3LSR6M9ywzvDJRgf3sCm3HkIeLWPY3RLz7xAwNchyNdLIfZyWcyOKdqNDnnqJRy207ninha1CMMT/KPnFn9q6SFgr1qAMRhCLswx1X5K3IwfXIMwLObJgRtFfYucJymgEZnAbfFAOmkuQcLu0dfz2LwRPjOxzqF6MjFSMAZJbO1RFaUR/wmCn6/xFrJG/fLAGYILrFFvXfQHdHkQ5nnDQyHg8L+lxVuAZD2wR1Z7idcuW4JsFOwP5Gjs5fJPtpYYKaB8G3ZAm9iCU71fZ17n1aYyY6oT7GbWIs2/vNOIcfAyjCV8v3asBhT0bRvob5YyVW2tHQVqb2geq3u8/APiKAYzcB0xKzv7iR0luu8V8JcUaiajYq8HbXXlaCFYRPyk4Zo0vQJXD3O4LRvSiMzD7xyLum0eC2h0u26gngLPOeEnbaGaLxBaFig7Ohn0inx8idFAV8r9viYPorIAhBrBSnUK41iPKydLaMxgtIsbIE4qm9nYzu67MrVwfGTAp+v1mQOy0tjX8AszjmuP1xol2Nn17kYU7Pk9FfopACt4Uapkr8UNXYEsLaEwFlVaOZmaHcWsVhFmCeM2w6YOZZcKviqT7iRK0SptS4kkDhiJcgG7x4PTGzwREn6LBWXKQ1HgFxKpEE5aZY/ElGF/z/xoP0HqvSiE3d6WWEOoCy5IAQ+e1svNAtnfBpzkrdoHzuTAuA2rbkanWKnwJHokpvo1Aw3E1HFUEBbTIgBcmzlaYSc5d6L1AXeQsG85ivamddXMH/vkuiBdS73xjE1dIJjYcukQZcKmpmPbI0GCp8QY7GIOrtTZ2aZIe6d8hZFnGgRPBgcigVf3JVM5lbd7jbbjkRzmRuz1iszae2VUsBC5xg9ZMudq8pXQAAAAA');