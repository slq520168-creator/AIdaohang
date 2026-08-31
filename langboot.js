(function(){
  var ok={zh:1,en:1};
  var u=new URL(location.href);
  var q=u.searchParams.get('lang');
  if(q==='zh-CN') q='zh';
  var stored=null;
  try{stored=localStorage.getItem('lang')}catch(e){}
  var cur=ok[q]?q:(ok[stored]?stored:'zh');
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
