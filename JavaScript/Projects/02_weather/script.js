document.addEventListener("DOMContentLoaded", () => {
  //variables
  const cityInput = document.getElementById("city-input");
  const getWeatherButton = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityName = document.getElementById("city-name");
  const temperature = document.getElementById("temperature");
  const description = document.getElementById("description");
  const errorMessage = document.getElementById("error-message");
  const key = "4324ba22654b73f06e901a1170f4c6fc";

  getWeatherButton.addEventListener("click", async () => {
    //parsing input
    const cityInputText = cityInput.value.trim();
    if (!cityInputText) return;

    //remember -- server is in another continent
    //            server can throw error

    try {
      const weatherData = await fetchWeatherData(cityInputText);
      console.log(weatherData);
      DisplayWeatherData(weatherData);
    } catch (error) {
      console.log(error);
    }
  });

  async function fetchWeatherData(name) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${key}&units=metric`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response Status: ${response.status}`);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      DisplayErrorMessage();
    }
  }
  function DisplayWeatherData(data) {
    const cityData = data.name;
    const tempData = data.main.temp;
    const descData = data.weather[0].description;
    cityName.textContent = cityData;
    temperature.textContent = tempData;
    description.textContent = descData;
    weatherInfo.classList.remove("hidden");
    errorMessage.classList.add("hidden");
  }
  function DisplayErrorMessage() {
    weatherInfo.classList.add("hidden");
    errorMessage.classList.remove("hidden");
  }
});
