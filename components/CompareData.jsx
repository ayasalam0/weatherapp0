import React, { useState, useContext } from "react";

const CompareData = (props) => {
  return (
    <main className="w-screen p-4    ">
      <div
        className="  bg-mygreen  rounded-xl text-center 
       shadow-2xl md:w-1/3 md:relative md:inset-x-1/3 md:p-4 "
      >
        <h1>country : {props.name}</h1>
        <p>Temperature : {props.tempr}K</p>
        <p>Clouds :{props.clouds}</p>
        <p>Cloudy: %{props.cloudy}</p>
        <p>Wind Speed:{props.wind} m/min</p>
        <p>Humidity: {props.humidity}</p>
      </div>
    </main>
  );
};

export default CompareData;
