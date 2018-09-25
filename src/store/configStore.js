import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import mainReducer from "../reducers/combineReducers";
import {loadState, saveState} from "../localStorage/storage";


const persistedState=loadState();
const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default ()=>{
    const store=createStore(
        mainReducer,
        composeEnhancers(applyMiddleware(thunk)) );
     
    return store;
};