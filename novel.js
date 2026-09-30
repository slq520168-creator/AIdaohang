/* v282 novel page: local auto-save (localStorage), 继续写, 我的作品, 导出 txt */
(function(){
  var $=function(id){return document.getElementById(id);};
  var titleI=$('title'),theme=$('theme'),genre=$('genre'),go=$('go'),exp=$('exp'),redo=$('redo');
  var go2=$('go2'),st2=$('st2'),st=$('st'),out=$('out'),cnt=$('cnt'),sv=$('sv'),resume=$('resume');
  var lib=$('lib'),libL=$('libL'),libB=$('libB'),libX=$('libX'),newW=$('newW');
  var LANG=(function(){var l='zh';try{l=(window.I18N&&window.I18N.lang)||localStorage.getItem('yx_lang')||'zh';}catch(e){}return l==='zh'?'zh':'en';})();
  var TX={
    zh:{h1:'写小说',new:'新建',lib:'我的作品',close:'收起',lTitle:'书名',lTheme:'主题',lGenre:'类型',export:'导出 .txt',redo:'重写第一章',
      phTitle:'选填',phTheme:'写什么故事，人物和结局一并写上',phOut:'正文',
      first:'生成第一章',cont:'继续写（第{n}章）',needIdea:'先写主题',writing:'正在写第{n}章…约 30–60 秒',done:'已写到第{n}章，已自动保存',fail:'失败，稍等几秒再点一次',retry:'重试第{n}章…',
      saved:'已自动保存到本机 {t}',saveErr:'本机空间不足，保存失败，请先导出 .txt 或删除旧作品',chars:'{c} 字 · {n} 章',
      resume:'已恢复《{t}》（{c} 字，第{n}章）',untitled:'未命名作品',
      open:'打开',rename:'改名',del:'删除',sure:'确认删除？',ok:'确定',cancel:'取消',emptyLib:'还没有作品',
      meta:'{c} 字 · {n} 章 · {t}',redoSure:'会覆盖当前正文，再点一次确认',deleted:'已删除',created:'已新建',opened:'已打开《{t}》',
      exported:'已导出 {f}',noText:'还没有正文可导出',busy:'正在写，请稍等',langNote:'',
      genres:['都市','言情','玄幻','悬疑','科幻','战神','古言']},
    en:{h1:'Write a Novel',new:'New',lib:'My works',close:'Hide',lTitle:'Title',lTheme:'Idea',lGenre:'Genre',export:'Export .txt',redo:'Rewrite ch.1',
      phTitle:'Optional',phTheme:'What is the story? Characters and ending too',phOut:'Story text',
      first:'Write chapter 1',cont:'Continue (ch. {n})',needIdea:'Write the idea first',writing:'Writing chapter {n}… about 30–60 s',done:'Chapter {n} done, auto-saved',fail:'Failed — wait a few seconds and tap again',retry:'Retrying chapter {n}…',
      saved:'Auto-saved on this device {t}',saveErr:'Device storage full — save failed. Export .txt or delete old works.',chars:'{c} chars · {n} ch.',
      resume:'Restored "{t}" ({c} chars, ch. {n})',untitled:'Untitled',
      open:'Open',rename:'Rename',del:'Delete',sure:'Confirm delete?',ok:'OK',cancel:'Cancel',emptyLib:'No works yet',
      meta:'{c} chars · {n} ch. · {t}',redoSure:'This replaces the current text. Tap again to confirm',deleted:'Deleted',created:'New work created',opened:'Opened "{t}"',
      exported:'Exported {f}',noText:'Nothing to export yet',busy:'Writing, please wait',
      genres:['Urban','Romance','Fantasy','Mystery','Sci-fi','War god','Historical']}
  };
  var GZ=TX.zh.genres;
  function T(k,o){var s=(TX[LANG]&&TX[LANG][k]!=null)?TX[LANG][k]:TX.zh[k];if(o)for(var p in o)s=s.split('{'+p+'}').join(o[p]);return s;}
  document.querySelectorAll('[data-n]').forEach(function(el){el.textContent=T(el.getAttribute('data-n'));});
  document.querySelectorAll('[data-np]').forEach(function(el){el.placeholder=T(el.getAttribute('data-np'));});
  document.title=T('h1');
  genre.innerHTML=GZ.map(function(g,i){return '<option value="'+g+'">'+T('genres')[i]+'</option>';}).join('');

  /* ---------- storage ---------- */
  var IDX='novel_idx_v1',PRE='novel_w_',LAST='novel_last_v1';
  function lsGet(k){try{return JSON.parse(localStorage.getItem(k)||'null');}catch(e){return null;}}
  function lsSet(k,v){try{localStorage.setItem(k,JSON.stringify(v));return true;}catch(e){return false;}}
  function index(){var a=lsGet(IDX);return Array.isArray(a)?a:[];}
  function uid(){return Date.now().toString(36)+Math.random().toString(36).slice(2,6);}
  function blank(){return {id:uid(),title:'',idea:'',genre:GZ[0],text:'',chap:0,created:Date.now(),updated:Date.now()};}
  function load(id){var w=lsGet(PRE+id);return (w&&w.id)?w:null;}
  function heads(t){var m=String(t||'').match(/(^|\n)\s*(第[一二三四五六七八九十百千零〇两\d]+章|Chapter\s+\d+)/gi);return m?m.length:0;}
  function chapOf(w){return Math.max(w.chap||0,heads(w.text));}
  function clause(s){return String(s||'').trim().split(/[，。,.!！?？;；：:\n]/)[0].trim().slice(0,16);}
  function nameOf(w){
    if(w.title&&w.title.trim())return w.title.trim();
    var i=clause(w.idea);
    if(i)return i;
    var f=(w.text||'').trim().split(/\n/)[0];
    return f?f.slice(0,16):T('untitled');
  }
  function persist(w){
    w.updated=Date.now();
    if(!lsSet(PRE+w.id,w))return false;
    var a=index().filter(function(x){return x.id!==w.id;});
    a.unshift({id:w.id,title:nameOf(w),chars:(w.text||'').replace(/\s/g,'').length,chap:chapOf(w),updated:w.updated});
    lsSet(IDX,a);lsSet(LAST,w.id);
    return true;
  }
  function hhmm(ts){var d=new Date(ts);function p(n){return (n<10?'0':'')+n;}
    var now=new Date();var s=p(d.getHours())+':'+p(d.getMinutes());
    return d.toDateString()===now.toDateString()?s:(d.getMonth()+1)+'/'+d.getDate()+' '+s;}

  /* ---------- state ---------- */
  var cur=null,busy=false,timer=0,dirty=false,redoArm=0;
  function fromUI(){cur.title=titleI.value;cur.idea=theme.value;cur.genre=genre.value;cur.text=out.value;}
  function toUI(){
    titleI.value=cur.title||'';theme.value=cur.idea||'';
    genre.value=GZ.indexOf(cur.genre)>=0?cur.genre:GZ[0];
    out.value=cur.text||'';grow();paint();
  }
  function isEmpty(w){return !(w.text||'').trim()&&!(w.idea||'').trim()&&!(w.title||'').trim();}
  function saveNow(){
    clearTimeout(timer);timer=0;
    if(!cur)return;fromUI();
    if(!dirty)return;
    if(isEmpty(cur)&&!load(cur.id)){dirty=false;return;} /* don't store blank drafts */
    if(persist(cur)){dirty=false;sv.textContent=T('saved',{t:hhmm(cur.updated)});sv.style.color='';}
    else{sv.textContent=T('saveErr');sv.style.color='#dc2626';}
    if(lib.classList.contains('on'))renderLib();
  }
  function touch(){dirty=true;clearTimeout(timer);timer=setTimeout(saveNow,600);paint();}
  function paint(){
    var t=out.value,c=t.replace(/\s/g,'').length,n=cur?Math.max(cur.chap||0,heads(t)):0;
    cnt.textContent=c?T('chars',{c:c,n:n}):'';
    go.textContent=t.trim()?T('cont',{n:n+1}):T('first');
    redo.style.display=go2.style.display=t.trim()?'':'none';
    go2.textContent=go.textContent;
    exp.disabled=!t.trim();
  }
  function grow(){out.style.height='auto';out.style.height=Math.max(180,out.scrollHeight+2)+'px';}
  function set(t,c){[st,st2].forEach(function(e){e.textContent=t||'';e.className='st'+(c?' '+c:'');});}

  [titleI,theme].forEach(function(el){el.addEventListener('input',touch);});
  genre.addEventListener('change',touch);
  out.addEventListener('input',function(){grow();touch();});
  window.addEventListener('pagehide',saveNow);
  window.addEventListener('beforeunload',saveNow);
  document.addEventListener('visibilitychange',function(){if(document.hidden)saveNow();});
  window.addEventListener('resize',grow);

  /* ---------- generation (existing /api/chat novel mode) ---------- */
  async function gen(cont){
    if(busy){set(T('busy'));return;}
    fromUI();
    var idea=(cur.idea||'').trim();
    if(!cont&&!idea){set(T('needIdea'),'err');theme.focus();return;}
    if(cont&&!idea&&!(cur.text||'').trim()){set(T('needIdea'),'err');theme.focus();return;}
    var w=cur,prev=cont?(w.text||''):'';
    var n=cont?chapOf(w)+1:1;
    busy=true;go.disabled=go2.disabled=redo.disabled=newW.disabled=true;
    set(T('writing',{n:n}));resume.classList.remove('on');
    var en=LANG!=='zh'?'\n用英文写。':'';
    var head='你是小说作家。类型：'+w.genre+(w.title&&w.title.trim()?'\n书名：'+w.title.trim().slice(0,60):'')+(idea?'\n主题：'+idea.slice(0,700):'');
    /* ask ~2000 字 per call (api/chat maxDuration 60 s); on failure (rate limit / timeout) retry once shorter */
    function ask(len){
      var q=cont
        ? (head+'\n下面是已经写好的正文结尾。紧接着往下写第'+n+'章，约'+len+'字，开头写章标题（第'+n+'章 xxx），情节人物保持连贯，不要重复前文，不要解释，只输出正文。'+en+'\n——前文结尾——\n'+prev.slice(-2400))
        : (head+'\n写第1章正文约'+len+'字，开头写章标题（第1章 xxx），不要解释。'+en);
      return fetch('/api/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({mode:'novel',sys:'你是专业小说作家，只写正文。',q:q})})
        .then(function(r){return r.text().then(function(t){t=String(t||'').trim();if(!r.ok||!t||t==='信号不稳，再试一次。')throw 1;return t;});});
    }
    try{
      var t;
      try{t=await ask(2000);}
      catch(e1){set(T('retry',{n:n}));await new Promise(function(ok){setTimeout(ok,6000);});t=await ask(1000);}
      t=t.replace(/\*\*/g,'').replace(/^#+\s*/gm,'').trim();
      if(w===cur){fromUI();prev=cont?(cur.text||''):'';}
      var base=cont?prev.replace(/\s+$/,''):'';
      w.text=base+(base?'\n\n':'')+t;
      w.chap=n;
      if(!w.title||!w.title.trim()){ if(idea) w.title=clause(idea); }
      dirty=true;
      if(w===cur){toUI();saveNow();}else{persist(w);}
      set(T('done',{n:n}),'ok');
    }catch(e){set(T('fail'),'err');}
    busy=false;go.disabled=go2.disabled=redo.disabled=newW.disabled=false;paint();
  }
  go.onclick=go2.onclick=function(){gen(!!out.value.trim());};
  redo.onclick=function(){
    if(Date.now()-redoArm>4000){redoArm=Date.now();set(T('redoSure'),'err');return;}
    redoArm=0;gen(false);
  };

  /* ---------- export .txt ---------- */
  exp.onclick=function(){
    fromUI();
    var body=(cur.text||'').trim();
    if(!body){set(T('noText'),'err');return;}
    var name=nameOf(cur).replace(/[\\\/:*?"<>|\r\n]+/g,' ').trim()||'novel';
    var txt=name+'\n\n'+body.replace(/\r?\n/g,'\r\n')+'\r\n';
    var blob=new Blob(['\ufeff'+txt],{type:'text/plain;charset=utf-8'});
    var a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name+'.txt';
    a.style.display='none';document.body.appendChild(a);a.click();
    setTimeout(function(){URL.revokeObjectURL(a.href);a.remove();},1500);
    set(T('exported',{f:name+'.txt'}),'ok');
  };

  /* ---------- 我的作品 ---------- */
  function esc(s){return String(s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
  function renderLib(){
    var a=index();
    if(!a.length){libL.innerHTML='<div class="empty">'+esc(T('emptyLib'))+'</div>';return;}
    libL.innerHTML=a.map(function(x){
      return '<div class="it'+(cur&&x.id===cur.id?' cur':'')+'" data-id="'+esc(x.id)+'"><div class="nm">'+esc(x.title||T('untitled'))+'</div>'+
        '<div class="mt">'+esc(T('meta',{c:x.chars||0,n:x.chap||0,t:hhmm(x.updated)}))+'</div>'+
        '<div class="ac"><button type="button" data-a="open">'+esc(T('open'))+'</button><button type="button" class="sub" data-a="ren">'+esc(T('rename'))+'</button><button type="button" class="del" data-a="del">'+esc(T('del'))+'</button></div></div>';
    }).join('');
  }
  function openLib(on){lib.classList.toggle('on',on);if(on){saveNow();renderLib();}}
  libB.onclick=function(){openLib(!lib.classList.contains('on'));};
  libX.onclick=function(){openLib(false);};
  libL.addEventListener('click',function(e){
    var b=e.target.closest('button');if(!b)return;
    var it=b.closest('.it');var id=it&&it.getAttribute('data-id');if(!id)return;
    var a=b.getAttribute('data-a');
    if(a==='open'){
      if(busy){set(T('busy'));return;}
      saveNow();var w=load(id);if(!w)return;
      cur=w;toUI();lsSet(LAST,id);openLib(false);resume.classList.remove('on');set(T('opened',{t:nameOf(w)}),'ok');
      window.scrollTo(0,0);
    }else if(a==='ren'){
      if(it.querySelector('.rn'))return;
      var w2=load(id);if(!w2)return;
      var box=document.createElement('div');box.className='rn';
      box.innerHTML='<input type="text" maxlength="60"/><button type="button" data-a="rok">'+esc(T('ok'))+'</button><button type="button" class="sub" data-a="rno">'+esc(T('cancel'))+'</button>';
      box.querySelector('input').value=nameOf(w2);
      it.insertBefore(box,it.querySelector('.ac'));box.querySelector('input').focus();
      box.querySelector('input').addEventListener('keydown',function(ev){if(ev.key==='Enter'){ev.preventDefault();box.querySelector('[data-a=rok]').click();}});
    }else if(a==='rok'){
      var v=it.querySelector('.rn input').value.trim();
      if(cur&&cur.id===id){saveNow();titleI.value=v;fromUI();dirty=true;saveNow();}
      else{var w3=load(id);if(w3){w3.title=v;persist(w3);if(cur)lsSet(LAST,cur.id);}}
      renderLib();
    }else if(a==='rno'){renderLib();}
    else if(a==='del'){
      if(!b.classList.contains('sure')){
        b.classList.add('sure');b.textContent=T('sure');
        setTimeout(function(){if(b.isConnected){b.classList.remove('sure');b.textContent=T('del');}},4000);
        return;
      }
      if(busy&&cur&&cur.id===id){set(T('busy'));return;}
      try{localStorage.removeItem(PRE+id);}catch(err){}
      lsSet(IDX,index().filter(function(x){return x.id!==id;}));
      if(cur&&cur.id===id){
        var rest=index();cur=(rest[0]&&load(rest[0].id))||blank();dirty=false;toUI();
        if(rest[0])lsSet(LAST,cur.id);else{try{localStorage.removeItem(LAST);}catch(err){}}
        sv.textContent='';
      }
      renderLib();set(T('deleted'),'ok');
    }
  });
  newW.onclick=function(){
    if(busy){set(T('busy'));return;}
    saveNow();cur=blank();dirty=false;toUI();sv.textContent='';resume.classList.remove('on');openLib(false);
    set(T('created'),'ok');theme.focus();
  };

  /* ---------- restore last work ---------- */
  try{history.scrollRestoration='manual';}catch(e){}
  (function(){
    var id=lsGet(LAST),w=id&&load(id);
    if(!w){var a=index();w=a[0]&&load(a[0].id);}
    if(w){
      cur=w;toUI();
      sv.textContent=T('saved',{t:hhmm(w.updated)});
      if((w.text||'').trim()){
        resume.textContent=T('resume',{t:nameOf(w),c:(w.text||'').replace(/\s/g,'').length,n:chapOf(w)});
        resume.classList.add('on');
      }
    }else{cur=blank();toUI();}
  })();
})();
