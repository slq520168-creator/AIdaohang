(function(){
  var map={};
  if(typeof TAGS!=='undefined'){
    TAGS.forEach(function(p){map[p[0]]=p[1]});
  }
  window.showName=function(x){
    var host='';
    try{host=new URL(x.url).hostname.replace(/^www\./,'')}catch(e){}
    if(lang==='en'){
      if(x.name_en&&!/[\u3400-\u9FFF]/.test(x.name_en)) return x.name_en;
      if(x.name&&!/[\u3400-\u9FFF]/.test(x.name)) return x.name;
      return host||'Tool';
    }
    return x.name||host||'';
  };
  window.showDesc=function(x){
    var host='';
    try{host=new URL(x.url).hostname.replace(/^www\./,'')}catch(e){}
    if(lang!=='en') return x.desc||x.cat||host||'';
    if(x.desc_en&&!/[\u3400-\u9FFF]/.test(x.desc_en)) return x.desc_en;
    var cat=map[x.cat]||map[x.pack]||'';
    if(cat&&host) return cat+' \u00b7 '+host;
    return cat||host||'Tool';
  };
})();
