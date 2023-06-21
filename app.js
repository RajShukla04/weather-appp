const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

const error = document.querySelector(".error");
const API_KEY = "89f5dbbabbaf2a7f8180694240c2bb58";
const API_URL =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
async function checkWeather(city) {
  const response = await fetch(API_URL + city + `&appid=${API_KEY}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    if (data.weather[0].main === "Clouds") {
      weatherIcon.src = "/cloud.jpg";
    } else if (data.weather[0].main === "Clear") {
      weatherIcon.src = "/clear-sky.png";
    } else if (data.weather[0].main === "Rain") {
      weatherIcon.src = "/Rain.png";
    } else if (data.weather[0].main === "Drizzle") {
      weatherIcon.src = "/drizzle.png";
    } else if (data.weather[0].main === "Mist") {
      weatherIcon.src = "/mist.png";
    }
    // if (searchBox.value !== data.name) {
    //   error.style.display = "block";
    // }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }

  // var data = await response.json();
  // console.log(data);
  // document.querySelector(".city").innerHTML = data.name;
  // document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  // document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  // document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
  // if (data.weather[0].main === "Clouds") {
  //   weatherIcon.src = "/cloud.jpg";
  // } else if (data.weather[0].main === "Clear") {
  //   weatherIcon.src = "/clear-sky.png";
  // } else if (data.weather[0].main === "Rain") {
  //   weatherIcon.src = "/Rain.png";
  // } else if (data.weather[0].main === "Drizzle") {
  //   weatherIcon.src = "/drizzle.png";
  // } else if (data.weather[0].main === "Mist") {
  //   weatherIcon.src = "/mist.png";
  // }

  // document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
