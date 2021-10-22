import React, { useState, useContext } from "react";
import { ApiContext } from "../Context/ApiContext.js";
import InitialImage from "./InitialImage.jsx";

const DataDisplay = () => {
  const { weatherData } = useContext(ApiContext);
  return (
    <main className="w-screen p-4  md:pt-16 md:pb-8  ">
      {weatherData.main ? (
        <div
          className="  bg-mygreen  rounded-xl text-center 
       shadow-2xl md:w-1/3 md:relative md:inset-x-1/3 md:p-4 "
        >
          <h1>country : {weatherData.name}</h1>
          <p>Temperature : {weatherData.main.temp}K</p>
          <p>Clouds :{weatherData.weather[0].main}</p>
          <p>Cloudy: %{weatherData.clouds.all}</p>
          <p>Wind Speed:{weatherData.wind.speed} m/min</p>
          <p>Humidity: {weatherData.main.humidity}</p>
        </div>
      ) : (
        <InitialImage />
      )}
    </main>
  );
};

export default DataDisplay;
