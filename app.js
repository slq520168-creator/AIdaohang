const sideEl=document.getElementById('side');
const listEl=document.getElementById('list');
const qEl=document.getElementById('q');
const metaEl=document.getElementById('meta');
const countEl=document.getElementById('count');
const hotEl=document.getElementById('hot');
const themeBtn=document.getElementById('theme');
let tools=[]; let cat='免费';
const saved=localStorage.getItem('theme')||'dark';
document.documentElement.dataset.theme=saved;
themeBtn.textContent=saved==='dark'?'浅色':'深色';
themeBtn.onclick=()=>{const n=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=n;localStorage.setItem('theme',n);themeBtn.textContent=n==='dark'?'浅色':'深色'};
function match(t,c){
  if(c==='全部')return true;
  if(c==='免费')return !!t.free;
  if(c==='收费')return !t.free;
  if(c==='做视频')return t.cat==='视频'||t.pack==='视频';
  if(c==='做游戏')return t.cat==='游戏'||t.pack==='游戏';
  if(c==='智能工作流')return t.cat==='智能工作流'||t.cat==='智能体'||t.pack==='工作流';
  return t.cat===c;
}
async function load(){
  const files=['data/tools.json','data/more.json','data/more2.json','data/packs.json'];
  const arrs=await Promise.all(files.map(f=>fetch(f).then(r=>r.ok?r.json():[]).catch(()=>[])));
  const seen=new Set(); tools=[];
  for(const t of arrs.flat()){if(!t||!t.name||seen.has(t.name))continue;seen.add(t.name);tools.push(t)}
  const meta=await fetch('data/meta.json').then(r=>r.json()).catch(()=>({}));
  const hot=await fetch('data/hot.json').then(r=>r.json()).catch(()=>[]);
  metaEl.textContent=`更新 ${meta.updated||'—'} · ${tools.length} 款`;
  hotEl.innerHTML=hot.map((h,i)=>`<a href="${h.url}"><span>${i+1} · ${h.tag||'热'}</span><b>${h.title}</b></a>`).join('');
  renderSide(); render();
}
function renderSide(){
  const extra=['免费','收费','做视频','做游戏','智能工作流','全部'];
  const cats=[...extra,...[...new Set(tools.map(t=>t.cat))]];
  sideEl.innerHTML=cats.map(c=>`<button data-c="${c}" class="${c===cat?'on':''}">${c}</button>`).join('');
  sideEl.onclick=e=>{const b=e.target.closest('button');if(!b)return;cat=b.dataset.c;renderSide();render()};
}
function render(){
  const q=(qEl.value||'').trim().toLowerCase();
  const rows=tools.filter(t=>match(t,cat)&&(!q||[t.name,t.desc,t.cat,t.how||''].join(' ').toLowerCase().includes(q)));
  countEl.textContent=`显示 ${rows.length} / ${tools.length}`;
  listEl.innerHTML=rows.map(t=>`<a class="card" href="guide.html?n=${encodeURIComponent(t.name)}"><h3>${t.name}</h3><p>${t.desc}</p><span class="tag">${t.cat}${t.free?' · 免费':' · 收费'}</span></a>`).join('')||'<p class="count">没有匹配</p>';
}
qEl.addEventListener('input',render); load();
