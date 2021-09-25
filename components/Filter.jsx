import React, { useEffect, useState } from "react";
import API_URL from "../constants";
import Head from "next/head";
import Image from "next/image";
import Loading from "./Loading";
import WeatherDetails from "../components/weatherdata.jsx";

function Filter({ onSearchLocation, onUpdateSearch }) {
  const handleLocationChange = (event) => {
    onUpdateSearch(event.target.value);
  };

  return (
    <main className=" top-36  md:top-80 absolute w-screen    ">
      <input
        data-aos="fade-down"
        className="p-4 rounded-xl  outline-none md:w-1/2 "
        type="search"
        placeholder="Search..."
        onChange={handleLocationChange}
      />
      <button
        data-aos="fade-left"
        onClick={onSearchLocation}
        className=" absolute p-4   py-2 "
      >
        <Image src="/loupe.svg" alt="universe" width={45} height={45} />
      </button>
    </main>
  );
}

export default Filter;
