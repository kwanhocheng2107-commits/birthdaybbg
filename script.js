// 生日日期：请改成她生日当天的 00:00:00。
// 例子：2026 年 6 月 18 日，上海时区。
const BIRTHDAY_START_DATE = "2026-06-18T00:00:00+08:00";
const BIRTHDAY_END_DATE = "2026-06-19T00:00:00+08:00";

// 开发测试开关：
// true  = 生日没到也可以进入完整页面，方便你测试。
// false = 必须等倒计时结束后才能进入。
const DEV_UNLOCK = false;

// 全站文案集中管理：
// 后续只改这里的文字，尽量不要改 HTML 结构、CSS 动画和下方交互逻辑。
// guidance 是建议字数范围，不会显示在页面上，用来避免手机端排版太挤。
const contentData = {
  pageTitle: "给你的第1个生日宇宙",
  gate: {
    guidance: {
      titleLine: "每行 4-8 个中文字符；当前标题建议保持两行。",
      introLine: "每行 14-22 个中文字符，最多 2 行。",
      button: "6-10 个中文字符。",
    },
    eyebrow: "Birthday Universe 01",
    title: {
      firstLine: {
        beforeNumber: "给宝宝的第",
        number: "1",
        afterNumber: " 个",
      },
      secondLine: "生日宇宙",
    },
    introLines: [
      "这是一封会在生日这天打开的小小宇宙",
      "里面收藏着一些我们一起的片段。",
    ],
    countdownLabel: "生日倒计时",
    timeUnits: {
      days: "天",
      hours: "小时",
      minutes: "分",
      seconds: "秒",
    },
    status: {
      before: "距离你的生日宇宙开启还有",
      birthday: "生日宇宙已经开启。",
      after: "欢迎回来，你的生日宇宙一直都在。",
    },
    buttons: {
      locked: "宇宙正在准备中",
      devEnter: "测试进入生日宇宙",
      enter: "进入你的生日宇宙",
    },
    devNote: "DEV_UNLOCK 已开启：现在可以测试进入生日宇宙。",
  },
  hero: {
    guidance: {
      eyebrow: "英文 3-6 个单词。",
      title: "12-20 个中文字符，尽量不超过 2 行。",
      body: "40-70 个中文字符。",
    },
    eyebrow: "For My Favorite Star",
    titlePrefix: "生日快乐，",
    titleHighlight: "我最心爱的宝宝猪",
    body: "欢迎来到宝宝猪的宇宙空间，这里充满了玛卡巴卡和你的浪漫回忆。希望这份生日礼物你会喜欢~",
  },
  timeline: {
    guidance: {
      date: "建议 8-12 个字符，例如 2025.05.20。",
      title: "8-14 个中文字符。",
      body: "35-70 个中文字符。",
      photoLabel: "6-10 个中文字符。",
    },
    eyebrow: "Memory Orbit",
    title: "回忆时间线",
    items: [
      {
        date: "2025.05.22",
        photoSrc: "2025-05-22hefei.jpg",
        photoAlt: "2025.05.22 合肥回忆照片",
        photoOrientation: "landscape",
        photoWidth: 1434,
        photoHeight: 960,
        title: "去年520你幸福的笑容",
        body: "开启了我们住高级酒店的欲望，哈哈哈哈。还记得返程航班被临时取消的焦虑吗？最后我们顺利解决了呢~",
      },
      {
        date: "2025.06.18",
        photoSrc: "2025-06-18.jpg",
        photoAlt: "2025.06.18 生日回忆照片",
        photoOrientation: "portrait",
        photoWidth: 960,
        photoHeight: 1440,
        title: "去年生日的小西餐",
        body: "那个时候的我好胖哦，那段时间好像状态和心情都不太好，胡吃海喝。你也压力很大，但是也被我们坚持下来啦~",
      },
      {
        date: "2025.08.11",
        photoSrc: "2025-08-11.jpg",
        photoAlt: "2025.08.11 绵阳回忆照片",
        photoOrientation: "portrait",
        photoWidth: 1279,
        photoHeight: 1706,
        title: "第一次去你长大的城市",
        body: "喜欢绵阳的慢生活，喜欢和你在浪漫的夏日中散步~ 谢谢款待！",
      },
      {
        date: "2026.05.31",
        photoSrc: "2026-05-31.jpg",
        photoAlt: "2026.05.31 生日礼物回忆照片",
        photoOrientation: "portrait",
        photoWidth: 1536,
        photoHeight: 2304,
        title: "今年的生日礼物",
        body: "今年总是说我们之间拍照少了，希望这台富士相机会成为接下来生活中的拍照搭子，给宝宝多拍照～",
      },
    ],
  },
  traits: {
    guidance: {
      label: "2-4 个中文字符。",
      back: "24-42 个中文字符，太长会影响翻转卡片阅读。",
    },
    eyebrow: "How I See You",
    title: "我眼中的你",
    cards: [
      {
        label: "温柔",
        back: "前年我住院时，你天天下班来看我，是唯一照顾我的人，这是第一次感觉到相伴一生的温柔～",
      },
      {
        label: "可爱",
        back: "我们两个沙雕情侣越来越像彼此，每天滴滴答答哼着奇怪的旋律，跳着奇怪的舞蹈，超级可爱！",
      },
      {
        label: "闪亮",
        back: "你认真的时候最闪亮。而陪在你旁边帮忙打下手，最后被你认可，也是超级开心的时刻~",
      },
    ],
  },
  game: {
    guidance: {
      fortune: "每条 28-48 个中文字符。",
      quizQuestion: "18-32 个中文字符。",
      quizOption: "4-8 个中文字符。",
      feedback: "8-16 个中文字符。",
      confessionText: "18-36 个中文字符。",
    },
    eyebrow: "Tiny Surprise",
    title: "生日小彩蛋",
    fortuneLabel: "第一步：抽一支生日签",
    fortunePlaceholder: "一支生日签正在星光里等你。",
    drawButton: "抽生日签",
    drawAgainButton: "再抽一次",
    fortunes: [
      "今日生日签：愿新的一岁，有很多幸福慢慢靠近你。",
      "今日生日签：今天适合许愿，也适合被认真放在心上。",
      "今日生日签：有一颗星星把好运悄悄放进了你的口袋。",
      "今日生日签：愿你永远幸福，愿我们长长久久。",
    ],
    quizLabel: "第二步：记忆问答",
    quizQuestion: "郑君豪给古思雨微信发的一张照片是谁！（不准查）",
    quizOptions: [
      { text: "雨滴雨滴雨滴雨滴！", isCorrect: false },
      { text: "berber和雨滴的合照", isCorrect: true },
      { text: "berber、奶油、雨滴三只合照", isCorrect: false },
    ],
    feedback: {
      correct: "答对啦，隐藏告白已经解锁。",
      wrong: "再想想，这题的答案很偏心。",
    },
    confession: {
      label: "隐藏告白解锁成功：",
      text: "呀哈哈！被你答对了，奖励一个么么哒~",
    },
  },
  letter: {
    guidance: {
      paragraph: "每段 28-65 个中文字符；整封信建议 4-6 段。",
      sign: "4-10 个中文字符。",
    },
    eyebrow: "Birthday Letter",
    title: "最后一页生日信",
    paragraphs: [
      "亲爱的宝宝猪：",
      "生日快乐~~本来今年的礼物是想简简单单的，但是看见XT-30的那一刻还是没能控制住要买给你！",
      "希望那份提前了一个月的礼物，还有这份小惊喜能够被你喜欢~",
      "愿你新的一岁，被爱意包围，被好运照顾~",
      "愿我们能够早日存到第一桶金，走向婚姻殿堂~",
    ],
    sign: "玛卡巴卡",
  },
  messages: {
    guidance: {
      label: "8-14 个中文字符。",
      placeholder: "18-32 个中文字符。",
      emptyState: "16-24 个中文字符。",
    },
    eyebrow: "Mood Notes",
    title: "宇宙情绪胶囊",
    inputLabel: "写下今天想封存的心情",
    placeholder: "比如：今天很开心，因为身边有玛卡巴卡。",
    moodLegend: "给这颗星星选一个心情",
    saveButton: "封存进宇宙 ✨",
    historyTitle: "情绪星河",
    emptyState: "这里还在等第一颗心情星星。",
    statsEmpty: "这里还在等第一颗心情星星。",
    deleteButton: "删除这颗星星",
  },
};

