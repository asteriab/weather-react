import { useState } from "react";

const WeatherTemperature = (props) => {
  const [unit, setUnit] = useState("celsius");

  const showFahrenheit = (event) => {
    event.preventDefault();
    setUnit("fahrenheit");
  };

  const showCelsius = (event) => {
    event.preventDefault();
    setUnit("celsius");
  };

  const fahrenheit = () => {
    return Math.round((props.celsius * 9) / 5 + 32);
  };

  if (unit === "celsius") {
    return (
      <div className="current-temp">
        {props.celsius}
        <div className="units">
          <span className="celsius-link">°C</span>|
          <a href="/" className="fahrenheit-link" onClick={showFahrenheit}>
            °F
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div className="current-temp">
        {fahrenheit()}
        <div className="units">
          <a href="/" className="celsius-link" onClick={showCelsius}>
            °C
          </a>
          |
          <span href="/" className="fahrenheit-link">
            °F
          </span>
        </div>
      </div>
    );
  }
};
export default WeatherTemperature;
