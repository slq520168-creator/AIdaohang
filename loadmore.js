(function(){
  function add(arr){
    if(!arr||!arr.length||typeof tools==='undefined') return;
    var seen=new Set(tools.map(function(x){return x.name;}));
    arr.forEach(function(x){
      if(!x||!x.name||seen.has(x.name)) return;
      seen.add(x.name);
      tools.push(x);
      if(typeof TAGS!=='undefined'&&x.tags&&x.tags.length){
        x.tags.forEach(function(zh){
          if(!zh) return;
          if(TAGS.some(function(t){return t[0]===zh;})) return;
          var en=(typeof TAG_EN!=='undefined'&&TAG_EN[zh])?TAG_EN[zh]:zh;
          TAGS.push([zh,en]);
          if(typeof TAG_EN!=='undefined') TAG_EN[zh]=en;
        });
      }
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
  function run(){for(var i=184;i<=222;i++) grab(i);}
  if(document.readyState==='complete') setTimeout(run,400);
  else window.addEventListener('load',function(){setTimeout(run,400);});
})();