const birthdayStartTime = new Date(BIRTHDAY_START_DATE).getTime();
const birthdayEndTime = new Date(BIRTHDAY_END_DATE).getTime();
const gate = document.querySelector("#gate");
const enterButton = document.querySelector("#enterButton");
const gateStatus = document.querySelector("#gateStatus");
const devNote = document.querySelector("#devNote");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let isEnteringUniverse = false;
const timeParts = {
  days: document.querySelector("#days"),
  hours: document.querySelector("#hours"),
  minutes: document.querySelector("#minutes"),
  seconds: document.querySelector("#seconds"),
};

function setText(selector, text) {
  const element = document.querySelector(selector);
  if (element) {
    element.textContent = text;
  }
}

function renderGateTitle() {
  const gateTitle = document.querySelector("#gateTitle");
  if (!gateTitle) {
    return;
  }

  const firstLine = document.createElement("span");
  const number = document.createElement("span");
  const secondLine = document.createElement("span");

  number.className = "title-number";
  number.textContent = contentData.gate.title.firstLine.number;
  firstLine.append(
    contentData.gate.title.firstLine.beforeNumber,
    number,
    contentData.gate.title.firstLine.afterNumber,
  );
  secondLine.textContent = contentData.gate.title.secondLine;
  gateTitle.replaceChildren(firstLine, secondLine);
}

