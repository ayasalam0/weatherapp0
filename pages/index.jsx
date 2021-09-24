import Head from "next/head";
import Image from "next/image";
import classNames from "classnames";
import WeatherDetails from "../components/weatherdata.jsx";
import { API_URL, ApiKey } from "../constants";
import Loading from "../components/Loading";
import Filter from "../components/Filter";
import React, { useState } from "react";

export default function App() {
  const [isLoading, setIsLoeading] = useState(false);
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [temp, setTemp] = useState({});
  const onUpdateSearch = (searchValue) => setLocation(searchValue);
  const onSearchLocation = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${ApiKey}`
    )
      .then((res) => res.json())
      .then((res) => setWeatherData(res))
      .then(() => setIsLoeading(true));
    console.log(weatherData);
    console.log(temp);
  };
  const [Input, setInput] = useState();
  function Clicked() {
    if (Input === false) {
      setInput("!Input");
      return;
    }
    setInput(true);
    setInput(!Input);

    console.log(Input);
  }

  return (
    <main >
      <h1
        className="inset-y-48 m-6 md:inset-48  font-serif  absolute text-2xl font-bold  text-green-50   "
        data-aos="fade-down"
      >
        Search for weather informatios{" "}
      </h1>
      <Filter
        onUpdateSearch={onUpdateSearch}
        onSearchLocation={onSearchLocation}
        Clicked={Clicked}
      />

      {isLoading && weatherData.main ? (
        <WeatherDetails
          temp={weatherData.main.temp}
          Description={weatherData.weather[0].main}
          clouds={weatherData.clouds.all}
          humidity={weatherData.main.humidity}
          wind={weatherData.wind.speed}
          Input={Input}
        />
      ) : (
        <Loading />
      )}
    </main>
  );
}
