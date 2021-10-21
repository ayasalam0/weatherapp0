import React, { useState, useContext, useEffect } from "react";
import { ApiContext } from "../ApiContext.js";
const Geo = () => {
  const {
    onSearchLocation,
    onUpdategeo,
    setLocation,
  } = useContext(ApiContext);
  const [status, setStatus] = useState(null);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);
          setLocation("")
        },
        () => {
          setStatus("Unable to retrieve your location");
        }
      );
    }
  };
  useEffect(() => {
    onUpdategeo(lat, lon);
  }, [getLocation]);
  return (
    <div className="text-center flex  flex-col space-y-12 ">
      <button onClick={onSearchLocation}> click </button>
      <button onClick={getLocation}>Get Location</button>
      <h1>Coordinates</h1>
      <p>{status}</p>
      {lat && <p>Latitude: {lat}</p>}
      {lon && <p>Longitude: {lon}</p>}
    </div>
  );
};

export default Geo;
