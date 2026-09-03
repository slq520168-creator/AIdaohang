const I18N={zh:{brand:'全球优选AI导航',hot:'今日热点',all:'全部工具',ph:'',themeD:'深色',themeL:'浅色',tools:' 款',hit:' 条',empty:'没有匹配',res:'搜索 ',close:'关闭'},en:{brand:'Global AI Directory',hot:'Today picks',all:'All tools',ph:'',themeD:'Dark',themeL:'Light',tools:' tools',hit:'',empty:'No match',res:'Results ',close:'Close'}};
const GROUPS=[
{k:'电脑软件',en:'PC',id:'pc'},
{k:'接单变现',en:'Gigs',id:'gig'},
{k:'成人内容',en:'Adult',id:'adult'},
{k:'绘画设计',en:'Art',id:'draw'},
{k:'创作媒体',en:'Media',id:'make'},
{k:'生活社交',en:'Life',id:'life'},
{k:'工作办公',en:'Work',id:'work'},
{k:'学习教程',en:'Learn',id:'learn'},
{k:'免费试用',en:'Free',id:'free'}
];
const GROUP_SUBS={
pc:[['系统应用','System'],['模型应用','Models'],['视频制作','Video'],['自动工作流','Workflow']],
adult:[['直播','Live'],['视频','Video'],['语音','Voice'],['聊天','Chat'],['交友','Dating']],
gig:[['视频','Video'],['设计','Design'],['文案','Copy'],['编程','Code'],['翻译','Translate'],['问卷','Survey'],['带货','Shop'],['威客','Witkey'],['兼职','Jobs']],
draw:[['绘画','Draw'],['设计','Design'],['PS','PS'],['生图','T2I']],
make:[['剪映','CapCut'],['即梦','Jimeng'],['配音','Dub'],['生视频','T2V']],
life:[['交友','Dating'],['外卖','Food'],['二手','Used'],['旅行','Travel']],
work:[['办公','Office'],['代码','Code'],['部署','Deploy'],['开店','Shop']],
learn:[['教程','Guide'],['学习','Study']],
free:[['免费','Free'],['收费','Paid']]
};
const TAG_DEEP={
'视频':[['成人','Adult'],['东南亚','SEA'],['欧美','West'],['日韩','JP/KR'],['亚洲','Asia']],
'生视频':[['成人','Adult'],['东南亚','SEA'],['欧美','West'],['日韩','JP/KR'],['亚洲','Asia']],
'直播':[['成人','Adult'],['东南亚','SEA'],['欧美','West'],['日韩','JP/KR']],
'交友':[['东南亚','SEA'],['欧美','West'],['日韩','JP/KR'],['亚洲','Asia']]
};
const TAGS=[['免费','Free'],['收费','Paid'],['对话','Chat'],['聊天','Talk'],['插件','Plugin'],['陪伴','Buddy'],['学习','Study'],['健身','Fit'],['美妆','Beauty'],['宠物','Pets'],['美食','Food'],['旅行','Travel'],['拼车','Carpool'],['租车','Rental'],['法律','Legal'],['管理','Manage'],['绘画','Draw'],['视频','Video'],['成人','Adult'],['直播','Live'],['交友','Dating'],['约炮','Hookup'],['办公','Office'],['编程','Code'],['游戏','Games'],['音乐','Music'],['语音','Voice'],['设计','Design'],['搜索','Search'],['写作','Write'],['接单','Gigs'],['兼职','Part-time'],['招聘','Jobs'],['社区','Forum'],['开店','Shop'],['API','API'],['图书','Books'],['小说','Novels'],['漫画','Manga'],['星座','Zodiac'],['塔罗','Tarot'],['云盘','Cloud'],['换脸','Face'],['打扮','Style'],['隐私','Privacy'],['资讯','News'],['短剧','Short'],['漫剧','Toon'],['故事','Story'],['创业','Startup'],['名人','Bio'],['八卦','Gossip'],['亲子','Kids'],['宝妈','Moms'],['主播','Stream'],['融资','Fund'],['理财','Money'],['种植','Farm'],['搭伙','Buddy'],['爬山','Hike'],['陪聊','Talk'],['情感','Feel'],['厨房','Kitchen'],['菜谱','Recipe'],['酒店','Hotel'],['房产','Realty'],['电影','Film'],['私影','Cinema'],['附近','Nearby'],['美剧','US TV'],['韩剧','KR TV'],['日剧','JP TV'],['监控','Cams'],['学生','Student'],['女心','Her'],['语录','Quotes'],['富婆','Sugar'],['人设','Persona'],['套图','Sets'],['文案','Copy'],['外贸','Trade'],['铺货','Dropship'],['网店','Store'],['养成','Raise'],['婚恋','Dating'],['出轨','Affair'],['检测','Detect'],['检验','Inspect'],['获粉','Grow'],['投票','Vote'],['数据','Stats'],['无审核','Open'],['小商品','Goods'],['机器人','Robot'],['无障碍','Access'],['模型包','Weights'],['数字人','Avatar'],['电视台','TV'],['虚拟人','Virtual'],['AI音乐','AI music'],['翻唱','Cover'],['夜生活','Nightlife'],['线下交','Meetup'],['羊毛','Deals'],['外卖','Delivery'],['陪护','Care'],['问卷','Survey'],['二手','Used'],['跑腿','Errand'],['维修','Repair'],['美容','Salon'],['矩阵','Matrix'],['转发','Repost'],['定时','Schedule'],['教程','Guide'],['Comfy','Comfy'],['纹身','Tattoo'],['舌钉','Pierce'],['短链','Short'],['飞机','Telegram'],['频道','Channel'],['医疗','Health'],['保险','Insurance'],['物流','Shipping'],['会计','Accounting'],['汽车','Auto'],['建筑','Build'],['科学','Science'],['天气','Weather'],['地图','Maps'],['支付','Pay'],['税务','Tax'],['体育','Sports'],['时尚','Fashion'],['家居','Home'],['摄影','Photo'],['会议','Meet'],['日历','Calendar'],['存储','Storage'],['电子书','Ebook'],['播客','Podcast'],['签名','Sign'],['调查','Polls'],['统计','Stats'],['农业','Farm'],['能源','Energy'],['制造','Make'],['航空','Aviation'],['海事','Marine'],['群发','Blast'],['多开','Multi'],['群控','Control'],['云手机','Cloud'],['指纹','Fingerprint'],['翻译','Translate'],['手机','Phone'],['电脑','PC'],['代码','Code'],['部署','Deploy'],['打包','Pack'],['大款','SugarD'],['小妹','Women'],['帅哥','Men'],['灰产','Gray'],['网盘','Drive'],['邮箱','Mail'],['接码','SMS'],['加密','Crypto'],['偶遇','Encounter'],['偷情','Affair'],['变现','Earn'],['全球','Global'],['租妻','RentWife'],['租女友','RentGF'],['租男友','RentBF'],['陪游','Tour'],['定位','GPS'],['模拟','Mock'],['虚拟定位','FakeGPS'],['居家','WFH'],['远程','Remote'],['威客','Witkey'],['众包','Crowd'],['外包','Outsrc'],['客服','CS'],['剪辑','Edit'],['跨境','XBorder'],['脚本','Script'],['分镜','Board'],['生图','T2I'],['生视频','T2V'],['配音','Dub'],['字幕','Captions'],['封面','Cover'],['发布','Post'],['豆包','Doubao'],['即梦','Jimeng'],['剪映','Jianying'],['本地','Local'],['端侧','Edge'],['离线','Offline'],['GGUF','GGUF'],['CoreML','CoreML'],['运行时','Runtime'],['申请','Apply'],['备案','ICP'],['认证','Verify'],['小程序','Mini App'],['扣子','Coze'],['电台','Radio'],['工作流','Workflow'],['ComfyUI','ComfyUI'],['安装包','Installer']];
const DROP_NAME=new Set(['Cron Calendar','Brilliant Practice','Quizlet Learn','Tuta Mail','Navidrome Demo','Stream Music','Primephonic 已并','Google Jules Agent','OpenDevin 旧名','Cursor.sh 旧域','Fig Term 已并','Amazon CodeWhisperer','Lyuceum','Mentat AI','Safari 技术预览','Character.AI+','Odakyu? skip','CopyMeThat Recipes','Privacy.com Cards Note','Ashley Madison Affairs Plus','SSL Labs Recheck']);
const DROP_HOST=new Set(['lyceum.online','mentat.ai','cron.com','getcruise.com','humane.com','tome.app','kajiwoto.ai','height.app','cozy.sh','hourone.ai','bowery.co','6pen.art','webchatgpt.io','darkness.ai','forger.studio','photoscape.ai','wiseone.io','justplayer.app','stillplayer.app','makeupplus.com','marktext.app','snapseed.online','readyplayer.me','resonate.coop','tianmai.cn','wuan.com','xting.com','woodworm.store','taskcn.com','huanbian.com','ishanjian.com','jiami.cn','xiaoyuan-calc.com','joinopen.com','clara.io','csm.ai','digi.ai']);
const DROP_PATH=['assistant.google.com/auto','joshua-uchoa/MochiDiffusion','mifi.github.io/lossless-cut','prisma-ai.com/lensa','geforce-experience/shadowplay','manyvids.com/Live','apple-music/classical','thomsonreuters.com/westlaw','novavideoplayer.github.io','lightricks.com/apps/motionleap','amazon.com/kindle-dbs'];
const sideEl=document.getElementById('side');
const tagsEl=document.getElementById('tags');
const listEl=document.getElementById('list');
const popEl=document.getElementById('pop');
const popX=document.getElementById('popX');
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
let lang=localStorage.getItem('lang')||'zh';
let shown=80; let lastKey=''; let filtered=[]; let hotList=[];
const saved=localStorage.getItem('theme')||'light';
document.documentElement.dataset.theme=saved;
const TAG_EN={}; TAGS.forEach(p=>{TAG_EN[p[0]]=p[1]});
function t(){return I18N[lang]||I18N.zh}
function hasHan(s){return /[\u3400-\u9FFF]/.test(String(s||''))}
function enOnly(){for(let i=0;i<arguments.length;i++){const s=arguments[i];if(s&&!hasHan(s))return String(s);}return 'Tool';}
function blob(x){return [x.name,x.desc,x.desc_en,x.cat,x.pack,x.how].join(' ')}
function gidOf(x){
  const s=blob(x);
  if(/18|Adult|成人|无审核|约炮|出轨|Chaturbate|Pornhub|OnlyFans|直播裸/i.test(s)) return 'adult';
  if(x.cat==='系统应用'||x.cat==='模型应用'||x.cat==='视频制作'||x.cat==='自动工作流'||x.cat==='电脑软件'||x.cat==='安装包'||x.pack==='系统应用'||x.pack==='模型应用'||x.pack==='视频制作'||x.pack==='自动工作流'||x.pack==='电脑软件'||x.pack==='安装包') return 'pc';
  if(/Windows 11|Windows 10|Ubuntu|Rufus|Ventoy|Etcher|NVIDIA 驱动|Visual C\+\+|Ninite|Homebrew|Creative Cloud|Ollama|LM Studio|GPT4All|LLaMA Factory|Unsloth|GGUF|Stability Matrix|Automatic1111|Fooocus|InvokeAI|Forge WebUI|Comfy Desktop|ComfyUI|n8n|Dify|Langflow|Flowise|Pinokio|Premiere|After Effects|DaVinci|CapCut桌面|剪映专业版电脑|OBS Studio|HandBrake|Shotcut|Kdenlive|Filmora|会声会影|必剪电脑/.test(s)) return 'pc';
  if(x.cat==='接单'||x.pack==='接单'||(/接单|威客|众包|外包|兼职|Fiverr|Upwork|Freelancer|PeoplePerHour|CrowdWorks|Lancers|Kmong|Clickworker|MTurk/.test(s)&&!/卖家|Seller|开店|店铺/.test(s))) return 'gig';
  if(/学习|教育|Khan|Coursera|教程/.test(s)) return 'learn';
  if(/绘画|设计|Photoshop|Photopea|GIMP|Krita|Figma|Illustrator/.test(s)&&!/Premiere|视频制作/.test(s)) return 'draw';
  if(/即梦|剪映|Suno|可灵|Runway|Pika|HeyGen|生视频|配音/.test(s)&&!/剪映专业版电脑|CapCut桌面/.test(s)) return 'make';
  if(/交友|美食|外卖|陪护|二手|跑腿|维修|美容|附近|医疗|房产|酒店|理财|保险|汽车|天气|地图|体育|时尚|家居|摄影|电子书|播客|农业|租车|电影/.test(s)) return 'life';
  if(/办公|编程|管理|API|物流|会计|建筑|科学|支付|税务|会议|日历|存储|签名|调查|统计|能源|制造|航空|海事|法律|翻译|矩阵|群发|多开|群控|云手机|指纹|开店|跨境|东南亚|Shopee|Lazada|淘宝|拼多多/.test(s)) return 'work';
  return 'work';
}
function applyChrome(){const s=t();document.getElementById('brand').textContent=s.brand;document.title=s.brand;document.getElementById('hotTitle').textContent=s.hot;if(listTitle)listTitle.textContent=s.all;qEl.placeholder='';qEl.removeAttribute('placeholder');themeBtn.textContent=document.documentElement.dataset.theme==='dark'?s.themeL:s.themeD;if(langBtn)langBtn.textContent=lang==='en'?'EN':(lang==='zh'?'中文':String(lang).toUpperCase());document.documentElement.lang=lang==='zh'?'zh-CN':lang;}
themeBtn.onclick=()=>{const n=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=n;localStorage.setItem('theme',n);applyChrome()};
function hostOf(u){try{return new URL(u).hostname.replace(/^www\./,'')}catch(e){return ''}}
function urlKey(u){try{const x=new URL(u);return x.hostname.replace(/^www\./,'').toLowerCase()+x.pathname.replace(/\/+$/,'')}catch(e){return String(u||'').toLowerCase()}}
function deadPath(u){const s=String(u||'').toLowerCase();return DROP_PATH.some(p=>s.includes(p))}
function esc(s){return String(s||'').replace(/&/g,'&').replace(/</g,'<').replace(/>/g,'>').replace(/"/g,'"')}
function isHttp(u){return /^https?:\/\//i.test(u||'')}
function iconTag(url,letter){const h=hostOf(url);const L=(letter||'T').slice(0,1);if(!h)return hasHan(L)?'T':L;return `<img alt="" src="https://www.google.com/s2/favicons?sz=64&domain=${encodeURIComponent(h)}" onerror="this.style.display='none'">`;}
function dayNum(){const d=new Date();return Math.floor(Date.UTC(d.getUTCFullYear(),d.getUTCMonth(),d.getUTCDate())/86400000)}
function pickHot(){const buckets={learn:[],gig:[],draw:[],make:[],life:[],work:[],adult:[],pc:[],free:[]};for(const x of tools){const g=gidOf(x);(buckets[g]||buckets.work).push(x);if(x.free)buckets.free.push(x);}const order=['free','learn','gig','draw','make','life','work','adult','pc','free'];const seed=dayNum();const used=new Set();const out=[];for(let i=0;i<10;i++){const arr=buckets[order[i]]||tools;if(!arr.length)continue;let n=arr.length,idx=(seed*17+i*31)%n,hit=null;for(let k=0;k<n;k++){const x=arr[(idx+k)%n];if(!used.has(x.name)){hit=x;break;}}if(hit){used.add(hit.name);out.push(hit);}}hotList=out;}
function showName(x){const host=hostOf(x.url);if(lang==='zh')return x.name||host||'';return enOnly(x.name_en,hasHan(x.name)?'':x.name,host);}
function showDesc(x){const host=hostOf(x.url);if(lang==='zh')return x.desc||x.cat||host||'';if(x.desc_en&&!hasHan(x.desc_en))return x.desc_en;const cat=TAG_EN[x.cat]||TAG_EN[x.pack]||'';if(cat&&host)return cat+' · '+host;return enOnly(cat,host,'Tool');}
function renderHot(){hotEl.innerHTML=hotList.map((h,i)=>{const href=isHttp(h.url)?h.url:('guide.html?n='+encodeURIComponent(h.name||''));return `<li><a href="${esc(href)}" target="_blank" rel="noopener"><i>${i+1}</i><span class="ht"><strong>${esc(showName(h))}</strong><em>${esc(showDesc(h))}</em></span></a></li>`;}).join('');}
function matchGroup(x){if(!selected.size)return true;if(selected.has('free')&&!x.free)return false;const topics=[...selected].filter(id=>id!=='free');if(!topics.length)return true;return topics.includes(gidOf(x));}
function matchTag(x){if(!tags.size)return true;const s=blob(x);if(tags.has('免费')&&!x.free)return false;if(tags.has('收费')&&x.free)return false;const others=[...tags].filter(k=>k!=='免费'&&k!=='收费');if(!others.length)return true;return others.some(k=>x.cat===k||x.pack===k||s.indexOf(k)>=0);}
function tagLen(s){return Array.from(String(s||'').replace(/\s+/g,'')).length}
function visLen(el){return tagLen(el&&el.textContent)}
function sortButtons(box){if(!box)return;const btns=[...box.querySelectorAll(':scope > button')];btns.sort((a,b)=>{const la=visLen(a),lb=visLen(b);if(la!==lb)return la-lb;return (a.textContent||'').localeCompare(b.textContent||'','en',{numeric:true});});btns.forEach(b=>box.appendChild(b));}
let sortingChips=false;
function sortLangChips(){if(sortingChips)return;sortingChips=true;sortButtons(sideEl);sortButtons(tagsEl);sortingChips=false;}
window.sortLangChips=sortLangChips;
function watchChips(box){if(!box||box._chipWatch)return;box._chipWatch=1;let t=null;new MutationObserver(()=>{clearTimeout(t);t=setTimeout(sortLangChips,80);}).observe(box,{subtree:true,childList:true,characterData:true});}
function sortedTags(){
  const id=[...selected][0];
  let src=(id&&GROUP_SUBS[id])?GROUP_SUBS[id].slice():[];
  const seen=new Set(src.map(p=>p[0]));
  tags.forEach(function(k){
    const extra=TAG_DEEP[k];
    if(!extra) return;
    extra.forEach(function(p){ if(!seen.has(p[0])){ seen.add(p[0]); src.push(p); } });
  });
  return src.sort((a,b)=>{const A=lang==='zh'?a[0]:a[1];const B=lang==='zh'?b[0]:b[1];const la=tagLen(A),lb=tagLen(B);if(la!==lb)return la-lb;return A.localeCompare(B,lang==='zh'?'zh':'en');});
}
async function load(){selected.clear();tags.clear();applyChrome();const files=['data/tools.json','data/packs.json','data/more.json'];for(let i=2;i<=183;i++)files.push('data/more'+i+'.json');const arrs=await Promise.all(files.map(f=>fetch(f).then(r=>r.ok?r.json():[]).catch(()=>[])));const seenName=new Set();const seenUrl=new Set();tools=[];for(const x of arrs.flat()){if(!x||!x.name||DROP_NAME.has(x.name))continue;if(deadPath(x.url))continue;const h=hostOf(x.url);if(h&&DROP_HOST.has(h))continue;if(seenName.has(x.name))continue;const uk=isHttp(x.url)?urlKey(x.url):'';if(uk&&seenUrl.has(uk))continue;seenName.add(x.name);if(uk)seenUrl.add(uk);tools.push(x);}pickHot();metaEl.textContent=tools.length+t().tools;renderHot();renderSide();render();}
function renderSide(){const groups=GROUPS.slice().sort((a,b)=>{const A=lang==='zh'?a.k:a.en;const B=lang==='zh'?b.k:b.en;const la=tagLen(A),lb=tagLen(B);if(la!==lb)return la-lb;return A.localeCompare(B);});sideEl.innerHTML=groups.map(g=>`<button data-c="${g.id}" class="${selected.has(g.id)?'on':''}">${lang==='zh'?g.k:g.en}</button>`).join('');sideEl.onclick=e=>{const b=e.target.closest('button');if(!b)return;const id=b.dataset.c;if(selected.has(id))selected.clear();else{selected.clear();selected.add(id);}tags.clear();shown=80;renderSide();render();};if(!tagsEl)return;tagsEl.innerHTML=sortedTags().map(([zh,en])=>`<button data-t="${zh}" class="${tags.has(zh)?'on':''}">${lang==='zh'?zh:en}</button>`).join('');tagsEl.onclick=e=>{const b=e.target.closest('button');if(!b)return;const k=b.dataset.t;if(tags.has(k))tags.delete(k);else tags.add(k);if(k==='免费')tags.delete('收费');if(k==='收费')tags.delete('免费');shown=80;renderSide();render();};sortLangChips();watchChips(sideEl);watchChips(tagsEl);}
function card(x){const title=showName(x);const desc=showDesc(x);const href=isHttp(x.url)?x.url:('guide.html?n='+encodeURIComponent(x.name||''));return `<a class="card" href="${esc(href)}" target="_blank" rel="noopener"><div class="row"><div class="av">${iconTag(x.url,title)}</div><div><h3>${esc(title)}</h3><p>${esc(desc)}</p></div></div></a>`;}
function render(){const q=(qEl.value||'').trim().toLowerCase();const s=t();const key=[...selected].join(',')+'|'+[...tags].join(',')+'|'+q;if(key!==lastKey){shown=80;lastKey=key;}if(hotBlock)hotBlock.style.display=q?'none':'block';if(listTitle)listTitle.textContent=s.all;if(popEl){popEl.hidden=false;popEl.classList.remove('cover');}var under=document.getElementById('under');if(under)under.classList.toggle('open',selected.size>0);metaEl.textContent=tools.length+s.tools;filtered=tools.filter(x=>{const hit=!q||[x.name,x.desc,x.desc_en||'',x.cat,x.how||'',x.url||''].join(' ').toLowerCase().includes(q);return hit&&(q||(matchGroup(x)&&matchTag(x)));});countEl.textContent=filtered.length+s.hit;listEl.innerHTML=filtered.slice(0,shown).map(card).join('')||`<p class="count">${s.empty}</p>`;}
function onScroll(){if(shown>=filtered.length)return;const top=scroller===window?window.scrollY:scroller.scrollTop;const h=scroller===window?window.innerHeight:scroller.clientHeight;const sh=scroller===window?document.body.offsetHeight:scroller.scrollHeight;if(h+top>sh-240){shown+=80;listEl.innerHTML=filtered.slice(0,shown).map(card).join('');}}
scroller.addEventListener('scroll',onScroll,{passive:true});
function goTop(){if(scroller===window)window.scrollTo({top:0,behavior:'smooth'});else scroller.scrollTo({top:0,behavior:'smooth'});}
if(topBtn)topBtn.onclick=goTop;
document.getElementById('brand').onclick=goTop;
sf.addEventListener('submit',e=>{e.preventDefault();shown=80;render();qEl.blur();goTop();});
qEl.addEventListener('input',()=>{shown=80;render();});
window.setAidLang=function(code){
  lang=code||'zh';
  try{localStorage.setItem('lang',lang);localStorage.setItem('aid_tl',lang)}catch(e){}
  applyChrome();renderSide();renderHot();render();
  if(typeof aidTranslate==='function') aidTranslate();
};
load();
