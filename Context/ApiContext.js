import { React, useState, createContext } from "react";
import { API_URL, ApiKey } from "../constants";

export const ApiContext = createContext();

function ApiProvider(props) {
  const [weatherData, setWeatherData] = useState({});
  const [compareLocation, setcompareLocation] = useState("");
  const [Comaprables, setComaprables] = useState([]);

  const onSearchLocation = (SearchTerm) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?&q=${SearchTerm}&appid=${ApiKey}`
    )
      .then((res) => res.json())
      .then((res) => setWeatherData(res));
  };
  const OnDropdownChange = (DropValue) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?&q=${DropValue}&appid=${ApiKey}`
    )
      .then((res) => res.json())
      .then((res) => setWeatherData(res));
  };

  const onGeoSearch = (Lat, Lon) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${Lat}&lon=${Lon}&appid=${ApiKey}`
    )
      .then((res) => res.json())
      .then((res) => setWeatherData(res));
  };
  const OnCompare = (input) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?&q=${input}&appid=${ApiKey}`
    )
      .then((res) => res.json())
      .then((res) => setComaprables((old) => [...old, res]));
  };
  
  return (
    <ApiContext.Provider
      value={{
        onSearchLocation,
        onGeoSearch,
        weatherData,
        OnCompare,
        setcompareLocation,
        Comaprables,
        OnDropdownChange,
      }}
    >
      {props.children}
    </ApiContext.Provider>
  );
}
export default ApiProvider;
