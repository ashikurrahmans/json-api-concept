const API_KEY = `46ad7457603b9b0104e633e78cd60e16`;
const searchTemperature = () => {
  const city = document.getElementById("city-name").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemperature(data));
};

const displayTemperature = (temp) => {
  const cities = document.getElementById("cities");
  const temperature = document.getElementById("temperature");
  const conditions = document.getElementById("condition");
  const weatherIcon = document.getElementById("weather-icon");
  console.log(temp);
  cities.innerText = `${temp.name}`;
  temperature.innerText = `${temp.main.temp}`;
  conditions.innerText = `${temp.weather[0].main}`;
  const url = `http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`;
  weatherIcon.setAttribute("src", url);
};
