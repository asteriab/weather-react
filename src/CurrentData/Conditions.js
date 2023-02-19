export default function Conditions(props) {
  return (
    <ul className="current-conditions">
      <li className="conditions">
        <i className="fa-solid fa-cloud list-icon"></i>
        <span id="conditions"> {props.weatherData.description}</span>
      </li>
      <li className="wind">
        <i className="fa-solid fa-wind list-icon"></i>
        <span id="wind"> {props.weatherData.wind}</span> m/s
      </li>
      <li className="humidity">
        <i className=" fa-solid fa-umbrella list-icon"></i>
        <span id="humidity"> {props.weatherData.humidity}</span>%
      </li>
    </ul>
  );
}
