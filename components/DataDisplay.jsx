import React, { useState, useContext } from "react";
import { ApiContext } from "../ApiContext.js";

import Loading from "./Loading.jsx";
const DataDisplay = () => {
  const {
    onUpdateSearch,
    onSearchLocation,
    onUpdategeo,
    isLoading,
    weatherData,
  } = useContext(ApiContext);
  return (
    <main>
      {isLoading && weatherData.main ? (
        <div>
          <h1>country : {weatherData.name}</h1>
          <p>Temperature : {weatherData.main.temp}K</p>
          <p>Clouds :{weatherData.weather[0].main}</p>
          <p>Cloudy: %{weatherData.clouds.all}</p>
          <p>Wind Speed:{weatherData.wind.speed} m/min</p>
          <p>Humidity: {weatherData.main.humidity}</p>
        </div>
      ) : (
        <Loading />
      )}
    </main>
  );
};

export default DataDisplay;
