(function(){
  function hrefOf(x){
    var u=String(x&&x.url||'');
    if(/^https?:\/\//i.test(u)) return u;
    if(/^\.?\/?[\w.-]+\.html(\?|#|$)/.test(u)) return u;
    return 'guide.html?n='+encodeURIComponent(x&&x.name||'');
  }
  document.addEventListener('click',function(e){
    var el=e.target.closest&&e.target.closest('.card, #hot li');
    if(!el||el.closest('.detail')) return;
    var n=el.getAttribute('data-n');
    var list=window.tools||[];
    var x=null;
    for(var i=0;i<list.length;i++){ if(list[i].name===n){ x=list[i]; break; } }
    if(!x) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    location.href=hrefOf(x);
  },true);
})();
