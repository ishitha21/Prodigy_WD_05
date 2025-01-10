// API Configuration
const apiKey = "bf2db7595c544b1fa963ba90799c95da"; // u can go to this website to get ur own api key https://openweathermap.org/
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// DOM Elements
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherCard = document.querySelector(".weather");
const errorMsg = document.querySelector(".error");
const weatherIcon = document.querySelector(".weather-icon");

// Function to Fetch Weather Data
async function fetchWeather(city) {
  try {
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
    if (!response.ok) {
      throw new Error("City not found");
    }
    const data = await response.json();

    // Get the current date
    const currentDate = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString(undefined, options);

    // Update Weather Card
    document.querySelector(".date").textContent = formattedDate;
    document.querySelector(".weather h1").textContent = `${Math.round(data.main.temp)}°C`;
    document.querySelector(".weather h4").textContent = data.weather[0].main;
    document.querySelector(".weather h2").textContent = data.name;
    document.querySelector(".humidity").textContent = `${data.main.humidity}% Humidity`;
    document.querySelector(".wind").textContent = `${data.wind.speed} km/h Wind`;

    // Use OpenWeatherMap icon URL
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    // Display Weather Card
    weatherCard.style.display = "block";
    errorMsg.style.display = "none";

  } catch (error) {
    // Handle error
    weatherCard.style.display = "none";
    errorMsg.style.display = "block";
    errorMsg.textContent = "City not found. Please try again.";
  }
}

// Event Listeners(2 types by click and enter)
searchBtn.addEventListener("click", () => {
  fetchWeather(searchBox.value);
});

searchBox.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    fetchWeather(searchBox.value);
  }
});
