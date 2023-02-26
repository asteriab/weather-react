const WeatherIcon = (props) => {
  const codeMapping = {
    "01d": "clear-day",
    "01n": "clear-night",
    "02d": "partly-cloudy-day",
    "02n": "partly-cloudy-night",
    "03d": "overcast-day",
    "03n": "overcast-night",
    "04d": "overcast",
    "04n": "overcast",
    "09d": "rain",
    "09n": "rain",
    "10d": "partly-cloudy-day-rain",
    "10n": "partly-cloudy-night-rain",
    "11d": "thunderstorms-rain",
    "11n": "thunderstorms-night-rain",
    "13d": "snow",
    "13n": "partly-cloudy-night-snow",
    "50d": "fog",
    "50n": "fog-night",
  };

  let imgUrl = `https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/${
    codeMapping[props.code]
  }.svg`;
  return <img src={imgUrl} alt={props.alt}></img>;
};
export default WeatherIcon;
