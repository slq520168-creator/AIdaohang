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
