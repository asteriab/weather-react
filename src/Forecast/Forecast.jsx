import axios from "axios";
import { useState, useEffect } from "react";

import ForecastDay from "./ForecastDay";

const Forecast = (props) => {
  let [forecast, setForecast] = useState();
  let [forecastReady, setForecastReady] = useState(false);

  useEffect(() => {
    setForecastReady(false);
  }, [props.weatherInfo.coordinates]);

  const handleResponse = (response) => {
    setForecast(response.data.daily);
    setForecastReady(true);
  };

  if (forecastReady) {
    return (
      <div className="forecast">
        {forecast.map((dailyForecast, index) => {
          return index > 0 && index < 6 ? (
            <div key={index}>
              <ForecastDay data={dailyForecast} />
            </div>
          ) : (
            ""
          );
        })}
      </div>
    );
  } else {
    let apiURL = `https://api.openweathermap.org/data/3.0/onecall?lat=${props.weatherInfo.coordinates.lat}&lon=${props.weatherInfo.coordinates.lon}&appid=7a00a4fb22b18bae5dbea39280ad220a&units=metric`;
    axios.get(apiURL).then(handleResponse);
  }
};
export default Forecast;
