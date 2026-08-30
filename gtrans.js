(function(){
  var list=[
    ['zh','中','zh-CN'],['en','EN','en'],['vi','VI','vi'],['km','KM','km'],['th','TH','th'],
    ['ja','JA','ja'],['ko','KO','ko'],['id','ID','id'],['es','ES','es'],['fr','FR','fr'],
    ['pt','PT','pt'],['de','DE','de'],['ru','RU','ru'],['ar','AR','ar']
  ];
  function pageUrl(){
    return location.origin+location.pathname+'?v=171&home=1';
  }
  function go(tl){
    if(tl==='zh-CN'||tl==='zh'){
      location.href=pageUrl();
      return;
    }
    location.href='https://translate.google.com/translate?sl=zh-CN&tl='+encodeURIComponent(tl)+'&u='+encodeURIComponent(pageUrl());
  }
  function boot(){
    var bar=document.getElementById('langBar');
    if(!bar){
      bar=document.createElement('div');
      bar.id='langBar';
      bar.className='langbar';
      var top=document.querySelector('.top');
      if(top&&top.parentNode) top.parentNode.insertBefore(bar,top.nextSibling);
    }
    bar.innerHTML=list.map(function(p){
      return '<button type="button" data-tl="'+p[2]+'">'+p[1]+'</button>';
    }).join('');
    bar.onclick=function(e){
      var b=e.target.closest('button'); if(!b)return;
      go(b.dataset.tl);
    };
    var btn=document.getElementById('lang');
    if(btn){
      btn.onclick=function(e){
        e.preventDefault();
        e.stopImmediatePropagation();
        bar.classList.toggle('show');
      };
    }
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot);
  else boot();
  setTimeout(boot,80);
})();
