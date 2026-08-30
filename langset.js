(function(){
  var q=new URLSearchParams(location.search||'');
  var l=q.get('lang');
  if(l==='zh-CN') l='zh';
  if(l==='zh'||l==='en'){
    try{localStorage.setItem('lang',l)}catch(e){}
  }
})();
