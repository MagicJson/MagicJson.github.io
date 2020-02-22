<!--浏览器标题-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "https://s2.ax1x.com/2020/02/22/3KjrY6.png");
         document.title = '(ノへ￣、)不要离开我';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "https://s2.ax1x.com/2020/02/22/3KjrY6.png");
         document.title = '(￣▽￣)～■干杯□～(￣▽￣) ！' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });