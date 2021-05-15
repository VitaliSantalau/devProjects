const sec = document.querySelector('.sec');
const min = document.querySelector('.min');
const hour = document.querySelector('.hour');

function tic() {
  const currentMoment = new Date();

  const seconds = currentMoment.getSeconds();
  const secondRotation = ((seconds / 60) * 360) + 180;
  sec.style.transform = `rotate(${secondRotation}deg) translateY(-3rem)`;

  const mins = currentMoment.getMinutes();
  const minsRotation = ((mins / 60) * 360) + ((seconds/60)*6) + 180;
  min.style.transform = `rotate(${minsRotation}deg) translateY(-2.2rem)`;

  const hours = currentMoment.getHours();
  const hoursRotation = ((hours / 12) * 360) + ((mins/60)*30) + 180;
  hour.style.transform = `rotate(${hoursRotation}deg) translateY(-2rem)`;
}

setInterval(tic, 1000);
tic();