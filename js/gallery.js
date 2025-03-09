/* 
 * 背景切换
 */
const gallery = {
  校门: [["YHY", "学校大门", "24/09/28/O4GwdF", "png"]],
  校运会: [
    ["信息科组", "女生田径", "24/09/28/O4QhNC", "png"],
    ["信息科组", "典礼现场", "24/09/28/O4QFaN", "png"]
  ],
  国庆: [["YHY", "祝祖国繁荣昌盛，75岁生日快乐！", "24/10/01/O4fvLD", "png"]],
  风景: [["801lwj", "杨树雪旁", "24/10/13/ODrAEv", "png"],["YHY", "流星", "24/10/15/ODyuOs", "jpg"],["YHY", "山下风景", "24/10/15/ODy8dB", "png"]],
  图书馆: [["ZP", "大堂", "24/10/13/ODrugx", "jpg"]],
  教学楼: [["ZP", "教室1", "24/10/13/ODrIsj", "jpg"],["ZP", "教室2", "24/10/13/ODrCop", "jpg"],],
  操场: [["YHY", "操场1", "24/10/13/ODrwrU", "jpg"],["YHY", "操场2", "24/10/13/ODAMGY", "jpg"],],
};
const galleryFlated = Object.entries(gallery).flatMap(([vol, picInfos]) =>
  picInfos.map(([author, name, shortURL, extension]) => ({
    vol, author, name, url: `https://ooo.0x0.ooo/20${shortURL}.${extension}`,
  })))

function bg(vol) {
  bg.cur = getBg(vol);
  // 重新设置换壁纸定时
  clearInterval(bg.interval);
  bg.interval = setInterval(bg, 2E6);
  document.body.style.backgroundImage = `url(${bg.cur.url})`;
  return document.getElementById("bg").innerHTML = `背景: ${bg.cur.author} - ${bg.cur.name} (${bg.cur.vol})`;
}

let getBg = (vol) => {
  if (vol in gallery) {
    const [author, name, shortURL, extension] = gallery[vol][~~(Math.random() * gallery[vol].length)];
    return { vol, author, name, url: `https://ooo.0x0.ooo/20${shortURL}.${extension}` };
  }
  return galleryFlated[~~(Math.random() * galleryFlated.length)];
}

!function loadBgVolList() {
  const volList = document.getElementById("bgVolList");
  const volReversed = Object.keys(gallery).reverse();
  volReversed.forEach(volName => {
    const a = document.createElement("a");
    a.innerText = `${volName}(${gallery[volName].length})`;
    a.onclick = () => playCover(bg(volName));
    volList.appendChild(a);
  });
}();

bg(Object.keys(gallery).at(-1));
