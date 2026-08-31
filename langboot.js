(function(){
  var ok={zh:1,en:1};
  var u=new URL(location.href);
  var q=u.searchParams.get('lang');
  if(q==='zh-CN') q='zh';
  var stored=null, tl=null;
  try{stored=localStorage.getItem('lang'); tl=localStorage.getItem('aid_tl');}catch(e){}
  var cur='zh';
  if(ok[q]) cur=q;
  else if(tl==='en'||stored==='en'&&tl==='en') cur='en';
  else cur='zh';
  try{localStorage.setItem('lang',cur); if(!tl) localStorage.setItem('aid_tl',cur);}catch(e){}
  var _get=Storage.prototype.getItem;
  var _set=Storage.prototype.setItem;
  Storage.prototype.getItem=function(k){
    if(k==='lang') return cur;
    return _get.call(this,k);
  };
  Storage.prototype.setItem=function(k,v){
    if(k==='lang'){
      cur=ok[v]?v:'zh';
      return _set.call(this,k,cur);
    }
    return _set.call(this,k,v);
  };
})();
