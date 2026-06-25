const WEATHER_BG_CLASS = {
    "Clear": "weather-clear", "Clouds": "weather-clouds",
    "Rain": "weather-rain",   "Drizzle": "weather-drizzle",
    "Thunderstorm": "weather-thunderstorm",
    "Snow": "weather-snow",   "Mist": "weather-mist"
};


const apiKey = "1cb76cf2e0c27bd94f8a58f15ce5a9a2";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        var data = await response.json();

        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
                
        const sunrise = new Date(data.sys.sunrise * 1000);
        const sunset = new Date(data.sys.sunset * 1000);

        document.getElementById("sunriseTime").textContent = sunrise.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
        document.getElementById("sunsetTime").textContent  =sunset.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
                
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
           weatherIcon.src = "images/clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

        const allBgClasses = Object.values(WEATHER_BG_CLASS);
        document.body.classList.remove(...allBgClasses);
        const condition = data.weather[0].main;
        document.body.classList.add(WEATHER_BG_CLASS[condition] || "weather-clear");

    }
}
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

searchBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkWeather(searchBox.value);
    }
});

document.getElementById("locateBtn").addEventListener("click", () => {
    if (!navigator.geolocation) {
        alert("Geolocation not supported by your browser.");
        return;
    }
    navigator.geolocation.getCurrentPosition(async (pos) => {
        const { latitude: lat, longitude: lon } = pos.coords;
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
        );
        const data = await response.json();
        checkWeather(data.name);
    }, () => {
        alert("Location access denied.");
    })
});

