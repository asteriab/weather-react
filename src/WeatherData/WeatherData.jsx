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
      <>
        <div className="current-block">
          <div>
            <h1 className="city">
              {props.weatherInfo.city}, {props.weatherInfo.country}
            </h1>

            <DateTime />
          </div>
          <WeatherIcon code={props.weatherInfo.icon} size={70} />
          <WeatherTemperature
            celsius={props.weatherInfo.temp}
            updateUnit={updateUnit}
          />
          <Conditions weatherInfo={props.weatherInfo} />
        </div>
        <Forecast weatherInfo={props.weatherInfo} unit={unit} />
      </>
    );
  } else {
    return "";
  }
};
export default WeatherData;
