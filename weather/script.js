const example = document.querySelector('.example');
const search = document.querySelector('.search-form');
const inputCity = document.querySelector('.inputCity');
const apiKey = "909202fe44f41f51f5e8e51cdf753b6e";
const url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`;

async function getData() {
  try {
    let response = await fetch(url);
    let data = await response.json();
    return data;
  } catch (error) {
    
  }
}

search.addEventListener('submit', async e => {
  e.preventDefault();
  const searchingCity = inputCity.value;
  const { main } = await getData();
  example.innerHTML = `<div>${main.temp}</div>`;
  })