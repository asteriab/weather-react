import "./App.scss";
import SearchForm from "./SearchForm/SearchForm";
import WeatherData from "./WeatherData/WeatherData";
import AuthorInfo from "./AuthorInfo/AuthorInfo";
import axios from "axios";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

function App(props) {
  const [city, setCity] = useState("");
  const [weatherInfo, setWeatherInfo] = useState({ ready: false });

  function callApi(city) {
    setCity(city);
  }

  const callApiByCityName = (city) => {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7a00a4fb22b18bae5dbea39280ad220a&units=metric`;
    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch((error) => {
        alert("Enter a valid city!");
      });
  };

  useEffect(() => {
    if (city) {
      callApiByCityName(city);
    }
  }, [city]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(showLocationData);
  }, []);

  const getCityName = (response) => {
    callApi(response.data[0].name);
  };

  const showLocationData = (position) => {
    let apiUrl = `http://api.openweathermap.org/geo/1.0/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&limit=1&appid=7a00a4fb22b18bae5dbea39280ad220a`;
    axios.get(apiUrl).then(getCityName);
  };

  function handleResponse(response) {
    setWeatherInfo({
      ...weatherInfo,
      ready: true,
      temp: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: response.data.weather[0].icon,
      city: response.data.name,
      country: response.data.sys.country,
      coordinates: response.data.coord,
    });
  }

  return (
    <div className="container">
      <SearchForm
        callApi={callApi}
        showLocationData={showLocationData}
        city={city}
      />
      <WeatherData weatherInfo={weatherInfo} />
      <AuthorInfo />
    </div>
  );
}

export default App;
