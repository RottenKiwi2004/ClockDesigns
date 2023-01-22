const container = document.querySelector(".container");

const size = 40;
const margin = 5;

let xCount, yCount;

function calcSqCount() {
  let h = window.innerHeight;
  let w = window.innerWidth;
  xCount = Math.floor(w / (size + 2 * margin));
  yCount = Math.floor(h / (size + 2 * margin));
  container.innerHTML = "";
  for (let i = 0; i < xCount * yCount; i++) {
    let el = document.createElement("div");
    el.className = "tile l0";
    container.appendChild(el);
  }
}

calcSqCount();
window.addEventListener("resize", calcSqCount);

function rand(min, max) {
  return (Math.round(Math.random() * (max - min)) % (max - min)) + min;
}

function background() {
  for (let i = 0; i < xCount * yCount; i++) {
    if (Math.random() < 0.7) continue;
    document.querySelector(
      `.tile:nth-child(${i + 1})`
    ).className = `tile l${rand(0, 4)}`;
  }
}

setInterval(background, 200);

const overlay = document.querySelector(".overlay");

function time() {
  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  overlay.textContent = `${h < 10 ? "0" + h : h}:${m < 10 ? "0" + m : m}:${
    s < 10 ? "0" + s : s
  }`;
}

setInterval(time, 1000);
