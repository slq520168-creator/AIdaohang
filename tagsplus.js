(function(){
  if(typeof TAGS==='undefined') return;
  [['问卷','Survey'],['二手','Used'],['跑腿','Errand'],['维修','Repair'],['美容','Salon'],['矩阵','Matrix'],['转发','Repost'],['定时','Schedule'],['教程','Guide'],['Comfy','Comfy'],['纹身','Tattoo'],['舌钉','Pierce'],['短链','Short'],['飞机','Telegram'],['频道','Channel'],['医疗','Health'],['房产','Housing'],['酒店','Hotels'],['理财','Finance'],['保险','Insurance'],['物流','Shipping'],['会计','Accounting'],['汽车','Auto'],['建筑','Build'],['科学','Science'],['天气','Weather'],['地图','Maps'],['支付','Pay'],['税务','Tax'],['体育','Sports'],['时尚','Fashion'],['家居','Home'],['摄影','Photo'],['会议','Meet'],['日历','Calendar'],['存储','Storage'],['电子书','Ebook'],['播客','Podcast'],['签名','Sign'],['调查','Polls'],['统计','Stats'],['农业','Farm'],['能源','Energy'],['制造','Make'],['航空','Aviation'],['海事','Marine'],['租车','Car hire'],['电影','Movies'],['群发','Blast'],['多开','Multi'],['群控','Control'],['云手机','Cloud'],['指纹','Fingerprint'],['外卖','Delivery'],['翻译','Translate'],['兼职','Gigs'],['手机','Phone'],['电脑','PC'],['代码','Code'],['部署','Deploy'],['打包','Pack']].forEach(function(p){
    if(!TAGS.some(function(t){return t[0]===p[0]})) TAGS.push(p);
    if(typeof TAG_EN!=='undefined') TAG_EN[p[0]]=p[1];
  });
})();
