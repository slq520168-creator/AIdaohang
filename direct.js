(function(){
  var pending=null;
  function addRows(m, rows){
    if(!Array.isArray(rows)) return;
    rows.forEach(function(x){ if(x&&x.name&&x.url) m[x.name]=x.url; });
  }
  function load(){
    if(pending) return pending;
    pending=Promise.all([
      fetch('data/catalog.json').then(function(r){return r.ok?r.json():[];}).catch(function(){return [];}),
      fetch('data/more237.json').then(function(r){return r.ok?r.json():[];}).catch(function(){return [];}),
      fetch('app.js').then(function(r){return r.ok?r.text():'';}).catch(function(){return '';})
    ]).then(function(parts){
      var m={};
      addRows(m, parts[0]);
      addRows(m, parts[1]);
      var re=/name:"([^"]+)"[\s\S]{0,240}?url:"([^"]+)"/g, mm;
      while((mm=re.exec(parts[2]||''))) m[mm[1]]=mm[2];
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
