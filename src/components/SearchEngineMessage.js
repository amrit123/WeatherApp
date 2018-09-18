import React from "react";

const SearchEngineMessage = (props) => (
    <div>
        <div className="message-container">
            <h1 className="messege-title">Search engine is very flexible. How it works:</h1>
            <ul>
                <li>Put the city's name or its part and get the list of the most proper cities in the world. Example <b>Lon</b> or <b>Lond</b> or <b>London</b>. The more precise city name you put the more precise list you will get.</li>
                <li>To make it more precise put the city's name or its part, comma, the name of the country or 2-letter country code. You will get all proper cities in chosen country. The order is important - the first is city name then comma then country. Example - <b>Lon,UK</b>  or <b>Lon,GB</b> or <b>London, GB</b> or <b>Lon, England.</b></li>
            </ul>
        </div>
    </div>

)

export default SearchEngineMessage;