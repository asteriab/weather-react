import Conditions from "./Conditions";
import DateTime from "./DateTime";
import "./CurrentData.css";
import WeatherIcon from "./WeatherIcon";

export default function CurrentData(props) {
  if (props.weatherData.ready) {
    return (
      <div className="current-block">
        <div>
          <h1 className="city">
            {props.weatherData.city}, {props.weatherData.country}
          </h1>

          <DateTime />
        </div>
        <WeatherIcon code={props.weatherData.icon} />
        <div className="current-temp">
          {props.weatherData.temp}
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
  } else {
    return "Loading Data";
  }
}
