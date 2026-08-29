const I18N={
  zh:{brand:'全球优选AI导航',hot:'今日热门',all:'AI 工具大全',ph:'搜 金融 / 健身 / 旅行 / 学习',themeD:'深色',themeL:'浅色',tools:' 款工具',hit:' 条',empty:'没有匹配',res:'搜索结果 '},
  en:{brand:'Global AI Directory',hot:'Trending',all:'All tools',ph:'Search finance fitness travel learn',themeD:'Dark',themeL:'Light',tools:' tools',hit:'',empty:'No match',res:'Results '}
};
const CATS=[
  ['全部','All'],['免费','Free'],['收费','Paid'],['对话','Chat'],['聊天','Chat'],['插件','Plugins'],['陪伴','Companion'],['学习','Learn'],['健身','Fit'],['美妆','Beauty'],['宠物','Pets'],['美食','Food'],['旅行','Travel'],['拼车','Ride'],['租车','Rental'],['法律','Legal'],['管理','Manage'],['绘画','Image'],['视频','Video'],['成人','Adult'],['无审核','Uncensored'],['直播','Live'],['交友','Dating'],['约炮','Hookup'],['办公','Work'],['编程','Code'],['智能工作流','Workflow'],['游戏','Game'],['音乐','Music'],['语音','Voice'],['设计','Design'],['搜索','Search'],['写作','Write'],['接单','Gigs'],['兼职','Part-time'],['招聘','Hire'],['社区','Community'],['开店','Shop'],['小商品','Goods'],['采集','Capture'],['接口','API'],['机器人','Robot'],['图书','Books'],['小说','Novels'],['日韩漫画','Manga']
];
const KW={
  '对话':/对话|Chat|Ollama|Venice/,
  '聊天':/聊天|Chat/,
  '插件':/插件/,
  '陪伴':/陪伴|角色/,
  '学习':/学习|Khan|Coursera|Duolingo|Anki|CS50|edX/,
  '健身':/健身|Strava|Yoga|Fitbit|Mayo|Cronometer/,
  '美妆':/美妆/,
  '宠物':/宠物/,
  '美食':/美食/,
  '旅行':/旅行|Maps|AllTrails|Rome2Rio|Trainline|Naver|Kakao/,
  '拼车':/拼车|Waze/,
  '租车':/租车/,
  '法律':/法律/,
  '管理':/管理|财务|TradingView|Binance|Stripe|Wise|Xero/,
  '绘画':/绘画|Blender/,
  '视频':/视频|OBS|Loom|Twitch/,
  '成人':/成人|18|NSFW/,
  '无审核':/无审核|本地|Ollama|Venice|uncensored/,
  '直播':/直播|Twitch|Kick|StreamYard/,
  '交友':/交友/,
  '约炮':/约炮/,
  '办公':/办公|Slack|Notion|Linear|Zoom|Calendly/,
  '编程':/编程|freeCodeCamp|Godot/,
  '智能工作流':/工作流/,
  '游戏':/游戏|Godot|Unity|Unreal|Roblox/,
  '音乐':/音乐/,
  '语音':/语音|Riverside|Descript|Podcast/,
  '设计':/设计|Blender/,
  '搜索':/搜索/,
  '写作':/写作|Grammarly|DeepL|LanguageTool/,
  '接单':/接单/,
  '兼职':/兼职/,
  '招聘':/招聘/,
  '社区':/社区/,
  '开店':/开店/,
  '小商品':/小商品/,
  '采集':/采集/,
  '接口':/API/,
  '机器人':/机器人/,
  '图书':/图书|Gutenberg|Libby|Scribd|Archive/,
  '小说':/小说/,
  '日韩漫画':/漫画/
};
const DROP_NAME=new Set(['Cron Calendar','Brilliant Practice','Quizlet Learn','Tuta Mail','Navidrome Demo','Stream Music','Primephonic 已并','Google Jules Agent','OpenDevin 旧名','Cursor.sh 旧域','Fig Term 已并','Amazon CodeWhisperer','Lyuceum','Mentat AI','Safari 技术预览','Character.AI+']);
const DROP_HOST=new Set(['lyceum.online','mentat.ai','cron.com','getcruise.com','humane.com','tome.app','kajiwoto.ai','height.app','cozy.sh','hourone.ai','bowery.co','6pen.art','webchatgpt.io','darkness.ai','forger.studio','photoscape.ai','wiseone.io','justplayer.app','stillplayer.app','makeupplus.com','marktext.app','snapseed.online','readyplayer.me','resonate.coop','tianmai.cn','wuan.com','xting.com','woodworm.store','taskcn.com','huanbian.com','ishanjian.com','jiami.cn','xiaoyuan-calc.com','joinopen.com','clara.io','csm.ai','digi.ai']);
const DROP_PATH=['assistant.google.com/auto','joshua-uchoa/MochiDiffusion','mifi.github.io/lossless-cut','prisma-ai.com/lensa','geforce-experience/shadowplay','manyvids.com/Live','apple-music/classical','thomsonreuters.com/westlaw','novavideoplayer.github.io','lightricks.com/apps/motionleap','amazon.com/kindle-dbs'];
const sideEl=document.getElementById('side');
const listEl=document.getElementById('list');
const qEl=document.getElementById('q');
const metaEl=document.getElementById('meta');
const countEl=document.getElementById('count');
const hotEl=document.getElementById('hot');
const hotBlock=document.getElementById('hotBlock');
const listTitle=document.getElementById('listTitle');
const themeBtn=document.getElementById('theme');
const langBtn=document.getElementById('lang');
const sf=document.getElementById('sf');
const topBtn=document.getElementById('topBtn');
const scroller=document.getElementById('scroll')||window;
let tools=[]; let selected=new Set();
let lang=localStorage.getItem('lang')||'zh';
let shown=80; let lastKey=''; let filtered=[];
const saved=localStorage.getItem('theme')||'light';
document.documentElement.dataset.theme=saved;
function t(){return I18N[lang]||I18N.zh}
function applyChrome(){
  const s=t();
  document.getElementById('brand').textContent=s.brand;
  document.title=s.brand;
  document.getElementById('hotTitle').textContent=s.hot;
  qEl.placeholder=s.ph;
  langBtn.textContent=lang==='zh'?'中':'EN';
  themeBtn.textContent=document.documentElement.dataset.theme==='dark'?s.themeL:s.themeD;
}
themeBtn.onclick=()=>{const n=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=n;localStorage.setItem('theme',n);applyChrome()};
langBtn.onclick=()=>{lang=lang==='zh'?'en':'zh';localStorage.setItem('lang',lang);applyChrome();renderSide();render()};
function hostOf(u){try{return new URL(u).hostname.replace(/^www\./,'')}catch(e){return ''}}
function urlKey(u){
  try{
    const x=new URL(u);
    return x.hostname.replace(/^www\./,'').toLowerCase()+x.pathname.replace(/\/+$/,'');
  }catch(e){return String(u||'').toLowerCase()}
}
function deadPath(u){const s=String(u||'').toLowerCase();return DROP_PATH.some(p=>s.includes(p))}
function esc(s){return String(s||'').replace(/&/g,'&').replace(/</g,'<').replace(/>/g,'>').replace(/"/g,'"')}
function isHttp(u){return /^https?:\/\//i.test(u||'')}
function iconTag(url,letter){
  const h=hostOf(url); const L=(letter||'?').slice(0,1);
  if(!h) return L;
  return `<img alt="" src="https://www.google.com/s2/favicons?sz=64&domain=${encodeURIComponent(h)}" onerror="this.style.display='none'">`;
}
function blob(t0){return [t0.name,t0.desc,t0.desc_en,t0.cat,t0.pack,t0.how].join(' ')}
function matchOne(t0,c){
  if(t0.cat===c||t0.pack===c) return true;
  const r=KW[c];
  return !!(r && r.test(blob(t0)));
}
function score(t0,topics){return topics.reduce((n,c)=>n+(matchOne(t0,c)?1:0),0)}
function matchCombo(t0){
  if(!selected.size) return true;
  if(selected.has('免费') && !t0.free) return false;
  if(selected.has('收费') && t0.free) return false;
  const others=[...selected].filter(c=>c!=='免费'&&c!=='收费');
  if(!others.length) return true;
  return score(t0,others)>0;
}
async function load(){
  applyChrome();
  const files=['data/tools.json','data/packs.json','data/more.json'];
  for(let i=2;i<=147;i++) files.push('data/more'+i+'.json');
  const arrs=await Promise.all(files.map(f=>fetch(f).then(r=>r.ok?r.json():[]).catch(()=>[])));
  const seenName=new Set(); const seenUrl=new Set(); tools=[];
  for(const x of arrs.flat()){
    if(!x||!x.name||DROP_NAME.has(x.name)) continue;
    if(deadPath(x.url)) continue;
    const h=hostOf(x.url);
    if(h&&DROP_HOST.has(h)) continue;
    if(seenName.has(x.name)) continue;
    const uk=isHttp(x.url)?urlKey(x.url):'';
    if(uk&&seenUrl.has(uk)) continue;
    seenName.add(x.name);
    if(uk) seenUrl.add(uk);
    tools.push(x);
  }
  const hot=await fetch('data/hot.json?v=120').then(r=>r.json()).catch(()=>[]);
  metaEl.textContent=tools.length+t().tools;
  hotEl.innerHTML=(hot||[]).slice(0,10).map((h,i)=>`<li><a href="${h.url}" target="_blank" rel="noopener"><i>${i+1}</i><span>${esc(h.title)}</span></a></li>`).join('');
  renderSide(); render();
}
function renderSide(){
  const allOn=!selected.size;
  sideEl.innerHTML=CATS.map(([k,en])=>{
    const on=k==='全部'?allOn:selected.has(k);
    return `<button data-c="${k}" class="${on?'on':''}">${lang==='en'?en:k}</button>`;
  }).join('');
  sideEl.onclick=e=>{
    const b=e.target.closest('button'); if(!b)return;
    const k=b.dataset.c;
    if(k==='全部'){selected.clear()}
    else {
      if(selected.has(k)) selected.delete(k); else selected.add(k);
      if(k==='免费') selected.delete('收费');
      if(k==='收费') selected.delete('免费');
    }
    shown=80; renderSide(); render();
  };
}
function card(x){
  const letter=(x.name||'?').slice(0,1);
  const desc=lang==='en'?(x.desc_en||x.desc||x.cat):(x.desc||x.cat);
  const href=isHttp(x.url)?x.url:('guide.html?n='+encodeURIComponent(x.name||''));
  const host=hostOf(x.url);
  return `<a class="card" href="${esc(href)}" target="_blank" rel="noopener"><div class="row"><div class="av">${iconTag(x.url,letter)}</div><div><h3>${esc(x.name)}</h3><p>${esc(host||desc)}</p></div></div></a>`;
}
function render(){
  const q=(qEl.value||'').trim().toLowerCase();
  const s=t();
  const key=[...selected].join(',')+'|'+q;
  if(key!==lastKey){shown=80;lastKey=key}
  if(hotBlock) hotBlock.style.display=q?'none':'block';
  if(listTitle) listTitle.textContent=q?(s.res+'「'+qEl.value.trim()+'」'):s.all;
  metaEl.textContent=tools.length+s.tools;
  const topics=[...selected].filter(c=>c!=='免费'&&c!=='收费');
  filtered=tools.filter(x=>{
    const hit=!q||[x.name,x.desc,x.desc_en||'',x.cat,x.how||'',x.url||''].join(' ').toLowerCase().includes(q);
    return hit && (q || matchCombo(x));
  });
  if(topics.length) filtered.sort((a,b)=>score(b,topics)-score(a,topics));
  countEl.textContent=filtered.length+s.hit;
  listEl.innerHTML=filtered.slice(0,shown).map(card).join('')||`<p class="count">${s.empty}</p>`;
}
function onScroll(){
  if(shown>=filtered.length) return;
  const top=scroller===window?window.scrollY:scroller.scrollTop;
  const h=scroller===window?window.innerHeight:scroller.clientHeight;
  const sh=scroller===window?document.body.offsetHeight:scroller.scrollHeight;
  if(h+top>sh-240){shown+=80; listEl.innerHTML=filtered.slice(0,shown).map(card).join('');}
}
scroller.addEventListener('scroll',onScroll,{passive:true});
function goTop(){if(scroller===window)window.scrollTo({top:0,behavior:'smooth'});else scroller.scrollTo({top:0,behavior:'smooth'});}
if(topBtn) topBtn.onclick=goTop;
document.getElementById('brand').onclick=goTop;
sf.addEventListener('submit',e=>{e.preventDefault();shown=80;render();qEl.blur();goTop()});
qEl.addEventListener('input',()=>{shown=80;render()});
load();
