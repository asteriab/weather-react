import "./App.css";
import SearchForm from "./SearchForm/SearchForm";
import CurrentData from "./CurrentData/CurrentData";
import AuthorInfo from "./AuthorInfo/AuthorInfo";
import axios from "axios";
import { useEffect, useState } from "react";

function App(props) {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({});

  function callApi(city) {
    setCity(city);
  }

  useEffect(() => {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7a00a4fb22b18bae5dbea39280ad220a&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }, [city]);

  function handleResponse(response) {
    console.log(city);
    console.log(response.data.main);
    setWeatherData({
      ...weatherData,
      temp: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      city: city,
    });
  }

  return (
    <div className="container">
      <SearchForm callApi={callApi} />
      <CurrentData weatherData={weatherData} />
      <AuthorInfo />
    </div>
  );
}

export default App;
