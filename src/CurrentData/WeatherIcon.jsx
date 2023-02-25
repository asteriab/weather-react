import Icon from "iweather_icons_react";

const WeatherIcon = (props) => {
  const codeMapping = {
    "01d": "100",
    "01n": "150",
    "02d": "102",
    "02n": "152",
    "03d": "101",
    "03n": "151",
    "04d": "104",
    "04n": "104",
    "09d": "306",
    "09n": "306",
    "10d": "301",
    "10n": "351",
    "11d": "303",
    "11n": "303",
    "13d": "403",
    "13n": "403",
    "50d": "514",
    "50n": "514",
  };
  return <Icon name={codeMapping[props.code]} type="qweather" size={70} />;
};
export default WeatherIcon;
