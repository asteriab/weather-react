export default function Conditions() {
  return (
    <ul className="current-conditions">
      <li className="conditions">
        <i className="fa-solid fa-cloud list-icon"></i>
        <span id="conditions"> broken clouds</span>
      </li>
      <li className="wind">
        <i className="fa-solid fa-wind list-icon"></i>
        <span id="wind"> 1</span> m/s
      </li>
      <li className="humidity">
        <i className=" fa-solid fa-umbrella list-icon"></i>
        <span id="humidity"> 66</span>%
      </li>
    </ul>
  );
}