function renderGateIntro() {
  const intro = document.querySelector("#gateIntro");
  if (!intro) {
    return;
  }

  const lines = contentData.gate.introLines.map((line) => {
    const lineElement = document.createElement("span");
    lineElement.textContent = line;
    return lineElement;
  });

  intro.replaceChildren(...lines);
}

function renderHeroTitle() {
  const heroTitle = document.querySelector("#heroTitle");
  const highlight = document.createElement("span");

  if (!heroTitle) {
    return;
  }

  highlight.className = "star-breath";
  highlight.textContent = contentData.hero.titleHighlight;
  heroTitle.replaceChildren(contentData.hero.titlePrefix, highlight);
}

function renderHeroEyebrow() {
  const heroEyebrow = document.querySelector("#heroEyebrow");
  const text = document.createElement("span");

  if (!heroEyebrow) {
    return;
  }

  text.className = "star-breath";
  text.textContent = contentData.hero.eyebrow;
  heroEyebrow.replaceChildren(text);
}

function renderTimeline() {
  const timelineList = document.querySelector("#timelineList");
  if (!timelineList) {
    return;
  }

  const cards = contentData.timeline.items.map((item) => {
    const card = document.createElement("article");
    const date = document.createElement("div");
    const photo = document.createElement("figure");
    const image = document.createElement("img");
    const title = document.createElement("h3");
    const body = document.createElement("p");

    card.className = "timeline-card";
    date.className = "timeline-card__date";
    photo.className = "timeline-photo";
    photo.dataset.orientation = item.photoOrientation;
    image.src = item.photoSrc;
    image.alt = item.photoAlt;
    image.width = item.photoWidth;
    image.height = item.photoHeight;
    image.loading = "lazy";

    date.textContent = item.date;
    title.textContent = item.title;
    body.textContent = item.body;

    photo.append(image);
    card.append(date, photo, title, body);
    return card;
  });

  timelineList.replaceChildren(...cards);
}

function renderTraitCards() {
  const traitGrid = document.querySelector("#traitGrid");
  if (!traitGrid) {
    return;
  }

  const cards = contentData.traits.cards.map((card, index) => {
    const button = document.createElement("button");
    const inner = document.createElement("span");
    const front = document.createElement("span");
    const number = document.createElement("small");
    const label = document.createElement("strong");
    const back = document.createElement("span");

    button.className = "trait-card";
    button.type = "button";
    button.setAttribute("aria-expanded", "false");
    inner.className = "trait-card__inner";
    front.className = "trait-card__front";
    back.className = "trait-card__back";

    number.textContent = padNumber(index + 1);
    label.textContent = card.label;
    back.textContent = card.back;

    front.append(number, label);
    inner.append(front, back);
    button.append(inner);
    return button;
  });

  traitGrid.replaceChildren(...cards);
}

function renderQuizOptions() {
  const quizOptions = document.querySelector("#quizOptions");
  if (!quizOptions) {
    return;
  }

  const buttons = contentData.game.quizOptions.map((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.correct = String(option.isCorrect);
    button.textContent = option.text;
    return button;
  });

  quizOptions.replaceChildren(...buttons);
}

function renderConfession() {
  const confession = document.querySelector("#confession");
  if (!confession) {
    return;
  }

  const label = document.createElement("p");
  const text = document.createElement("strong");

  label.textContent = contentData.game.confession.label;
  text.textContent = contentData.game.confession.text;
  confession.replaceChildren(label, text);
}

