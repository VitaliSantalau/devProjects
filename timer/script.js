const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const sec = document.querySelector('.sec');
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const resetButton = document.querySelector('.reset');
const setMinutes = document.querySelectorAll('.setMinutes');

let state = {
  sec: 0,
  minute: 0,
  hour: 0,
};

let 
  idTimer,
  startMoment, 
  currentMoment, 
  restInterval = 0,
  restIntervalInSec;

setMinutes.forEach(item => {
  item.onclick = () => {
    resetTimer();
    const value = item.value;
    restInterval = value*60*1000;
    tableView();
  }
})

function correctViewElem(elem) {
  return (elem < 10) ? `0${elem}` : `${elem}`;
}

function tableView() {
  restIntervalInSec = Math.round(restInterval / 1000);
  state.hour = Math.floor(restIntervalInSec / 3600);
  state.minute = Math.floor(restIntervalInSec / 60) % 60;
  state.sec = restIntervalInSec % 60;
  sec.innerHTML = correctViewElem(state.sec);
  minute.innerHTML = correctViewElem(state.minute);
  hour.innerHTML = correctViewElem(state.hour);
}

function resetTimer() {
  clearInterval(idTimer);
  state = {
    sec: 0,
    minute: 0,
    hour: 0,
  };
  restInterval = 0;
  tableView();
}

function tic() {
  currentMoment = Date.now();
  restInterval = startMoment - currentMoment;
  if (restInterval<=0) resetTimer();
  tableView();
}

startButton.onclick = () => {
  startMoment = Date.now() + restInterval;
  idTimer = setInterval(tic, 1000);
}

stopButton.onclick = () => {
  clearInterval(idTimer);
}

resetButton.onclick = () => {
  resetTimer();
}