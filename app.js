const I18N={
  zh:{brand:'全球优选AI导航',hot:'今日热门',all:'AI 工具大全',ph:'搜 插件 / 陪伴 / Grok',themeD:'深色',themeL:'浅色',tools:' 款工具',hit:' 条',empty:'没有匹配，换个词再试',res:'搜索结果 '},
  en:{brand:'Global AI Directory',hot:'Trending',all:'All tools',ph:'Search plugin / companion / Grok',themeD:'Dark',themeL:'Light',tools:' tools',hit:'',empty:'No match',res:'Results '}
};
const CATS=[
  ['全部','All'],['免费','Free'],['收费','Paid'],['对话','Chat'],['聊天','Chat'],['插件','Plugins'],['陪伴','Companion'],['学习','Learn'],['绘画','Image'],['视频','Video'],['办公','Work'],['编程','Code'],['智能工作流','Workflow'],['游戏','Game'],['音乐','Music'],['语音','Voice'],['设计','Design'],['搜索','Search'],['写作','Write']
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
let tools=[]; let cat='全部'; let lang=localStorage.getItem('lang')||'zh';
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
  document.documentElement.lang=lang==='zh'?'zh-CN':'en';
}
themeBtn.onclick=()=>{const n=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=n;localStorage.setItem('theme',n);applyChrome()};
langBtn.onclick=()=>{lang=lang==='zh'?'en':'zh';localStorage.setItem('lang',lang);applyChrome();renderSide();render()};
function hostOf(u){try{return new URL(u).hostname.replace(/^www\./,'')}catch(e){return ''}}
function iconTag(url,letter){
  const h=hostOf(u);
  if(!h) return letter;
  const a='https://www.google.com/s2/favicons?sz=128&domain='+encodeURIComponent(h);
  const b='https://icons.duckduckgo.com/ip3/'+h+'.ico';
  return `<img alt="" src="${a}" data-b="${b}" onerror="if(!this.dataset.f){this.dataset.f=1;this.src=this.dataset.b}else{this.remove();this.parentNode.append('${letter}')}">`;
}
function match(t0,c){
  if(c==='全部')return true;
  if(c==='免费')return !!t0.free;
  if(c==='收费')return !t0.free;
  if(c==='聊天'||c==='对话')return t0.cat==='聊天'||t0.cat==='对话';
  if(c==='视频')return t0.cat==='视频'||t0.pack==='视频';
  if(c==='游戏')return t0.cat==='游戏'||t0.pack==='游戏';
  if(c==='智能工作流')return t0.cat==='智能工作流'||t0.cat==='智能体'||t0.pack==='工作流';
  return t0.cat===c;
}
async function load(){
  applyChrome();
  const files=['data/tools.json','data/packs.json','data/more.json'];
  for(let i=2;i<=50;i++) files.push('data/more'+i+'.json');
  const arrs=await Promise.all(files.map(f=>fetch(f).then(r=>r.ok?r.json():[]).catch(()=>[])));
  const seen=new Set(); tools=[];
  for(const x of arrs.flat()){if(!x||!x.name||seen.has(x.name))continue;seen.add(x.name);tools.push(x)}
  const hot=await fetch('data/hot.json').then(r=>r.json()).catch(()=>[]);
  metaEl.textContent=tools.length+t().tools;
  hotEl.innerHTML=(hot||[]).slice(0,10).map((h,i)=>`<li><a href="${h.url}"><i>${i+1}</i><span>${h.title}</span></a></li>`).join('');
  renderSide(); render();
}
function renderSide(){
  sideEl.innerHTML=CATS.map(([k,en])=>`<button data-c="${k}" class="${k===cat?'on':''}">${lang==='en'?en:k}</button>`).join('');
  sideEl.onclick=e=>{const b=e.target.closest('button');if(!b)return;cat=b.dataset.c;renderSide();render()};
}
function render(){
  const q=(qEl.value||'').trim().toLowerCase();
  const s=t();
  if(hotBlock) hotBlock.style.display=q?'none':'block';
  if(listTitle) listTitle.textContent=q?(s.res+'「'+qEl.value.trim()+'」'):s.all;
  metaEl.textContent=tools.length+s.tools;
  const rows=tools.filter(x=>{
    const hit=!q||[x.name,x.desc,x.desc_en||'',x.cat,x.how||'',x.url||''].join(' ').toLowerCase().includes(q);
    return hit && (q || match(x,cat));
  });
  countEl.textContent=rows.length+s.hit;
  listEl.innerHTML=rows.map(x=>{
    const letter=(x.name||'?').slice(0,1);
    const desc=lang==='en'?(x.desc_en||x.desc||x.cat):(x.desc||x.cat);
    return `<a class="card" href="guide.html?n=${encodeURIComponent(x.name)}"><div class="row"><div class="av">${iconTag(x.url,letter)}</div><div><h3>${x.name}</h3><p>${desc}</p></div></div></a>`;
  }).join('')||`<p class="count">${s.empty}</p>`;
}
function goTop(){window.scrollTo({top:0,behavior:'smooth'})}
if(topBtn){
  topBtn.onclick=goTop;
  const sync=()=>topBtn.classList.toggle('on',window.scrollY>280);
  window.addEventListener('scroll',sync,{passive:true});
  sync();
}
document.getElementById('brand').onclick=goTop;
sf.addEventListener('submit',e=>{e.preventDefault();render();qEl.blur();goTop()});
qEl.addEventListener('input',render);
load();
