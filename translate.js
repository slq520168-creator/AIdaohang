(function(){
  var LS='aid_tr_map';
  var DBN='aid_tr'; var ST='map';
  var LANGS=[
    ['en','EN'],['zh','ZH'],['km','KM'],['th','TH'],['vi','VI'],['ja','JA'],['ko','KO'],
    ['id','ID'],['es','ES'],['fr','FR'],['pt','PT'],['de','DE'],['ru','RU'],['ar','AR']
  ];
  var MM={en:'en',zh:'zh-CN',km:'km-KH',th:'th-TH',vi:'vi-VN',ja:'ja-JP',ko:'ko-KR',id:'id-ID',es:'es-ES',fr:'fr-FR',pt:'pt-PT',de:'de-DE',ru:'ru-RU',ar:'ar-SA'};
  var LT={en:'en',zh:'zh',km:'en',th:'th',vi:'vi',ja:'ja',ko:'ko',id:'id',es:'es',fr:'fr',pt:'pt',de:'de',ru:'ru',ar:'ar'};
  var cache={};
  try{cache=JSON.parse(localStorage.getItem(LS)||'{}')||{}}catch(e){cache={}}
  var q=[]; var busy=false; var saveT=null; var db=null;
  function lang(){return localStorage.getItem('lang')||'en'}
  function hasHan(s){return /[\u3400-\u9FFF]/.test(String(s||''))}
  function ck(to,text){return to+'\t'+String(text)}
  function persist(){
    clearTimeout(saveT);
    saveT=setTimeout(function(){
      try{localStorage.setItem(LS,JSON.stringify(cache))}catch(e){
        var keys=Object.keys(cache);
        if(keys.length>800){
          var slim={};
          keys.slice(-600).forEach(function(k){slim[k]=cache[k]});
          cache=slim;
          try{localStorage.setItem(LS,JSON.stringify(cache))}catch(e2){}
        }
      }
      if(!db) return;
      try{
        var tx=db.transaction(ST,'readwrite');
        var store=tx.objectStore(ST);
        Object.keys(cache).forEach(function(k){store.put({k:k,v:cache[k]})});
      }catch(e){}
    },200);
  }
  function openDb(){
    if(!window.indexedDB) return;
    var req=indexedDB.open(DBN,1);
    req.onupgradeneeded=function(){req.result.createObjectStore(ST,{keyPath:'k'})};
    req.onsuccess=function(){
      db=req.result;
      try{
        var tx=db.transaction(ST,'readonly');
        var g=tx.objectStore(ST).getAll();
        g.onsuccess=function(){
          (g.result||[]).forEach(function(row){if(row&&row.k&&row.v&&!cache[row.k]) cache[row.k]=row.v});
          persist();
          scan();
        };
      }catch(e){}
    };
  }
  function api(text,to){
    var k=ck(to,text);
    if(cache[k]) return Promise.resolve(cache[k]);
    if(to==='zh') return Promise.resolve(text);
    var cut=String(text).slice(0,450);
    var sl=hasHan(cut)?'zh-CN':'en';
    var tl=MM[to]||'en';
    if(to==='en' && sl==='en') {cache[k]=text;persist();return Promise.resolve(text);}
    if(sl===tl) {cache[k]=text;persist();return Promise.resolve(text);}
    var u='https://api.mymemory.translated.net/get?q='+encodeURIComponent(cut)+'&langpair='+encodeURIComponent(sl+'|'+tl);
    return fetch(u).then(function(r){return r.json()}).catch(function(){return null}).then(function(j){
      var out=(j&&j.responseData&&j.responseData.translatedText)||'';
      if(out && /MYMEMORY WARNING|QUERY LENGTH|INVALID LANGUAGE/i.test(out)) out='';
      if(out){cache[k]=out;persist();return out;}
      var sl2=hasHan(cut)?'zh':'en';
      var tl2=LT[to]||'en';
      if(sl2===tl2){cache[k]=text;persist();return text;}
      return fetch('https://translate.fedilab.app/translate',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({q:cut,source:sl2,target:tl2,format:'text'})
      }).then(function(r){return r.json()}).catch(function(){return null}).then(function(j2){
        var t2=(j2&&j2.translatedText)||text;
        cache[k]=t2;persist();return t2;
      });
    });
  }
  function enqueue(el,to){
    var raw=el.getAttribute('data-src')||el.textContent;
    if(!raw||!String(raw).trim()) return;
    if(!el.getAttribute('data-src')) el.setAttribute('data-src',raw);
    raw=el.getAttribute('data-src');
    if(to==='zh'){el.textContent=raw;return;}
    var k=ck(to,raw);
    if(cache[k]){el.textContent=cache[k];return;}
    q.push([el,to]);
    pump();
  }
  function pump(){
    if(busy) return;
    busy=true;
    (function next(){
      if(!q.length){busy=false;return;}
      var item=q.shift(); var el=item[0], to=item[1];
      if(!el||!el.isConnected){next();return;}
      var raw=el.getAttribute('data-src')||el.textContent;
      var k=ck(to,raw);
      if(cache[k]){el.textContent=cache[k];next();return;}
      api(raw,to).then(function(t){
        if(el.isConnected && t) el.textContent=t;
        setTimeout(next, cache[k]?0:220);
      }).catch(function(){setTimeout(next,400)});
    })();
  }
  function scan(){
    var to=lang();
    var sel='#brand,#hotTitle,#listTitle,#theme,#popX,#side button,#tags button,#list h3,#list p,#hot strong,#hot em,#hello,#goHome,.gatet,#gateGo,#gateErr';
    var nodes=document.querySelectorAll(sel);
    for(var i=0;i<nodes.length;i++) enqueue(nodes[i],to);
  }
  window.aidTranslate=scan;
  function applyLang(id){
    localStorage.setItem('lang',id);
    q=[];
    scan();
    var btn=document.getElementById('lang');
    if(btn) btn.textContent=(LANGS.filter(function(p){return p[0]===id})[0]||['en','EN'])[1];
    var box=document.getElementById('langBar');
    if(box){
      var bs=box.querySelectorAll('button');
      for(var i=0;i<bs.length;i++) bs[i].classList.toggle('on',bs[i].dataset.l===id);
    }
  }
  function bar(){
    var box=document.getElementById('langBar');
    if(!box){
      box=document.createElement('div');
      box.id='langBar';
      box.className='langbar';
      var acts=document.querySelector('.acts');
      if(acts&&acts.parentNode) acts.parentNode.appendChild(box);
      else document.body.appendChild(box);
    }
    var cur=lang();
    box.innerHTML=LANGS.map(function(p){
      return '<button type="button" data-l="'+p[0]+'" class="'+(p[0]===cur?'on':'')+'">'+p[1]+'</button>';
    }).join('');
    box.onclick=function(e){
      var b=e.target.closest('button'); if(!b)return;
      applyLang(b.dataset.l);
      box.classList.remove('show');
    };
    var btn=document.getElementById('lang');
    if(btn){
      btn.textContent=(LANGS.filter(function(p){return p[0]===cur})[0]||['en','EN'])[1];
      btn.onclick=function(e){e.stopPropagation();box.classList.toggle('show');};
    }
  }
  var t=null;
  var mo=new MutationObserver(function(){clearTimeout(t);t=setTimeout(scan,80)});
  function boot(){
    openDb();
    bar();
    var root=document.getElementById('scroll')||document.body;
    mo.observe(root,{childList:true,subtree:true});
    scan();
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot);
  else boot();
})();
