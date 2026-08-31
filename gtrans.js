(function(){
  var list=[
    ['zh','中文'],['en','English'],
    ['ja','日本語'],['ko','한국어'],['hi','हिन्दी'],
    ['th','ไทย'],['vi','Tiếng Việt'],['id','Indonesia'],['ms','Melayu'],
    ['km','ខ្មែរ'],['lo','ລາວ'],['my','မြန်မာ'],['tl','Filipino'],
    ['ru','Русский'],['uk','Українська'],
    ['de','Deutsch'],['fr','Français'],['es','Español'],['pt','Português'],
    ['it','Italiano'],['nl','Nederlands'],['pl','Polski'],['tr','Türkçe'],
    ['ar','العربية']
  ];
  var label={};
  list.forEach(function(p){label[p[0]]=p[1];});
  function curLang(){
    var q=new URLSearchParams(location.search).get('lang')||localStorage.getItem('lang')||'zh';
    if(q==='zh-CN') q='zh';
    return label[q]?q:'zh';
  }
  function go(code){
    var u=new URL(location.origin+location.pathname);
    u.searchParams.set('v','186');
    u.searchParams.set('home','1');
    u.searchParams.set('lang',code);
    try{localStorage.setItem('lang',code)}catch(e){}
    location.href=u.toString();
  }
  function boot(){
    var bar=document.getElementById('langBar');
    if(!bar) return;
    var cur=curLang();
    bar.innerHTML=list.map(function(p){
      return '<button type="button" data-l="'+p[0]+'" class="'+(p[0]===cur?'on':'')+'">'+p[1]+'</button>';
    }).join('');
    bar.onclick=function(e){
      var b=e.target.closest('button'); if(!b)return;
      go(b.dataset.l);
    };
    var btn=document.getElementById('lang');
    if(btn){
      btn.textContent=label[cur]||'中文';
      btn.onclick=function(e){
        e.preventDefault();
        e.stopImmediatePropagation();
        bar.classList.toggle('show');
      };
    }
    document.addEventListener('click',function(e){
      if(!bar.classList.contains('show')) return;
      if(bar.contains(e.target)||(btn&&btn.contains(e.target))) return;
      bar.classList.remove('show');
    });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot);
  else boot();
  setTimeout(boot,80);
})();
