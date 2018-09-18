import { combineReducers } from "redux";
import stationReducer from "./stationReducer";
import currentDayReducer from "./currentDayReducer";
import multiDayWeatherReducer from "./multiDayWeatherReducer";



    const mainReducer= combineReducers({
        stationReducer:stationReducer,
        currentDayReducer:currentDayReducer,
        multiDayWeatherReducer:multiDayWeatherReducer
        
        });

   
    export default mainReducer;