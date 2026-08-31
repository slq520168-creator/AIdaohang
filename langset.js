(function(){
  var ok={zh:1,en:1,ja:1,ko:1,hi:1,th:1,vi:1,id:1,ms:1,km:1,lo:1,my:1,tl:1,ru:1,uk:1,de:1,fr:1,es:1,pt:1,it:1,nl:1,pl:1,tr:1,ar:1};
  var q=new URLSearchParams(location.search||'');
  var l=q.get('lang');
  if(l==='zh-CN') l='zh';
  if(ok[l]){
    try{localStorage.setItem('lang',l)}catch(e){}
  }
})();
