const number = document.querySelector('.number');
const plusButton = document.querySelector('.plus');
const minusButton = document.querySelector('.minus');
const resetButton = document.querySelector('.reset');

let currentNumber = 0;

function setNumber(current) {
  number.innerHTML = `${current}`;
}

plusButton.onclick = () => {
  setNumber(++currentNumber);
}

minusButton.onclick = () => {
  setNumber(--currentNumber);
}

resetButton.onclick = () => {
  setNumber(currentNumber = 0);
}