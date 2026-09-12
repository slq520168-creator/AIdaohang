(function(){
  if(document.getElementById('tabbar')) return;
  var items=[
    {id:'pic',href:'./peach.html',t:'图片',p:'M4 5h16v14H4zM4 15l4-4 3 3 3-4 6 5'},
    {id:'novel',href:'./novel.html',t:'小说',p:'M5 4h10a3 3 0 013 3v13H8a3 3 0 00-3 3V4zM8 20a3 3 0 013-3h10'},
    {id:'movie',href:'./movie.html',t:'电影',p:'M4 7h16v10H4zM8 7l-3-3M16 7l3-3M10 12h4'},
    {id:'home',href:'./tools.html?home=1',t:'首页',p:'M4 11l8-7 8 7v9H4z'},
    {id:'soft',href:'./soft.html',t:'软件',p:'M8 4h8l2 4H6zM6 8h12v12H6z'},
    {id:'order',href:'./order.html',t:'接单',p:'M7 7h10v12H7zM9 11h6M9 15h4'},
    {id:'near',href:'./near.html',t:'附近',p:'M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11zM12 11a1.5 1.5 0 110-3 1.5 1.5 0 010 3z'}
  ];
  var path=(location.pathname.split('/').pop()||'index.html').toLowerCase();
  var map={peach:'pic','pics.html':'pic',novel:'novel',movie:'movie',tools:'home',index:'home','':'home',soft:'soft',order:'order',near:'near'};
  var cur='home';
  Object.keys(map).forEach(function(k){ if(path.indexOf(k)!==-1) cur=map[k]; });
  var bar=document.createElement('nav');
  bar.id='tabbar';
  bar.innerHTML=items.map(function(it){
    var on=it.id===cur?' on':'';
    return '<a class="'+on+'" href="'+it.href+'"><svg viewBox="0 0 24 24"><path d="'+it.p+'"/></svg><span>'+it.t+'</span></a>';
  }).join('');
  document.body.appendChild(bar);
  document.body.classList.add('has-tab');
  var sc=document.getElementById('scroll'); if(sc) sc.classList.add('has-tab');
})();
