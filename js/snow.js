document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.snow-container');
  const toggle = document.querySelector('.snow-toggle');
  let snowflakes = [];
  let isSnowing = false;
  
  const canvas = document.createElement('canvas');
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  container.appendChild(canvas);
  
  const ctx = canvas.getContext('2d');
  let animationId = null;
  
  function initSnow() {
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
    
    snowflakes = [];
    for (let i = 0; i < 50; i++) {
      snowflakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.3,
        sway: Math.random() * 0.5 - 0.25
      });
    }
  }
  
  function drawSnow() {
    if (!isSnowing) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    
    snowflakes.forEach(flake => {
      ctx.beginPath();
      ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
      ctx.globalAlpha = flake.opacity;
      ctx.fill();
      
      flake.y += flake.speed;
      flake.x += flake.sway;
      
      if (flake.y > canvas.height) {
        flake.y = -10;
        flake.x = Math.random() * canvas.width;
      }
      
      if (flake.x < 0 || flake.x > canvas.width) {
        flake.sway *= -1;
      }
    });
    
    animationId = requestAnimationFrame(drawSnow);
  }
  
  function toggleSnow() {
    isSnowing = !isSnowing;
    toggle.classList.toggle('active');
    
    if (isSnowing) {
      container.style.display = 'block';
      setTimeout(() => {
        container.style.opacity = '1';
      }, 10);
      initSnow();
      drawSnow();
    } else {
      container.style.opacity = '0';
      setTimeout(() => {
        container.style.display = 'none';
        if (animationId) {
          cancelAnimationFrame(animationId);
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
      }, 500);
    }
  }
  
  toggle.addEventListener('click', toggleSnow);
  
  window.addEventListener('resize', function() {
    if (isSnowing) {
      initSnow();
    }
  });
});