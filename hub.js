/* v281/v283: 分类直达页渲染（cat.adult → 18+ inline gate）。数据 window.HUB = {title:{zh,en}, tip:{zh,en}, note:{zh,en}, cats:[{id,ic,zh,en,dz,de,sites:[[name_zh,name_en,url,desc_zh,desc_en,domain]]}]} */
(function(){
  var H=window.HUB; if(!H) return;
  function lang(){try{return (window.I18N&&I18N.lang)||'zh';}catch(e){return 'zh';}}
  function L(o){ if(!o) return ''; return lang()==='zh'?o.zh:(o.en||o.zh); }
  function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
  var UI={back:{zh:'返回首页',en:'Home'},open:{zh:'打开',en:'Open'},n:{zh:'个',en:''},
    ageQ:{zh:'以下内容仅限 18 岁以上成年人。你已年满 18 岁吗？',en:'The following is for adults 18+ only. Are you 18 or older?'},
    ageY:{zh:'我已满 18 岁',en:'I am 18+'},ageN:{zh:'离开',en:'Leave'}};
  /* adult category (cat.adult): inline 18+ confirmation on first expand, remembered in localStorage */
  var AGE_KEY='hub_age_ok_v1';
  function ageOk(){try{return localStorage.getItem(AGE_KEY)==='1';}catch(e){return false;}}
  var CH='<svg class="ch" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg>';
  function openId(){ var m=/[#&]c=([\w-]+)/.exec(location.hash); return m?m[1]:''; }
  function render(){
    var zh=lang()==='zh';
    document.title=L(H.title)+' · '+(zh?'全球优选AI导航':'AI Directory');
    var top=document.getElementById('hubtop');
    top.innerHTML='<a class="back" href="./tools.html?home=1"><svg viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6"/></svg>'+esc(L(UI.back))+'</a><h1>'+esc(L(H.title))+'</h1>';
    var tip=document.getElementById('hubtip'); if(tip){ tip.textContent=L(H.tip); tip.hidden=!tip.textContent; }
    var note=document.getElementById('hubnote'); if(note){ note.textContent=L(H.note); note.hidden=!note.textContent; }
    var cur=openId();
    document.getElementById('hubwrap').innerHTML=H.cats.map(function(c,i){
      var list=c.sites.map(function(s){
        var name=zh?s[0]:(s[1]||s[0]), desc=zh?s[3]:(s[4]||s[3]);
        var dom=s[5]||s[2].replace(/^https?:\/\//,'').split('/')[0];
        return '<a class="site" href="'+esc(s[2])+'" rel="noreferrer"><span class="fv">'+esc(name.charAt(0))+'<img loading="lazy" alt="" src="https://icons.duckduckgo.com/ip3/'+esc(dom)+'.ico" onerror="this.remove()"></span><span class="tx"><b>'+esc(name)+'</b><em>'+esc(desc)+'</em></span><span class="go">'+esc(L(UI.open))+' ›</span></a>';
      }).join('');
      if(c.adult&&!ageOk()) list='<div class="agegate"><p>'+esc(L(UI.ageQ))+'</p><div class="agebtns"><button type="button" class="ageN" data-age="no">'+esc(L(UI.ageN))+'</button><button type="button" class="ageY" data-age="yes">'+esc(L(UI.ageY))+'</button></div></div>';
      var names=c.sites.slice(0,4).map(function(s){return zh?s[0]:(s[1]||s[0]);}).join(' · ');
      return '<section class="cat'+(c.adult?' adult':'')+(c.id===cur?' open':'')+'" id="c-'+c.id+'"><button type="button" aria-expanded="'+(c.id===cur)+'" data-c="'+c.id+'"><span class="ic">'+c.ic+'</span><span class="nm"><b>'+esc(zh?c.zh:c.en)+'</b><small>'+esc(zh?(c.dz||names):(c.de||names))+'</small></span><span class="ct">'+c.sites.length+'</span>'+CH+'</button><div class="list">'+list+'</div></section>';
    }).join('');
  }
  document.addEventListener('click',function(e){
    var g=e.target.closest&&e.target.closest('.agegate [data-age]');
    if(g){
      var gs=g.closest('.cat');
      if(g.getAttribute('data-age')==='yes'){ try{localStorage.setItem(AGE_KEY,'1');}catch(err){} var gid=gs.id; render(); var ns=document.getElementById(gid); if(ns){ ns.classList.add('open'); ns.firstChild.setAttribute('aria-expanded','true'); } }
      else { gs.classList.remove('open'); gs.firstChild.setAttribute('aria-expanded','false'); try{ history.replaceState(null,'',location.pathname+location.search); }catch(err){} }
      return;
    }
    var b=e.target.closest&&e.target.closest('.cat>button'); if(!b) return;
    var sec=b.parentNode, willOpen=!sec.classList.contains('open');
    document.querySelectorAll('.cat.open').forEach(function(x){x.classList.remove('open');x.firstChild.setAttribute('aria-expanded','false');});
    if(willOpen){ sec.classList.add('open'); b.setAttribute('aria-expanded','true'); }
    try{ history.replaceState(null,'',location.pathname+location.search+(willOpen?'#c='+b.getAttribute('data-c'):'')); }catch(err){}
    if(willOpen){ var y=sec.getBoundingClientRect().top+window.scrollY-60; window.scrollTo({top:y<0?0:y,behavior:'smooth'}); }
  });
  render();
  if(window.I18N&&I18N.set){ var _s=I18N.set; I18N.set=function(l){ _s(l); render(); }; }
  window.addEventListener('pageshow',function(e){ if(e.persisted){ var id=openId(); if(id){var s=document.getElementById('c-'+id); if(s&&!s.classList.contains('open')) render();} } });
})();
