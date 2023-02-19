import React from "react";
import Conditions from "./Conditions";
import DateTime from "./DateTime";
import "./CurrentData.css";

export default function CurrentData() {
  return (
    <div className="current-block">
      <div>
        <h1 className="city">Helo</h1>

        <DateTime />
      </div>
      <div className="icon">
        <i className="fa-solid fa-cloud"></i>
      </div>
      <div className="current-temp">
        7
        <div className="units">
          <a href="/" className="celsius-link active">
            °C
          </a>{" "}
          |
          <a href="/" className="fahrenheit-link">
            °F
          </a>
        </div>
      </div>
      <Conditions />
    </div>
  );
}
