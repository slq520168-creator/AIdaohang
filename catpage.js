(function(){
  var page=document.documentElement.getAttribute('data-nav')||'';
  if(!page) return;
  var map={
    pic:{g:'adult', tags:['套图','摄影','生图'], title:'图片'},
    novel:{g:'', tags:['小说','图书','电子书','漫画'], title:'小说'},
    movie:{g:'', tags:['电影','短剧','美剧','韩剧','日剧'], title:'电影'},
    soft:{g:'pc', tags:[], title:'软件'},
    order:{g:'gig', tags:['接单'], title:'接单'},
    near:{g:'life', tags:['附近','定位','偶遇','地图'], title:'附近'}
  };
  var conf=map[page]; if(!conf) return;
  function clickOne(sel){var b=document.querySelector(sel); if(b&&!b.classList.contains('on')) b.click(); return !!b;}
  var n=0;
  var t=setInterval(function(){
    n++;
    if(!document.querySelector('#side button')){ if(n>40) clearInterval(t); return; }
    clearInterval(t);
    if(conf.g) clickOne('#side button[data-c="'+conf.g+'"]');
    setTimeout(function(){
      conf.tags.forEach(function(zh){ clickOne('#tags button[data-t="'+zh+'"]'); });
      var h=document.getElementById('listTitle'); if(h) h.textContent=conf.title;
      var b=document.getElementById('brand'); if(b) b.textContent=conf.title;
      document.title=conf.title;
      var hot=document.getElementById('hotBlock'); if(hot) hot.style.display='none';
    },60);
  },200);
})();
