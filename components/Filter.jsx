import React, { useEffect, useState, useContext } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Select from "react-select";
import API_URL from "../constants";
import Head from "next/head";
import Image from "next/image";
import Loading from "./Loading";
import countries from "../Data/countries.json";
import { ApiContext } from "../ApiContext.js";
import DataDisplay from "../components/DataDisplay.jsx";
function Filter() {
  const [change, setchange] = useState();
  const { onUpdateSearch, onSearchLocation } = useContext(ApiContext);
  const [dropdown, setdropdown] = useState(false);
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
  function drop() {
    setdropdown(true);
    setdropdown(!dropdown);
  }
  return (
    <main className=" w-screen h-auto flex flex-col ">
      <div>
        <div className="pt-10  px-4 w-screen h-auto space-x-2 flex  ">
          <input
            className="   w-3/4 bg-transparent border-b-2 border-blue-200   "
            type="search"
            placeholder="Search..."
            onChange={handleLocationChange}
          />
          <button className="relative right-6" onClick={drop}>
            <IoIosArrowDown />
          </button>
          <button
            className=" rounded-full bg-blue-500  w-20 h-8  text-sm font-semibold   "
            onClick={onSearchLocation}
          >
            {" "}
            Search
          </button>
        </div>
        <div>
          {dropdown ? (
            <div className="flex flex-row ">
              <select
                className="appearance-none bg-transparent p-4  w-3/4  "
                onChange={selectedChanged}
              >
                {countries.map((e) => (
                  <option value={e.name}>{e.name}</option>
                ))}
              </select>
              <span className="relative right-12 top-6 ">
                <IoIosArrowDown />
              </span>
            </div>
          ) : null}
        </div>
      </div>
      <DataDisplay />
    </main>
  );
}

export default Filter;
