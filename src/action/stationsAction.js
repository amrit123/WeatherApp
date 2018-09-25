import ApiKey from "../components/Apikey";
import axios from "axios";


export const addStation = (station) => ({
    type: "ADD_STATION",
    station
})


export const startAddStation = (data = {}) => {

    return (dispatch) => {
        //https://cors-escape.herokuapp.com/
        const proxyCors = "https://cors-escape.herokuapp.com/";
        const url = `${proxyCors}http://api.openweathermap.org/data/3.0/stations?appid=${ApiKey}`;
        var headers = {'Content-Type': 'application/json'}
        axios.post(url, data, { headers: headers })
            .then((response) => {
                dispatch(addStation(response));
            }).catch((err) => {
                console.log("error is " + err);
            })
    };
};