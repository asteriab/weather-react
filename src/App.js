import "./App.css";
import SearchForm from "./SearchForm/SearchForm";
import CurrentData from "./CurrentData/CurrentData";
import AuthorInfo from "./AuthorInfo/AuthorInfo";

// function handleResponse(response) {
//   alert(`The weather in ${props.city} is ${response.data.main.temp}°C`);
// }
// let apiKey = "7a00a4fb22b18bae5dbea39280ad220a";
// let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
// axios.get(apiUrl).then(handleResponse);

function App(props) {
  return (
    <div className="container">
      <SearchForm />
      <CurrentData />
      <AuthorInfo />
    </div>
  );
}

export default App;
