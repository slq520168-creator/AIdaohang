(function(){
  var ok={zh:1,en:1,ja:1,ko:1,hi:1,th:1,vi:1,id:1,ms:1,km:1,lo:1,my:1,si:1,ta:1,es:1};
  var q=new URLSearchParams(location.search||'').get('lang');
  if(q==='zh-CN') q='zh';
  if(q==='tl') q='en';
  if(!ok[q]) return;
  try{localStorage.setItem('yx_lang',q);localStorage.setItem('lang',q);}catch(e){}
})();
