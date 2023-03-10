import "./SearchForm.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const SearchForm = (props) => {
  const updateCity = (event) => {
    props.setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (props.city === "") {
      return alert("Enter a city!");
    } else {
      return props.callApiByCityName(props.city);
    }
  };

  const getGeolocation = () => {
    navigator.geolocation.getCurrentPosition(props.showLocationData);
  };

  return (
    <form className="input-group mb-3" onSubmit={handleSubmit}>
      <input
        type="search"
        className="form-control"
        placeholder="Enter your city"
        aria-label="Enter your city"
        aria-describedby="button-addon2"
        value={props.city}
        onChange={updateCity}
        autoFocus="on"></input>
      <button
        className="btn btn-primary location-button"
        id="gps-location"
        type="button"
        onClick={getGeolocation}>
        <i className="fa-solid fa-location-dot"></i>
      </button>
      <input
        className="btn btn-primary"
        type="submit"
        id="button-addon2"
        value="Search"></input>
    </form>
  );
};
export default SearchForm;
