(function(){
  var ok={zh:1,en:1,ja:1,ko:1,hi:1,th:1,vi:1,id:1,ms:1,km:1,lo:1,my:1,tl:1,ru:1,uk:1,de:1,fr:1,es:1,pt:1,it:1,nl:1,pl:1,tr:1,ar:1};
  var q=new URLSearchParams(location.search||'').get('lang');
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
