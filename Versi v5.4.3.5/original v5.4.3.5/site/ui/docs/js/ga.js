function checkOnline(){
    let img = new Image();
     img.src = 'https://google.com/favicon.ico'+"?dummy="+new Date().getTime();
     img.onload = function(){
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
        
            ga('create', 'UA-506570-23', 'auto');
            ga('require', 'displayfeatures');
            ga('send', 'pageview');
    }
}

checkOnline();