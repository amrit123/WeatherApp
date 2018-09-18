
import React, { Component } from 'react'
import moment from "moment";

export default class WeatherList extends Component {


  render() {

    const { today, day, weatherRows } = this.props;

    const eachRow = weatherRows.map((row) => {
      const time = `${moment(row.dt * 1000).format("HH:mm")}`
      const icon = `http://openweathermap.org/img/w/${row.weather[0].icon}.png`
      const temp = `${Math.round(row.main.temp)}°C`
      const windSpeed = `${row.wind.speed} (m/s)`


      return (
        <div key={time} className="eachRow">
          <time className="timestamp">{time}</time>
          <div className="icon"><img src={icon} alt="" /></div>
          <div className="temp">{temp}</div>
          <div className="windspeed">{windSpeed}</div>
        </div>
      )
    })



    return (

      <div className="Weatherpanel">
        {today ?
          <div className="currentDay">
            <h3 className="day">Today</h3>
            <hr />
          </div> :
          <div className="currentDay">
            <h3 className="day">{day}</h3>
            <hr />
          </div>
        }
        {eachRow}

      </div>
    )
  }
}

