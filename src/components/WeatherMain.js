import React, { Component } from 'react'
import { connect } from "react-redux";
import SearchEngineMessage from "./SearchEngineMessage";
import CurrentWeather from "./CurrentWeather";
import { startGetCurrentWeather } from "../action/currentWeatherAction";

export class WeatherMain extends Component {

    state = {
        showCurrentWeather: false,
        cityText: "",
        error:""
    }


    handleCityInput = (e) => {
        this.setState({ cityText: e.target.value });
    }
    handleKeyPress=(e)=>{
        
        if (e.charCode == 13) {
            console.log("hello")
        }

       // e.charCode == 13
    }

    getCityName = () => {
        if(this.state.cityText!=""){
            const city = this.state.cityText.trim();
            this.props.dispatch(startGetCurrentWeather(city));
            this.setState(() => ({ showCurrentWeather: true , cityText:"" , error:""}));
        }
        else{
            this.setState(() => ({error:"Please enter valid city name"}));
        }
        
    }

    render() {
        let currentweather;
        if (this.props.currentWeather.length > 0) {
            currentweather = <CurrentWeather  {...this.props.currentWeather[0]} />
        }

        return (
            <div>

                <div className="weather-city-input-box">
                    <div className="weather-city-input">
                    {this.state.error && <p className="">{this.state.error} </p> }

                        <input
                            className="weather-form-input"
                            value={this.state.cityText}
                            onChange={this.handleCityInput}
                            autoFocus
                            placeholder="city,citycode" type="text" />
                        <button onKeyDown ={this.handleKeyPress} onClick={this.getCityName} className="button">search</button>
                    </div>

                </div>
                {currentweather}

                <SearchEngineMessage />
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        currentWeather: state.currentDayReducer
    };
};

export default connect(mapStateToProps)(WeatherMain);


