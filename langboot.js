(function(){
  var ok={en:1,zh:1,km:1,th:1,vi:1,ja:1,ko:1,id:1,es:1,fr:1,pt:1,de:1,ru:1,ar:1};
  var u=new URL(location.href);
  var q=u.searchParams.get('lang');
  var cur=ok[q]?q:'en';
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
      return;
    }
    return _set.call(this,k,v);
  };
  if(!ok[q]){
    u.searchParams.set('lang','en');
    history.replaceState(null,'',u.pathname+u.search+u.hash);
  }
})();
