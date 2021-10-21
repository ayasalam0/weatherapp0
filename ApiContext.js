import { React, useState, createContext } from "react";

export const ApiContext = createContext();
import { API_URL, ApiKey } from "./constants";
function ApiProvider(props) {
  const [location, setLocation] = useState("");
  const [temp, setTemp] = useState({});
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [weatherData, setWeatherData] = useState({});
  const [display, setdisplay] = useState({});
  const [compareLocation, setcompareLocation] = useState("");
  const [add, setadd] = useState()
  function onUpdateSearch(searchValue) {
    setLocation(searchValue);

  }
  function onUpdategeo(lat, lon) {
    setLat(lat);
    setLon(lon);
  }
  function onUpdateCompare(v){
    setcompareLocation(v);
    
    
  }
  const onSearchLocation = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&q=${location}&appid=${ApiKey}`
    )
      .then((res) => res.json())
      .then((res) => setWeatherData(res));
     
  };
  const OnCompare = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?&q=${compareLocation}&appid=${ApiKey}`
    )
      .then((res) => res.json())
      .then((res) => setdisplay(res));
     
   
  };

  return (
    <ApiContext.Provider
      value={{
        onUpdateSearch,
        onSearchLocation,
        onUpdategeo,
        weatherData,
        setLocation,
        display,
        setdisplay,
        OnCompare,
        setcompareLocation,
        setWeatherData,
        onUpdateCompare,
        temp,
        add
      }}
    >
      {props.children}
    </ApiContext.Provider>
  );
}
export default ApiProvider;
