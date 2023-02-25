import "./SearchForm.css";
import { useState } from "react";

export default function SearchForm(props) {
  let [city, setCity] = useState("");

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (city === "") {
      return alert("Enter a city!");
    } else {
      return props.callApi(city);
    }
  }

  return (
    <form className="input-group mb-3" onSubmit={handleSubmit}>
      <input
        type="search"
        className="form-control"
        placeholder="Enter your city"
        aria-label="Enter your city"
        aria-describedby="button-addon2"
        onChange={updateCity}
        autoFocus="on"
      ></input>
      <button
        className="btn btn-primary location-button"
        id="gps-location"
        type="button"
      >
        <i className="fa-solid fa-location-dot"></i>
      </button>
      <input
        className="btn btn-primary"
        type="submit"
        id="button-addon2"
        value="Search"
      ></input>
    </form>
  );
}
