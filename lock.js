(function(){
  var w=localStorage.getItem('aid_welcome')||sessionStorage.getItem('aid_welcome');
  if(w==='1'){
    localStorage.setItem('aid_welcome','1');
    sessionStorage.setItem('aid_welcome','1');
  }else{
    location.replace('index.html');
    return;
  }
  var KEY='aid_ok';
  var CODE='520168';
  if(localStorage.getItem(KEY)==='1'||sessionStorage.getItem(KEY)==='1'){
    localStorage.setItem(KEY,'1');
    sessionStorage.setItem(KEY,'1');
    return;
  }
  var wrap=document.createElement('div');
  wrap.id='gate';
  wrap.innerHTML='<div class="gatebox"><p class="gatet">请输入验证码</p><input id="gateIn" type="password" inputmode="numeric" autocomplete="off" /><button type="button" id="gateGo">确认</button><p id="gateErr">验证码不对</p></div>';
  document.documentElement.appendChild(wrap);
  document.documentElement.style.overflow='hidden';
  var inp=document.getElementById('gateIn');
  var err=document.getElementById('gateErr');
  function ok(){
    if((inp.value||'').trim()===CODE){
      localStorage.setItem(KEY,'1');
      sessionStorage.setItem(KEY,'1');
      wrap.remove();
      document.documentElement.style.overflow='';
    }else{
      err.style.visibility='visible';
      inp.value='';
      inp.focus();
    }
  }
  document.getElementById('gateGo').onclick=ok;
  inp.addEventListener('keydown',function(e){if(e.key==='Enter')ok()});
  setTimeout(function(){inp.focus()},200);
})();
