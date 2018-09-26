import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WeatherMain from "../components/WeatherMain";
import StationListItem from "../components/StationListItem";
import CurrentWeather from "../components/CurrentWeather";
import AddStation from "../components/AddStation";
import NavigationHeader from '../components/NavigationHeader';

const AppRoutes = () => (
  <BrowserRouter>
    <div>
      <NavigationHeader />
      <Switch>
        <Route path="/" component={WeatherMain} exact={true} />
       
        <Route path="/viewStation" component={StationListItem} />
        <Route path="/addStation" component={AddStation} />
        
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRoutes;


/* <Route path="/currentWeather" component={CurrentWeather} exact={true} /> */