function renderLetter() {
  const letterPaper = document.querySelector("#letterPaper");
  if (!letterPaper) {
    return;
  }

  const paragraphs = contentData.letter.paragraphs.map((paragraph) => {
    const element = document.createElement("p");
    element.textContent = paragraph;
    return element;
  });
  const sign = document.createElement("p");

  sign.className = "letter-sign";
  sign.textContent = contentData.letter.sign;
  letterPaper.replaceChildren(...paragraphs, sign);
}

function renderStaticContent() {
  document.title = contentData.pageTitle;
  document.querySelector("#countdown")?.setAttribute("aria-label", contentData.gate.countdownLabel);

  setText("#gateEyebrow", contentData.gate.eyebrow);
  setText("#daysLabel", contentData.gate.timeUnits.days);
  setText("#hoursLabel", contentData.gate.timeUnits.hours);
  setText("#minutesLabel", contentData.gate.timeUnits.minutes);
  setText("#secondsLabel", contentData.gate.timeUnits.seconds);
  setText("#devNote", contentData.gate.devNote);
  renderGateTitle();
  renderGateIntro();

  renderHeroEyebrow();
  renderHeroTitle();
  setText("#heroBody", contentData.hero.body);

  setText("#timelineEyebrow", contentData.timeline.eyebrow);
  setText("#timelineTitle", contentData.timeline.title);
  renderTimeline();

  setText("#cardsEyebrow", contentData.traits.eyebrow);
  setText("#cardsTitle", contentData.traits.title);
  renderTraitCards();

  setText("#gameEyebrow", contentData.game.eyebrow);
  setText("#gameTitle", contentData.game.title);
  setText("#fortuneLabel", contentData.game.fortuneLabel);
  setText("#fortuneCard", contentData.game.fortunePlaceholder);
  setText("#drawFortuneButton", contentData.game.drawButton);
  setText("#quizLabel", contentData.game.quizLabel);
  setText("#quizQuestion", contentData.game.quizQuestion);
  renderQuizOptions();
  renderConfession();

  setText("#letterEyebrow", contentData.letter.eyebrow);
  setText("#letterTitle", contentData.letter.title);
  renderLetter();

  setText("#messageEyebrow", contentData.messages.eyebrow);
  setText("#messageTitle", contentData.messages.title);
  setText("#messageInputLabel", contentData.messages.inputLabel);
  setText("#moodPickerLabel", contentData.messages.moodLegend);
  setText("#saveMessageButton", contentData.messages.saveButton);
  setText("#messageHistoryTitle", contentData.messages.historyTitle);
  setText("#emptyState", contentData.messages.emptyState);
  document.querySelector("#messageInput")?.setAttribute("placeholder", contentData.messages.placeholder);
  document.querySelector("#messageGalaxy")?.setAttribute("aria-label", contentData.messages.historyTitle);
}

function padNumber(number) {
  return String(number).padStart(2, "0");
}

function getBirthdayState(now) {
  if (now < birthdayStartTime) {
    return "before";
  }

  if (now < birthdayEndTime) {
    return "birthday";
  }

  return "after";
}

function setCountdown(days, hours, minutes, seconds) {
  timeParts.days.textContent = padNumber(days);
  timeParts.hours.textContent = padNumber(hours);
  timeParts.minutes.textContent = padNumber(minutes);
  timeParts.seconds.textContent = padNumber(seconds);
}

function setCountdownToZero() {
  setCountdown(0, 0, 0, 0);
}

function updateCountdown() {
  const now = Date.now();
  const birthdayState = getBirthdayState(now);
  const isBeforeBirthday = birthdayState === "before";
  const canEnter = DEV_UNLOCK || !isBeforeBirthday;

  devNote.hidden = !(DEV_UNLOCK && isBeforeBirthday);

  if (isBeforeBirthday) {
    const distance = birthdayStartTime - now;
    const totalSeconds = Math.max(0, Math.floor(distance / 1000));
    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds / (60 * 60)) % 24);
    const minutes = Math.floor((totalSeconds / 60) % 60);
    const seconds = totalSeconds % 60;

    setCountdown(days, hours, minutes, seconds);
    gateStatus.textContent = contentData.gate.status.before;
    enterButton.textContent = DEV_UNLOCK ? contentData.gate.buttons.devEnter : contentData.gate.buttons.locked;
    enterButton.disabled = isEnteringUniverse || !canEnter;
    return;
  }

  setCountdownToZero();
  enterButton.textContent = contentData.gate.buttons.enter;
  enterButton.disabled = isEnteringUniverse;

  if (birthdayState === "birthday") {
    gateStatus.textContent = contentData.gate.status.birthday;
    return;
  }

  gateStatus.textContent = contentData.gate.status.after;
}

