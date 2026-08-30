(function(){
  var KEY='aid_tr_en';
  var cache={};
  try{cache=JSON.parse(localStorage.getItem(KEY)||'{}')}catch(e){cache={}}
  var q=[]; var busy=false;
  function hasHan(s){return /[\u3400-\u9FFF]/.test(String(s||''))}
  function save(){try{localStorage.setItem(KEY,JSON.stringify(cache))}catch(e){}}
  function api(text){
    if(cache[text]) return Promise.resolve(cache[text]);
    var cut=String(text).slice(0,450);
    var u='https://api.mymemory.translated.net/get?q='+encodeURIComponent(cut)+'&langpair=zh-CN|en';
    return fetch(u).then(function(r){return r.json()}).catch(function(){return null}).then(function(j){
      var out=(j&&j.responseData&&j.responseData.translatedText)||'';
      if(out && /MYMEMORY WARNING|QUERY LENGTH/i.test(out)) out='';
      if(out && hasHan(out)) out='';
      if(out){cache[text]=out;save();return out;}
      return fetch('https://translate.fedilab.app/translate',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({q:cut,source:'zh',target:'en',format:'text'})
      }).then(function(r){return r.json()}).catch(function(){return null}).then(function(j2){
        var t2=(j2&&j2.translatedText)||'';
        if(t2 && !hasHan(t2)){cache[text]=t2;save();return t2;}
        return text;
      });
    });
  }
  function enqueue(el){
    var raw=el.getAttribute('data-src')||el.textContent;
    if(!raw) return;
    if(!el.getAttribute('data-src')) el.setAttribute('data-src',raw);
    if(!hasHan(raw)) return;
    if(cache[raw]){el.textContent=cache[raw];return;}
    q.push(el);
    pump();
  }
  function pump(){
    if(busy) return;
    busy=true;
    (function next(){
      if(!q.length){busy=false;return;}
      var el=q.shift();
      if(!el||!el.isConnected){next();return;}
      var raw=el.getAttribute('data-src')||el.textContent;
      api(raw).then(function(t){
        if(el.isConnected && t) el.textContent=t;
        setTimeout(next,260);
      }).catch(function(){setTimeout(next,400)});
    })();
  }
  function scan(){
    var en=(localStorage.getItem('lang')||'en')==='en';
    var nodes=document.querySelectorAll('#list h3,#list p,#hot strong,#hot em');
    for(var i=0;i<nodes.length;i++){
      var el=nodes[i];
      var raw=el.getAttribute('data-src');
      if(!en){
        if(raw) el.textContent=raw;
        continue;
      }
      enqueue(el);
    }
  }
  window.aidTranslate=scan;
  var t=null;
  var mo=new MutationObserver(function(){
    clearTimeout(t);
    t=setTimeout(scan,80);
  });
  function boot(){
    var root=document.getElementById('scroll')||document.body;
    mo.observe(root,{childList:true,subtree:true});
    scan();
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot);
  else boot();
})();
