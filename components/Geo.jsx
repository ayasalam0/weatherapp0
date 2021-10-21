import React, { useState, useContext, useEffect } from "react";
import { ApiContext } from "../ApiContext.js";
const Geo = () => {
  const { onSearchLocation, onUpdategeo, setLocation } = useContext(ApiContext);
  const [status, setStatus] = useState("plese try again");
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      onSearchLocation();
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);
          setLocation("");
        },
        () => {
          setStatus("Unable to retrieve your location");
          alert(status)
        }
      );
    }
  };
  useEffect(() => {
    onUpdategeo(lat, lon);
  }, [getLocation]);
  
  return (
    <div className="flex flex-row  justify-center w-screen  ">
      
      <button
        className=" bg-blue-300 w-3/4 text-center rounded-full h-10  "
        onClick={getLocation}
      >
        {" "}
        Find My Location For Me{" "}
      </button>
    </div>
  );
};

export default Geo;