function enterUniverse() {
  if (isEnteringUniverse) {
    return;
  }

  isEnteringUniverse = true;
  enterButton.disabled = true;
  window.scrollTo({ top: 0, behavior: "auto" });

  if (prefersReducedMotion.matches) {
    document.body.classList.add("has-entered");
    document.body.classList.remove("is-transitioning");
    document.body.classList.remove("is-revealing");
    gate.classList.add("is-hidden");
    gate.classList.remove("gate--stardust");
    window.scrollTo({ top: 0, behavior: "auto" });
    return;
  }

  document.body.classList.add("is-transitioning");
  gate.classList.add("gate--stardust");

  window.setTimeout(() => {
    gate.classList.add("is-hidden");
    document.body.classList.add("is-revealing");
    window.scrollTo({ top: 0, behavior: "auto" });
  }, 3200);

  window.setTimeout(() => {
    document.body.classList.add("has-entered");
    document.body.classList.remove("is-transitioning");
    document.body.classList.remove("is-revealing");
    gate.classList.remove("gate--stardust");
    window.scrollTo({ top: 0, behavior: "auto" });
  }, 4700);
}

renderStaticContent();
enterButton.addEventListener("click", enterUniverse);
updateCountdown();
setInterval(updateCountdown, 1000);

document.querySelectorAll(".trait-card").forEach((card) => {
  card.addEventListener("click", () => {
    const isFlipped = card.classList.toggle("is-flipped");
    card.setAttribute("aria-expanded", String(isFlipped));
  });
});

const drawFortuneButton = document.querySelector("#drawFortuneButton");
const fortuneCard = document.querySelector("#fortuneCard");
const quizArea = document.querySelector("#quizArea");
const quizFeedback = document.querySelector("#quizFeedback");
const confession = document.querySelector("#confession");

drawFortuneButton.addEventListener("click", () => {
  const fortunes = contentData.game.fortunes;
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  fortuneCard.textContent = fortunes[randomIndex];
  drawFortuneButton.textContent = contentData.game.drawAgainButton;
  quizArea.classList.remove("is-locked");
});

document.querySelectorAll(".quiz-options button").forEach((button) => {
  button.addEventListener("click", () => {
    const isCorrect = button.dataset.correct === "true";

    if (isCorrect) {
      quizFeedback.textContent = contentData.game.feedback.correct;
      confession.classList.remove("is-locked");
      return;
    }

    quizFeedback.textContent = contentData.game.feedback.wrong;
  });
});

const STORAGE_KEY = "birthday-universe-messages";
const DEFAULT_MOOD = "calm";
const MOODS = [
  {
    value: "happy",
    label: "😊 开心",
    sealHint: "这颗开心星星，今天特别亮。",
    color: "rgba(255, 214, 138, 0.95)",
    glow: "rgba(255, 214, 138, 0.62)",
    softGlow: "rgba(255, 214, 138, 0.22)",
  },
  {
    value: "calm",
    label: "😌 平静",
    sealHint: "这颗安静的星星，正在慢慢发光。",
    color: "rgba(146, 199, 255, 0.92)",
    glow: "rgba(146, 199, 255, 0.58)",
    softGlow: "rgba(255, 247, 236, 0.18)",
  },
  {
    value: "miss",
    label: "🥺 想你",
    sealHint: "这颗想念星星，已经飞向了最柔软的地方。",
    color: "rgba(243, 167, 187, 0.94)",
    glow: "rgba(243, 167, 187, 0.6)",
    softGlow: "rgba(255, 214, 138, 0.18)",
  },
  {
    value: "rainy",
    label: "🌧 有点不开心",
    sealHint: "这颗小雨星星，也会被温柔接住。",
    color: "rgba(180, 198, 255, 0.9)",
    glow: "rgba(180, 198, 255, 0.54)",
    softGlow: "rgba(146, 199, 255, 0.18)",
  },
  {
    value: "tired",
    label: "🌙 有点累",
    sealHint: "这颗疲惫星星，今晚可以慢慢休息。",
    color: "rgba(214, 191, 255, 0.9)",
    glow: "rgba(214, 191, 255, 0.56)",
    softGlow: "rgba(255, 247, 236, 0.16)",
  },
];
const MOOD_MAP = MOODS.reduce((map, mood) => {
  map[mood.value] = mood;
  return map;
}, {});
const messageForm = document.querySelector("#messageForm");
const messageInput = document.querySelector("#messageInput");
const messageCapsuleStage = document.querySelector("#messageCapsuleStage");
const moodOptions = document.querySelector("#moodOptions");
const saveMessageButton = document.querySelector("#saveMessageButton");
const messageGalaxy = document.querySelector("#messageGalaxy");
const messageStarCard = document.querySelector("#messageStarCard");
const messageStats = document.querySelector("#messageStats");
const sealHint = document.querySelector("#sealHint");
const emptyState = document.querySelector("#emptyState");
let activeMessageId = null;
let lightingMessageId = null;
let messageCardTimer = 0;
let sealHintTimer = 0;
let isSealingMessage = false;

