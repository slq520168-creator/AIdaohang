(function(){
  var KEY='aid_tr_map';
  var LANGS=[
    ['en','EN'],['zh','ZH'],['km','KM'],['th','TH'],['vi','VI'],['ja','JA'],['ko','KO'],
    ['id','ID'],['es','ES'],['fr','FR'],['pt','PT'],['de','DE'],['ru','RU'],['ar','AR']
  ];
  var MM={en:'en',zh:'zh-CN',km:'km-KH',th:'th-TH',vi:'vi-VN',ja:'ja-JP',ko:'ko-KR',id:'id-ID',es:'es-ES',fr:'fr-FR',pt:'pt-PT',de:'de-DE',ru:'ru-RU',ar:'ar-SA'};
  var LT={en:'en',zh:'zh',km:'en',th:'th',vi:'vi',ja:'ja',ko:'ko',id:'id',es:'es',fr:'fr',pt:'pt',de:'de',ru:'ru',ar:'ar'};
  var cache={};
  try{cache=JSON.parse(localStorage.getItem(KEY)||'{}')}catch(e){cache={}}
  var q=[]; var busy=false;
  function lang(){return localStorage.getItem('lang')||'en'}
  function hasHan(s){return /[\u3400-\u9FFF]/.test(String(s||''))}
  function save(){try{localStorage.setItem(KEY,JSON.stringify(cache))}catch(e){}}
  function ck(to,text){return to+'\t'+text}
  function api(text,to){
    var k=ck(to,text);
    if(cache[k]) return Promise.resolve(cache[k]);
    if(to==='zh' && hasHan(text)) return Promise.resolve(text);
    var cut=String(text).slice(0,450);
    var sl=hasHan(cut)?'zh-CN':'en';
    var tl=MM[to]||'en';
    if(sl===tl || (sl==='zh-CN'&&to==='zh')) return Promise.resolve(text);
    var u='https://api.mymemory.translated.net/get?q='+encodeURIComponent(cut)+'&langpair='+encodeURIComponent(sl+'|'+tl);
    return fetch(u).then(function(r){return r.json()}).catch(function(){return null}).then(function(j){
      var out=(j&&j.responseData&&j.responseData.translatedText)||'';
      if(out && /MYMEMORY WARNING|QUERY LENGTH/i.test(out)) out='';
      if(out){cache[k]=out;save();return out;}
      var sl2=hasHan(cut)?'zh':'en';
      var tl2=LT[to]||'en';
      if(sl2===tl2) return text;
      return fetch('https://translate.fedilab.app/translate',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({q:cut,source:sl2,target:tl2,format:'text'})
      }).then(function(r){return r.json()}).catch(function(){return null}).then(function(j2){
        var t2=(j2&&j2.translatedText)||text;
        cache[k]=t2;save();return t2;
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
      api(raw,to).then(function(t){
        if(el.isConnected && t) el.textContent=t;
        setTimeout(next,240);
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
      localStorage.setItem('lang',b.dataset.l);
      location.reload();
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
    bar();
    var root=document.getElementById('scroll')||document.body;
    mo.observe(root,{childList:true,subtree:true});
    scan();
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot);
  else boot();
})();
