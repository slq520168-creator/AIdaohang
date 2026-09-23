(function(){
  var ok={zh:1,en:1,ja:1,ko:1,hi:1,th:1,vi:1,id:1,ms:1,km:1,lo:1,my:1,si:1,ta:1,es:1,tl:1};
  var q=new URLSearchParams(location.search||'').get('lang');
  if(q==='zh-CN') q='zh';
  if(q==='tl') q='en';
  var stored=null;
  try{stored=localStorage.getItem('yx_lang')||localStorage.getItem('lang')}catch(e){}
  var cur=ok[q]?q:(ok[stored]?stored:'zh');
  try{localStorage.setItem('lang',cur);localStorage.setItem('yx_lang',cur)}catch(e){}
  var _get=Storage.prototype.getItem;
  var _set=Storage.prototype.setItem;
  Storage.prototype.getItem=function(k){
    if(k==='lang'||k==='yx_lang') return cur;
    return _get.call(this,k);
  };
  Storage.prototype.setItem=function(k,v){
    if(k==='lang'||k==='yx_lang'){
      cur=ok[v]?v:'zh';
      _set.call(this,'lang',cur);
      return _set.call(this,'yx_lang',cur);
    }
    return _set.call(this,k,v);
  };
})();
