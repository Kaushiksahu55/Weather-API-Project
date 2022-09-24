const getWeatherData = (cityName) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3245a87a10mshc706c7f5737511cp17fddcjsna10bfd49105a',
            'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
        }
    };

    return fetch(`https://open-weather13.p.rapidapi.com/city/${cityName}`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

}

const showWeatherData = (weatherData) => {
    // console.log(weatherData)
    document.getElementById("city-name").innerText = '86.66'
        // document.getElementById("weather-type").innerText = weatherData.weather[0].main;
        // document.getElementById("temp").innerText = weatherData.main.temp;
        // document.getElementById("min-temp").innerText = weatherData.main.temp_min;
        // document.getElementById("max-temp").innerText = weatherData.main.temp_max;
}


const searchCity = async() => {
    const searchCityInput = document.getElementById('city-input').value
    console.log(searchCityInput)
    const getData = await getWeatherData(searchCityInput)
    showWeatherData(getData);
}



// https://api.openweathermap.org/data/2.5/weather?q=lucknow&appid=d3e9f141c9b9b2b819983fe24e2b64ff&units=imperial