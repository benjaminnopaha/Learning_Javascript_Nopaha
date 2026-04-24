const API_KEY = "2733291583ec6e1444a2b1157bdb1da9";

export async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(url);

    /* Handle HTTP errors */
    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    return data;

  } catch (error) {
    throw error;
  }
}
