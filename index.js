const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const bodyRef = document.querySelector("body");
const buttonStartRef = document.querySelector('button[data-action="start"]');
const buttonStopRef = document.querySelector('button[data-action="stop"]');

buttonStartRef.addEventListener("click", changeColorStart);
buttonStopRef.addEventListener("click", changeColorStop);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let newColor = null;

function changeColorStart() {
  buttonStartRef.disabled = true;

  newColor = setInterval(() => {
    const randomColor = randomIntegerFromInterval(0, colors.length - 1);
    bodyRef.style.backgroundColor = colors[randomColor];
  }, 1000);

  return newColor;
}

function changeColorStop() {
  buttonStartRef.disabled = false;

  clearInterval(newColor);
}
