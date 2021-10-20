import { React, useState, createContext } from "react";

export const  ApiContext = createContext();
import { API_URL, ApiKey } from "./constants";
function ApiProvider(props) {
  const [location, setLocation] = useState("");
  const [temp, setTemp] = useState({});
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [weatherData, setWeatherData] = useState({});
  const [isLoading, setIsLoeading] = useState(false);

  function onUpdateSearch(searchValue) {
    setLocation(searchValue);
  }
  function onUpdategeo(lat, lon) {
    setLat(lat);
    setLon(lon);
    setLocation("")
  }
  const onSearchLocation = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&q=${location}&appid=${ApiKey}`
    )
      .then((res) => res.json())
      .then((res) => setWeatherData(res))
      .then(() => setIsLoeading(true));
  };

  return (
    <ApiContext.Provider  value={{onUpdateSearch , onSearchLocation , onUpdategeo , isLoading , weatherData }}>
      {props.children}
    </ApiContext.Provider >
  );
}
export default ApiProvider;
