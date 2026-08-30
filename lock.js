(function(){
  var q=new URLSearchParams(location.search||'');
  if(q.get('home')==='1'){
    try{
      localStorage.setItem('aid_welcome','1');
      sessionStorage.setItem('aid_welcome','1');
      localStorage.setItem('aid_ok','1');
      sessionStorage.setItem('aid_ok','1');
    }catch(e){}
  }
  var w=localStorage.getItem('aid_welcome')||sessionStorage.getItem('aid_welcome');
  if(w==='1'){
    try{
      localStorage.setItem('aid_welcome','1');
      sessionStorage.setItem('aid_welcome','1');
    }catch(e){}
  }else{
    location.replace('index.html');
    return;
  }
  var KEY='aid_ok';
  var CODE='520168';
  if(localStorage.getItem(KEY)==='1'||sessionStorage.getItem(KEY)==='1'){
    try{
      localStorage.setItem(KEY,'1');
      sessionStorage.setItem(KEY,'1');
    }catch(e){}
    return;
  }
  var zh=(localStorage.getItem('lang')||'zh')==='zh';
  var wrap=document.createElement('div');
  wrap.id='gate';
  wrap.innerHTML=zh
    ?'<div class="gatebox"><p class="gatet">请输入验证码</p><input id="gateIn" type="password" inputmode="numeric" autocomplete="off" /><button type="button" id="gateGo">确认</button><p id="gateErr">验证码不对</p></div>'
    :'<div class="gatebox"><p class="gatet">Enter access code</p><input id="gateIn" type="password" inputmode="numeric" autocomplete="off" /><button type="button" id="gateGo">Confirm</button><p id="gateErr">Wrong code</p></div>';
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
