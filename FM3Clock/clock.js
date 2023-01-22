document.querySelectorAll(".digit").forEach((e) => {
  for (let i = 0; i < 45; i++) {
    let el = document.createElement("div");
    el.className = "pixel";
    e.appendChild(el);
  }
});

document.querySelectorAll(".colon").forEach((e) => {
  for (let i = 0; i < 27; i++) {
    let el = document.createElement("div");
    el.className = "pixel";
    e.appendChild(el);
  }
});

const pixelListInOrder = [
  // 0
  [
    1, 2, 3, 5, 8, 9, 10, 13, 14, 15, 17, 19, 20, 22, 24, 25, 27, 29, 30, 31,
    34, 35, 36, 39, 41, 42, 43,
  ],
  // 1
  [2, 6, 7, 10, 12, 17, 22, 27, 32, 37, 40, 41, 42, 43, 44],
  // 2
  [
    1, 2, 3, 5, 6, 8, 9, 10, 14, 19, 23, 24, 27, 28, 31, 32, 35, 36, 40, 41, 42,
    43, 44,
  ],
  // 3
  [1, 2, 3, 5, 8, 9, 14, 18, 19, 22, 23, 28, 29, 34, 35, 38, 39, 41, 42, 43],
  // 4
  [2, 7, 11, 12, 16, 20, 21, 23, 25, 28, 30, 31, 32, 33, 34, 38, 43],
  // 5
  [0, 1, 2, 3, 4, 5, 10, 15, 21, 22, 23, 28, 29, 34, 35, 38, 39, 41, 42, 43],
  // 6
  [1, 2, 3, 5, 6, 10, 15, 20, 22, 23, 25, 26, 29, 30, 34, 35, 39, 41, 42, 43],
  // 7
  [0, 1, 2, 3, 4, 9, 14, 18, 23, 27, 32, 36, 41],
  // 8
  [1, 2, 3, 5, 9, 10, 14, 16, 18, 22, 26, 28, 30, 34, 35, 39, 41, 42, 43],
  // 9
  [1, 2, 3, 5, 9, 10, 14, 15, 19, 21, 22, 23, 24, 29, 34, 38, 39, 41, 42, 43],
];

const pixelList = [
  // 0
  [
    1, 2, 3, 9, 14, 19, 24, 29, 34, 39, 43, 42, 41, 35, 30, 25, 20, 15, 10, 5,
    36, 31, 27, 22, 17, 13, 8,
  ],
  // 1
  [10, 6, 2, 7, 12, 17, 22, 27, 32, 37, 40, 41, 42, 43, 44],
  // 2
  [
    10, 5, 6, 1, 2, 3, 8, 9, 14, 19, 24, 23, 28, 27, 32, 31, 36, 35, 40, 41, 42,
    43, 44,
  ],
  // 3
  [5, 1, 2, 3, 8, 9, 14, 19, 18, 23, 22, 28, 29, 34, 39, 38, 43, 42, 41, 35],
  // 4
  [2, 7, 12, 11, 16, 21, 20, 25, 30, 31, 32, 33, 34, 23, 28, 38, 43],
  // 5
  [0, 5, 10, 15, 21, 22, 23, 28, 29, 34, 39, 38, 43, 42, 41, 35, 1, 2, 3, 4],
  // 6
  [3, 2, 1, 6, 5, 10, 15, 20, 25, 30, 35, 41, 42, 43, 39, 34, 29, 23, 22, 26],
  // 7
  [0, 1, 2, 3, 4, 9, 14, 18, 23, 27, 32, 36, 41],
  // 8
  [3, 2, 1, 5, 10, 16, 22, 28, 34, 39, 43, 42, 41, 35, 30, 26, 18, 14, 9],
  // 9
  [3, 2, 1, 5, 10, 15, 21, 22, 23, 9, 14, 19, 24, 29, 34, 39, 38, 43, 42, 41],
];

function setDigit(digitElement, number) {
  let pxCount = pixelList[number].length;
  let timeoutDelay = 700 / pxCount;
  for (let i = 1; i <= 45; i++)
    digitElement.querySelector(`.pixel:nth-child(${i})`).className =
      "pixel off";
  for (let i in pixelList[number]) {
    setTimeout(() => {
      let pixel = digitElement.querySelector(
        `.pixel:nth-child(${pixelList[number][i] + 1})`
      );
      pixel.className = "pixel on";
    }, timeoutDelay * i);
  }
}

let h1, h2, m1, m2, s1, s2;

setInterval(() => {
  let d = new Date();
  let hour = d.getHours();
  let minute = d.getMinutes();
  let second = d.getSeconds();
  if (h1 != Math.floor(hour / 10)) {
    h1 = Math.floor(hour / 10);
    setDigit(hour1, h1);
  }
  if (m1 != Math.floor(minute / 10)) {
    m1 = Math.floor(minute / 10);
    setDigit(minute1, m1);
  }
  if (s1 != Math.floor(second / 10)) {
    s1 = Math.floor(second / 10);
    setDigit(second1, s1);
  }
  if (h2 != hour % 10) {
    h2 = hour % 10;
    setDigit(hour2, h2);
  }
  if (m2 != minute % 10) {
    m2 = minute % 10;
    setDigit(minute2, m2);
  }
  if (s2 != second % 10) {
    s2 = second % 10;
    setDigit(second2, s2);
  }
}, 1000);
