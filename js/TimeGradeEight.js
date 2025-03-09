console.groupCollapsed("\n%c  %c晚修时钟 Evening self-study clock", "background:url('./favicon.ico') no-repeat;padding:32px;", "font:bold 36px sans-serif;color:#3a9;");
console.log("\n项目仓库：https://gitee.com/txecyhy/txec-eveningself-studyclock\n作者QQ：3586638355\n\n");
console.groupEnd();
/* 
 * 适用于塘厦第二初级中学的晚修科目列表
 */

let specialDate = {
  gone22: parseInt((Date.now() - new Date(2022, 5, 9)) / 864E5),
  cee24: parseInt((new Date(2024, 5, 8) - Date.now()) / 864E5),
}

exams["2024-10-14"] = {
  type: "段考复习",
  //mainSlogan: `${specialDate.cee24}天后 峰顶相会`,    这里可选期中、期末考试
  mainSlogan: `认真复习，认真对待初二第一次段考！`,
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
  mainSlogan: `请把你的作业写完`,
  rollSlogan: ["加油！"],
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
  mainSlogan: `在每个科目时间内完成每个科目的作业`,
  rollSlogan: ["加油！"],
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
  mainSlogan: `遇见二初，遇见美好！`,
  rollSlogan: ["加油! "],
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
  mainSlogan: `认真对待每一次作业!`,
  rollSlogan: ["加油!"],
  schedule() {
    $("生物", today.date, "18:50", "19:20");
    $("数学", today.date, "19:20", "19:55");
    $("语文", today.date, "19:55", "20:20");
    $("英语", today.date, "20:30", "21:00");
    $("物理", today.date, "21:00", "21:30");
  }
};
exams[252] = {
  type: "周五晚修",
  author: "二初",
  origin: "TXEC",
  Mentor:'ZP',
  mainSlogan: `学习新思想，争做新青年！`,
  rollSlogan: ["加油!"],
  schedule() {
    $("自习", today.date, "18:50", "19:10");
    $("数学", today.date, "19:10", "19:55");
    $("地生复习", today.date, "19:55", "20:20");
    $("双地单生反馈", today.date, "20:30", "21:30");
  }
};
exams[263] = {
  type: "周六自习",
  author: "二初",
  origin: "TXEC",
  Mentor:'ZP',
  mainSlogan: `认真自习!`,
  rollSlogan: ["加油!"],
  schedule() {
    $("语文", today.date, "7:10", "7:50");
    $("数学", today.date, "7:50", "8:30");
    $("英语", today.date, "8:40", "9:10");
    $("物理", today.date, "9:10", "9:30");
  }
};
exams[261] = {
  type: "单周自主反馈",
  author: "二初",
  origin: "TXEC",
  Mentor:'ZP',
  mainSlogan: `文明二初, 从你我做起!`,
  rollSlogan: ["加油!"],
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
  mainSlogan: `文明二初, 从你我做起!`,
  rollSlogan: ["加油!"],
  schedule() {
    $("数学", today.date, "18:30", "19:30");
    $("物理", today.date, "19:30", "20:20");
    $("英语", today.date, "20:30", "21:30");
  }
};