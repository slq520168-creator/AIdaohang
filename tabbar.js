(function(){
  if(document.getElementById('tabbar')) return;
  if(!document.getElementById('tabbar-css')){
    var s=document.createElement('style');
    s.id='tabbar-css';
    s.textContent='#tabbar{position:fixed;left:0;right:0;bottom:0;z-index:9999;display:flex!important;align-items:stretch;justify-content:space-around;height:calc(56px + env(safe-area-inset-bottom,0px));padding:4px 2px env(safe-area-inset-bottom,0px);background:#fff!important;border-top:1px solid #e5e7eb;box-sizing:border-box}#tabbar a{flex:1!important;min-width:0!important;margin:0!important;padding:6px 0 0!important;display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;gap:2px!important;text-decoration:none!important;color:#6b7280!important;font-size:10px!important;line-height:1!important;background:transparent!important;border:0!important;border-radius:0!important}#tabbar a svg{width:22px;height:22px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;display:block}#tabbar a.on,#tabbar a:active{color:#2563eb!important}.fab,.topbtn{bottom:calc(72px + env(safe-area-inset-bottom,0px))!important}';
    document.head.appendChild(s);
  }
  var items=[
    {id:'pic',href:'./peach.html',t:'图片',p:'M4 5h16v14H4zM4 15l4-4 3 3 3-4 6 5'},
    {id:'novel',href:'./novel.html',t:'小说',p:'M5 4h10a3 3 0 013 3v13H8a3 3 0 00-3 3V4zM8 20a3 3 0 013-3h10'},
    {id:'movie',href:'./movie.html',t:'电影',p:'M4 7h16v10H4zM8 7l-3-3M16 7l3-3M10 12h4'},
    {id:'home',href:'./tools.html?home=1',t:'首页',p:'M4 11l8-7 8 7v9H4z'},
    {id:'soft',href:'./soft.html',t:'软件',p:'M8 4h8l2 4H6zM6 8h12v12H6z'},
    {id:'order',href:'./order.html',t:'接单',p:'M7 7h10v12H7zM9 11h6M9 15h4'},
    {id:'near',href:'./near.html',t:'附近',p:'M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11zM12 11a1.5 1.5 0 110-3 1.5 1.5 0 010 3z'}
  ];
  var file=(location.pathname.split('/').pop()||'').toLowerCase().replace(/\.html$/,'');
  var cur='home';
  if(file==='peach'||file==='pics') cur='pic';
  else if(file==='novel'||file==='movie'||file==='soft'||file==='order'||file==='near') cur=file;
  var bar=document.createElement('nav');
  bar.id='tabbar';
  bar.innerHTML=items.map(function(it){
    return '<a class="'+(it.id===cur?'on':'')+'" href="'+it.href+'"><svg viewBox="0 0 24 24"><path d="'+it.p+'"/></svg><span>'+it.t+'</span></a>';
  }).join('');
  document.body.appendChild(bar);
})();
