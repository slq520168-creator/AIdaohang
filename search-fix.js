(function(){
  const q = document.getElementById('q');
  const results = document.getElementById('searchResults');
  const hot = document.getElementById('hotBlock');
  const main = document.querySelector('.block:not(#hotBlock)');
  if(!q || !results) return;
  function place(){
    const has = (q.value||'').trim();
    if(has){
      if(hot) hot.style.display='none';
      if(main) main.style.display='none';
      results.style.display='';
    } else {
      if(hot) hot.style.display='';
      if(main) main.style.display='';
      results.style.display='none';
      results.innerHTML='';
    }
  }
  q.addEventListener('input', place);
  document.getElementById('sf')&&document.getElementById('sf').addEventListener('submit', e=>{e.preventDefault(); place();});
  place();
})();