function getMood(moodValue) {
  return MOOD_MAP[moodValue] || MOOD_MAP[DEFAULT_MOOD];
}

function getMessages() {
  try {
    const savedMessages = localStorage.getItem(STORAGE_KEY);
    const parsedMessages = savedMessages ? JSON.parse(savedMessages) : [];

    if (!Array.isArray(parsedMessages)) {
      return [];
    }

    return parsedMessages.map(normalizeMessage).filter(Boolean);
  } catch (error) {
    return [];
  }
}

function saveMessages(messages) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
}

function normalizeMessage(message) {
  if (!message) {
    return null;
  }

  const text = typeof message === "string" ? message.trim() : String(message.text || "").trim();
  if (!text) {
    return null;
  }

  const knownMood = typeof message === "object" && MOOD_MAP[message.mood] ? message.mood : DEFAULT_MOOD;
  const mood = getMood(knownMood);

  return {
    id: typeof message === "object" && message.id ? message.id : createMessageId(),
    text,
    mood: mood.value,
    moodLabel: typeof message === "object" && message.moodLabel && MOOD_MAP[message.mood] ? message.moodLabel : mood.label,
    createdAt: typeof message === "object" && message.createdAt ? message.createdAt : new Date().toISOString(),
  };
}

function formatTime(isoString) {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(isoString));
}

function renderMoodOptions() {
  if (!moodOptions) {
    return;
  }

  moodOptions.innerHTML = "";
  MOODS.forEach((mood) => {
    const option = document.createElement("label");
    const input = document.createElement("input");
    const label = document.createElement("span");

    option.className = "mood-option";
    input.type = "radio";
    input.name = "messageMood";
    input.value = mood.value;
    input.checked = mood.value === DEFAULT_MOOD;
    label.textContent = mood.label;

    option.append(input, label);
    moodOptions.appendChild(option);
  });
}

function setMoodSelection(moodValue) {
  const mood = getMood(moodValue);
  const input = document.querySelector(`input[name="messageMood"][value="${mood.value}"]`);

  if (input) {
    input.checked = true;
  }
}

function getSelectedMood() {
  const selectedMood = document.querySelector('input[name="messageMood"]:checked');
  return getMood(selectedMood?.value || DEFAULT_MOOD);
}

function getMessageHash(text) {
  return Array.from(String(text)).reduce((hash, character) => {
    return (hash * 31 + character.charCodeAt(0)) >>> 0;
  }, 7);
}

function getGalaxyColumns() {
  return window.matchMedia("(min-width: 680px)").matches ? 10 : 6;
}

function clampNumber(number, min, max) {
  return Math.min(Math.max(number, min), max);
}

function getStarPosition(message, index, total) {
  const columns = getGalaxyColumns();
  const rows = Math.max(1, Math.ceil(total / columns));
  const hash = getMessageHash(message.id);
  const column = index % columns;
  const row = Math.floor(index / columns);
  const jitterX = ((hash % 17) - 8) * 0.42;
  const jitterY = (((hash >> 4) % 13) - 6) * 0.52;
  const x = ((column + 0.5) / columns) * 100 + jitterX;
  const y = ((row + 0.5) / rows) * 100 + jitterY;

  return {
    x: clampNumber(x, 7, 93),
    y: clampNumber(y, 10, 90),
  };
}

