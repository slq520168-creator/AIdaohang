(function(){
  var pending=null;
  function load(){
    if(pending) return pending;
    pending=Promise.all([
      fetch('data/catalog.json').then(function(r){return r.ok?r.json():[];}).catch(function(){return [];}),
      fetch('data/more237.json').then(function(r){return r.ok?r.json():[];}).catch(function(){return [];})
    ]).then(function(parts){
      var m={};
      parts.forEach(function(rows){
        if(!Array.isArray(rows)) return;
        rows.forEach(function(x){ if(x&&x.name&&x.url) m[x.name]=x.url; });
      });
      return m;
    });
    return pending;
  }
  function go(u, name){
    if(/^https?:\/\//i.test(u)||/^\.?\/?[\w.-]+\.html(\?|#|$)/.test(u||'')) location.href=u;
    else location.href='guide.html?n='+encodeURIComponent(name||'');
  }
  load();
  document.addEventListener('click',function(e){
    var el=e.target.closest&&e.target.closest('.card, #hot li');
    if(!el) return;
    var n=el.getAttribute('data-n');
    if(!n) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    load().then(function(m){ go(m[n], n); });
  },true);
})();
