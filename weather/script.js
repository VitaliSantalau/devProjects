const apiKey = "909202fe44f41f51f5e8e51cdf753b6e";

const searchForm = document.querySelector('.searchForm');
const inputCity = document.querySelector('.inputCity');
const curentLocationButton = document.querySelector('.curentLocationButton');
const outputCity = document.querySelector('.outputCity');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const month = document.querySelector('.month');
const day = document.querySelector('.day');

let currentStateCity = {
  default: "City didn't set",
  location: {
    latitude: '',
    longitude: '',
  },
  inputNameCity: false,
}

function convertNumberMonthtoString(num) {
  const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return month[num];
}

async function outputDate() {
  currentMoment = new Date();
  let getHours = await currentMoment.getHours();
  let getMins = await currentMoment.getMinutes();
  let getMonth = await currentMoment.getMonth();
  let getDay = await currentMoment.getDate();
  hours.innerHTML = getHours < 10 ? `0${getHours}` : getHours;
  minutes.innerHTML = getMins < 10 ? `0${getMins}` : getMins;
  month.innerHTML = convertNumberMonthtoString(getMonth);
  day.innerHTML = getDay < 10 ? `0${getDay}` : getDay;
}

async function getWeatherData() {




  /*
  const urlDataByCity = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  const urlDataByLocation = `https://api.openweathermap.org/data/2.5/weather?lat=${currentStateCity.location.latitude}&lon=${currentStateCity.location.longitude}&appid=${apiKey}`
  let url = inputCity.value ? urlDataByCity : urlDataByLocation;
  try {
    let response = await fetch(url);
    let data = await response.json();
    return data;
  } catch (error) {
    
  }*/
}

curentLocationButton.onclick = () => {
  async function success(pos) {
    let crd = pos.coords;
    currentStateCity.location.latitude = crd.latitude;
    currentStateCity.location.longitude = crd.longitude;
    const { name } = await getWeatherData();
     outputCity.innerHTML = `<div>${name}</div>`;
  }
  navigator.geolocation.getCurrentPosition(success);
}

searchForm.addEventListener('submit', async e => {
  e.preventDefault();
  const { name } = await getWeatherData(inputCity.value);
  outputCity.innerHTML = `<div>${name}</div>`;
  })

document.addEventListener("DOMContentLoaded", outputDate())