function setGalaxyHeight(messageCount) {
  if (!messageGalaxy) {
    return;
  }

  const columns = getGalaxyColumns();
  const rows = Math.max(1, Math.ceil(messageCount / columns));
  const minimumHeight = columns === 10 ? 260 : 220;
  const rowHeight = columns === 10 ? 42 : 38;
  const height = Math.max(minimumHeight, rows * rowHeight + 150);
  messageGalaxy.style.minHeight = `${height}px`;
}

function updateMessageStats(messages) {
  if (!messageStats) {
    return;
  }

  if (messages.length === 0) {
    messageStats.textContent = contentData.messages.statsEmpty;
    return;
  }

  const moodCounts = messages.reduce((counts, message) => {
    counts[message.mood] = (counts[message.mood] || 0) + 1;
    return counts;
  }, {});
  const topMood = MOODS.reduce((currentTop, mood) => {
    const moodCount = moodCounts[mood.value] || 0;
    const topCount = moodCounts[currentTop.value] || 0;
    return moodCount > topCount ? mood : currentTop;
  }, MOODS[0]);

  messageStats.textContent = `这个小宇宙已经收藏了 ${messages.length} 颗心情星星。现在最常亮起的是：${topMood.label}。`;
}

function renderMessageCard(message) {
  if (!messageStarCard) {
    return;
  }

  window.clearTimeout(messageCardTimer);

  if (!message) {
    messageStarCard.classList.remove("is-open");

    if (prefersReducedMotion.matches || messageStarCard.hidden) {
      messageStarCard.replaceChildren();
      messageStarCard.hidden = true;
      delete messageStarCard.dataset.messageId;
      return;
    }

    messageCardTimer = window.setTimeout(() => {
      messageStarCard.replaceChildren();
      messageStarCard.hidden = true;
      delete messageStarCard.dataset.messageId;
    }, 320);
    return;
  }

  if (
    messageStarCard.dataset.messageId === message.id &&
    !messageStarCard.hidden &&
    messageStarCard.classList.contains("is-open")
  ) {
    return;
  }

  const mood = document.createElement("p");
  const text = document.createElement("p");
  const time = document.createElement("time");
  const deleteButton = document.createElement("button");

  mood.className = "message-star-card__mood";
  mood.textContent = message.moodLabel;
  text.className = "message-star-card__text";
  text.textContent = message.text;
  time.className = "message-star-card__time";
  time.dateTime = message.createdAt;
  time.textContent = formatTime(message.createdAt);
  deleteButton.className = "delete-message";
  deleteButton.type = "button";
  deleteButton.textContent = contentData.messages.deleteButton;
  deleteButton.addEventListener("click", () => {
    const nextMessages = getMessages().filter((savedMessage) => savedMessage.id !== message.id);
    saveMessages(nextMessages);
    activeMessageId = null;
    renderMessages();
  });

  const openCard = () => {
    messageStarCard.replaceChildren(mood, text, time, deleteButton);
    messageStarCard.dataset.messageId = message.id;
    messageStarCard.hidden = false;
    messageStarCard.classList.remove("is-open");

    if (prefersReducedMotion.matches) {
      messageStarCard.classList.add("is-open");
      return;
    }

    window.requestAnimationFrame(() => {
      messageStarCard.classList.add("is-open");
    });
  };

  if (
    !messageStarCard.hidden &&
    messageStarCard.dataset.messageId &&
    messageStarCard.dataset.messageId !== message.id &&
    messageStarCard.classList.contains("is-open") &&
    !prefersReducedMotion.matches
  ) {
    messageStarCard.classList.remove("is-open");
    messageCardTimer = window.setTimeout(openCard, 160);
    return;
  }

  openCard();
}

