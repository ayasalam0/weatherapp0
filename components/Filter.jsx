import React, { useEffect, useState, useContext } from "react";
import { IoIosArrowDown } from "react-icons/io";
import API_URL from "../constants";
import Head from "next/head";
import Image from "next/image";
import countries from "../Data/countries.json";
import { ApiContext } from "../Context/ApiContext.js";
import DataDisplay from "../components/DataDisplay.jsx";

function Filter() {
  const { onSearchLocation, OnDropdownChange } = useContext(ApiContext);

  const [QuerySearch, setQuerySearch] = useState("");

  const [dropdown, setdropdown] = useState(false);
  const [DropdownSearchValue, setDropdownSearchValue] = useState("");
  const [SelectedDropDown, setSelectedDropDown] = useState();

  function LocationSearch(e) {
    setQuerySearch(e.target.value);
  }

  function selectedChanged(e) {
    setDropdownSearchValue(e.target.value);
  }

  function SearchButton() {
    onSearchLocation(QuerySearch);
    OnDropdownChange(DropdownSearchValue);
  }
  function DropState() {
    setdropdown(true);
    setdropdown(!dropdown);
  }

  const countriesArray = Object.entries(countries).map((e) => {
    return e;
  });

  const CountriesFilter = countriesArray
    .filter((e) => {
      return e.includes(QuerySearch);
    })
    .map((e) => {
      return e;
    });

  return (
    <main className="w-screen">
      <div>
        <div className="h-auto w-full space-x-2 flex pt-10 px-4 md:justify-center  lg:px-48   ">
          <input
            className=" outulne-none  p-2  w-3/4 bg-transparent border-b-2 border-blue-200 md:w-1/2   "
            type="search"
            placeholder="Search Your Weather Area "
            onChange={LocationSearch}
          />
          <button className="relative right-8" onClick={DropState}>
            <IoIosArrowDown />
          </button>
          <button
            className="  rounded-full bg-mydarkblue w-20 h-10  text-sm font-semibold relative right-2  "
            onClick={SearchButton}
          >
            {" "}
            Search
          </button>
        </div>
        <div>
          {dropdown ? (
            <div className="flex  w-screen md:justify-center px-4 lg:px-48 ">
              <select
                className="appearance-none bg-transparent p-4 ml-4  border-b-2 border-blue-200 outulne-none w-2/3  md:w-3/5   "
                onChange={selectedChanged}
              >
                {CountriesFilter.map((e) => {
                  return e[1].map((e) => {
                    return <option value={e}>{e}</option>;
                  });
                })}
              </select>
              <span className="relative right-6  top-6 ">
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
