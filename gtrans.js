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
  var toGoogle={en:'en',ja:'ja',ko:'ko',hi:'hi',th:'th',vi:'vi',id:'id',ms:'ms',km:'km',lo:'lo',my:'my',tl:'tl',ru:'ru',uk:'uk',de:'de',fr:'fr',es:'es',pt:'pt',it:'it',nl:'nl',pl:'pl',tr:'tr',ar:'ar'};
  var label={}; list.forEach(function(p){label[p[0]]=p[1];});
  function readCookie(n){
    var m=document.cookie.match('(?:^|; )'+n+'=([^;]*)');
    return m?decodeURIComponent(m[1]):'';
  }
  function writeCookie(v){
    var host=location.hostname;
    ['googtrans='+v+';path=/','googtrans='+v+';path=/;domain='+host,'googtrans='+v+';path=/;domain=.'+host].forEach(function(c){document.cookie=c;});
  }
  function clearCookie(){
    var host=location.hostname;
    var dead=';expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/';
    ['googtrans=','googtrans=;domain='+host,'googtrans=;domain=.'+host].forEach(function(c){document.cookie=c+dead;});
  }
  function googleOn(){
    return document.body.classList.contains('translated-ltr')||document.body.classList.contains('translated-rtl')||/\/zh-CN\/(?!zh)/.test(readCookie('googtrans'));
  }
  function curLang(){
    var q=new URLSearchParams(location.search).get('tl')||localStorage.getItem('aid_tl')||'';
    if(q==='zh-CN') q='zh';
    if(label[q]) return q;
    var ck=readCookie('googtrans');
    var m=/\/zh-CN\/([a-zA-Z-]+)/.exec(ck);
    if(m && m[1]!=='zh-CN' && m[1]!=='zh'){
      for(var k in toGoogle){ if(toGoogle[k]===m[1]) return k; }
    }
    var lg=localStorage.getItem('lang');
    return lg==='en'?'en':'zh';
  }
  function combo(){ return document.querySelector('.goog-te-combo'); }
  function comboSet(gcode){
    var el=combo();
    if(!el) return false;
    el.value=gcode;
    el.dispatchEvent(new Event('change'));
    return true;
  }
  function waitCombo(gcode, done){
    if(comboSet(gcode)){ done(true); return; }
    var n=0, t=setInterval(function(){
      n++;
      if(comboSet(gcode)||n>40){ clearInterval(t); done(!!combo()); }
    },50);
  }
  function native(code){
    if(typeof setAidLang==='function') setAidLang(code);
    else if(typeof applyChrome==='function'){
      try{localStorage.setItem('lang',code)}catch(e){}
      applyChrome();
      if(typeof renderSide==='function') renderSide();
      if(typeof renderHot==='function') renderHot();
      if(typeof render==='function') render();
    }
  }
  function stripGoogle(){
    clearCookie();
    document.body.classList.remove('translated-ltr','translated-rtl');
    document.documentElement.classList.remove('translated-ltr','translated-rtl');
    native('zh');
  }
  function go(code){
    try{localStorage.setItem('aid_tl',code);}catch(e){}
    updateBtn(code);
    if(code==='zh'||code==='en'){
      clearCookie();
      native(code);
      if(googleOn()){
        waitCombo(code==='en'?'en':'zh-CN', function(){
          document.body.classList.remove('translated-ltr','translated-rtl');
        });
      }
      return;
    }
    native('zh');
    writeCookie('/zh-CN/'+toGoogle[code]);
    waitCombo(toGoogle[code], function(){});
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
    document.documentElement.lang=code==='zh'?'zh-CN':(toGoogle[code]||code);
    document.documentElement.dir=code==='ar'?'rtl':'ltr';
  }
  function bootBar(){
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
    if(cur==='zh'||cur==='en') native(cur);
  }
  window.googleTranslateElementInit=function(){
    try{
      new google.translate.TranslateElement({
        pageLanguage:'zh-CN',
        includedLanguages:Object.keys(toGoogle).map(function(k){return toGoogle[k];}).filter(function(v,i,a){return a.indexOf(v)===i;}).join(','),
        autoDisplay:false,
        layout:google.translate.TranslateElement.InlineLayout.VERTICAL
      },'google_translate_element');
    }catch(e){}
    var want=localStorage.getItem('aid_tl');
    if(want && toGoogle[want]) setTimeout(function(){ comboSet(toGoogle[want]); },300);
  };
  function loadGoogle(){
    if(document.getElementById('google_translate_element')) return;
    var box=document.createElement('div');
    box.id='google_translate_element';
    box.setAttribute('aria-hidden','true');
    document.body.appendChild(box);
    var s=document.createElement('script');
    s.src='https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    s.async=true;
    document.body.appendChild(s);
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',function(){bootBar();loadGoogle();});
  else {bootBar();loadGoogle();}
  setTimeout(bootBar,80);
})();
