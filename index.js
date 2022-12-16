function formatDate(date) {
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
    let dayIndex = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let day = days[dayIndex];
  
    return `${day} ${hours}:${minutes}`;
  }
  
  let dateElement = document.querySelector("#today");
  let currentTime = new Date();
  dateElement.innerHTML = formatDate(currentTime);
  
  function dispayWetherCondition(responce) {
    document.querySelector("#city").innerHTML = responce.data.name;
    document.querySelector("#temperature").innerHTML = Math.round(
      responce.data.main.temp
    );
    document.querySelector("#humidity").innerHTML = responce.data.main.humidity;
    document.querySelector("#wind").innerHTML = Math.round(
      responce.data.wind.speed
    );
    document.querySelector("#description").innerHTML =
      responce.data.weather[0].main;
  }
  function search(city) {
    let apiKey = "d5cc6a4c9a606dc61bc511b225dae4e0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(dispayWetherCondition);
  }
  function searchLocation(position) {
    let apiKey = "d5cc6a4c9a606dc61bc511b225dae4e0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(dispayWetherCondition);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let city = document.querySelector("#city-input").value;
    search(city);
  }
  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }
  
  let searchForm = document.querySelector("#search-form");
  
  searchForm.addEventListener("submit", handleSubmit);
  
  let searchLocationButton = document.querySelector("#search-location");
  searchLocationButton.addEventListener("click", getCurrentLocation);
  
  search("New York");
  