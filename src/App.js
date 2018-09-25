import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRoutes from "./Routes/AppRoutes";
import configureStore from "./store/configStore";
//import {loadState, saveState} from "./localStorage/storage";


import "normalize.css/normalize.css";
import "./styles/styles.scss" 

const store = configureStore();
//console.log(store.getState().stationReducer);
/*    store.subscribe(()=>{
      console.log(store.getState().stationReducer)
    saveState(store.getState().stationReducer)
})  */  
const jsx = (
    <Provider store={store}>
        <AppRoutes /> 
    </Provider>
);
ReactDOM.render(jsx, document.getElementById("app"));

