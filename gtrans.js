(function(){
  var list=[['zh-CN','中'],['en','EN'],['vi','VI'],['km','KM'],['th','TH'],['ja','JA'],['ko','KO'],['id','ID'],['es','ES'],['fr','FR'],['pt','PT'],['de','DE'],['ru','RU'],['ar','AR']];
  function setLang(code){
    var sel=document.querySelector('.goog-te-combo');
    if(!sel){setTimeout(function(){setLang(code)},400);return;}
    sel.value=code;
    sel.dispatchEvent(new Event('change'));
    var btn=document.getElementById('lang');
    var hit=list.filter(function(p){return p[0]===code})[0];
    if(btn&&hit) btn.textContent=hit[1];
    var bar=document.getElementById('langBar');
    if(bar) bar.classList.remove('show');
  }
  function boot(){
    var bar=document.getElementById('langBar');
    if(bar && !bar.dataset.ok){
      bar.dataset.ok='1';
      bar.innerHTML=list.map(function(p){return '<button type="button" data-l="'+p[0]+'">'+p[1]+'</button>'}).join('');
      bar.onclick=function(e){
        var b=e.target.closest('button'); if(!b)return;
        setLang(b.dataset.l);
      };
    }
    var btn=document.getElementById('lang');
    if(btn){
      btn.onclick=function(e){
        e.preventDefault();
        e.stopPropagation();
        if(bar) bar.classList.toggle('show');
      };
    }
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot);
  else boot();
  window.addEventListener('load',boot);
})();
