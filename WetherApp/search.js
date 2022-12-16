function search(event) {
    event.preventDefault();
    let cityElement = document.querySelector("#city");
    let cityForm = document.querySelector("#your-city");
    let cityInput = document.querySelector("#city-input");
    let searchCity = document.querySelector("#search-city");
    cityElement.innerHTML = cityForm.value;
  }
  cityForm.addEventListener("submit", search);
  
  let today = document.querySelector("#today");
  let date = new Date();
  
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  
  let currentDay = date.getDay();
  
  today.innerHTML = `${currentDay[days]} ${hours}:${minutes}`;
  