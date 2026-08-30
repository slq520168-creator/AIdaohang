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
  var SEP='\n';
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
          persist(); scan();
        };
      }catch(e){}
    };
  }
  function oneReq(cut,to){
    var sl=hasHan(cut)?'zh-CN':'en';
    var tl=MM[to]||'en';
    if(to==='zh'||sl===tl||(to==='en'&&sl==='en')) return Promise.resolve(cut);
    var u='https://api.mymemory.translated.net/get?q='+encodeURIComponent(cut)+'&langpair='+encodeURIComponent(sl+'|'+tl);
    return fetch(u).then(function(r){return r.json()}).catch(function(){return null}).then(function(j){
      var out=(j&&j.responseData&&j.responseData.translatedText)||'';
      if(out && /MYMEMORY WARNING|QUERY LENGTH|INVALID LANGUAGE/i.test(out)) out='';
      if(out) return out;
      var sl2=hasHan(cut)?'zh':'en';
      var tl2=LT[to]||'en';
      if(sl2===tl2) return cut;
      return fetch('https://translate.fedilab.app/translate',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({q:cut,source:sl2,target:tl2,format:'text'})
      }).then(function(r){return r.json()}).catch(function(){return null}).then(function(j2){
        return (j2&&j2.translatedText)||cut;
      });
    });
  }
  function splitOut(srcArr, translated){
    var parts=String(translated||'').split(/\r?\n/);
    if(parts.length===srcArr.length) return parts;
    return null;
  }
  function apiMany(texts,to){
    var need=[], mapIdx=[];
    texts.forEach(function(text,i){
      var k=ck(to,text);
      if(cache[k]) return;
      if(to==='zh'||!text){cache[k]=text;return;}
      need.push(text); mapIdx.push(i);
    });
    if(!need.length) return Promise.resolve(texts.map(function(t){return cache[ck(to,t)]||t}));
    var groups=[]; var cur=[]; var size=0;
    need.forEach(function(t){
      var add=t.length+1;
      if(cur.length && size+add>420){groups.push(cur);cur=[];size=0;}
      cur.push(t); size+=add;
    });
    if(cur.length) groups.push(cur);
    return Promise.all(groups.map(function(g){
      if(g.length===1){
        return oneReq(g[0].slice(0,450),to).then(function(out){cache[ck(to,g[0])]=out;return;});
      }
      return oneReq(g.join(SEP),to).then(function(out){
        var parts=splitOut(g,out);
        if(parts){
          g.forEach(function(t,i){cache[ck(to,t)]=parts[i];});
        }else{
          return Promise.all(g.map(function(t){return oneReq(t.slice(0,450),to).then(function(o){cache[ck(to,t)]=o;});}));
        }
      });
    })).then(function(){
      persist();
      return texts.map(function(t){return cache[ck(to,t)]||t});
    });
  }
  function pump(){
    if(busy) return;
    busy=true;
    function tick(){
      if(!q.length){busy=false;return;}
      var batch=[]; var seen={};
      while(q.length && batch.length<12){
        var item=q.shift();
        var el=item[0], to=item[1];
        if(!el||!el.isConnected) continue;
        var raw=el.getAttribute('data-src')||el.textContent;
        var k=ck(to,raw);
        if(cache[k]){el.textContent=cache[k];continue;}
        batch.push({el:el,to:to,raw:raw});
        seen[k]=1;
      }
      if(!batch.length){busy=false; if(q.length) tick(); return;}
      var by={};
      batch.forEach(function(b){
        if(!by[b.to]) by[b.to]=[];
        by[b.to].push(b);
      });
      var jobs=Object.keys(by).map(function(to){
        var arr=by[to];
        var texts=arr.map(function(b){return b.raw});
        return apiMany(texts,to).then(function(outs){
          arr.forEach(function(b,i){ if(b.el.isConnected) b.el.textContent=outs[i]||b.raw; });
        });
      });
      Promise.all(jobs).then(function(){ tick(); }).catch(function(){ setTimeout(tick,200); });
    }
    tick();
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
