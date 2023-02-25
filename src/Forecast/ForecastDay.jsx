import WeatherIcon from "../WeatherData/WeatherIcon";
import moment from "moment/moment";
import ConvertToFahrenheitHelper from "../Helpers/ConvertToFahrenheitHelper";

const ForecastDay = (props) => {
  const minTemperature = () => {
    let temperature =
      props.unit === "celsius"
        ? Math.round(props.data.temp.min)
        : ConvertToFahrenheitHelper(props.data.temp.min);

    return props.unit === "celsius" ? `${temperature}°C` : `${temperature}°F`;
  };

  const maxTemperature = () => {
    let temperature =
      props.unit === "celsius"
        ? Math.round(props.data.temp.max)
        : ConvertToFahrenheitHelper(props.data.temp.max);

    return props.unit === "celsius" ? `${temperature}°C` : `${temperature}°F`;
  };

  const forecastDate = () => {
    let forecastDayDate = moment
      .unix(new Date(props.data.dt))
      .format("ddd, MMM D");
    return `${forecastDayDate}`;
  };

  return (
    <>
      <div>{forecastDate()}</div>
      <div>
        <WeatherIcon code={props.data.weather[0].icon} size={36} />
      </div>
      <div>
        <span>{minTemperature()}</span>
        <span> {maxTemperature()}</span>
      </div>
    </>
  );
};
export default ForecastDay;
