const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const sec = document.querySelector('.sec');
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const resetButton = document.querySelector('.reset');

let state = {
  sec: 0,
  minute: 0,
  hour: 0,
};

let 
  idStopwatch,
  startMoment, 
  currentMoment, 
  pastInterval = 0,
  pastIntervalInSec;

function correctViewElem(elem) {
  return (elem < 10) ? `0${elem}` : `${elem}`;
}

function tableView() {
  sec.innerHTML = correctViewElem(state.sec);
  minute.innerHTML = correctViewElem(state.minute);
  hour.innerHTML = correctViewElem(state.hour);
}

function tic() {
  currentMoment = Date.now();
  pastInterval = currentMoment - startMoment;
  pastIntervalInSec = Math.round(pastInterval / 1000);
  state.hour = Math.floor(pastIntervalInSec / 3600);
  state.minute = Math.floor(pastIntervalInSec / 60) % 60;
  state.sec = pastIntervalInSec % 60;
  tableView();
}

startButton.onclick = () => {
  startMoment = Date.now() - pastInterval;
  idStopwatch = setInterval(tic, 1000);
}

stopButton.onclick = () => {
  clearInterval(idStopwatch);
}

resetButton.onclick = () => {
  clearInterval(idStopwatch);
  state = {
    sec: 0,
    minute: 0,
    hour: 0,
  };
  pastInterval = 0;
  tableView();
}