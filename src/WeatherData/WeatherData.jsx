import Conditions from "./Conditions";
import DateTime from "./DateTime";
import "./WeatherData.scss";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import Forecast from "../Forecast/Forecast";
import { useState } from "react";

const WeatherData = (props) => {
  const [unit, setUnit] = useState("celsius");

  const updateUnit = (unit) => {
    setUnit(unit);
  };

  if (props.weatherInfo.ready) {
    return (
      <div className="weather-data">
        <div className="current-block">
          <div>
            <h1 className="city">
              {props.weatherInfo.city}, {props.weatherInfo.country}
            </h1>
            <DateTime />
          </div>

          <div className="current-weather-data">
            <div className="temp-icon-wrap">
              <div className="main-weather-icon">
                <WeatherIcon
                  code={props.weatherInfo.icon}
                  alt={props.weatherInfo.description}
                />
              </div>
              <WeatherTemperature
                celsius={props.weatherInfo.temp}
                updateUnit={updateUnit}
              />
            </div>
            <Conditions weatherInfo={props.weatherInfo} />
          </div>
        </div>
        <div className="forecast">
          <Forecast weatherInfo={props.weatherInfo} unit={unit} />
        </div>
      </div>
    );
  } else {
    return "";
  }
};
export default WeatherData;
