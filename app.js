const I18N={
  zh:{brand:'全球优选AI导航',hot:'今日热点',all:'全部工具',ph:'',themeD:'深色',themeL:'浅色',tools:' 款',hit:' 条',empty:'没有匹配',res:'搜索 '},
  en:{brand:'Global AI Directory',hot:'Today picks',all:'全部工具',ph:'',themeD:'Dark',themeL:'Light',tools:' tools',hit:'',empty:'No match',res:'Results '}
};
const GROUPS=[
  {k:'免费试用',id:'free'},
  {k:'学习教程',id:'learn'},
  {k:'接单赚钱',id:'gig'},
  {k:'绘画设计',id:'draw'},
  {k:'创作媒体',id:'make'},
  {k:'生活社交',id:'life'},
  {k:'工作办公',id:'work'},
  {k:'成人内容',id:'adult'},
  {k:'其他类型',id:'other'}
];
const TAGS=['免费','收费','对话','聊天','插件','陪伴','学习','健身','美妆','宠物','美食','旅行','拼车','租车','法律','管理','绘画','视频','成人','无审核','直播','交友','约炮','办公','编程','游戏','音乐','语音','设计','搜索','写作','接单','兼职','招聘','社区','开店','小商品','API','机器人','图书','小说','漫画','无障碍','星座','塔罗','云盘','换脸','打扮','模型包','隐私','资讯','短剧','漫剧','故事','创业','名人','八卦','亲子','宝妈','主播','融资','理财','种植','搭伙','爬山','陪聊','情感','数字人','厨房','菜谱','酒店','房产','电影','私影','附近','美剧','韩剧','日剧','电视台','监控','虚拟人','AI音乐','翻唱','学生','女心','语录','富婆','夜生活','人设','套图','文案','外贸','铺货','网店','养成','婚恋','线下交','出轨','检测','检验','获粉','投票','数据'];
const DROP_NAME=new Set(['Cron Calendar','Brilliant Practice','Quizlet Learn','Tuta Mail','Navidrome Demo','Stream Music','Primephonic 已并','Google Jules Agent','OpenDevin 旧名','Cursor.sh 旧域','Fig Term 已并','Amazon CodeWhisperer','Lyuceum','Mentat AI','Safari 技术预览','Character.AI+','Odakyu? skip','CopyMeThat Recipes','Privacy.com Cards Note','Ashley Madison Affairs Plus','SSL Labs Recheck']);
const DROP_HOST=new Set(['lyceum.online','mentat.ai','cron.com','getcruise.com','humane.com','tome.app','kajiwoto.ai','height.app','cozy.sh','hourone.ai','bowery.co','6pen.art','webchatgpt.io','darkness.ai','forger.studio','photoscape.ai','wiseone.io','justplayer.app','stillplayer.app','makeupplus.com','marktext.app','snapseed.online','readyplayer.me','resonate.coop','tianmai.cn','wuan.com','xting.com','woodworm.store','taskcn.com','huanbian.com','ishanjian.com','jiami.cn','xiaoyuan-calc.com','joinopen.com','clara.io','csm.ai','digi.ai']);
const DROP_PATH=['assistant.google.com/auto','joshua-uchoa/MochiDiffusion','mifi.github.io/lossless-cut','prisma-ai.com/lensa','geforce-experience/shadowplay','manyvids.com/Live','apple-music/classical','thomsonreuters.com/westlaw','novavideoplayer.github.io','lightricks.com/apps/motionleap','amazon.com/kindle-dbs'];
const sideEl=document.getElementById('side');
const tagsEl=document.getElementById('tags');
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
let tools=[]; let selected=new Set(); let tags=new Set();
let lang=localStorage.getItem('lang')||'en';
let shown=80; let lastKey=''; let filtered=[]; let hotList=[];
const saved=localStorage.getItem('theme')||'light';
document.documentElement.dataset.theme=saved;
function t(){return I18N[lang]||I18N.en}
function blob(x){return [x.name,x.desc,x.desc_en,x.cat,x.pack,x.how].join(' ')}
function gidOf(x){
  const s=blob(x);
  if(/18|Adult|成人|无审核|约炮|出轨|男直|富婆|Chaturbate|Pornhub/i.test(s)) return 'adult';
  if(/学习|教育|亲子|宝妈|学生|Khan|Anki|Coursera|Scholar|Photomath|教程/.test(s)) return 'learn';
  if(/接单|兼职|招聘|Upwork|Fiverr|Boss直聘|智联|JobStreet|Indeed/.test(s)) return 'gig';
  if(/绘画|设计|套图|人设|Civitai|Leonardo|Canva|SeaArt|Artbreeder/.test(s)) return 'draw';
  if(/视频|音乐|写作|文案|翻唱|Suno|HeyGen/.test(s)) return 'make';
  if(/交友|旅行|美食|厨房|婚恋|线下交|陪伴|情感|家庭|附近|Meetup|Tinder/.test(s)) return 'life';
  if(/办公|编程|管理|企业|开店|外贸|铺货|API|接口|Shopify|Sheets/.test(s)) return 'work';
  return 'other';
}
function applyChrome(){
  const s=t();
  document.getElementById('brand').textContent=s.brand;
  document.title=s.brand;
  document.getElementById('hotTitle').textContent=s.hot;
  qEl.placeholder='';
  qEl.removeAttribute('placeholder');
  langBtn.textContent=lang==='zh'?'中':'EN';
  themeBtn.textContent=document.documentElement.dataset.theme==='dark'?s.themeL:s.themeD;
  document.documentElement.lang=lang==='zh'?'zh-CN':'en';
}
themeBtn.onclick=()=>{const n=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=n;localStorage.setItem('theme',n);applyChrome()};
langBtn.onclick=()=>{lang=lang==='zh'?'en':'zh';localStorage.setItem('lang',lang);applyChrome();renderSide();renderHot();render()};
function hostOf(u){try{return new URL(u).hostname.replace(/^www\./,'')}catch(e){return ''}}
function urlKey(u){
  try{const x=new URL(u);return x.hostname.replace(/^www\./,'').toLowerCase()+x.pathname.replace(/\/+$/,'')}catch(e){return String(u||'').toLowerCase()}
}
function deadPath(u){const s=String(u||'').toLowerCase();return DROP_PATH.some(p=>s.includes(p))}
function esc(s){return String(s||'').replace(/&/g,'&').replace(/</g,'<').replace(/>/g,'>').replace(/"/g,'"')}
function isHttp(u){return /^https?:\/\//i.test(u||'')}
function iconTag(url,letter){
  const h=hostOf(url); const L=(letter||'?').slice(0,1);
  if(!h) return L;
  return `<img alt="" src="https://www.google.com/s2/favicons?sz=64&domain=${encodeURIComponent(h)}" onerror="this.style.display='none'">`;
}
function dayNum(){const d=new Date();return Math.floor(Date.UTC(d.getUTCFullYear(),d.getUTCMonth(),d.getUTCDate())/86400000)}
function pickHot(){
  const buckets={learn:[],gig:[],draw:[],make:[],life:[],work:[],adult:[],other:[],free:[]};
  for(const x of tools){
    const g=gidOf(x);
    (buckets[g]||buckets.other).push(x);
    if(x.free) buckets.free.push(x);
  }
  const order=['free','learn','gig','draw','make','life','work','adult','other','free'];
  const seed=dayNum();
  const used=new Set();
  const out=[];
  for(let i=0;i<10;i++){
    const arr=buckets[order[i]]||tools;
    if(!arr.length) continue;
    let n=arr.length, idx=(seed*17+i*31)%n, hit=null;
    for(let k=0;k<n;k++){
      const x=arr[(idx+k)%n];
      if(!used.has(x.name)){hit=x;break}
    }
    if(hit){used.add(hit.name);out.push(hit)}
  }
  hotList=out;
}
function renderHot(){
  hotEl.innerHTML=hotList.map((h,i)=>{
    const intro=lang==='zh'?(h.desc||h.cat||''):(h.desc_en||h.desc||h.cat||'');
    const href=isHttp(h.url)?h.url:('guide.html?n='+encodeURIComponent(h.name||''));
    return `<li><a href="${esc(href)}" target="_blank" rel="noopener"><i>${i+1}</i><span class="ht"><strong>${esc(h.name)}</strong><em>${esc(intro)}</em></span></a></li>`;
  }).join('');
}
function matchGroup(x){
  if(!selected.size) return true;
  if(selected.has('free') && !x.free) return false;
  const topics=[...selected].filter(id=>id!=='free');
  if(!topics.length) return true;
  return topics.includes(gidOf(x));
}
function matchTag(x){
  if(!tags.size) return true;
  const s=blob(x);
  if(tags.has('免费') && !x.free) return false;
  if(tags.has('收费') && x.free) return false;
  const others=[...tags].filter(k=>k!=='免费'&&k!=='收费');
  if(!others.length) return true;
  return others.some(k=>x.cat===k||x.pack===k||s.indexOf(k)>=0);
}
async function load(){
  selected.clear(); tags.clear();
  applyChrome();
  const files=['data/tools.json','data/packs.json','data/more.json'];
  for(let i=2;i<=181;i++) files.push('data/more'+i+'.json');
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
  pickHot();
  metaEl.textContent=tools.length+t().tools;
  renderHot(); renderSide(); render();
}
function renderSide(){
  sideEl.innerHTML=GROUPS.map(g=>`<button data-c="${g.id}" class="${selected.has(g.id)?'on':''}">${g.k}</button>`).join('');
  sideEl.onclick=e=>{
    const b=e.target.closest('button'); if(!b)return;
    const id=b.dataset.c;
    if(selected.has(id)) selected.delete(id); else selected.add(id);
    shown=80; renderSide(); render();
  };
  if(!tagsEl) return;
  tagsEl.innerHTML=TAGS.map(k=>`<button data-t="${k}" class="${tags.has(k)?'on':''}">${k}</button>`).join('');
  tagsEl.onclick=e=>{
    const b=e.target.closest('button'); if(!b)return;
    const k=b.dataset.t;
    if(tags.has(k)) tags.delete(k); else tags.add(k);
    if(k==='免费') tags.delete('收费');
    if(k==='收费') tags.delete('免费');
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
  const key=[...selected].join(',')+'|'+[...tags].join(',')+'|'+q;
  if(key!==lastKey){shown=80;lastKey=key}
  if(hotBlock) hotBlock.style.display=q?'none':'block';
  if(listTitle){
    if(q) listTitle.textContent=s.res+qEl.value.trim();
    else if(!selected.size && !tags.size) listTitle.textContent='全部工具';
    else listTitle.textContent=[...GROUPS.filter(g=>selected.has(g.id)).map(g=>g.k),...tags].join(' · ');
  }
  metaEl.textContent=tools.length+s.tools;
  filtered=tools.filter(x=>{
    const hit=!q||[x.name,x.desc,x.desc_en||'',x.cat,x.how||'',x.url||''].join(' ').toLowerCase().includes(q);
    return hit && (q || (matchGroup(x) && matchTag(x)));
  });
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
