import React, { useEffect, useState } from "react";

function WeatherDetails({ temp, Description, clouds, wind, humidity }) {
  return (
    <div
      data-aos="flip-left"
      className="top-72  text-xl absolute w-screen md:top-96 md:text-xl  font-mono  font-bold  text-green-50 z-0 "
    >
      <h3>Weather Details</h3>
      <p>Temperature : {temp}K</p>
      <p>Clouds : {Description}</p>
      <p>Cloudy: %{clouds}</p>
      <p>Wind Speed: {wind} m/min</p>
      <p>Humidity: %{humidity}</p>
    </div>
  );
}
export default WeatherDetails;
