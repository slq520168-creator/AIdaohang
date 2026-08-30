const I18N={
  zh:{brand:'全球优选AI导航',hot:'今日热门',all:'AI 工具大全',ph:'搜 养成 / 体贴 / Paired / 深空之心',themeD:'深色',themeL:'浅色',tools:' 款工具',hit:' 条',empty:'没有匹配',res:'搜索结果 '},
  en:{brand:'Global AI Directory',hot:'Trending',all:'All tools',ph:'Search raise couple Paired otome',themeD:'Dark',themeL:'Light',tools:' tools',hit:'',empty:'No match',res:'Results '}
};
const CATS=[
  ['全部','All'],['免费','Free'],['收费','Paid'],['对话','Chat'],['聊天','Chat'],['插件','Plugins'],['陪伴','Companion'],['学习','Learn'],['健身','Fit'],['美妆','Beauty'],['宠物','Pets'],['美食','Food'],['旅行','Travel'],['拼车','Ride'],['租车','Rental'],['法律','Legal'],['管理','Manage'],['绘画','Image'],['视频','Video'],['成人','Adult'],['无审核','Uncensored'],['直播','Live'],['交友','Dating'],['约炮','Hookup'],['办公','Work'],['编程','Code'],['智能工作流','Workflow'],['游戏','Game'],['音乐','Music'],['语音','Voice'],['设计','Design'],['搜索','Search'],['写作','Write'],['接单','Gigs'],['兼职','Part-time'],['招聘','Hire'],['社区','Community'],['开店','Shop'],['小商品','Goods'],['采集','Capture'],['接口','API'],['机器人','Robot'],['图书','Books'],['小说','Novels'],['日韩漫画','Manga'],['无障碍','Access'],['星座','Stars'],['塔罗','Tarot'],['云盘','Cloud'],['换脸','Swap'],['打扮','Look'],['模型包','Weights'],['维修','Fix'],['硬件','Hardware'],['隐私','Privacy'],['资讯','News'],['自然','Nature'],['棋类','Board'],['家庭','Family'],['短剧','Short'],['漫剧','Toon'],['故事','Story'],['创业','Startup'],['名人','Bio'],['八卦','Gossip'],['亲子','Kids'],['宝妈','Moms'],['主播','Stream'],['融资','Fund'],['理财','Money'],['年轻','Youth'],['工薪','Wage'],['种植','Farm'],['搭伙','Buddy'],['爬山','Hike'],['陪聊','Talk'],['情感','Feel'],['端侧','OnDev'],['企业','Ent'],['小商户','Shop'],['食堂','Cafe'],['数字人','Avatar'],['厨房','Kitchen'],['菜谱','Recipe'],['菜单图','MenuPic'],['酒店','Hotel'],['工程','Build'],['房产','RE'],['保险','Insure'],['物流','Ship'],['能源','Energy'],['教育','Edu'],['演出','Show'],['电影','Film'],['私影','PCine'],['情侣房','Couple'],['附近','Near'],['美剧','US'],['韩剧','KR'],['日剧','JP'],['印剧','IN'],['电视台','TV'],['监控','Cam'],['虚拟定位','GPS'],['虚拟爱人','Lover'],['虚拟人','You'],['虚拟号','VNum'],['虚拟卡','VCard'],['虚拟信箱','VMail'],['虚拟馆','Museum'],['AI音乐','AIMus'],['音轨','Stem'],['缩混','Mix'],['素材','Sample'],['翻唱','Cover'],['欧美交友','West'],['各国交友','World'],['无限交友','Open'],['老年','Senior'],['学生','Student'],['女心','Her'],['愈愈','Heal'],['性格','Trait'],['忠诚度','Loyal'],['语录','Quote'],['男直','MLive'],['富婆','Sugar'],['夜生活','Night'],['寂寞聊','Lonely'],['人设','Persona'],['套图','Set'],['文案','Copy'],['外贸','Trade'],['铺货','Drop'],['网店','Store'],['养成','Raise'],['看透','Read'],['体贴','Kind']
];
const KW={
  '对话':/对话/,
  '聊天':/聊天/,
  '插件':/插件/,
  '陪伴':/陪伴|Replika|Kindroid|Nomi/,
  '学习':/学习/,
  '健身':/健身/,
  '美妆':/美妆/,
  '宠物':/宠物/,
  '美食':/美食/,
  '旅行':/旅行/,
  '拼车':/拼车/,
  '租车':/租车/,
  '法律':/法律/,
  '管理':/管理/,
  '绘画':/绘画/,
  '视频':/视频/,
  '成人':/成人|18/,
  '无审核':/无审核/,
  '直播':/直播/,
  '交友':/交友/,
  '约炮':/约炮/,
  '办公':/办公/,
  '编程':/编程/,
  '智能工作流':/工作流/,
  '游戏':/游戏|Deepspace|Themis|Romance Club|Episode/,
  '音乐':/音乐/,
  '语音':/语音/,
  '设计':/设计/,
  '搜索':/搜索/,
  '写作':/写作/,
  '接单':/接单/,
  '兼职':/兼职/,
  '招聘':/招聘/,
  '社区':/社区/,
  '开店':/开店/,
  '小商品':/小商品/,
  '采集':/采集/,
  '接口':/API/,
  '机器人':/机器人/,
  '图书':/图书/,
  '小说':/小说/,
  '日韩漫画':/漫画/,
  '无障碍':/无障碍/,
  '星座':/星座/,
  '塔罗':/塔罗/,
  '云盘':/云盘/,
  '换脸':/换脸/,
  '打扮':/打扮/,
  '模型包':/模型包/,
  '维修':/维修/,
  '硬件':/硬件/,
  '隐私':/隐私/,
  '资讯':/资讯/,
  '自然':/自然/,
  '棋类':/棋/,
  '家庭':/家庭/,
  '短剧':/短剧/,
  '漫剧':/漫剧/,
  '故事':/故事/,
  '创业':/创业/,
  '名人':/名人/,
  '八卦':/八卦/,
  '亲子':/亲子/,
  '宝妈':/宝妈/,
  '主播':/主播/,
  '融资':/融资/,
  '理财':/理财/,
  '年轻':/年轻/,
  '工薪':/工薪/,
  '种植':/种植/,
  '搭伙':/搭伙/,
  '爬山':/爬山/,
  '陪聊':/陪聊/,
  '情感':/情感|Paired|Gottman|NVC|Attached/,
  '端侧':/端侧/,
  '企业':/企业/,
  '小商户':/小商户/,
  '食堂':/食堂/,
  '数字人':/数字人/,
  '厨房':/厨房/,
  '菜谱':/菜谱/,
  '菜单图':/菜单/,
  '酒店':/酒店/,
  '工程':/工程/,
  '房产':/房产/,
  '保险':/保险/,
  '物流':/物流/,
  '能源':/能源/,
  '教育':/教育/,
  '演出':/演出/,
  '电影':/电影/,
  '私影':/私影/,
  '情侣房':/情侣房/,
  '附近':/附近/,
  '美剧':/美剧/,
  '韩剧':/韩剧/,
  '日剧':/日剧/,
  '印剧':/印剧/,
  '电视台':/电视台/,
  '监控':/监控/,
  '虚拟定位':/虚拟定位/,
  '虚拟爱人':/虚拟爱人/,
  '虚拟人':/虚拟人/,
  '虚拟号':/虚拟号/,
  '虚拟卡':/虚拟卡/,
  '虚拟信箱':/虚拟信箱/,
  '虚拟馆':/虚拟馆/,
  'AI音乐':/AI音乐/,
  '音轨':/音轨/,
  '缩混':/缩混/,
  '素材':/素材/,
  '翻唱':/翻唱/,
  '欧美交友':/欧美交友/,
  '各国交友':/各国交友/,
  '无限交友':/无限交友/,
  '老年':/老年/,
  '学生':/学生/,
  '女心':/女心/,
  '愈愈':/愈愈/,
  '性格':/性格/,
  '忠诚度':/忠诚度/,
  '语录':/语录/,
  '男直':/男直/,
  '富婆':/富婆/,
  '夜生活':/夜生活/,
  '寂寞聊':/寂寞聊/,
  '人设':/人设/,
  '套图':/套图/,
  '文案':/文案/,
  '外贸':/外贸/,
  '铺货':/铺货/,
  '网店':/网店/,
  '养成':/养成|Replika|Kindroid|Deepspace|Themis|Romance Club|Episode/,
  '看透':/看透|Gottman|NVC|Attached|Psychology Today Relationships/,
  '体贴':/体贴|Paired|Lasting|Relish|Between|Mindful|Uncommon/
};
const DROP_NAME=new Set(['Cron Calendar','Brilliant Practice','Quizlet Learn','Tuta Mail','Navidrome Demo','Stream Music','Primephonic 已并','Google Jules Agent','OpenDevin 旧名','Cursor.sh 旧域','Fig Term 已并','Amazon CodeWhisperer','Lyuceum','Mentat AI','Safari 技术预览','Character.AI+','Odakyu? skip','CopyMeThat Recipes','Privacy.com Cards Note']);
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
  for(let i=2;i<=175;i++) files.push('data/more'+i+'.json');
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
  const hot=await fetch('data/hot.json?v=144').then(r=>r.json()).catch(()=>[]);
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
