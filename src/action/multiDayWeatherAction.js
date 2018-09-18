
import ApiKey from "../components/Apikey";
import axios from "axios";


export const getFiveDaysWeather = (data) => ({
    type: "GET_FIVE_DAY_WEATHER",
    data
});

//use of redux thunk here.


export const startGetFiveDaysWeather = (id) => {
    return (dispatch, getState) => {
        const url = `http://api.openweathermap.org/data/2.5/forecast?id=${id}&units=metric&ApiKey=${ApiKey}`;
        axios.get(url).then((response) => {
            if (response) {

                dispatch(getFiveDaysWeather(response))
            }
        }).catch((err) => {
            console.log("error is " + err);
        })
    };
};
