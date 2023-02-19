import "./App.css";
import SearchForm from "./SearchForm/SearchForm";
import CurrentData from "./CurrentData/CurrentData";
import AuthorInfo from "./AuthorInfo/AuthorInfo";
import axios from "axios";
import { useEffect, useState } from "react";

function App(props) {
  const [city, setCity] = useState("");

  function callApi(city) {
    setCity(city);
  }

  useEffect(() => {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7a00a4fb22b18bae5dbea39280ad220a&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }, [city]);

  function handleResponse(response) {
    alert(`The weather in ${city} is ${response.data.main.temp}°C`);
  }

  return (
    <div className="container">
      <SearchForm callApi={callApi} />
      <CurrentData />
      <AuthorInfo />
    </div>
  );
}

export default App;
