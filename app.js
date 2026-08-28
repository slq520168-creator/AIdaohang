const I18N={
  zh:{brand:'全球优选AI导航',hot:'今日热门',all:'AI 工具大全',ph:'搜 语音 / 接口 / Grok',themeD:'深色',themeL:'浅色',tools:' 款工具',hit:' 条',empty:'没有匹配，换个词再试',res:'搜索结果 '},
  en:{brand:'Global AI Directory',hot:'Trending',all:'All tools',ph:'Search voice / API / Grok',themeD:'Dark',themeL:'Light',tools:' tools',hit:'',empty:'No match',res:'Results '}
};
const CATS=[
  ['全部','All'],['免费','Free'],['收费','Paid'],['对话','Chat'],['聊天','Chat'],['插件','Plugins'],['陪伴','Companion'],['学习','Learn'],['绘画','Image'],['视频','Video'],['办公','Work'],['编程','Code'],['智能工作流','Workflow'],['游戏','Game'],['音乐','Music'],['语音','Voice'],['设计','Design'],['搜索','Search'],['写作','Write'],['接单','Gigs'],['社区','Community'],['开店','Shop'],['采集','Capture'],['接口','API'],['机器人','Robot'],['图书','Books']
];
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
function esc(s){return String(s||'').replace(/&/g,'&').replace(/</g,'<').replace(/>/g,'>')}
function iconTag(url,letter){
  const h=hostOf(url); const L=(letter||'?').slice(0,1);
  if(!h) return L;
  return `<img alt="" src="https://www.google.com/s2/favicons?sz=64&domain=${encodeURIComponent(h)}" onerror="this.style.display='none'">`;
}
function blob(t0){return [t0.name,t0.desc,t0.desc_en,t0.cat,t0.pack,t0.how].join(' ')}
function matchOne(t0,c){
  const b=blob(t0);
  if(c==='聊天'||c==='对话')return t0.cat==='聊天'||t0.cat==='对话'||/对话|聊天|Chat/.test(b);
  if(c==='视频')return t0.cat==='视频'||t0.pack==='视频'||/视频|Video/.test(b);
  if(c==='绘画')return t0.cat==='绘画'||t0.cat==='设计'||/绘画|插画|绘图/.test(b);
  if(c==='游戏')return t0.cat==='游戏'||/游戏|Game|Unity|Godot/.test(b);
  if(c==='语音')return t0.cat==='语音'||/语音|配音|TTS|Whisper|Speech|转写/.test(b);
  if(c==='音乐')return t0.cat==='音乐'||/音乐|配乐|Suno|Music/.test(b);
  if(c==='接口')return t0.cat==='接口'||/API|接口|Key|SDK/.test(b);
  if(c==='智能工作流')return t0.cat==='智能工作流'||t0.cat==='智能体'||/工作流|Agent|n8n|Dify/.test(b);
  if(c==='接单')return t0.cat==='接单'||t0.pack==='接单'||/接单|威客|约稿|Upwork|Fiverr|猪八戒|电鸭/.test(b);
  if(c==='社区')return t0.cat==='社区'||/社区|Discord|Reddit|Hugging Face|V2EX/.test(b);
  if(c==='开店')return t0.cat==='开店'||/Shopify|淘宝|拼多多|小店|Gumroad|Etsy/.test(b);
  if(c==='采集')return t0.cat==='采集'||/OBS|ShareX|Loom|录屏|采集|直播/.test(b);
  if(c==='机器人')return t0.cat==='机器人'||/ROS|Unitree|Optimus|机器人/.test(b);
  if(c==='图书')return t0.cat==='图书'||/读书|听书|Kindle|图书/.test(b);
  return t0.cat===c;
}
function matchCombo(t0){
  if(!selected.size) return true;
  if(selected.has('免费') && !t0.free) return false;
  if(selected.has('收费') && t0.free) return false;
  const others=[...selected].filter(c=>c!=='免费'&&c!=='收费');
  if(!others.length) return true;
  const gig=others.includes('接单');
  const topics=others.filter(c=>c!=='接单');
  const hitTopic=!topics.length||topics.some(c=>matchOne(t0,c));
  const hitGig=!gig||matchOne(t0,'接单');
  return hitTopic && hitGig;
}
async function load(){
  applyChrome();
  const files=['data/tools.json','data/packs.json','data/more.json'];
  for(let i=2;i<=80;i++) files.push('data/more'+i+'.json');
  const arrs=await Promise.all(files.map(f=>fetch(f).then(r=>r.ok?r.json():[]).catch(()=>[])));
  const seen=new Set(); tools=[];
  for(const x of arrs.flat()){if(!x||!x.name||seen.has(x.name))continue;seen.add(x.name);tools.push(x)}
  const hot=await fetch('data/hot.json').then(r=>r.json()).catch(()=>[]);
  metaEl.textContent=tools.length+t().tools;
  hotEl.innerHTML=(hot||[]).slice(0,10).map((h,i)=>`<li><a href="${h.url}"><i>${i+1}</i><span>${esc(h.title)}</span></a></li>`).join('');
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
  return `<a class="card" href="guide.html?n=${encodeURIComponent(x.name)}"><div class="row"><div class="av">${iconTag(x.url,letter)}</div><div><h3>${esc(x.name)}</h3><p>${esc(desc)}</p></div></div></a>`;
}
function render(){
  const q=(qEl.value||'').trim().toLowerCase();
  const s=t();
  const key=[...selected].join(',')+'|'+q;
  if(key!==lastKey){shown=80;lastKey=key}
  if(hotBlock) hotBlock.style.display=q?'none':'block';
  if(listTitle) listTitle.textContent=q?(s.res+'「'+qEl.value.trim()+'」'):s.all;
  metaEl.textContent=tools.length+s.tools;
  filtered=tools.filter(x=>{
    const hit=!q||[x.name,x.desc,x.desc_en||'',x.cat,x.how||'',x.url||''].join(' ').toLowerCase().includes(q);
    return hit && (q || matchCombo(x));
  });
  countEl.textContent=filtered.length+s.hit;
  listEl.innerHTML=filtered.slice(0,shown).map(card).join('')||`<p class="count">${s.empty}</p>`;
}
window.addEventListener('scroll',()=>{
  if(shown>=filtered.length) return;
  if(window.innerHeight+window.scrollY>document.body.offsetHeight-240){
    shown+=80; listEl.innerHTML=filtered.slice(0,shown).map(card).join('');
  }
},{passive:true});
function goTop(){window.scrollTo({top:0,behavior:'smooth'})}
if(topBtn) topBtn.onclick=goTop;
document.getElementById('brand').onclick=goTop;
sf.addEventListener('submit',e=>{e.preventDefault();shown=80;render();qEl.blur();goTop()});
qEl.addEventListener('input',()=>{shown=80;render()});
load();
