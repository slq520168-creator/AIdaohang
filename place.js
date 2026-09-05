(function(){
  function place(w){ window._toolPlace=w||window._toolPlace||'small'; }
  function after(){
    var p=window._toolPlace||'small';
    var popBig=document.getElementById('popBig');
    var pop=document.getElementById('pop');
    var list=document.getElementById('list');
    var listBig=document.getElementById('listBig');
    if(!popBig||!listBig||!list) return;
    if(p==='big'){
      popBig.hidden=false;
      if(pop) pop.hidden=true;
      if(list.innerHTML){ listBig.innerHTML=list.innerHTML; list.innerHTML=''; }
    } else {
      popBig.hidden=true;
      if(pop) pop.hidden=false;
      if(listBig.innerHTML && !list.innerHTML){ list.innerHTML=listBig.innerHTML; listBig.innerHTML=''; }
    }
  }
  var side=document.getElementById('side');
  var tags=document.getElementById('tags');
  if(side) side.addEventListener('click', function(){ place('big'); setTimeout(after,0); }, true);
  if(tags) tags.addEventListener('click', function(){ place('small'); setTimeout(after,0); }, true);
  var _r=window.render;
  if(typeof _r==='function'){
    window.render=function(){ _r.apply(this,arguments); after(); };
  }
  var _rs=window.renderSide;
  if(typeof _rs==='function'){
    window.renderSide=function(){
      _rs.apply(this,arguments);
      setTimeout(after,0);
    };
  }
})();
