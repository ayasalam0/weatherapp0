import React, { useState, useContext, useEffect } from "react";
import { ApiContext } from "../Context/ApiContext.js";
const Geo = () => {
  const { onGeoSearch } = useContext(ApiContext);
  const [status, setStatus] = useState("plese try again");

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          onGeoSearch(position.coords.latitude , position.coords.longitude);
        },
        () => {
          setStatus("Unable to retrieve your location");
          alert(status);
        }
      );
    }
  };

  return (
    <div className="flex  justify-center w-screen md:w-1/3 md:relative md:inset-x-1/3  ">
      <button
        className=" bg-myblue w-3/4 text-center rounded-full h-10   "
        onClick={getLocation}
      >
        {" "}
        Find My Location For Me{" "}
      </button>
    </div>
  );
};

export default Geo;
