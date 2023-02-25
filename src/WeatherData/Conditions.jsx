const Conditions = (props) => {
  return (
    <ul className="current-conditions">
      <li className="conditions">
        <i className="fa-solid fa-cloud list-icon"></i>
        <span id="conditions"> {props.weatherInfo.description}</span>
      </li>
      <li className="wind">
        <i className="fa-solid fa-wind list-icon"></i>
        <span id="wind"> {props.weatherInfo.wind} m/s</span>
      </li>
      <li className="humidity">
        <i className=" fa-solid fa-umbrella list-icon"></i>
        <span id="humidity"> {props.weatherInfo.humidity}%</span>
      </li>
    </ul>
  );
};
export default Conditions;
