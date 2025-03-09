console.groupCollapsed("\n%c  %c晚修时钟 Evening self-study clock", "background:url('./favicon.ico') no-repeat;padding:32px;", "font:bold 36px sans-serif;color:#3a9;");
console.log("\n项目仓库：https://gitee.com/h2ocl/txec_-night-time-clock-system\n作者QQ：962613283\n\n");
console.groupEnd();
/* 
 * 适用于第二初级中学的晚修科目列表
 */

let specialDate = {
  gone22: parseInt((Date.now() - new Date(2022, 5, 9)) / 864E5),
  cee24: parseInt((new Date(2024, 5, 8) - Date.now()) / 864E5),
}

exams["2024-10-13"] = {
  type: "晚修时间",
  // mainSlogan: `${specialDate.cee22}天后 峰顶相会`,
  mainSlogan: `遇见二初，遇见美好`,
  schedule() {
    $("晚安", today.date, "22:30", "23:30");
  }
};

exams[24] = {
  type: "周一晚修",
  author: "二初",
  origin: "806YHY Mentor: ZP",
  Mentor:'ZP',
  mainSlogan: `QWQ`,
  rollSlogan: ["sin（π+α）=-sinα"],
  earlyAdmit: 2,
  schedule() {
    $("语字", today.date, "18:38", "19:00");
    $("语文", today.date, "19:00", "19:30");
    $("数学", today.date, "19:30", "20:20");
    $("英语", today.date, "20:30", "21:00");
    $("政史</br>地生", today.date, "21:00", "21:20");
    }
  }
exams[241] = {
  type: "周二晚修",
  author: "二初",
  origin: "806YHY Mentor: ZP",
  Mentor:'ZP',
  mainSlogan: `)#)"\-_=()`,
  rollSlogan: ["cos（π+α）=-cosα"],
  schedule() {
    $("新闻", today.date, "18:38", "19:00");
    $("语文", today.date, "19:00", "19:30");
    $("数学", today.date, "19:30", "20:20");
    $("英语", today.date, "20:30", "21:00");
    $("政史</br>地生", today.date, "21:00", "21:20");
  }
};
exams[242] = {
  type: "周三晚修",
  author: "二初",
  origin: "806YHY Mentor: ZP",
  Mentor:'ZP',
  rollSlogan: ["tan（π+α）=tanα"],
  schedule() {
    $("英字", today.date, "18:38", "19:00");
    $("语文", today.date, "19:00", "19:30");
    $("数学", today.date, "19:30", "20:20");
    $("英语", today.date, "20:30", "21:00");
    $("政史</br>地生", today.date, "21:00", "21:20");
  }
};
exams[251] = {
  type: "单周周四晚修",
  author: "二初",
  origin: "806YHY Mentor: ZP",
  Mentor:'ZP',
  mainSlogan: `)#)"\-_=()`,
  rollSlogan: ["cot（π+α）=cotα"],
  schedule() {
    $("语文</br>阅读", today.date, "18:38", "19:00");
    $("语文", today.date, "19:00", "19:30");
    $("数学", today.date, "19:30", "20:20");
    $("英语", today.date, "20:30", "21:00");
    $("政史</br>地生", today.date, "21:00", "21:20");
  }
};
exams[252] = {
  type: "双周周四晚修",
  author: "二初",
  origin: "806YHY Mentor: ZP",
  Mentor:'ZP',
  mainSlogan: `)#)"\-_=()`,
  rollSlogan: ["cot（π+α）=cotα"],
  schedule() {
    $("英语</br>阅读", today.date, "18:38", "19:00");
    $("语文", today.date, "19:00", "19:30");
    $("数学", today.date, "19:30", "20:20");
    $("英语", today.date, "20:30", "21:00");
    $("政史</br>地生", today.date, "21:00", "21:20");
  }
};
exams[261] = {
  type: "单周自主反馈",
  author: "二初",
  origin: "806YHY Mentor: ZP",
  Mentor:'ZP',
  rollSlogan: ["sec（π+α）=-secα"],
  schedule() {
    $("数学", today.date, "18:38", "19:55");
    $("历史</br>道法", today.date, "19:55", "20:20");
    $("语文", today.date, "20:30", "21:20");
  }
};
exams[262] = {
  type: "双周自主反馈",
  author: "二初",
  origin: "806YHY Mentor: ZP",
  Mentor:'ZP',
  rollSlogan: ["csc（π+α）=-cscα"],
  schedule() {
    $("数学", today.date, "18:38", "19:55");
    $("生地", today.date, "19:55", "20:20");
    $("英语", today.date, "20:30", "21:20");
  }
};
