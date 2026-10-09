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
km:{pc:'កុំព្យូទ័រ',gig:'ការងារ',adult:'មនុស្សពេញវ័យ',draw:'គំនូរ',make:'វីដេអូ',life:'ជីវិត',work:'ការិយាល័យ',learn:'រៀន',free:'ឥតគិតថ្លៃ'},
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
function esc(s){return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
function isHttp(u){return /^https?:\/\//i.test(u||'')}
function safeUrl(u){u=String(u||'').trim();if(!u)return false;if(/^javascript:|^data:|^vbscript:/i.test(u))return false;if(isHttp(u))return true;return /^\.?\/?[\w.-]+\.html([?#]|$)/.test(u);}
function iconTag(url,letter){const h=hostOf(url);const L=(letter||'T').slice(0,1);if(!h)return hasHan(L)?'T':L;return `<img alt="" src="https://www.google.com/s2/favicons?sz=64&domain=${encodeURIComponent(h)}" onerror="this.style.display='none'">`;}
function hourBucket(){return Math.floor(Date.now()/3600000)}

const PIN_HOME=[
{name:"Hypit",cat:"视频",pack:"视频",url:"hypit.html",desc:"免费。WhisperX逐词对齐，字幕挂词不挂秒",how:"打开本页贴台词，改句后时间重排",free:true},
{name:"剪映",cat:"视频",pack:"视频",url:"https://www.capcut.cn",desc:"免费。自动字幕和口播成片",how:"导入素材，识别字幕，套模板导出",free:true},
{name:"即梦",cat:"视频",pack:"视频",url:"https://jimeng.jianying.com",desc:"免费额度。文生视频、图生视频",how:"登录后写镜头提示生成",free:true},
{name:"可灵",cat:"视频",pack:"视频",url:"https://klingai.com",desc:"免费额度。运镜和角色视频",how:"上传参考或写提示出片",free:true},
{name:"海螺AI",cat:"视频",pack:"视频",url:"https://hailuoai.com",desc:"免费额度。短视频生成",how:"写提示或上传图生成",free:true},
{name:"Veed",cat:"视频",pack:"视频",url:"https://www.veed.io",desc:"免费档。浏览器剪辑和自动字幕",how:"上传视频，自动字幕后导出",free:true},
{name:"Kapwing",cat:"视频",pack:"视频",url:"https://www.kapwing.com",desc:"免费档。在线剪辑、字幕、Resize",how:"上传后选自动字幕",free:true},
{name:"Opus Clip",cat:"视频",pack:"视频",url:"https://www.opus.pro",desc:"免费试用。长视频切短视频",how:"贴长视频链接，选出高光",free:true},
{name:"Descript",cat:"视频",pack:"视频",url:"https://www.descript.com",desc:"收费。按文字剪视频，改词即改画面",how:"导入口播，在文稿里删句",free:false},
{name:"Runway",cat:"视频",pack:"视频",url:"https://runwayml.com",desc:"收费。Gen视频和专业剪辑",how:"用积分生成或编辑镜头",free:false},
{name:"HeyGen",cat:"视频",pack:"视频",url:"https://www.heygen.com",desc:"收费。数字人口播",how:"选形象贴文案出片",free:false},
{name:"Synthesia",cat:"视频",pack:"视频",url:"https://www.synthesia.io",desc:"收费。企业数字人视频",how:"选虚拟人，贴脚本生成",free:false},
{name:"Submagic",cat:"视频",pack:"视频",url:"https://www.submagic.co",desc:"收费。爆款字幕和B-roll",how:"上传口播，套动态字幕",free:false},
{name:"Captions",cat:"视频",pack:"视频",url:"https://captions.ai",desc:"收费。口播字幕和AI剪辑",how:"上传视频生成字幕成片",free:false},
{name:"Pictory",cat:"视频",pack:"视频",url:"https://pictory.ai",desc:"收费。文案转视频",how:"贴脚本，自动配画面",free:false},
{name:"Arcads",cat:"视频",pack:"视频",url:"https://www.arcads.ai",desc:"收费。AI广告口播",how:"选演员贴广告词出片",free:false}
];
function pickHot(){const by=new Map(tools.map(x=>[x.name,x]));const fresh=tools.filter(x=>x.tags&&x.tags.indexOf("提示词")>=0);const pinned=PIN_HOME.map(x=>by.get(x.name)).filter(Boolean);const pool=fresh.concat(pinned);const used=new Set();const out=[];for(const x of pool){if(!x||used.has(x.name))continue;used.add(x.name);out.push(x);if(out.length>=10)break;}hotList=out.slice(0,10);}
function showName(x){const host=hostOf(x.url);if(lang==='zh')return x.name||host||'';return enOnly(x.name_en,latinName(x.name),hasHan(x.name)?'':x.name,host);}
function showDesc(x){const host=hostOf(x.url);if(lang==='zh')return x.desc||x.cat||host||'';if(x.desc_en&&!hasHan(x.desc_en))return x.desc_en;const cat=TAG_EN[x.cat]||TAG_EN[x.pack]||'';if(cat&&host)return cat+' · '+host;return enOnly(cat,host,'Tool');}
function renderHot(){hotEl.innerHTML=hotList.map((h,i)=>{const href=isHttp(h.url)?h.url:('guide.html?n='+encodeURIComponent(h.name||''));return `<li data-n="${esc(h.name||'')}"><a href="#" role="button"><i>${i+1}</i><span class="ht"><strong>${esc(showName(h))}</strong><em>${esc(showDesc(h))}</em></span></a></li>`;}).join('');}
function matchGroup(x){if(!selected.size)return true;if(selected.has('free')&&!x.free)return false;const topics=[...selected].filter(id=>id!=='free');if(!topics.length)return true;return topics.includes(gidOf(x));}
function matchTag(x){if(!tags.size)return true;const s=blob(x);if(tags.has('免费')&&!x.free)return false;if(tags.has('收费')&&x.free)return false;const others=[...tags].filter(k=>k!=='免费'&&k!=='收费');if(!others.length)return true;return others.some(k=>x.cat===k||x.pack===k||s.indexOf(k)>=0);}
function tagLen(s){return Array.from(String(s||'').replace(/\s+/g,'')).length}
function visLen(el){return tagLen(el&&el.textContent)}
function sortButtons(box){if(!box)return;const btns=[...box.querySelectorAll(':scope > button')];btns.sort((a,b)=>{const la=visLen(a),lb=visLen(b);if(la!==lb)return la-lb;return (a.textContent||'').localeCompare(b.textContent||'','en',{numeric:true});});btns.forEach(b=>box.appendChild(b));}
let sortingChips=false;
function sortLangChips(){if(sortingChips)return;sortingChips=true;sortButtons(sideEl);sortButtons(tagsEl);sortingChips=false;}
window.sortLangChips=sortLangChips;
function watchChips(box){/* no-op: observer caused chip reorder flicker on load */}
function allInnerTags(){
  const src=[]; const seen=new Set();
  Object.keys(GROUP_SUBS).forEach(function(id){
    GROUP_SUBS[id].forEach(function(p){ if(!seen.has(p[0])){ seen.add(p[0]); src.push(p); } });
  });
  Object.keys(TAG_DEEP).forEach(function(k){
    TAG_DEEP[k].forEach(function(p){ if(!seen.has(p[0])){ seen.add(p[0]); src.push(p); } });
  });
  return src;
}
function sortedTags(){
  const src=TAGS.slice();
  const seen=new Set(src.map(function(p){return p[0];}));
  (tools||[]).forEach(function(x){
    (x.tags||[]).forEach(function(zh){
      if(!zh||seen.has(zh))return;
      seen.add(zh);
      var en=(typeof TAG_EN!=='undefined'&&TAG_EN[zh])?TAG_EN[zh]:zh;
      src.push([zh,en]);
      if(typeof TAG_EN!=='undefined') TAG_EN[zh]=en;
    });
  });
  return src.sort((a,b)=>{const A=lang==='zh'?a[0]:a[1];const B=lang==='zh'?b[0]:b[1];const la=tagLen(A),lb=tagLen(B);if(la!==lb)return la-lb;return A.localeCompare(B,lang==='zh'?'zh':'en');});
}
async function fetchJson(f){try{const r=await fetch(f);return r.ok?await r.json():[];}catch(e){return [];}}
async function mapPool(items,limit,fn){const out=new Array(items.length);let i=0;async function worker(){while(i<items.length){const idx=i++;out[idx]=await fn(items[idx],idx);}}const n=Math.min(limit,items.length)||1;await Promise.all(Array.from({length:n},()=>worker()));return out;}
const SNAP='aid_snap_v3';function paintSnap(){try{const o=JSON.parse(localStorage.getItem(SNAP)||'null');if(!o||!Array.isArray(o.cards))return;if(Array.isArray(o.hot)&&o.hot.length){hotList=o.hot;renderHot();}listEl.innerHTML=o.cards.map(card).join('');}catch(e){}}function saveSnap(){try{if(selected.size||tags.size||(qEl.value||'').trim())return;localStorage.setItem(SNAP,JSON.stringify({n:tools.length,hot:hotList,cards:filtered.slice(0,80)}));}catch(e){}}
async function load(){selected.clear();tags.clear();applyChrome();renderSide();paintSnap();let rows=await fetchJson('data/catalog.json');if(!Array.isArray(rows))rows=[];const extra=await fetchJson('data/more237.json');if(Array.isArray(extra))rows=extra.concat(rows);const extra238=await fetchJson('data/more238.json');if(Array.isArray(extra238))rows=extra238.concat(rows);rows=PIN_HOME.concat(rows);const seenName=new Set();const seenUrl=new Set();tools=[];for(const x of rows){if(!x||!x.name||DROP_NAME.has(x.name))continue;if(deadPath(x.url))continue;if(!safeUrl(x.url))continue;const h=hostOf(x.url);if(h&&DROP_HOST.has(h))continue;if(appOnly(x.url))continue;if(seenName.has(x.name))continue;const uk=isHttp(x.url)?urlKey(x.url):'';if(uk&&seenUrl.has(uk))continue;seenName.add(x.name);if(uk)seenUrl.add(uk);tools.push(x);}if(!tools.length){listEl.innerHTML='<p class="count">目录加载失败，请刷新</p>';return;}pickHot();renderHot();renderSide();render();saveSnap();if(navBack())restoreHome();}
function renderSide(){{const u=document.getElementById('under');if(popEl&&u&&tagsEl&&tagsEl.contains(popEl)){popEl.classList.remove('inrow');u.appendChild(popEl);}}const groups=GROUPS.slice().sort((a,b)=>{const A=lang==='zh'?a.k:a.en;const B=lang==='zh'?b.k:b.en;const la=tagLen(A),lb=tagLen(B);if(la!==lb)return la-lb;return A.localeCompare(B);});sideEl.innerHTML=groups.map(g=>`<button data-c="${g.id}" class="${selected.has(g.id)?'on':''}">${groupLabel(g)}</button>`).join('');sideEl.onclick=e=>{const b=e.target.closest('button');if(!b)return;const id=b.dataset.c;if(selected.has(id))selected.clear();else{selected.clear();selected.add(id);}tags.clear();shown=80;renderSide();render();};if(!tagsEl)return;tagsEl.innerHTML=sortedTags().map(([zh,en])=>{let lab=zh;if(lang!=='zh'){lab=(en&&!hasHan(en))?en:((TAG_EN[zh]&&!hasHan(TAG_EN[zh]))?TAG_EN[zh]:'');if(!lab)return '';}return `<button data-t="${zh}" class="${tags.has(zh)?'on':''}">${lab}</button>`;}).join('');tagsEl.onclick=e=>{const b=e.target.closest('button');if(!b)return;const k=b.dataset.t;if(tags.has(k))tags.delete(k);else tags.add(k);if(k==='免费')tags.delete('收费');if(k==='收费')tags.delete('免费');shown=80;renderSide();render();};sortLangChips();watchChips(sideEl);watchChips(tagsEl);}
function card(x){const title=showName(x);const desc=showDesc(x);const href=isHttp(x.url)?x.url:('guide.html?n='+encodeURIComponent(x.name||''));return `<div class="card" data-n="${esc(x.name||'')}" role="button" tabindex="0"><div class="row"><div class="av">${iconTag(x.url,title)}</div><div><h3>${esc(title)}</h3><p>${esc(desc)}</p></div></div></div>`;}
function render(){const q=(qEl.value||'').trim().toLowerCase();const s=t();const key=[...selected].join(',')+'|'+[...tags].join(',')+'|'+q;if(key!==lastKey){shown=80;lastKey=key;}if(hotBlock)hotBlock.style.display=q?'none':'block';if(listTitle)listTitle.textContent=s.all;if(popEl){popEl.hidden=false;popEl.classList.remove('cover');}var under=document.getElementById('under');if(under)under.classList.remove('open');filtered=tools.filter(x=>{const hit=!q||[x.name,x.desc,x.desc_en||'',x.cat,x.how||'',x.url||''].join(' ').toLowerCase().includes(q);return hit&&(q||(matchGroup(x)&&matchTag(x)));});listEl.innerHTML=filtered.slice(0,shown).map(card).join('')||`<p class="count">${s.empty}</p>`;}
function onScroll(){if(shown>=filtered.length)return;const top=scroller===window?window.scrollY:scroller.scrollTop;const h=scroller===window?window.innerHeight:scroller.clientHeight;const sh=scroller===window?document.body.offsetHeight:scroller.scrollHeight;if(h+top>sh-240){const from=shown;shown+=80;listEl.insertAdjacentHTML('beforeend',filtered.slice(from,shown).map(card).join(''));}}
scroller.addEventListener('scroll',onScroll,{passive:true});
function goTop(){if(scroller===window)window.scrollTo(0,0);else scroller.scrollTo(0,0);}
if(topBtn)topBtn.onclick=goTop;
document.getElementById('brand').onclick=goTop;
sf.addEventListener('submit',e=>{e.preventDefault();shown=80;render();qEl.blur();goTop();});
qEl.addEventListener('input',()=>{shown=80;render();});
window.setAidLang=function(code){
  lang=code||'zh';
  try{localStorage.setItem('lang',lang);localStorage.setItem('yx_lang',lang);localStorage.setItem('aid_tl',lang)}catch(e){}
  applyChrome();renderSide();renderHot();render();
  if(typeof aidTranslate==='function') aidTranslate();
  document.querySelectorAll('a.chip').forEach(function(a){var base=a.getAttribute('href').split('?')[0];a.setAttribute('href',base+'?lang='+encodeURIComponent(lang));});
  var bar=document.getElementById('langBar');
  if(bar)[...bar.querySelectorAll('button[data-l]')].forEach(function(x){x.classList.toggle('on',x.dataset.l===lang)});
};
(function wireLang(){
  var bar=document.getElementById('langBar');
  if(!langBtn||!bar)return;
  var LABELS={zh:'中文',en:'EN',km:'ខ្មែរ',th:'ไทย',vi:'VI',id:'ID',lo:'ລາວ',my:'MY',ms:'MS',hi:'HI',si:'SI',ta:'TA',ja:'日本語',ko:'한국어',es:'ES'};
  var codes=(window.I18N&&window.I18N.supported)||['zh','en','km','th','vi','ja','ko','es'];
  bar.innerHTML=codes.map(function(c){return '<button type="button" data-l="'+c+'" class="'+(c===lang?'on':'')+'">'+(LABELS[c]||c.toUpperCase())+'</button>';}).join('');
  langBtn.onclick=function(e){e.preventDefault();e.stopPropagation();bar.classList.toggle('show');};
  bar.onclick=function(e){
    var b=e.target.closest('button[data-l]');
    if(!b)return;
    e.stopPropagation();
    var code=b.dataset.l;
    if(window.I18N&&window.I18N.set){window.I18N.set(code);}
    else {window.setAidLang(code);}
    bar.classList.remove('show');
  };
  document.addEventListener('click',function(){bar.classList.remove('show');});
  document.querySelectorAll('a.chip').forEach(function(a){var base=a.getAttribute('href').split('?')[0];a.setAttribute('href',base+'?lang='+encodeURIComponent(lang));});
})();
function byName(n){return tools.find(x=>x.name===n)||hotList.find(x=>x.name===n);}
function detailHtml(x){const zh=lang==='zh';const desc=showDesc(x);const how=zh?(x.how||''):(x.how_en||'');const open=isHttp(x.url);const local=!open&&/^\.?\/?[\w-]+\.html(\?|#|$)/.test(x.url||'');return `<div class="detail"><p class="d-desc">${esc(desc)}</p>${how?`<p class="d-how">${esc(how)}</p>`:''}${open?`<p class="d-url">${esc(x.url)}</p><a class="d-go" href="${esc(x.url)}" rel="noopener noreferrer">${esc((window.I18N&&I18N.t('open'))||'Open')}</a>`:''}${local?`<a class="d-go" href="${esc(x.url)}">${esc((window.I18N&&I18N.t('open'))||'Open')}</a>`:''}</div>`;}
/* v283: expanded detail must not end up hidden behind the fixed #tabbar */
function keepVis(d){try{if(!d)return;const r=d.getBoundingClientRect();const tb=document.getElementById('tabbar');const sc=document.getElementById('scroll');const lim=Math.min(tb?tb.getBoundingClientRect().top:innerHeight,sc?sc.getBoundingClientRect().bottom:innerHeight)-8;if(r.bottom<=lim)return;const dy=Math.min(r.bottom-lim,r.top-70);if(dy<=0)return;(sc&&sc.scrollHeight>sc.clientHeight?sc:window).scrollBy({top:dy,behavior:'smooth'});}catch(e){}}
function closeDetails(){document.querySelectorAll('.detail').forEach(d=>d.remove());document.querySelectorAll('.card.open,#hot li.open').forEach(c=>c.classList.remove('open'));}
listEl.addEventListener('click',e=>{if(e.target.closest('.detail'))return;const c=e.target.closest('.card');if(!c)return;e.preventDefault();const was=c.classList.contains('open');closeDetails();if(was)return;const x=byName(c.dataset.n);if(!x)return;c.classList.add('open');const cards=[...listEl.querySelectorAll('.card')];const i=cards.indexOf(c);const cols=getComputedStyle(listEl).gridTemplateColumns.split(' ').length||1;const last=cards[Math.min(cards.length-1,i-(i%cols)+cols-1)]||c;last.insertAdjacentHTML('afterend',detailHtml(x));keepVis(last.nextElementSibling);});
hotEl.addEventListener('click',e=>{if(e.target.closest('.detail'))return;const li=e.target.closest('li');if(!li)return;e.preventDefault();const was=li.classList.contains('open');closeDetails();if(was)return;const x=byName(li.dataset.n);if(!x)return;li.classList.add('open');li.insertAdjacentHTML('beforeend',detailHtml(x));keepVis(li.querySelector('.detail'));});
(function resultsBelow(){const under=document.getElementById('under');if(!popEl||!under)return;function put(where){if(where==='side'){sideEl.insertAdjacentElement('afterend',popEl);}else{under.appendChild(popEl);}}sideEl.addEventListener('click',e=>{if(!e.target.closest('button'))return;setTimeout(()=>put(selected.size?'side':'home'),0);});if(tagsEl)tagsEl.addEventListener('click',e=>{const b0=e.target.closest('button');if(!b0)return;const k=b0.dataset.t;setTimeout(()=>{if(!tags.size){put('home');return;}const b=[...tagsEl.querySelectorAll('button')].find(x=>x.dataset.t===k&&x.classList.contains('on'))||tagsEl.querySelector('button.on');if(!b){put('home');return;}const top=b.offsetTop;let last=b;for(let n=b.nextElementSibling;n;n=n.nextElementSibling){if(n.tagName!=='BUTTON'||n.offsetTop!==top)break;last=n;}popEl.classList.add('inrow');last.insertAdjacentElement('afterend',popEl);},0);});})();
/* v284: external links open in the same tab; on Back restore category/tags/search/loaded count/expanded card/scroll (bfcache keeps it anyway; this covers non-bfcache reloads) */
const HS='aid_home_state_v1';
function navBack(){try{const n=performance.getEntriesByType('navigation')[0];return !!n&&n.type==='back_forward';}catch(e){return false;}}
function openInfo(){const c=listEl.querySelector('.card.open');if(c)return {w:'list',n:c.dataset.n};const l=hotEl.querySelector('li.open');if(l)return {w:'hot',n:l.dataset.n};return null;}
function saveHome(){try{if(!tools.length)return;const sc=document.getElementById('scroll');sessionStorage.setItem(HS,JSON.stringify({sel:[...selected],tags:[...tags],q:qEl.value||'',shown:shown,st:sc?sc.scrollTop:window.scrollY,open:openInfo(),t:Date.now()}));}catch(e){}}
window.addEventListener('pagehide',saveHome);
document.addEventListener('visibilitychange',()=>{if(document.hidden)saveHome();});
document.addEventListener('click',e=>{if(e.target.closest&&e.target.closest('a[href]'))saveHome();},true);
function restoreHome(){let o=null;try{o=JSON.parse(sessionStorage.getItem(HS)||'null');}catch(e){}if(!o)return;
  (o.sel||[]).forEach(id=>{const b=sideEl.querySelector('button[data-c="'+id+'"]');if(b&&!b.classList.contains('on'))b.click();});
  (o.tags||[]).forEach(k=>{const b=tagsEl&&[...tagsEl.querySelectorAll('button')].find(x=>x.dataset.t===k);if(b&&!b.classList.contains('on'))b.click();});
  if(o.q){qEl.value=o.q;render();}
  setTimeout(()=>{
    if(o.shown>shown&&filtered.length>shown){const n=Math.min(o.shown,filtered.length);listEl.insertAdjacentHTML('beforeend',filtered.slice(shown,n).map(card).join(''));shown=n;}
    if(o.open){const box=o.open.w==='hot'?hotEl:listEl;const el=[...box.querySelectorAll(o.open.w==='hot'?'li':'.card')].find(x=>x.dataset.n===o.open.n);if(el)el.click();}
    const sc=document.getElementById('scroll');if(sc)sc.scrollTop=o.st||0;else window.scrollTo(0,o.st||0);
  },60);
}
load();
