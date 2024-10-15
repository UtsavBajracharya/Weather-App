const request = require("request");

const openWeatherMap ={

    BASE_URL: "https://api.openweathermap.org/data/2.5/weather?q=",
    SECRET_KEY: "47a6676f7d0dac03dcf6a96aa1e8a074"
}


const weatherData = (address, callback) => {
    const url = openWeatherMap.BASE_URL + encodeURIComponent(address)+ "&APPID=" + openWeatherMap.SECRET_KEY;
};