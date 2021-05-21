const apiKey = "909202fe44f41f51f5e8e51cdf753b6e";
// search city
const searchForm = document.querySelector('.searchForm');
const inputCity = document.querySelector('.inputCity');
// location
const locationPlace = document.querySelector('.locationPlace');
const locationRefresh = document.querySelector('.locationRefresh');
// time and date
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const month = document.querySelector('.month');
const day = document.querySelector('.day');
// main widget
const outputCity = document.querySelector('.outputCity');

// manipulation with location
function getLocationSetStorage() { // get coordinates of location and set them to LocalStorage
  navigator.geolocation.getCurrentPosition(success);    
  async function success(position) {
    const { latitude, longitude } = position.coords;
    // url for get name of city, country from openweathermap by latitude, longitude 
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
    try {
      let response = await fetch(url);
      let data = await response.json();
      let { name, sys } = data;
      localStorage.setItem('nameLocation', `${name}`);
      localStorage.setItem('countryLocation', `${sys.country}`);
      locationPlace.innerHTML = `${name}, ${sys.country}`;
    } catch (error) {
      //.............
    }
  }
}

function outputLocation() { 
  const nameLocationFromStorage = localStorage.getItem('nameLocation');
  const countryLocationFromStorage = localStorage.getItem('countryLocation');
  
  if(nameLocationFromStorage && countryLocationFromStorage) {
    locationPlace.innerHTML = `${nameLocationFromStorage}, ${countryLocationFromStorage}`;
  } 

  if(!nameLocationFromStorage) getLocationSetStorage();
  /*navigator.geolocation.getCurrentPosition(success);    
  async function success(position) {
    const { latitude, longitude } = position.coords;
    // url for get name of city, country from openweathermap by latitude, longitude 
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
    try {
      let response = await fetch(url);
      let data = await response.json();
      let { name, sys } = data;
      localStorage.setItem('nameLocation', `${name}`);
      localStorage.setItem('countryLocation', `${sys.country}`);
      locationPlace.innerHTML = `${name}, ${sys.country}`;
    } catch (error) {
      //.............
    }
  }*/
}

locationRefresh.onclick = () => {
  getLocationSetStorage();
  /*navigator.geolocation.getCurrentPosition(success);
  async function success(position) {
    const { latitude, longitude } = position.coords;
    // url for get name of city, country from openweathermap by latitude, longitude 
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
    try {
      let response = await fetch(url);
      let data = await response.json();
      let { name, sys } = data;
      localStorage.setItem('nameLocation', `${name}`);
      localStorage.setItem('countryLocation', `${sys.country}`);
      locationPlace.innerHTML = `${name}, ${sys.country}`;
    } catch (error) {
      //.............
    }
  }*/
}


function outputDate() {
  let currentMoment = new Date();
  let getHours = currentMoment.getHours();
  let getMins = currentMoment.getMinutes();
  let getMonth = currentMoment.getMonth();
  let getDay = currentMoment.getDate();
  hours.innerHTML = getHours < 10 ? `0${getHours}` : getHours;
  minutes.innerHTML = getMins < 10 ? `0${getMins}` : getMins;
  month.innerHTML = convertNumberMonthtoString(getMonth);
  day.innerHTML = getDay < 10 ? `0${getDay}` : getDay;

  function convertNumberMonthtoString(num) {
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return month[num];
  }
}

async function outputWeatherData(city) {
  const { name, sys } = await getWeatherData(city);
  outputCity.innerHTML = `${name}, ${sys.country}`;
}

async function getWeatherData(city) {
  // url for get weather data from openweathermap by city name 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  try {
    let response = await fetch(url);
    let data = await response.json();
    return data;
  } catch (error) {
    //.............
  }
}

searchForm.addEventListener('submit', async e => {
  e.preventDefault();
  const { name } = await getWeatherData(inputCity.value);
  outputCity.innerHTML = `<div>${name}</div>`;
  })

document.addEventListener("DOMContentLoaded", outputDate(), outputLocation())