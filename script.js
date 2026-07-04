(function(){
  var pre = document.getElementById('preloader');
  var landing = document.querySelector('.landing');
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function revealHero(){
    if (landing) landing.classList.add('in');
  }

  if (pre){
    if (reduceMotion){
      pre.remove();
      document.body.classList.remove('loading');
      revealHero();
    } else {
      requestAnimationFrame(function(){ pre.classList.add('show'); });
      setTimeout(function(){
        pre.classList.add('hide');
        document.body.classList.remove('loading');
        revealHero();
        setTimeout(function(){ pre.remove(); }, 800);
      }, 1150);
    }
  } else {
    revealHero();
  }
})();
(function(){
  // ---- star field ----
  var starsWrap = document.getElementById('stars');
  function buildStars(){
    starsWrap.innerHTML = '';
    var h = Math.max(document.body.scrollHeight, window.innerHeight);
    starsWrap.style.height = h + 'px';
    var count = Math.floor(h / 9);
    for (var i = 0; i < count; i++){
      var s = document.createElement('div');
      s.className = 'star';
      var size = (Math.random() * 2 + 1).toFixed(1);
      s.style.width = size + 'px';
      s.style.height = size + 'px';
      s.style.left = (Math.random() * 100) + '%';
      s.style.top = (Math.random() * h) + 'px';

      var minOp = (Math.random() * 0.15 + 0.06).toFixed(2);
      var maxOp = (Math.random() * 0.45 + 0.35).toFixed(2);
      var tdur = (Math.random() * 3 + 2.5).toFixed(1) + 's';
      var tdelay = (Math.random() * -6).toFixed(1) + 's';
      var ddur = (Math.random() * 8 + 7).toFixed(1) + 's';
      var ddelay = (Math.random() * -14).toFixed(1) + 's';
      var dx = (Math.random() * 50 - 25).toFixed(1) + 'px';
      var dy = (Math.random() * 70 - 35).toFixed(1) + 'px';

      s.style.setProperty('--minop', minOp);
      s.style.setProperty('--maxop', maxOp);
      s.style.setProperty('--tdur', tdur);
      s.style.setProperty('--tdelay', tdelay);
      s.style.setProperty('--ddur', ddur);
      s.style.setProperty('--ddelay', ddelay);
      s.style.setProperty('--dx', dx);
      s.style.setProperty('--dy', dy);

      starsWrap.appendChild(s);
    }
  }
  window.addEventListener('load', buildStars);
  window.addEventListener('resize', function(){
    clearTimeout(window.__starsT);
    window.__starsT = setTimeout(buildStars, 250);
  });
  setTimeout(buildStars, 400);

  // ---- slide menu ----
  var trigger = document.getElementById('menuTrigger');
  var menu = document.getElementById('slideMenu');
  function closeMenu(){
    trigger.classList.remove('open');
    menu.classList.remove('open');
  }
  trigger.addEventListener('click', function(){
    var isOpen = menu.classList.contains('open');
    if (isOpen){ closeMenu(); } else {
      trigger.classList.add('open');
      menu.classList.add('open');
    }
  });
  document.querySelectorAll('.menu-link').forEach(function(a){
    a.addEventListener('click', closeMenu);
  });
})();