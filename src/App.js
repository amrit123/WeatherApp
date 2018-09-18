import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRoutes from "./Routes/AppRoutes";
import configureStore from "./store/configStore";


import "normalize.css/normalize.css";
import "./styles/styles.scss" 

const store = configureStore();
const jsx = (
    <Provider store={store}>
        <AppRoutes /> 
    </Provider>
);
ReactDOM.render(jsx, document.getElementById("app"));

