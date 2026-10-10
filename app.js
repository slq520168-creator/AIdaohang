const UI_I18N={zh:{brand:'全球优选AI导航',hot:'今日热点',all:'全部工具',ph:'',themeD:'深色',themeL:'浅色',empty:'没有匹配',res:'搜索 ',close:'关闭'},en:{brand:'Global AI Directory',hot:'Today picks',all:'All tools',ph:'',themeD:'Dark',themeL:'Light',empty:'No match',res:'Results ',close:'Close'}};
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
/* v284: links that leave Safari for a native app / store (browser Back can't return) are hidden */
const APP_HOST=new Set(['apps.apple.com','itunes.apple.com','play.google.com','t.me','telegram.me']);const APP_SCHEME=/^(itms|itms-apps|itms-services|itms-appss|market|intent|tg|weixin|snssdk\d*|taobao|alipays?|mqq\w*|openapp\.\w+|imeituan|xhsdiscover|kwai|fleamarket):/i;function appOnly(u){u=String(u||'').trim();if(APP_SCHEME.test(u))return true;const h=hostOf(u);return !!h&&APP_HOST.has(h);}
const DROP_HOST=new Set(['lyceum.online','mentat.ai','cron.com','getcruise.com','humane.com','tome.app','kajiwoto.ai','height.app','cozy.sh','hourone.ai','bowery.co','6pen.art','webchatgpt.io','darkness.ai','forger.studio','photoscape.ai','wiseone.io','justplayer.app','stillplayer.app','makeupplus.com','marktext.app','snapseed.online','readyplayer.me','resonate.coop','tianmai.cn','wuan.com','xting.com','woodworm.store','taskcn.com','huanbian.com','ishanjian.com','jiami.cn','xiaoyuan-calc.com','joinopen.com','clara.io','csm.ai','digi.ai']);
const DROP_PATH=['assistant.google.com/auto','joshua-uchoa/MochiDiffusion','mifi.github.io/lossless-cut','prisma-ai.com/lensa','geforce-experience/shadowplay','manyvids.com/Live','apple-music/classical','thomsonreuters.com/westlaw','novavideoplayer.github.io','lightricks.com/apps/motionleap','amazon.com/kindle-dbs'];
const sideEl=document.getElementById('side');
const tagsEl=document.getElementById('tags');
const listEl=document.getElementById('list');
const popEl=document.getElementById('pop');
const popX=document.getElementById('popX');
const qEl=document.getElementById('q');
const hotEl=document.getElementById('hot');
const hotBlock=document.getElementById('hotBlock');
const listTitle=document.getElementById('listTitle');
const themeBtn=document.getElementById('theme');
const langBtn=document.getElementById('lang');
const sf=document.getElementById('sf');
const topBtn=document.getElementById('topBtn');
const scroller=document.getElementById('scroll')||window;
let tools=[]; let selected=new Set(); let tags=new Set();
let lang=(window.I18N&&window.I18N.lang)||localStorage.getItem('yx_lang')||localStorage.getItem('lang')||'zh';
let shown=80; let lastKey=''; let filtered=[]; let hotList=[];
const saved=localStorage.getItem('theme')||'light';
document.documentElement.dataset.theme=saved;
const TAG_EN={}; TAGS.forEach(p=>{TAG_EN[p[0]]=p[1]});

