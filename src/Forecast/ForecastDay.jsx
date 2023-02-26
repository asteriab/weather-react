import WeatherIcon from "../WeatherData/WeatherIcon";
import moment from "moment/moment";
import ConvertToFahrenheitHelper from "../Helpers/ConvertToFahrenheitHelper";
import "./Forecast.scss";

const ForecastDay = (props) => {
  const minTemperature = () => {
    let temperature =
      props.unit === "celsius"
        ? Math.round(props.data.temp.min)
        : ConvertToFahrenheitHelper(props.data.temp.min);

    return `${temperature}°`;
  };

  const maxTemperature = () => {
    let temperature =
      props.unit === "celsius"
        ? Math.round(props.data.temp.max)
        : ConvertToFahrenheitHelper(props.data.temp.max);

    return `${temperature}°`;
  };

  const forecastDate = () => {
    let forecastDayDate = moment
      .unix(new Date(props.data.dt))
      .format("ddd, MMM D");
    return `${forecastDayDate}`;
  };

  return (
    <>
      <div className="forecast-icon">
        <WeatherIcon
          code={props.data.weather[0].icon}
          alt={props.data.weather[0].description}
        />
      </div>
      <div>
        <div className="forecast-date">{forecastDate()}</div>
        <div className="forecast-temperatures">
          <span>{minTemperature()}</span>
          <span> {maxTemperature()}</span>
        </div>
      </div>
    </>
  );
};
export default ForecastDay;
