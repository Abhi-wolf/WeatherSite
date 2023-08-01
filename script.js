console.log('hello');
const searchBar = document.querySelector('#input');
const searchBtn = document.querySelector('#btn');
console.log(searchBar);
console.log(searchBtn);


function upDateUI(data) {
    searchBar.value = "";
    console.log(searchBar.value);
    document.getElementById("temp").textContent = `${Math.floor(data.main.temp)}°C`;
    document.getElementById("location").textContent = data.name;
    document.getElementById("humidity").textContent = `${data.main.humidity}%`;
    document.getElementById("wind").textContent = `${data.wind.speed} km/h`;
    const weatherImage = document.querySelector('.imageIcon');
    console.log(weatherImage);

    if (data.weather[0].main == "Clouds") {
        // console.log("clouds");
        weatherImage.src = "images/clouds.png";
        // console.log(weatherImage);

    }
    else if (data.weather[0].main == "Clear") {
        // console.log("clear");
        weatherImage.src = "images/clear.png";
        // console.log(weatherImage);

    }
    else if (data.weather[0].main == "Rain") {
        // console.log("rain");
        weatherImage.src = "images/rain.png";
        // console.log(weatherImage);

    }
    else if (data.weather[0].main == "Drizzle") {
        // console.log("drizzle");
        weatherImage.src = "images/drizzle.png";
        // console.log(weatherImage);

    }
    else if (data.weather[0].main == "Mist") {
        // console.log(data.weather[0].main);
        weatherImage.src = "images/mist.png";
        // console.log(weatherImage);
    }
    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";

}


async function getWeatherData(location) {
    const apiKey = "85e41b0a8c8337a1a41e324b3120098e";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
    await fetch(url)
        .then(res =>
            res.json()
        )
        .then(data => {
            console.log(data);
            upDateUI(data);
        })
        .catch((err) => {
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        })



}


searchBtn.addEventListener("click", () => {
    const location = searchBar.value;
    getWeatherData(location);
});