const GROUP_L={
ja:{pc:'PC',gig:'受注',adult:'成人',draw:'絵',make:'動画',life:'生活',work:'仕事',learn:'学習',free:'無料'},
ko:{pc:'PC',gig:'수주',adult:'성인',draw:'그림',make:'영상',life:'생활',work:'업무',learn:'학습',free:'무료'},
th:{pc:'คอมพิวเตอร์',gig:'งาน',adult:'ผู้ใหญ่',draw:'ภาพ',make:'วิดีโอ',life:'ชีวิต',work:'งานออฟฟิศ',learn:'เรียน',free:'ฟรี'},
vi:{pc:'Máy tính',gig:'Việc',adult:'Người lớn',draw:'Vẽ',make:'Video',life:'Đời sống',work:'Văn phòng',learn:'Học',free:'Miễn phí'},
km:{pc:'កំព្យូទរ',gig:'ការងារ',adult:'មនុស្សពេញវថ្យ',draw:'គំនូរ',make:'វីដេអូ',life:'ជីវិត',work:'ការិយាល័យ',learn:'រៀន',free:'ឥតគិតថ្លៃ'},
id:{pc:'PC',gig:'Order',adult:'Dewasa',draw:'Gambar',make:'Video',life:'Hidup',work:'Kerja',learn:'Belajar',free:'Gratis'},
es:{pc:'PC',gig:'Encargos',adult:'Adultos',draw:'Arte',make:'Video',life:'Vida',work:'Trabajo',learn:'Aprender',free:'Gratis'},
lo:{pc:'ຄອມ',gig:'ວຽກ',adult:'ຜູ້ໃຫຍ່',draw:'ຮູບ',make:'ວິດີໂອ',life:'ຊີວິດ',work:'ຫ້ອງການ',learn:'ຮຽນ',free:'ຟຣີ'},
my:{pc:'ကွန်ပျူတာ',gig:'အလုပ်',adult:'လူကြီး',draw:'ပုံ',make:'ဗီဒီယို',life:'ဘဝ',work:'ရုံး',learn:'သင်ယူ',free:'အခမဲ့'},
ms:{pc:'PC',gig:'Kerja',adult:'Dewasa',draw:'Lukis',make:'Video',life:'Hidup',work:'Pejabat',learn:'Belajar',free:'Percuma'},
hi:{pc:'पीसी',gig:'काम',adult:'वयस्क',draw:'चित्र',make:'वीडियो',life:'जीवन',work:'दफ्तर',learn:'सीखें',free:'मुफ्त'},
si:{pc:'පරිගණක',gig:'වැඩ',adult:'වැඩිහිටි',draw:'චිත්‍ර',make:'වීඩියෝ',life:'ජීවිතය',work:'කාර්යාල',learn:'ඉගෙනීම',free:'නොමිලේ'},
ta:{pc:'கணினி',gig:'வேலை',adult:'பெரியோர்',draw:'படம்',make:'வீடியோ',life:'வாழ்க்கை',work:'அலுவலகம்',learn:'கற்றல்',free:'இலவசம்'}
};
function groupLabel(g){if(lang==='zh')return g.k;const pack=GROUP_L[lang];if(pack&&pack[g.id])return pack[g.id];return g.en;}
function t(){if(window.I18N&&window.I18N.t){return {brand:window.I18N.t("brand"),hot:window.I18N.t("hot"),all:window.I18N.t("allTools"),themeD:window.I18N.t("themeD"),themeL:window.I18N.t("themeL"),empty:window.I18N.t("empty"),ph:"",res:"",close:"Close"};}return UI_I18N[lang]||UI_I18N.zh}
function hasHan(s){return /[\u3400-\u9FFF]/.test(String(s||''))}

