
import ApiKey from "../components/Apikey";
import axios from "axios";
import moment from "moment";


export const getCurrentWeather = (weather) => ({ 
    type: "SET_CURRENT_WEATHER",
    weather
});



//use of redux thunk here.
export const startGetCurrentWeather = (cityName) => {
    return (dispatch, getState) => {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&ApiKey=${ApiKey}`;
        axios.get(url).then((response) => {
            if(response){
                const weatherData = response.data;
               
                const data = {
                    cityId: weatherData.id,
                    cloudiness: weatherData.weather[0].description,
                    lat: weatherData.coord.lat,
                    lon: weatherData.coord.lon,
                    icon: weatherData.weather[0].icon,
                    sunrise: new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString(),
                    sunset: new Date(weatherData.sys.sunset * 1000).toLocaleTimeString(),
                    humidity: weatherData.main.humidity,
                    currentTemp: weatherData.main.temp,
                    pressure: weatherData.main.pressure,
                    wind: weatherData.wind.speed,
                    cityName: `${weatherData.name},${weatherData.sys.country}`,
                    date: moment().format("DD MMM YYYY")
                } 
                
                dispatch(getCurrentWeather(data))
            }
        }).catch((err) => {
            console.log("error is " + err);
        })
        
    };

};


