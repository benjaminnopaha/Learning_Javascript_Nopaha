import { getWeather } from "./api.js";

const input = document.getElementById("cityInput");
const button = document.getElementById("searchBtn");
const result = document.getElementById("result");

button.addEventListener("click", async () => {
  const city = input.value.trim();

  if (!city) {
    result.textContent = "Please enter a city";
    return;
  }

  result.textContent = "Loading...";

  try {
    const data = await getWeather(city);

    result.innerHTML = `
      <p><strong>${data.name}</strong></p>
      <p> Temperature: ${data.main.temp}°C</p>
      <p> Weather: ${data.weather[0].description}</p>
    `;

  } catch (error) {
    result.textContent = error.message;
  }
});