import React, { Component } from 'react'
import { connect } from "react-redux";
import moment from "moment";
const date = moment().format("DD MMM YYYY");
import { startGetFiveDaysWeather } from "../action/multiDayWeatherAction";
import WeatherList from "./WeatherList";

let weatherEachDay;
export class CurrentWeather extends Component {

  state = {
    weatherGroupByDay: null,
    showWeatherGroupByDay: false,
    hideShowMoreWeatherButton: true,
    cityId: ""
  }


  groupWeatherByDay = (WeatherList) => {
    const days = {};
    WeatherList.forEach((weather) => {
      const day = moment(weather.dt * 1000).format("dddd, Do MMMM")
      if (!days[day])
        days[day] = []
      days[day].push(weather)
    })

    return days;
  }


  getWeatherForNextFiveDays = () => {
    const id = this.props.cityId;
    this.props.dispatch(startGetFiveDaysWeather(id));
    this.setState(() => ({ showWeatherGroupByDay: true, hideShowMoreWeatherButton: false }));

  }
  hideMoreWeatherButton = () => {
    this.setState(() => ({ showWeatherGroupByDay: false, hideShowMoreWeatherButton: true }))
  }

  render() {
    if (this.props.weatherList.length > 0) {
      console.log(this.props.weatherList[0]);
      const weatherGroupByDay = this.groupWeatherByDay(this.props.weatherList[0].data.list);
      weatherEachDay = Object.keys(weatherGroupByDay).map((day, index) => (

        <WeatherList key={day} today={index === 0} day={day} weatherRows={weatherGroupByDay[day]} />
      ));
    }

    const { cityId, lat, lon, wind, currentTemp, cityName,
      cloudiness, pressure, humidity, sunrise, sunset, icon, date } = this.props;

    const imageUrl = `https://openweathermap.org/img/w/${icon}.png`

    return (
      <div>
        <div className="weather-container">
          <h1 className="weather-city-name">{cityName}</h1>
          <h3 className="weather-date">{date}</h3>
          <h3 className="weather-cloudiness">cloudiness:{cloudiness}</h3>
          <div className="weather-icon"><img src={imageUrl} alt="" /> {currentTemp}°C</div>


          <div className="weather-details">
            <div className="weather-details-1">
              <h3>wind:{wind} (m/s)</h3>
              <h3>Pressure:{pressure} hpa</h3>
              <h3>Humidity:{humidity} %</h3>
            </div>

            <div className="weather-details-2">
              <h3>sunrise:{sunrise}</h3>
              <h3>sunset:{sunset}</h3>
              <h3>cordinates:[{lat},{lon}]</h3>
            </div>
          </div>

          <div className="button-extra-weather">
            {this.state.hideShowMoreWeatherButton ? <button className="button" onClick={this.getWeatherForNextFiveDays}>More Weather In Your City</button> : <button className="button" onClick={this.hideMoreWeatherButton}>View only Current Weather</button>}
        </div>

        </div>
        {this.state.showWeatherGroupByDay && <div><h1 className="weather-panel-header">Next Five days Forcast</h1>{weatherEachDay}</div>}
       </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    weatherList: state.multiDayWeatherReducer
  };
};


export default connect(mapStateToProps)(CurrentWeather);
