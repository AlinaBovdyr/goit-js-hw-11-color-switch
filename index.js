const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let timerId = null;

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
  startBtn.setAttribute('disabled', true);

  timerId = setInterval(() => {
    const index = randomIntegerFromInterval(0, colors.length - 1);
    const color = colors[index];
    document.body.style.backgroundColor = color;
  }, 1000); 

};

function onStopBtnClick() {
  startBtn.removeAttribute('disabled');
  
  clearInterval(timerId);
}

