const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const sec = document.querySelector('.sec');
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const resetButton = document.querySelector('.reset');

let currentValue = 0;

startButton.onclick = () => {
  setTimeout(function tic() {
    currentValue++;
    sec.innerHTML = `0${currentValue}`;
    setTimeout(tic, 1000);
  }, 1000)

  
}

