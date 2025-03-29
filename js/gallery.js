/* 
 * 背景切换
 */
const gallery = {
  校门: [["YHY", "学校大门", "24/11/07/672c8701b675c", "png"]],
  校运会: [
    ["第一届", "女生田径", "24/11/07/672c84a7343d6", "png"],
    ["第一届", "典礼现场", "24/11/07/672c84a786849", "png"],
    ["第二届", "初二(五)", "24/11/29/6748f6e3380be", "jpg"],
    ["第二届", "初三(三)", "24/11/29/6748f6e66b693", "jpg"],
    ["第二届", "初三", "24/11/29/6748f6eecf867", "jpg"],
    ["第二届", "初二(六)", "24/11/29/6748f6f04e832", "jpg"],
    ["第二届", "初二(四)", "24/11/29/6748f6f05fc46", "jpg"],
    ["第二届", "初二(二)", "24/11/29/6748f6f09226c", "jpg"],
    ["第二届", "初一(三)", "24/11/29/6748f6fb9216f", "jpg"],
    ["第二届", "初一(四)", "24/11/29/6748f6fc17684", "jpg"],
    ["第二届", "初一(二)", "24/11/29/6748f6fc3f119", "jpg"],
    ["第二届", "初三(四)", "24/11/29/6748f6fca4aee", "jpg"],
    ["第二届", "初二(三)", "24/11/29/6748f6fcb22b0", "jpg"],
    ["第二届", "初三(五)", "24/11/29/6748f6fcded2f", "jpg"],
    ["第二届", "初一(五)", "24/11/29/6748f6fe68738", "jpg"],
    ["第二届", "开-彩旗队", "24/11/29/6748f70190de5", "jpg"],
    ["第二届", "开-国旗队", "24/11/29/6748f70297105", "jpg"],
    ["第二届", "开-舞龙(二)", "24/11/29/6748f70d6b80d", "jpg"],
    ["第二届", "开-龙校", "24/11/29/6748f70834c9b", "jpg"],
    ["第二届", "开-学生(一)", "24/11/29/6748f70fad6c3", "jpg"],
    ["第二届", "开-舞龙", "24/11/29/6748f715acaef", "jpg"],
    ["第二届", "初二", "24/11/29/6748f70194a73", "jpg"],
    ["第二届", "赛场精彩", "24/11/29/6748f725ad83d", "jpg"],
    ["第二届", "开-鲜花队", "24/11/29/6748f724e0109", "jpg"],
    ["第二届", "开-校旗校徽队", "24/11/29/6748f724d069d", "jpg"],
    ["第二届", "开-学生", "24/11/29/6748f724d17c4", "jpg"],
    ["第二届", "赛场精彩(三)", "24/11/29/6748f725e9f93", "jpg"],
    ["第二届", "赛场精彩(六)", "24/11/29/6748fb474b6ac", "jpg"],
    ["第二届", "赛场精彩(五)", "24/11/29/6748fb4fa784f", "jpg"],
    ["第二届", "赛场精彩(四)", "24/11/29/6748fb4fe70df", "jpg"],
    ["第二届", "初三(二)", "24/11/29/6748f6d3c08a4", "jpg"]
  ],
  国庆: [["YHY", "升旗", "24/11/07/672c84a44e76f", "png"]],
  风景: [["801lwj", "杨树雪旁", "24/11/07/672c870b8bea9", "png"],
  ["806YHY", "流星", "24/11/07/672c84a28978a", "jpg"],
  ["806YHY", "山下风景", "24/11/07/672c84a2aa1c6", "png"],
  ["806YHY", "秋天1", "24/11/07/672c8700ec5bd", "jpg"],
  ["806YHY", "秋天2", "24/12/04/674f8d78b7740", "jpg"],
  ["806YHY", "枫叶", "24/11/07/672c8706aee1b", "png"],
  ["806YHY", "人生是旷野，不是轨道", "24/11/08/672d4420e70f2", "png"],
  ["806YHY", "草原(油画)", "24/11/08/672d44207a264", "png"],
  ["806YHY", "夕阳", "24/11/08/672d4280c2db3", "png"],
  ["806YHY", "草原上的风景", "24/11/11/6731fe70f3a15", "jpg"],
  ["806YHY", "河岔", "24/11/11/6731fe7183cf0", "jpg"],
  ["806YHY", "城旁河", "24/11/11/6731fe7139597", "jpg"],
  ["806YHY", "余晖下的湖泊", "24/11/11/6731fe71d5e2b", "jpg"],
  ["806YHY", "半夏微光", "24/11/11/6731fe729a2ad", "jpg"],
  ["806YHY", "山", "24/11/07/672c87005c81f", "jpg"]],
  图书馆: [["ZP", "大堂", "24/11/07/672c84ae06844", "png"]],
  教学楼: [["ZP", "教学楼1", "24/11/07/672c84b881938", "png"],
  ["ZP", "教学楼2", "24/11/07/672c84bb9226a", "png"],],
  操场: [["YHY", "操场1", "24/11/07/672c84aae6103", "png"],
  ["YHY", "操场2", "24/11/07/672c84a9699eb", "png"],],
};
const galleryFlated = Object.entries(gallery).flatMap(([vol, picInfos]) =>
  picInfos.map(([author, name, shortURL, extension]) => ({
    vol, author, name, url: `https://pic2.imge.cc/20${shortURL}.${extension}`,
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
    return { vol, author, name, url: `https://pic2.imge.cc/20${shortURL}.${extension}` };
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
