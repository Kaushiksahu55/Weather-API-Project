// https://api.openweathermap.org/data/2.5/weather?q=lucknow&appid=d3e9f141c9b9b2b819983fe24e2b64ff&units=imperial
const getWeatherData = (cityInput) => {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=d3e9f141c9b9b2b819983fe24e2b64ff&units=metric`)
        .then(response => response.json())
        .then(data => data)
}


const searchCity = async() => {
    const cityInput = document.getElementById('city-input').value
    console.log(cityInput)
    const cityData = await getWeatherData(cityInput)
    showWeatherData(cityData)
}

const showWeatherData = (weatherData) => {
    console.log(weatherData, 'hello')
    document.getElementById("city-name").innerText = weatherData.name;
    document.getElementById("weather-type").innerText = weatherData.weather[0].main;
    document.getElementById("temp").innerText = weatherData.main.temp;
    document.getElementById("min-temp").innerText = weatherData.main.temp_min;
    document.getElementById("max-temp").innerText = weatherData.main.temp_max;
}