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
  var label={}; list.forEach(function(p){label[p[0]]=p[1];});
  function curLang(){
    var q=new URLSearchParams(location.search).get('lang')||localStorage.getItem('lang')||'zh';
    if(q==='zh-CN') q='zh';
    return label[q]?q:'zh';
  }
  function go(code){
    try{localStorage.setItem('lang',code); localStorage.setItem('aid_tl',code);}catch(e){}
    if(typeof setAidLang==='function') setAidLang(code);
    else if(typeof aidTranslate==='function') aidTranslate();
    updateBtn(code);
  }
  function updateBtn(code){
    var btn=document.getElementById('lang');
    if(btn) btn.textContent=label[code]||'中文';
    var bar=document.getElementById('langBar');
    if(bar){
      bar.querySelectorAll('button').forEach(function(b){
        b.classList.toggle('on', b.dataset.l===code);
      });
      bar.classList.remove('show');
    }
    document.documentElement.lang=code==='zh'?'zh-CN':code;
    document.documentElement.dir=code==='ar'?'rtl':'ltr';
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
