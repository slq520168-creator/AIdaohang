(function(){
  var nav=new URLSearchParams(location.search).get('nav');
  if(!nav) return;
  var map={
    pic:{g:'adult', tags:['套图','摄影','生图']},
    novel:{g:'', tags:['小说','图书','电子书','漫画']},
    movie:{g:'', tags:['电影','短剧','美剧','韩剧','日剧']},
    soft:{g:'pc', tags:[]},
    order:{g:'gig', tags:['接单']},
    near:{g:'life', tags:['附近','定位','偶遇','地图']}
  };
  var conf=map[nav];
  if(!conf) return;
  var titles={pic:'图片',novel:'小说',movie:'电影',soft:'软件',order:'接单',near:'附近'};
  function clickOne(sel){
    var b=document.querySelector(sel);
    if(b && !b.classList.contains('on')) b.click();
    return !!b;
  }
  var n=0;
  var t=setInterval(function(){
    n++;
    var side=document.getElementById('side');
    if(!side || !side.querySelector('button')){
      if(n>40) clearInterval(t);
      return;
    }
    clearInterval(t);
    if(conf.g) clickOne('#side button[data-c="'+conf.g+'"]');
    setTimeout(function(){
      conf.tags.forEach(function(zh){ clickOne('#tags button[data-t="'+zh+'"]'); });
      var h=document.getElementById('listTitle');
      if(h) h.textContent=titles[nav]||h.textContent;
      var hot=document.getElementById('hotBlock');
      if(hot) hot.style.display='none';
    },50);
  },200);
})();
