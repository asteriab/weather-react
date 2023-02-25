import axios from "axios";
import { useEffect } from "react";
import WeatherIcon from "../WeatherData/WeatherIcon";

const Forecast = (props) => {
  const handleResponse = (response) => {
    console.log(response);
  };

  let apiURL = `https://api.openweathermap.org/data/3.0/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=7a00a4fb22b18bae5dbea39280ad220a&units=metric`;
  axios.get(apiURL).then(handleResponse);

  if (ready) {
    return (
      <div className="forecast">
        <div>Day</div>
        <div>
          <WeatherIcon code="01d" size={36} />
        </div>
        <div>
          <span>19C </span>
          <span>30C</span>
        </div>
      </div>
    );
  } else {
    return "";
  }
};
export default Forecast;
