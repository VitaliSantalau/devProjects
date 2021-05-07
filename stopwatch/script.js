const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const sec = document.querySelector('.sec');
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const resetButton = document.querySelector('.reset');

let currentState = {
  duration: 0,
  sec: 0,
  minute: 0,
  hour: 0,
};
let idStopwatch;

function correctViewElem(elem) {
  return (elem < 10) ? `0${elem}` : `${elem}`;
}

function tableView() {
  sec.innerHTML = correctViewElem(currentState.sec);
  minute.innerHTML = correctViewElem(currentState.minute);
  hour.innerHTML = correctViewElem(currentState.hour);
}

function tic() {
  currentState.duration++;
  currentState.hour = Math.floor(currentState.duration / 3600);
  currentState.minute = Math.floor(currentState.duration / 60) % 60;
  currentState.sec = currentState.duration % 60;
  tableView();
}

startButton.onclick = () => {
  idStopwatch = setInterval(tic, 1000);
}

stopButton.onclick = () => {
  clearInterval(idStopwatch);
}

resetButton.onclick = () => {
  clearInterval(idStopwatch);
  currentState = {
    duration: 0,
    sec: 0,
    minute: 0,
    hour: 0,
  };
  tableView();
}