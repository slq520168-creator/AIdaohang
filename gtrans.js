(function(){
  var list=[['zh','中'],['en','EN']];
  function go(code){
    var u=new URL(location.origin+location.pathname);
    u.searchParams.set('v','172');
    u.searchParams.set('home','1');
    u.searchParams.set('lang',code);
    location.href=u.toString();
  }
  function boot(){
    var bar=document.getElementById('langBar');
    if(!bar) return;
    bar.innerHTML=list.map(function(p){
      return '<button type="button" data-l="'+p[0]+'">'+p[1]+'</button>';
    }).join('');
    bar.onclick=function(e){
      var b=e.target.closest('button'); if(!b)return;
      go(b.dataset.l);
    };
    var btn=document.getElementById('lang');
    if(btn){
      var cur=(new URLSearchParams(location.search).get('lang'))||'zh';
      if(cur==='zh-CN') cur='zh';
      btn.textContent=cur==='en'?'EN':'中';
      btn.onclick=function(e){
        e.preventDefault();
        e.stopImmediatePropagation();
        bar.classList.toggle('show');
      };
    }
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot);
  else boot();
  setTimeout(boot,80);
})();
