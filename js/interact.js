/* 
 * 页面交互
 */

// 全屏
function fullscreen() {
  try {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      eleFullscreen.setAttribute("class", "fa-solid fa-expand");
      eleFullscreen.setAttribute("data-sub", "全屏");
    } else {
      document.documentElement.requestFullscreen();
      eleFullscreen.setAttribute("class", "fa-solid fa-compress");
      eleFullscreen.setAttribute("data-sub", "退出");
    }
  } catch (e) { console.warn(send("操作已更改</span>\n") + e); }
}

function sendFeatureRemoved(shield) {
  send(`哥们就写点代码，别给哥们找麻烦。
  <span class="shield">${shield}</span>
  <p class="dim">你说你玩心重，想改数字时钟大标语，要是真对网页感兴趣，别图一时修改爽快，建议来维护项目，看看能干几年。</p>
  `);
}