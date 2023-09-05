const apiKey = 'e0f89ef51a1f134d92f20ace36f78c2b';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
    } else {
        let data = await response.json();

        console.log(data);

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = 'assets/img/clouds.png'
        }

        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = 'assets/img/clear.png'
        }

        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = 'assets/img/rain.png'
        }
        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = 'assets/img/snow.png'
        }

        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = 'assets/img/mist.png'
        }

        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = 'assets/img/drizzle.png'
        }

        document.querySelector(".weather").style.display = "block"
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "ºC";
    }




}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);

})
