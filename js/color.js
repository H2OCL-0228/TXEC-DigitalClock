// 设置文字颜色
function setTextColor(color) {
    const textElements = document.querySelectorAll('#subject, #duration, #clock, #timer, #timersub, #activity');
    textElements.forEach(el => {
        el.style.color = color;
        el.style.backgroundImage = 'none';
        el.style.webkitBackgroundClip = '';
        el.style.backgroundClip = '';
    });
    localStorage.setItem('textColor', color);
    localStorage.removeItem('textGradient');
}

// 设置渐变色
function setGradientColor(color1, color2) {
    const gradient = `linear-gradient(90deg, ${color1}, ${color2})`;
    applyGradient(gradient);
}

// 应用自定义渐变色
function applyCustomGradient() {
    const color1 = document.getElementById('gradientColor1').value;
    const color2 = document.getElementById('gradientColor2').value;
    setGradientColor(color1, color2);
}

// 应用渐变色效果
function applyGradient(gradient) {
    const textElements = document.querySelectorAll('#subject, #duration, #clock, #timer, #timersub, #activity');
    
    textElements.forEach(el => {
        el.style.backgroundImage = gradient;
        el.style.webkitBackgroundClip = 'text';
        el.style.backgroundClip = 'text';
        el.style.color = 'transparent';
    });
    
    localStorage.setItem('textGradient', gradient);
    localStorage.removeItem('textColor');
}

// 初始化颜色设置
function initColor() {
    const savedColor = localStorage.getItem('textColor');
    const savedGradient = localStorage.getItem('textGradient');
    
    if(savedGradient) {
        applyGradient(savedGradient);
    } else if(savedColor) {
        setTextColor(savedColor);
    }
}

// 页面加载完成后初始化颜色
document.addEventListener('DOMContentLoaded', initColor);


// 预置渐变色方案
const presetGradients = [
  {name: '红蓝', colors: ['#ff0000', '#0000ff']},
  {name: '绿紫', colors: ['#00ff00', '#ff00ff']},
  {name: '蓝黄', colors: ['#0000ff', '#ffff00']},
  {name: '橙蓝', colors: ['#ff8800', '#0088ff']},
  {name: '紫青', colors: ['#8800ff', '#00ffff']},
  {name: '红紫', colors: ['#ff0000', '#ff00ff']},
  {name: '青绿', colors: ['#00ffff', '#00ff00']},
  {name: '金红', colors: ['#ffd700', '#ff0000']},
  {name: '海蓝', colors: ['#1e90ff', '#00bfff']},
  {name: '彩虹', colors: ['#ff0000', '#ffff00', '#00ff00']}
];

// 应用预置渐变色
function applyPresetGradient(index) {
  const gradient = presetGradients[index];
  if (gradient.colors.length === 2) {
    setGradientColor(gradient.colors[0], gradient.colors[1]);
  } else {
    // 处理多色渐变
    const gradientStr = `linear-gradient(90deg, ${gradient.colors.join(', ')})`;
    applyGradient(gradientStr);
  }
}