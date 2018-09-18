import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationHeader = () => (
  <header className="station-container">
  <h1 className="weather-heading"> <u> Weather in Your city</u> </h1>
      <NavLink to="/" activeClassName="is-active" exact={true}> Current Weather</NavLink>
    <NavLink to="/viewStation" activeClassName="is-active">View Stations</NavLink>
    <NavLink to="/addStation" activeClassName="is-active">Add Station</NavLink>
    
  </header>
);

export default NavigationHeader;