const NAME_EN={
'豆包':'Doubao','通义千问':'Qwen','文心一言':'ERNIE Bot','讯飞星火':'iFlytek Spark','智谱清言':'ChatGLM','腾讯元宝':'Yuanbao','秘塔AI':'Metaso','纳米AI搜索':'Nano Search','即梦':'Dreamina','可灵':'Kling','剪映':'CapCut','扣子':'Coze','腾讯智影':'ZenVideo','海螺':'Hailuo','优选创作':'Studio','即梦+剪映成片':'Dreamina + CapCut','可灵+剪映':'Kling + CapCut','Suno+剪映口播':'Suno + CapCut','HeyGen数字人':'HeyGen','CapCut一键成片':'CapCut','Sora电影级':'Sora','Meshy游戏资产':'Meshy','n8n工作流':'n8n','扣子工作流':'Coze','Midjourney付费':'Midjourney','Runway付费':'Runway','Bing生图':'Bing Image','通义万相':'Wan','文心一格':'ERNIE-ViLG','天工':'Tiangong','百川':'Baichuan','商量':'SenseChat','海螺AI':'Hailuo','即梦AI':'Dreamina','剪映专业版':'CapCut Pro','抖音':'Douyin','快手':'Kuaishou','小红书':'Xiaohongshu','美团':'Meituan','淘宝':'Taobao','京东':'JD','拼多多':'Pinduoduo','支付宝':'Alipay','微信支付':'WeChat Pay','通义灵码':'Tongyi Lingma','讯飞配音':'iFlytek Dub','智谱清影':'Ying','来画':'Laihua','万兴播爆':'Wondershare Virbo','百度千帆':'Qianfan','阿里云百炼':'Bailian','有道翻译':'Youdao Translate','彩云小译':'Caiyun','吐司AI':'Tusi','必应':'Bing','夸克':'Quark','百度':'Baidu','网易有道':'Youdao','飞书':'Feishu','钉钉':'DingTalk','企业微信':'WeCom','微信':'WeChat','微博':'Weibo','哔哩哔哩':'Bilibili','爱奇艺':'iQIYI','腾讯视频':'Tencent Video','优酷':'Youku','芒果TV':'Mango TV','喜马拉雅':'Ximalaya','得到':'Dedao','知乎':'Zhihu','豆瓣':'Douban','携程':'Trip.com','滴滴':'DiDi','高德':'Amap','百度地图':'Baidu Maps','国家反诈中心':'Anti-Fraud Center'
};
function latinName(name){
  const s=String(name||'').trim();
  if(NAME_EN[s]) return NAME_EN[s];
  const lead=s.replace(/[\u3400-\u9fff].*$/,'').replace(/[+\s]+$/,'').trim();
  if(lead && !hasHan(lead)) return lead;
  return '';
}
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
function applyChrome(){const s=t();if(window.I18N){window.I18N.lang=lang;window.I18N.apply(document);}else{const b=document.getElementById('brand');if(b)b.textContent=s.brand;const ht=document.getElementById('hotTitle');if(ht)ht.textContent=s.hot;if(listTitle)listTitle.textContent=s.all;}document.title=s.brand;qEl.placeholder=(window.I18N&&I18N.t('search'))||'';if(themeBtn)themeBtn.textContent=document.documentElement.dataset.theme==='dark'?s.themeL:s.themeD;const LABELS={zh:'中文',en:'EN',km:'ខ្មែរ',th:'ไทย',vi:'VI',id:'ID',lo:'ລາວ',my:'MY',ms:'MS',hi:'HI',si:'SI',ta:'TA',ja:'日本語',ko:'한국어',es:'ES'};if(langBtn)langBtn.textContent=LABELS[lang]||String(lang).toUpperCase();document.documentElement.lang=lang==='zh'?'zh-CN':lang;}
themeBtn.onclick=()=>{const n=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=n;localStorage.setItem('theme',n);applyChrome()};
function hostOf(u){try{return new URL(u).hostname.replace(/^www\./,'')}catch(e){return ''}}
function urlKey(u){try{const x=new URL(u);return x.hostname.replace(/^www\./,'').toLowerCase()+x.pathname.replace(/\/+$/,'')}catch(e){return String(u||'').toLowerCase()}}
function deadPath(u){const s=String(u||'').toLowerCase();return DROP_PATH.some(p=>s.includes(p))}
function esc(s){return String(s||'').replace(/&/g,'&').replace(/</g,'<').replace(/>/g,'>').replace(/\"/g,'"')}
function isHttp(u){return /^https?:\/\//i.test(u||'')}
function safeUrl(u){u=String(u||'').trim();if(!u)return false;if(/^javascript:|^data:|^vbscript:/i.test(u))return false;if(isHttp(u))return true;return /^\.?\/?[\w.-]+\.html([?#]|$)/.test(u);}
const ICON_MAP={"Hypit":"github.com","剪映":"capcut.cn","即梦":"jimeng.jianying.com","可灵":"klingai.com","海螺AI":"hailuoai.com","Veed":"veed.io","Kapwing":"kapwing.com","Opus Clip":"opus.pro","Descript":"descript.com","Runway":"runwayml.com","HeyGen":"heygen.com","Synthesia":"synthesia.io","ChatGPT":"chatgpt.com","Claude":"claude.ai","Gemini":"gemini.google.com","Grok":"grok.com","DeepSeek":"chat.deepseek.com","豆包":"doubao.com","通义千问":"tongyi.aliyun.com","文心一言":"yiyan.baidu.com"};
function iconTag(url,letter,name){let h=hostOf(url);if(!h && name && ICON_MAP[name]) h=ICON_MAP[name];const L=(letter||'T').slice(0,1);if(!h)return hasHan(L)?'T':L;return `<img alt="" src="https://www.google.com/s2/favicons?sz=64&domain=${encodeURIComponent(h)}" onerror="this.style.display='none';this.parentNode.textContent='${L}'">`;}
function hourBucket(){return Math.floor(Date.now()/3600000)}

const PIN_HOME=[
{name:"Hypit",cat:"视频",pack:"视频",url:"hypit.html",desc:"免费。WhisperX逐词对齐，字幕挂词不挂秒",how:"打开本页贴台词，改句后时间重排",free:true},
{name:"剪映",cat:"视频",pack:"视频",url:"https://www.capcut.cn",desc:"免费。自动字幕和口播成片",how:"导入素材，识别字幕，套模板导出",free:true},
{name:"即梦",cat:"视频",pack:"视频",url:"https://jimeng.jianying.com",desc:"免费额度。文生视频、图生视频",how:"登录后写镜头提示生成",free:true},
{name:"可灵",cat:"视频",pack:"视频",url:"https://klingai.com",desc:"免费额度。运镜和角色视频",how:"上传参考或写提示出片",free:true},
{name:"海螺AI",cat:"视频",pack:"视频",url:"https://hailuoai.com",desc:"免费额度。短视频生成",how:"写提示或上传图生成",free:true},
{name:"Veed",cat:"视频",pack:"视频",url:"https://www.veed.io",desc:"免费档。浏览器剪辑和自动字幕",how:"上传视频，自动字幕后导出",free:true},
{name:"Kapwing",cat:"视频",pack:"视频",url:"https://www.kapwing.com",desc:"免费档。在线剪辑、字幕、Resize",how:"上传素材剪辑后导出",free:true}
];
function card(x){const title=showName(x);const desc=showDesc(x);const href=isHttp(x.url)?x.url:('guide.html?n='+encodeURIComponent(x.name||''));return `<div class="card" data-n="${esc(x.name||'')}" role="button" tabindex="0"><div class="row"><div class="av">${iconTag(x.url,title,x.name)}</div><div><h3>${esc(title)}</h3><p>${esc(desc)}</p></div></div></div>`;}