function renderMessages() {
  const messages = getMessages();
  saveMessages(messages);
  setGalaxyHeight(messages.length);

  if (emptyState) {
    emptyState.hidden = messages.length > 0;
  }

  if (!messageGalaxy) {
    return;
  }

  const activeMessage = messages.find((message) => message.id === activeMessageId) || null;
  if (!activeMessage) {
    activeMessageId = null;
  }

  updateMessageStats(messages);
  messageGalaxy.innerHTML = "";
  renderMessageCard(activeMessage);

  messages.forEach((message, index) => {
    const mood = getMood(message.mood);
    const starWrap = document.createElement("span");
    const star = document.createElement("button");
    const position = getStarPosition(message, index, messages.length);
    const hash = getMessageHash(message.id);
    const starSize = 1.18 + (hash % 7) * 0.04;
    const moodKey = mood.value === "rainy" ? "sad" : mood.value;
    const isActive = message.id === activeMessageId;

    starWrap.className = "message-star-wrap";
    starWrap.setAttribute("role", "listitem");
    starWrap.style.setProperty("--star-x", `${position.x}%`);
    starWrap.style.setProperty("--star-y", `${position.y}%`);
    starWrap.style.setProperty("--star-float-delay", `${(hash % 9) * -180}ms`);
    starWrap.style.setProperty("--star-float-duration", `${4.2 + (hash % 5) * 0.28}s`);

    star.className = "message-star";
    star.type = "button";
    star.textContent = "⭐️";
    star.dataset.mood = moodKey;
    star.style.setProperty("--star-size", `${starSize}rem`);
    star.setAttribute("aria-label", `打开${message.moodLabel}，${formatTime(message.createdAt)}的留言`);
    star.setAttribute("aria-expanded", String(isActive));
    star.classList.toggle("is-active", isActive);
    star.classList.toggle("is-lighting", message.id === lightingMessageId);
    star.addEventListener("animationend", () => {
      if (lightingMessageId === message.id) {
        lightingMessageId = null;
      }

      star.classList.remove("is-lighting");
    }, { once: true });
    star.addEventListener("click", () => {
      const nextActiveMessageId = message.id === activeMessageId ? null : message.id;
      lightingMessageId = prefersReducedMotion.matches ? null : nextActiveMessageId;
      activeMessageId = nextActiveMessageId;
      renderMessages();
    });

    starWrap.appendChild(star);
    messageGalaxy.appendChild(starWrap);
  });
}

function createMessageId() {
  if (globalThis.crypto && typeof globalThis.crypto.randomUUID === "function") {
    return globalThis.crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function showSealHint(mood) {
  if (!sealHint) {
    return;
  }

  window.clearTimeout(sealHintTimer);
  sealHint.textContent = mood.sealHint;
  sealHintTimer = window.setTimeout(() => {
    sealHint.textContent = "";
  }, 3600);
}

function animateMessageToGalaxy(message, onComplete) {
  const startElement = messageCapsuleStage || messageInput;

  if (prefersReducedMotion.matches || !startElement || !messageGalaxy) {
    onComplete();
    return;
  }

  const startRect = startElement.getBoundingClientRect();
  const galaxyRect = messageGalaxy.getBoundingClientRect();

  if (!startRect.width || !galaxyRect.width) {
    onComplete();
    return;
  }

  const targetPosition = getStarPosition(message, 0, getMessages().length + 1);
  const startX = startRect.left + startRect.width * 0.82;
  const startY = startRect.top + Math.min(34, startRect.height * 0.42);
  const endX = galaxyRect.left + (targetPosition.x / 100) * galaxyRect.width;
  const endY = galaxyRect.top + (targetPosition.y / 100) * galaxyRect.height;
  const flightStar = document.createElement("span");
  let isFinished = false;

  flightStar.className = "message-flight-star";
  flightStar.setAttribute("aria-hidden", "true");
  flightStar.style.setProperty("--flight-start-x", `${startX}px`);
  flightStar.style.setProperty("--flight-start-y", `${startY}px`);
  flightStar.style.setProperty("--flight-x", `${endX - startX}px`);
  flightStar.style.setProperty("--flight-y", `${endY - startY}px`);
  document.body.appendChild(flightStar);

  const finish = () => {
    if (isFinished) {
      return;
    }

    isFinished = true;
    flightStar.remove();
    onComplete();
  };

  flightStar.addEventListener("animationend", finish, { once: true });
  window.setTimeout(finish, 1150);
}

messageForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  if (isSealingMessage) {
    return;
  }

  const text = messageInput.value.trim();
  if (!text) {
    messageInput.focus();
    return;
  }

  const mood = getSelectedMood();
  const message = {
    id: createMessageId(),
    text,
    mood: mood.value,
    moodLabel: mood.label,
    createdAt: new Date().toISOString(),
  };

  isSealingMessage = true;
  saveMessageButton.disabled = true;
  showSealHint(mood);
  animateMessageToGalaxy(message, () => {
    const messages = getMessages();
    saveMessages([message, ...messages]);
    messageInput.value = "";
    setMoodSelection(DEFAULT_MOOD);
    activeMessageId = null;
    renderMessages();
    saveMessageButton.disabled = false;
    isSealingMessage = false;
  });
});

renderMoodOptions();
renderMessages();
window.addEventListener("resize", renderMessages);
