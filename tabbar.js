(function(){
  function killMic(){
    try{if(window.speechSynthesis)speechSynthesis.cancel();}catch(e){}
    try{
      var SR=window.SpeechRecognition||window.webkitSpeechRecognition;
      if(SR&&window.__navRec){try{window.__navRec.abort();}catch(e){}window.__navRec=null;}
    }catch(e){}
    try{
      if(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){}
    }catch(e){}
    try{
      var vids=document.querySelectorAll('video,audio');
      for(var i=0;i<vids.length;i++){try{vids[i].pause();vids[i].srcObject=null;}catch(e){}}
    }catch(e){}
  }
  killMic();
  window.addEventListener('pagehide',killMic);
  window.addEventListener('freeze',killMic);
  document.addEventListener('visibilitychange',function(){if(document.hidden)killMic();});

  var old=document.getElementById('tabbar'); if(old) old.remove();
  var s=document.createElement('style');
  s.id='tabbar-css';s.textContent='html{height:100%}body{min-height:100%;padding-bottom:calc(64px + env(safe-area-inset-bottom,0px))!important}#tabbar{box-sizing:border-box!important;position:fixed!important;left:0!important;right:0!important;bottom:0!important;top:auto!important;width:100%!important;max-width:none!important;z-index:2147483647!important;display:flex!important;flex-direction:row!important;align-items:stretch!important;justify-content:space-around!important;height:calc(56px + env(safe-area-inset-bottom,0px))!important;min-height:0!important;padding:4px 0 env(safe-area-inset-bottom,0px)!important;margin:0!important;background:#fff!important;border:0!important;border-top:1px solid #e5e7eb!important;border-radius:0!important;box-shadow:none!important;overflow:hidden!important;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);pointer-events:auto;font-family:-apple-system,BlinkMacSystemFont,"PingFang SC","Segoe UI",sans-serif!important}html[data-theme=dark] #tabbar{background:#161b22!important;border-top-color:#30363d!important}#tabbar a{box-sizing:border-box!important;flex:1 1 0!important;min-width:0!important;width:auto!important;height:auto!important;margin:0!important;padding:6px 0 0!important;display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;gap:2px!important;text-decoration:none!important;color:#6b7280!important;font-size:10px!important;font-weight:400!important;line-height:1!important;background:transparent!important;border:0!important;border-radius:0!important;box-shadow:none!important;overflow:visible!important;position:static!important;top:auto!important;left:auto!important;right:auto!important;bottom:auto!important;transform:none!important;opacity:1!important}html[data-theme=dark] #tabbar a{color:#9aa8b6!important}#tabbar a svg{width:22px!important;height:22px!important;flex:0 0 22px!important;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}#tabbar a.on{color:#2563eb!important}#tabbar a img.tbimg{box-sizing:border-box!important;display:block!important;flex:0 0 22px!important;width:22px!important;height:22px!important;min-width:22px!important;min-height:22px!important;max-width:22px!important;max-height:22px!important;aspect-ratio:1/1!important;margin:0!important;padding:0!important;border:0!important;border-radius:50%!important;object-fit:cover!important;object-position:center!important;background:#e5e7eb!important;position:static!important;transform:none!important;filter:none!important;opacity:1!important;animation:none!important;box-shadow:0 0 0 1px rgba(0,0,0,.12)!important}#tabbar a.on img.tbimg{box-shadow:0 0 0 2px currentColor!important}html[data-theme=dark] #tabbar a img.tbimg{background:#30363d!important;box-shadow:0 0 0 1px rgba(255,255,255,.22)!important}html[data-theme=dark] #tabbar a.on img.tbimg{box-shadow:0 0 0 2px currentColor!important}#tabbar a span{display:block!important;max-width:100%!important;margin:0!important;padding:0!important;font-size:10px!important;line-height:1.1!important;color:inherit!important;background:none!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important;text-align:center!important;position:static!important;opacity:1!important}html[data-theme=dark] #tabbar a.on{color:#58a6ff!important}';
  document.head.appendChild(s);
  function tx(k,fb){try{return (window.I18N&&window.I18N.t&&window.I18N.t(k))||fb;}catch(e){return fb;}}
  var XN='./xiaonuan.html';
  var keys={pic:'tab_pic',novel:'tab_novel',movie:'tab_movie',home:'home',xiaonuan:'tab_xiaonuan',order:'tab_order',near:'tab_near'};
  var fbs={pic:'图片',novel:'小说',movie:'电影',home:'首页',xiaonuan:'小暖',order:'接单',near:'附近'};
  var items=[
    {id:'pic',href:'./draw.html',img:'./img/tab-pic.jpg?v=292',p:'M4 5h16v14H4zM4 15l4-4 3 3 3-4 6 5'},
    {id:'novel',href:'./novel.html',img:'./img/tab-novel.jpg?v=292',p:'M5 4h10a3 3 0 013 3v13H8a3 3 0 00-3 3V4zM8 20a3 3 0 013-3h10'},
    {id:'movie',href:'./movie.html',img:'./img/tab-movie.jpg?v=292',p:'M4 7h16v10H4zM8 7l-3-3M16 7l3-3M10 12h4'},
    {id:'home',href:'./tools.html?home=1',img:'./img/tab-home.jpg?v=292',p:'M4 11l8-7 8 7v9H4z'},
    {id:'xiaonuan',href:XN,img:'./img/xiaonuan-tab.jpg?v=292',p:'M5 9h11v5a5 5 0 01-5 5h-1a5 5 0 01-5-5zM16 10h2a2 2 0 010 4h-2M8 3v3M12 3v3'},
    {id:'order',href:'./order.html',img:'./img/tab-order.jpg?v=292',p:'M7 7h10v12H7zM9 11h6M9 15h4'},
    {id:'near',href:'./near.html',img:'./img/tab-near.jpg?v=292',p:'M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11zM12 11a1.5 1.5 0 110-3 1.5 1.5 0 010 3z'}
  ];
  var file=(location.pathname.split('/').pop()||'').replace(/\.html$/,'');
  var cur=(file==='draw'||file==='create')?'pic':((file==='tools'||file===''||file==='index')?'home':file);
  function htmlOf(){
    return items.map(function(it){
      var k=keys[it.id];
      return '<a class="'+(it.id===cur?'on':'')+'" href="'+it.href+'">'+(it.img?'<img class="tbimg" src="'+it.img+'" alt="">':'<svg viewBox="0 0 24 24"><path d="'+it.p+'"/></svg>')+'<span data-i18n="'+k+'">'+tx(k,fbs[it.id])+'</span></a>';
    }).join('');
  }
  var bar=document.createElement('nav');
  bar.id='tabbar';
  bar.innerHTML=htmlOf();
  document.body.appendChild(bar);
  function paintTabs(){ bar.innerHTML=htmlOf(); if(window.I18N&&window.I18N.apply) window.I18N.apply(bar); }
  window.paintTabs=paintTabs;
  if(window.I18N&&window.I18N.set){
    var _set=window.I18N.set;
    window.I18N.set=function(lang){ _set(lang); paintTabs(); };
  }
  document.addEventListener('click',function(e){
    var b=e.target.closest&&e.target.closest('#langBar button,[data-l]');
    if(b) setTimeout(paintTabs,0);
  });
})();
