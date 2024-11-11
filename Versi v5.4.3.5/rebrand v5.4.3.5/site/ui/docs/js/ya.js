function checkOnline(){
     let img = new Image();
     img.src = 'https://yastatic.net/s3/home-static/_/a6/a6a296b741b51880ae8a9b04a67cfe3f.png'+"?dummy="+new Date().getTime();
     img.onload = function(){
          (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

          ym(93110766, "init", {
               clickmap:true,
               trackLinks:true,
               accurateTrackBounce:true
          });
     };
}

checkOnline();