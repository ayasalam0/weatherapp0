import React, { useEffect, useState } from "react";

function WeatherDetails({ temp, Description, clouds, wind, humidity , Input} ) {
  console.log(Input)
  return (
    <div data-aos="flip-right" className="bottom-48 text-l absolute w-screen md:bottom-24 md:text-xl  font-serif  font-bold  text-green-50 z-0 " style={{
      
      display : (Input ==="Input") ?  "none"  : "block"
    }}>
      
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
