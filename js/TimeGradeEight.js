console.groupCollapsed("\n%c  %c晚修时钟 Evening self-study clock", "background:url('./favicon.ico') no-repeat;padding:32px;", "font:bold 36px sans-serif;color:#3a9;");
console.log("\n项目仓库：https://gitee.com/txecyhy/txec-eveningself-studyclock\n作者QQ：3586638355\n\n");
console.groupEnd();
/* 
 * 适用于塘厦第二初级中学的晚修科目列表
 */

let specialDate = {
  gone22: parseInt((Date.now() - new Date(2022, 5, 9)) / 864E5),
  cee24: parseInt((new Date(2025, 5, 31) - Date.now()) / 864E5),
}

exams["2024-10-14"] = {
  type: "段考复习",
  mainSlogan: `生地中考仅剩${specialDate.cee24}天，奋起冲、全力拼！`,
  schedule() {
  $("历史", today.date, "18:30", "19:00");
  $("生物", today.date, "19:00", "19:25");     
  $("物理", today.date, "19:25", "20:20");
  $("数学", today.date, "20:30", "21:30");
  }
};

exams[24] = {
  type: "周一晚修",
  author: "二初",
  origin: "TXEC",
  Mentor:'ZP',
  mainSlogan: `生地中考仅剩${specialDate.cee24}天，奋起冲、全力拼！`,
  rollSlogan: ["你可以一无所有，但绝不能一无是处。"],
  earlyAdmit: 2,
  schedule() {
    $("地理", today.date, "18:50", "19:10");
    $("数学", today.date, "19:10", "19:55");
    $("语文", today.date, "19:55", "20:20");
    $("英语", today.date, "20:30", "21:00");
    $("物理", today.date, "21:00", "21:30");
    }
  }
exams[241] = {
  type: "周二晚修",
  author: "二初",
  origin: "TXEC",
  Mentor:'ZP',
  mainSlogan: `生地中考仅剩${specialDate.cee24}天，奋起冲、全力拼！`,
  rollSlogan: ["心态决定高度，细节决定成败。"],
  schedule() {
    $("生物", today.date, "18:50", "19:10");
    $("数学", today.date, "19:10", "19:55");
    $("语文", today.date, "19:55", "20:20");
    $("英语", today.date, "20:30", "21:00");
    $("物理", today.date, "21:00", "21:30");
  }
};
exams[242] = {
  type: "周三晚修",
  author: "二初",
  origin: "TXEC",
  Mentor:'ZP',
  mainSlogan: `生地中考仅剩${specialDate.cee24}天，奋起冲、全力拼！`,
  rollSlogan: ["此刻打盹，你将做梦；此刻学习，你将圆梦。"],
  schedule() {
    $("地理", today.date, "18:50", "19:10");
    $("数学", today.date, "19:10", "19:55");
    $("语文", today.date, "19:55", "20:20");
    $("英语", today.date, "20:30", "21:00");
    $("物理", today.date, "21:00", "21:30");
  }
};
exams[251] = {
  type: "周四晚修",
  author: "二初",
  origin: "TXEC",
  Mentor:'ZP',
  mainSlogan: `生地中考仅剩${specialDate.cee24}天，奋起冲、全力拼！`,
  rollSlogan: ["笨鸟先飞早入林，笨人勤学早成材 —— 《省世格言》"],
  schedule() {
    $("生物", today.date, "18:50", "19:10");
    $("数学", today.date, "19:10", "19:55");
    $("语文", today.date, "19:55", "20:20");
    $("英语", today.date, "20:30", "21:00");
    $("物理", today.date, "21:00", "21:30");
  }
};
exams[252] = {
  type: "周五考试",
  author: "二初",
  origin: "TXEC",
  Mentor:'ZP',
  mainSlogan: `生地中考仅剩${specialDate.cee24}天，奋起冲、全力拼！`,
  rollSlogan: ["天才是百分之一的灵感加上百分之九十九的努力。"],
  schedule() {
    $("双地单<br>生反馈", today.date, "17:00", "17:40");
  }
};
exams[261] = {
  type: "单周自主反馈",
  author: "二初",
  origin: "TXEC",
  Mentor:'ZP',
  mainSlogan: `生地中考仅剩${specialDate.cee24}天，奋起冲、全力拼！`,
  rollSlogan: ["欲穷千里目，更上一层楼。 —— 王之涣"],
  schedule() {
    $("数学", today.date, "18:30", "19:20");
    $("道法", today.date, "19:20", "19:50");
    $("历史", today.date, "19:50", "20:20");
    $("语文", today.date, "20:30", "21:30");
  }
};
exams[262] = {
  type: "双周自主反馈",
  author: "二初",
  origin: "TXEC",
  Mentor:'ZP',
  mainSlogan: `生地中考仅剩${specialDate.cee24}天，奋起冲、全力拼！`,
  rollSlogan: ["人不是因为没有信念而失败，而是因为不能把信念化成行动，并且坚持到底。 —— 戴尔·卡耐基"],
  schedule() {
    $("数学", today.date, "18:30", "19:30");
    $("物理", today.date, "19:30", "20:20");
    $("英语", today.date, "20:30", "21:30");
  }
};
exams[263] = {
  type: "纯时钟/自定义",
  author: "二初",
  origin: "TXEC",
  Mentor:'ZP',
  mainSlogan: `生地中考仅剩${specialDate.cee24}天，奋起冲、全力拼！`,
  rollSlogan: ["只有一条路不能选择——那就是放弃的路；只有一条路不能拒绝——那就是成长的路。"],
  schedule() {
  }
}