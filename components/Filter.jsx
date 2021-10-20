import React, { useEffect, useState, useContext } from "react";
import Select from "react-select";
import API_URL from "../constants";
import Head from "next/head";
import Image from "next/image";
import Loading from "./Loading";
import countries from "../Data/countries.json";
import { ApiContext } from "../ApiContext.js";
function Filter() {
  const [change, setchange] = useState();
  const { onUpdateSearch, onSearchLocation } = useContext(ApiContext);
  const handleLocationChange = (event) => {
    onUpdateSearch(event.target.value);
  };
  function selectedChanged(e) {
    setchange(e.target.value);
  }
  useEffect(
    (e) => {
      onUpdateSearch(change);
    },
    [change]
  );

  return (
    <main>
      <div>
        <input
          type="search"
          placeholder="Search..."
          onChange={handleLocationChange}
        />
        <button onClick={onSearchLocation}>
          <Image src="/loupe.svg" alt="universe" width={30} height={30} />
        </button>
      </div>
      <div className="absolute ">
        <select onChange={selectedChanged}>
          {countries.map((e) => (
            <option value={e.name}>{e.name}</option>
          ))}
        </select>
      </div>
    </main>
  );
}

export default Filter;
