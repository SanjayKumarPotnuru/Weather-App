async function getWeather() {
    const city=document.getElementById("cityInput").value;
    const apiKey ="1526c82eecfe487b9becf5bf2509033c";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;;
    try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");
    
    const data = await response.json();
    const weatherDiv = document.getElementById("weatherInfo");

    const weather = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>🌡️ Temperature: ${data.main.temp}°C</p>
      <p>☁️ Weather: ${data.weather[0].description}</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
      <p>🌬️ Wind Speed: ${data.wind.speed} m/s</p>
    `;
    weatherDiv.innerHTML = weather;
  } catch (error) {
    document.getElementById("weatherInfo").innerHTML = `<p>${error.message}</p>`;
  }
}

