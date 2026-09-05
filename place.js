(function(){
  var pop=document.getElementById('pop');
  var side=document.getElementById('side');
  var tags=document.getElementById('tags');
  var under=document.getElementById('under');
  if(!pop||!side||!tags) return;
  window._toolPlace='';
  function on(){
    var hasBig=typeof selected!=='undefined' && selected && selected.size;
    var hasSmall=typeof tags!=='undefined' && window.tags && window.tags.size;
    var q=document.getElementById('q');
    var typed=q && (q.value||'').trim();
    if(typed){
      if(under) under.appendChild(pop);
      pop.hidden=false;
      return;
    }
    if(window._toolPlace==='big' && hasBig){
      side.insertAdjacentElement('afterend', pop);
      pop.hidden=false;
      return;
    }
    if(window._toolPlace==='small' && hasSmall){
      tags.insertAdjacentElement('afterend', pop);
      pop.hidden=false;
      return;
    }
    pop.hidden=true;
  }
  side.addEventListener('click', function(e){
    if(!e.target.closest('button')) return;
    window._toolPlace='big';
    setTimeout(on,0);
  }, true);
  tags.addEventListener('click', function(e){
    if(!e.target.closest('button')) return;
    window._toolPlace='small';
    setTimeout(on,0);
  }, true);
  var _r=window.render;
  if(typeof _r==='function'){
    window.render=function(){ _r.apply(this,arguments); on(); };
  }
  pop.hidden=true;
  setTimeout(on,50);
  setTimeout(on,400);
})();
