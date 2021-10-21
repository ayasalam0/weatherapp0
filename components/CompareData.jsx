import React, { useState, useContext } from "react";
import { ApiContext } from "../ApiContext.js";

import Loading from "./Loading.jsx";
const CompareData = () => {
  const {
   
    display,

  } = useContext(ApiContext);
  return (
    <main>
      {display.main ? (
        <div>
          <h1>country : {display.name}</h1>
          <p>Temperature : {display.main.temp}K</p>
          <p>Clouds :{display.weather[0].main}</p>
          <p>Cloudy: %{display.clouds.all}</p>
          <p>Wind Speed:{display.wind.speed} m/min</p>
          <p>Humidity: {display.main.humidity}</p>
        </div>
      ) : (
        <Loading />
      )}
    </main>
  );
};

export default CompareData;
