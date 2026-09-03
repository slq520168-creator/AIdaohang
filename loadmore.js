(function(){
  function add(arr){
    if(!arr||!arr.length||typeof tools==='undefined') return;
    var seen=new Set(tools.map(function(x){return x.name;}));
    arr.forEach(function(x){
      if(!x||!x.name||seen.has(x.name)) return;
      seen.add(x.name);
      tools.push(x);
    });
    if(typeof pickHot==='function') pickHot();
    if(typeof renderHot==='function') renderHot();
    if(typeof renderSide==='function') renderSide();
    if(typeof render==='function') render();
    if(typeof t==='function'&&metaEl) metaEl.textContent=tools.length+t().tools;
  }
  function grab(n){
    fetch('data/more'+n+'.json').then(function(r){return r.ok?r.json():[];}).then(add).catch(function(){});
  }
  function run(){for(var i=184;i<=219;i++) grab(i);}
  if(document.readyState==='complete') setTimeout(run,400);
  else window.addEventListener('load',function(){setTimeout(run,400);});
})();
