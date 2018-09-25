import ApiKey from "../components/Apikey";
import axios from "axios";
import {loadState,saveState} from "../localStorage/storage";


let stationList=loadState();
export const addStation = (station) => ({
    type: "ADD_STATION",
    station
})


export const startAddStation = (data = {}) => {

    return (dispatch,getState) => {
        //https://cors-escape.herokuapp.com/
        const proxyCors = "https://cors-escape.herokuapp.com/";
        const url = `${proxyCors}http://api.openweathermap.org/data/3.0/stations?appid=${ApiKey}`;
        var headers = {'Content-Type': 'application/json'}
        axios.post(url, data, { headers: headers })
            .then((response) => {
                
                stationList.push(response);
                saveState(stationList);
                dispatch(addStation(response));
            }).catch((err) => {
                console.log("error is " + err);
            })
    };
};