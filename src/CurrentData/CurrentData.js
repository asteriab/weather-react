import Conditions from "./Conditions";
import DateTime from "./DateTime";
import "./CurrentData.css";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
        <WeatherTemperature celsius={props.weatherData.temp} />

        <Conditions weatherData={props.weatherData} />
      </div>
    );
  } else {
    return "";
  }
}
