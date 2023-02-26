import WeatherIcon from "./WeatherIcon";

const Conditions = (props) => {
  return (
    <ul className="current-conditions">
      <li className="conditions">
        <div className="conditions-icon">
          <WeatherIcon code={props.weatherInfo.icon} />
        </div>

        <p> {props.weatherInfo.description}</p>
      </li>
      <li className="wind">
        <div className="conditions-icon">
          <img
            src="https://basmilius.github.io/weather-icons/production/fill/all/windsock.svg"
            alt="wind"
          />
        </div>
        <p> {props.weatherInfo.wind} m/s</p>
      </li>
      <li className="humidity">
        <div className="conditions-icon">
          <img
            src="https://basmilius.github.io/weather-icons/production/fill/all/umbrella.svg"
            alt="humidity"
          />
        </div>
        <p>{props.weatherInfo.humidity}%</p>
      </li>
    </ul>
  );
};
export default Conditions;
