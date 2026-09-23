(function(){
  function block(e){if(e.touches&&e.touches.length>1){e.preventDefault();}}
  document.addEventListener('gesturestart',function(e){e.preventDefault();},{passive:false});
  document.addEventListener('gesturechange',function(e){e.preventDefault();},{passive:false});
  document.addEventListener('gestureend',function(e){e.preventDefault();},{passive:false});
  document.addEventListener('touchmove',block,{passive:false});
  document.addEventListener('wheel',function(e){if(e.ctrlKey)e.preventDefault();},{passive:false});
  var last=0;
  document.addEventListener('touchend',function(e){
    var t=Date.now();
    if(t-last<320){e.preventDefault();}
    last=t;
  },{passive:false});
  try{
    var m=document.querySelector('meta[name=viewport]');
    if(m)m.setAttribute('content','width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover');
  }catch(e){}
})();
