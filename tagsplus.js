(function(){
  if(typeof TAGS==='undefined') return;
  [['问卷','Survey'],['二手','Used'],['跑腿','Errand'],['维修','Repair'],['美容','Salon'],['矩阵','Matrix'],['转发','Repost'],['定时','Schedule'],['教程','Guide'],['Comfy','Comfy']].forEach(function(p){
    if(!TAGS.some(function(t){return t[0]===p[0]})) TAGS.push(p);
    if(typeof TAG_EN!=='undefined') TAG_EN[p[0]]=p[1];
  });
})();
