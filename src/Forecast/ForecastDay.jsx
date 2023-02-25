import WeatherIcon from "../WeatherData/WeatherIcon";
import moment from "moment/moment";

const ForecastDay = (props) => {
  const minTemperature = () => {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature} °`;
  };

  const maxTemperature = () => {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature} °`;
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
