import React from "react";
import axios from "axios";

function Weather(props) {
  function handleResponse(response) {
    alert(`The weather in ${props.city} is ${response.data.main.temp}°C`);
  }
  let apiKey = "7a00a4fb22b18bae5dbea39280ad220a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return <div>Hello from Weather</div>;
}

export default Weather;
