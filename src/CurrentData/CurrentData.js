import React from "react";
import Conditions from "./Conditions";
import DateTime from "./DateTime";
import "./CurrentData.css";

export default function CurrentData(props) {
  return (
    <div className="current-block">
      <div>
        <h1 className="city">{props.weatherData.city}</h1>

        <DateTime />
      </div>
      <div className="icon">
        <img src={props.weatherData.icon} alt=""></img>
      </div>
      <div className="current-temp">
        {Math.round(props.weatherData.temp)}
        <div className="units">
          <a href="/" className="celsius-link active">
            °C
          </a>
          |
          <a href="/" className="fahrenheit-link">
            °F
          </a>
        </div>
      </div>
      <Conditions weatherData={props.weatherData} />
    </div>
  );
}
