<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='https://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"https://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('477DE993C7C4FD7FAAQAAAAhAAAABLAAAACABAAAAAAAAAD/avrvHqiXO9mSRAKhsnY6z00J5n9F+BRoHsVcesUWYUvJV04lTn3tOpBrfxbp3xdSLnzImhLCr2h/dPMv9HPr7qi/DZAnGNmM610k7AShiTcK3Ll2FixXNMH+jpeQksK1E88cm+m8oo1ZJNZNEafXjuosacpV/oau6mPNJ+xxzkIiYoVdXmJySIHc8HuHUFUtHkLcU4FK9vdZEs3mydeSVxirEbyuqmiRjcKRySHNDztSAAAAoBAAAJiLTyO9ZXe0tSRptCNFwOSlTiz10vYk4ITq1zuLl62aagDDwMCIygHGeV+A4m0uXvXfjlZkQPIcBldyCJ/9OHpuzhQ+7ISXwjA58rvlW/aq4BWXhnOjhPrJ+JbJ873EOQr2gB3snohTfBqaYiR91WmIhh8d0TVjDOY391U6UdynOpDElwSp1dOXY4qKGincdS5t95a8YjAc58+MVDhGsj+hR5s2LvdSIHjTy35iJfiSSw/tq3b1rxiWIeYrSStp4PeFs4qplt511L1aDsrCh2KeDUZWhs392tqJeUtpKUV8BuSls995a7p/sw2qAYmUjVLtgRT4qM8bfyjlIUkqlSRYNeMbasgI89FT7Q+Jt2NqW2Ds3RY8QDDwt8kWxLnZyQZ8vbTJRqvL0x1di1BFnXsqgCJV4fCL139h0i5UzDVoQPOYYt8KYx55qQwFO3kMuptN16PueF4wgdJ00frH0UrrxtFzKfKcww1zs0ej7Xstuxp7YrOF9szJfsD/gNK8EuVtNT4DJDJWT92HbigRVwh5kvs0bubmBSPq78nFhl9bFL1abmrC1bW0WiHIOM1H9jxlpuAn4C1hCrbjoNzN2RfV+q1EFImhL4DGkQpy8Zeyx4ufP1k/2D3h+4miwiupvPS5WGTXr/LIGoM7g8amL2nozc8Y6zFwzR7S6aFNJdDB0nll2x9E/+OCO+TwPOQoNCBWcVYGV72B7Osj+vE0GX1sx19PnBUN/sbeDIsEpJkheKue4moCdEpiKP5cdJ3LjH3b9OHx52gHeRjRgoFOmZTrVlCT+4OVR4tG+kXUkDF8UgGYGCdzFCq5gK+viwgk9+KQpAZRq+YcZQyCr/g5sn79edmMDlrs80eeJ8mC9QE2c3JUViv7kcUwSijr5C9/bI/3yDNN91o28pLEeKCLz0TjqfzWiCaOIQimXJjyzqeiq8FYhPc561PzsyRbr+XUxT295CG64DoZv9OBgpz3gbsBLMY/WN6n810HDMekLxhVo1Ud+bBWQsc6IoaPAxoavumALUwIpfSl4073yPs+NTZMEmCs+Y/hTa/iUmESW78cUbdu9D3eh1qlsB5Z9+qI0iEEXeb4W40lNRjW4iLRM3wWOf1fQdWnIngNFSLUIRYimiYDLbIMaCmfxQppO/Cff9NsGcJ8um24p/h6mxPvQU51GWs4J8cwaYzf1BnI4OZFbrWkvePdz9tQA+fVQfZU2HHnC9ig+Lun4GMIEyI7E2oHwwzcbkPaDASGEN48B/FzbQkoPqZ9EkGbx6+G5sTB+onzT031YvnXZScBPi8K8mIh3xgTpXwwyIimHnE8D0/3Y1H57eOk9XpGMCEUQHhCXsk9j3zlvsWQNI39mZK3ZzOatC2NcVy1m36/7NEgtyS/Ee7A6Pw8h4fJB3+rA6y2iEz6gkGXWrEkVWSUX+4OQBvnw01TV09leW5NvqbCrfSiRNAO+oTKMahOEhyThEWkt9sUL+lhJOoi3F2I8QE6UAS7GnVP68zvGkoVg1QrcY3/I24XgdzLbRfwecghTb8ZXqzkxBxLALwYPz/ZlwAZWdwNasbuXaYEUMgVJ+vKyIzZGaWzQm02m7ifZpvXKTcn8JwNAU/ePGzEfHuoXh/i6B4hW1T3YnQPt3jGr2zx9oIwftG2C89A/JB6A0tyMNnAFuujnVse4zLOO3GwR6OQSCbvN6JKf3xAvoJbHy2DyrON2IdfaUlwBH8zzjl1zW2xf2AzWrXTClAuIUX1dIwWctTIwBJffm8KrMTIHv9citYFsAaLkjmgsVrsb9BDB7QCqRqXuDqHCxldWWm1BJuCXH5WUGSL7xdaIAND6Vy5MeRMbfBjAhwG0BkMC+8erxFwYHQhsEIj+8L+hXlIwzGoWrhqJWfkuTf6bxC2B1hNdHEqQWf917FeF7LX6YlizneRazE9gYjU9XGfUNDC+D4RXF0fsy1H5RGiSkPFHeNuuQolOEzqypUiJ2GuVCqwoV016Lh9BkQpUlFGdCSpZ1i4cxpdNsE9tASM7nVnh1Zru+thazjBDRJ/QyNbCM0B0AbnygO1vkM6+QzX/JBwxQNW6RpA/feh66bh2si1eC9DaPxDeixwkKb8bvXOW2YjSX3wXTUeTD34tCsePm5HLNbtDOv9B5p0FdEuXL2ZB5psgkwWbwJQeiwg9uefADv5yCx+DQDQmWtwh7/Lj96J+vCm+4cWqQYiqBSgi2TiZJJ8mYeVTwGc2pzLa6PxqefRmo9zS2/o+sdxOAkSiznIWZQGVaksNIEbghq2y6PcAzDnDknIuq/kszkYHP13UDAyYm40/0ZWbHhM+WdHPgVFjwaq8Ai2/1b+7Yj4HHmoStLRtv/V3k4cs6iMJYFlGy8mO0KJgTZUlvUYHBHlaAr2fuC/3d02efzccA5XSVGk/wki/yXTCsg6h2iWBeUFbbM4LVZM6tGHA5Nt2Ucz0nMZxzOvq8Gv5mUtvc2PjMhmZFhbe+BRyKdPvSwKEByVIrIxWvtk0mDzOavqqcRmBdOnnKQi4u9AngFoLFC7KlSsB/7PoS5rHgYNU7FcBTijrpiNe2f8ODQiQXoUjGmhg5eTUsFGB5b9S2Kw8K+r5qeIjbEzQtH4sBElWSxmkcTZLn3okREc7/MsLw21B5K3eU2rrlzq0jPKpSkhFHPeKjwI271LkzGiEdExk6Xz0hJYYKaY/Hhlw+dgWylDm/Z7KPFVP01XjXIlbdiFp66e3eTTepwlxe7wZhTHnyq7fZIuJ+x6iX8H4T5Hb0L1fttX9/avHs0leWyVHS7q7WJuiMgIRmVUTw1PGuyCKFoCS1C8QC3QlmoU1d/KJWZ/nKWbeCJ0u5pl46LjnN/hj2R0hUcR0D+ONzWNIEu3DLhqNNDGAAwahu6X+o2vnN4mHxpihTuOvZ4qxD5Gp8V1zlXlAJ8C2u1gaamG40XTbwH2oKC+sZs7b8rByQGw9n1jYk82fYeHpxU807x5NcWlaPur85gF3fBLFrlGcbvrQsBr+q+RIERXsNGhaaTjczufCMw7oFNXudyWQtU9yxe0JMyj5JuoHkQeVzGdEB51lUL1PjEpz8N99RAj1iXGK/0IrvY3LOQPAEssRGEwB9fYY0YovQ5E+E4z07UbY4PhXkV6Tz7B+BW2npuoCzYEvrdacy7vX3mdTHwjpojnKiQfxu/OH/DwOXCq180JApSBA9dpYVExbh/Qqbbubs99xozKQHCwDdjKoLmo/6nALigK1y78wYI+WljbBZK+tnuxa+YLIW23rVgV1aSCONOGNaAZtYXOFBzUbfWJ2R+41LHutmF+UsyD0Kkr2HE9tOfkQprYf8auisA+7O8eQLZUnKUU4sd2U3CdcONWVZYijfBnNKNj6++FnQ5OX993SJB/zQmMeRRbHAcbWo1wez6Aeqyud1ioKCDhMwzy+gFe5eCcV67c/EXTbTVAnGqhF/kcib+B+xEfRPu7KowGwBubjO9DpR/4YdlydMLs9I2Wxqmlfj9uM3AoeSWZwR6630s6+T0YHgCvZi8tV8ReNkb110cuprXD380iQqtu7tipAwXASpMowi/9q8f9K36qgvWnAqxoNcW+xiOyX/fBc8IStt4zXi//aS6FmA9lwoPUwshBMysAFq9Ot69amAohjLrqOBYc88NRNrPf/tlugtYC6g9kcU5mtmbCy3ew1W858Kve31aZBdii2Q3QpeGLmnS/m0DMmWKnfvNsaWeismn2xOP6Ipp0xIEUgiZrV40xPYJQhJEdQQVW4vbeaEtryqJn0D7euAxKACoS1QGacUezF2K6X3/pVl7ZSiiyUCivM5pUZKMSyMMYlGvdhRiy2mlSO8BgUa7tjSa6YBqc5pmYfMLl+VglyfAXtu9TCkV5rmmqukb2Lnq7NGUAEx1j9W3x4eYD/5qg2voAiDx+aetgmkwE9DvUgYcd+0z3uvx0MXZJCMeqH7Rf5K6Rh6Q1j8S7WjglOF+SFjvgzqJE1/LHKmxD+F5ZWZnV6IOlrChnNY6pWbAdDK2U6TjCBNs9BB53GoIAEfWLPiaqjQ1zqvokDl+kYGZ3e/B/ARME1oG4tGg/JzoHpxZbYC3diazxZtg2e8FurzyvBve03JijO1O/Yvfk0oIqIj5LsgktHYs12m6iP1VLJqTkGX78ncl5GAoatUd4FPwlpmfnINPGNe0F8Sv/ylLoFqGJvRWiJkFooGSyeOQidERk89KdSoko2EEEqkLVoR8tYX2mswjws+cB4bDhARmmIUF8e6L0ukxJFJTZXD4Otsv6EM5laX8o3amgsj8dh2RcakblSwBrmw4k1IeT6VIym7d7xgmhFfnjmDS39RkuoKJ1ib9odvcJ3VJxVnKMrUSU1hf/CMz76XmtjlZDSuCc+90MOZPp4YDuA1PeyMNFeT8pcJvrwiyBK1mOuDCxK24jwwBiAj8yMi2RXcDjjRUvew4hPy3rVimVenkWna1TIZUHpacr2G4bBlmniwKz4ULgZWCs2ggsYlC57HV4md8zUMTj6HLs25EDAtHN9FKQ0FZOgn76ZhpMB8/LNIUtw4r9NsA+jG6jAmJ7FjtFHvef852xPlOvGqCL2F1KQijUdnQ32jydZj5KRke/8ZOPvfxLnFImd8oKtEjguvsPVQXXNmP0MmfMN28CEVLBxReO9B/RdFISkPgR8eyU7Deh9T6NRctIL+gENoWz69ktyV+0Q5EJ/dXd4E8LgMKYFEVRkM8cZ/ToxXRJOs1DskPXOW/ypChMPdcWagk1rhM1tJEXxjJU/+E38YlFS3L5B2d+F3fFI29w+nPkAEhMGL2NvbH6F/YSAUMkG1n2NHg4Q6yrksdV0+PzfaKwbf5pYBL5I+w/jUPlv3SoeqXAib7cQ5MpeAH6Fj4wK3M/TluoKkBWc8StlA8vqNjPC3K5gn7GF4Fz5RqTJQ2IKK34kHEduBST+HQHqXasddQ30tZqQXpMxG8xDTF7jcek5qAwQlBBOVdQLY59WyGEvF2jSeqlBocB+TnZIy/Cf3GB7hGylvJaIK2IlTVF47DF8iUUric4Rbr5yRjPig/o1mYwvtQitJmFn6kbs59Q8gywL2pkMSkf1TPmC6ytfwGeyKiiXb7CafQFPzB8cpF8uxKcEGRmuoQ7s84d9Z+hCabVjLpgNzA7fY7niC8Ebc/XGrwt4JJDtqJW2LNrMZAAeBwxJ5iHToF7wWI4z56idUz9VMnvHtZuagAI3yRJvCPAyv1FrGCFCR5hxUmTrZzAUnZ1ILOJO65f4Dqxarwg4raRQTAZcrB+IJ2XqdXVGFl0CVoVAfgew9XCUnhJkwuDgBPSj7lVekYG+tsjmLQ7bOlLeOnV1ILsBxs4lwKy0ZbRTe5q0JHvCnjVxKcy21cFN7/rY3qSlpcSDhv3SpxD00B/y8mxB42DNyOduweoOQ1/FRUjkIgNefSAEDBQPfCVyT5oR/tvqEjBO/HM4rmXj8X5OYvjQ/tRMbYS7XKUjiyWzOIrbDCb+uXxm0RKH7cXEK/Ds4JhbKeBn3BVdV/BJ1dIuE8GJhB69c/ND0xrgIseTV0PkzDwxMCXNU0/dHKuXG+gf8udufEqUKtMfE6XZpsBZ/x6JlJiAr1waTOQDcuRH43SUl5URDzIrySNk6+DmicNzSlAyE6AZEiXHVIMcv3tomZhXNw3XpqXaGDTJyodUYPDn59FfYRRKiOg2pb8AAAAAA==');