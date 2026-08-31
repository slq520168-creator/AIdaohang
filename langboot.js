(function(){
  var ok={zh:1,en:1,ja:1,ko:1,hi:1,th:1,vi:1,id:1,ms:1,km:1,lo:1,my:1,tl:1,ru:1,uk:1,de:1,fr:1,es:1,pt:1,it:1,nl:1,pl:1,tr:1,ar:1};
  var u=new URL(location.href);
  var q=u.searchParams.get('lang');
  if(q==='zh-CN') q='zh';
  var cur=ok[q]?q:(ok[localStorage.getItem('lang')]?localStorage.getItem('lang'):'en');
  var _get=Storage.prototype.getItem;
  var _set=Storage.prototype.setItem;
  Storage.prototype.getItem=function(k){
    if(k==='lang') return cur;
    return _get.call(this,k);
  };
  Storage.prototype.setItem=function(k,v){
    if(k==='lang'){
      cur=ok[v]?v:'en';
      var n=new URL(location.href);
      n.searchParams.set('lang',cur);
      history.replaceState(null,'',n.pathname+n.search+n.hash);
      return _set.call(this,k,cur);
    }
    return _set.call(this,k,v);
  };
  if(!ok[q]){
    u.searchParams.set('lang',cur);
    history.replaceState(null,'',u.pathname+u.search+u.hash);
  }
})();
