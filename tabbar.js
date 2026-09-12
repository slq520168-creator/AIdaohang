(function(){
  if(document.getElementById('tabbar')) return;
  var s=document.createElement('style');
  s.textContent='html,body{padding-bottom:0}#tabbar{position:fixed!important;left:0!important;right:0!important;bottom:0!important;top:auto!important;z-index:2147483647!important;display:flex!important;align-items:stretch;justify-content:space-around;height:calc(56px + env(safe-area-inset-bottom,0px));padding:4px 0 env(safe-area-inset-bottom,0px)!important;margin:0!important;background:#fff!important;border-top:1px solid #e5e7eb;transform:translateZ(0);-webkit-transform:translateZ(0)}#tabbar a{flex:1;margin:0!important;padding:6px 0 0!important;display:flex!important;flex-direction:column;align-items:center;justify-content:center;gap:2px;text-decoration:none!important;color:#6b7280!important;font-size:10px;line-height:1;background:transparent!important;border:0!important;border-radius:0!important;position:static!important}#tabbar a svg{width:22px;height:22px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}#tabbar a.on{color:#2563eb!important}body{padding-bottom:calc(64px + env(safe-area-inset-bottom,0px))!important}.fab,.topbtn{bottom:calc(72px + env(safe-area-inset-bottom,0px))!important}';
  document.head.appendChild(s);
  var items=[
    {id:'pic',href:'./peach.html',t:'图片',p:'M4 5h16v14H4zM4 15l4-4 3 3 3-4 6 5'},
    {id:'novel',href:'./novel.html',t:'小说',p:'M5 4h10a3 3 0 013 3v13H8a3 3 0 00-3 3V4zM8 20a3 3 0 013-3h10'},
    {id:'movie',href:'./movie.html',t:'电影',p:'M4 7h16v10H4zM8 7l-3-3M16 7l3-3M10 12h4'},
    {id:'home',href:'./tools.html?home=1',t:'首页',p:'M4 11l8-7 8 7v9H4z'},
    {id:'soft',href:'./soft.html',t:'软件',p:'M8 4h8l2 4H6zM6 8h12v12H6z'},
    {id:'order',href:'./order.html',t:'接单',p:'M7 7h10v12H7zM9 11h6M9 15h4'},
    {id:'near',href:'./near.html',t:'附近',p:'M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11zM12 11a1.5 1.5 0 110-3 1.5 1.5 0 010 3z'}
  ];
  var file=(location.pathname.split('/').pop()||'').replace(/\.html$/,'');
  var cur=file==='peach'?'pic':(file==='tools'||file===''||file==='index'?'home':file);
  var bar=document.createElement('nav');
  bar.id='tabbar';
  bar.innerHTML=items.map(function(it){return '<a class="'+(it.id===cur?'on':'')+'" href="'+it.href+'"><svg viewBox="0 0 24 24"><path d="'+it.p+'"/></svg><span>'+it.t+'</span></a>';}).join('');
  document.body.appendChild(bar);
})();
