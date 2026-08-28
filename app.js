const sideEl=document.getElementById('side');
const listEl=document.getElementById('list');
const qEl=document.getElementById('q');
const metaEl=document.getElementById('meta');
const countEl=document.getElementById('count');
const hotEl=document.getElementById('hot');
const hotBlock=document.getElementById('hotBlock');
const listTitle=document.getElementById('listTitle');
const themeBtn=document.getElementById('theme');
const sf=document.getElementById('sf');
let tools=[]; let cat='全部';
const saved=localStorage.getItem('theme')||'light';
document.documentElement.dataset.theme=saved;
themeBtn.textContent=saved==='dark'?'浅色':'深色';
themeBtn.onclick=()=>{const n=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=n;localStorage.setItem('theme',n);themeBtn.textContent=n==='dark'?'浅色':'深色'};
const extra=['全部','免费','收费','对话','聊天','插件','陪伴','学习','绘画','视频','办公','编程','智能工作流','游戏','音乐','语音','设计','搜索','写作'];
function hostOf(u){try{return new URL(u).hostname.replace(/^www\./,'')}catch(e){return ''}}
function icon(u){const h=hostOf(u);return h?('https://icons.duckduckgo.com/ip3/'+h+'.ico'):'';}
function match(t,c){
  if(c==='全部')return true;
  if(c==='免费')return !!t.free;
  if(c==='收费')return !t.free;
  if(c==='聊天'||c==='对话')return t.cat==='聊天'||t.cat==='对话';
  if(c==='插件')return t.cat==='插件';
  if(c==='陪伴')return t.cat==='陪伴';
  if(c==='学习')return t.cat==='学习';
  if(c==='视频')return t.cat==='视频'||t.pack==='视频';
  if(c==='游戏')return t.cat==='游戏'||t.pack==='游戏';
  if(c==='智能工作流')return t.cat==='智能工作流'||t.cat==='智能体'||t.pack==='工作流';
  return t.cat===c;
}
async function load(){
  const files=['data/tools.json','data/packs.json','data/more.json'];
  for(let i=2;i<=40;i++) files.push('data/more'+i+'.json');
  const arrs=await Promise.all(files.map(f=>fetch(f).then(r=>r.ok?r.json():[]).catch(()=>[])));
  const seen=new Set(); tools=[];
  for(const t of arrs.flat()){if(!t||!t.name||seen.has(t.name))continue;seen.add(t.name);tools.push(t)}
  const hot=await fetch('data/hot.json').then(r=>r.json()).catch(()=>[]);
  metaEl.textContent=tools.length+' 款工具';
  hotEl.innerHTML=(hot||[]).slice(0,10).map((h,i)=>`<li><a href="${h.url}"><i>${i+1}</i><span>${h.title}</span></a></li>`).join('');
  renderSide(); render();
}
function renderSide(){
  sideEl.innerHTML=extra.map(c=>`<button data-c="${c}" class="${c===cat?'on':''}">${c}</button>`).join('');
  sideEl.onclick=e=>{const b=e.target.closest('button');if(!b)return;cat=b.dataset.c;renderSide();render()};
}
function render(){
  const q=(qEl.value||'').trim().toLowerCase();
  if(hotBlock) hotBlock.style.display=q?'none':'block';
  if(listTitle) listTitle.textContent=q?('搜索结果 「'+qEl.value.trim()+'」'):'AI 工具大全';
  const rows=tools.filter(t=>{
    const hit=!q||[t.name,t.desc,t.cat,t.how||'',t.url||''].join(' ').toLowerCase().includes(q);
    return hit && (q || match(t,cat));
  });
  countEl.textContent=rows.length+' 条';
  listEl.innerHTML=rows.map(t=>{
    const src=icon(t.url);
    const letter=(t.name||'?').slice(0,1);
    return `<a class="card" href="guide.html?n=${encodeURIComponent(t.name)}"><div class="row"><div class="av"><img alt="" src="${src}" onerror="this.style.display='none';this.parentNode.textContent='${letter}'"></div><div><h3>${t.name}</h3><p>${t.desc||t.cat}</p></div></div></a>`;
  }).join('')||'<p class="count">没有匹配，换个词再试</p>';
}
sf.addEventListener('submit',e=>{e.preventDefault();render();qEl.blur();window.scrollTo({top:0,behavior:'smooth'})});
qEl.addEventListener('input',render);
load();
