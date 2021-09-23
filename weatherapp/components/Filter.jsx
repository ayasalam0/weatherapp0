import React, { useEffect, useState } from "react";
import API_URL from "../constants";
import Head from "next/head";
import Image from "next/image";
import Loading from "./Loading";
import WeatherDetails from "../components/WeatherData";

function Filter({ onSearchLocation, onUpdateSearch , Clicked } ) {
  // 

  const handleLocationChange = (event) => {
    onUpdateSearch(event.target.value)
  };
 
  
  return (
    
    <main className=" absolute w-screen top-80 ">

      <input
      data-aos="fade-right" 
        className="p-4 rounded-xl outline-none w-1/2 "
        type="search"
        placeholder="Search..."
        onChange={handleLocationChange}
        onClick={Clicked}
      />
      <button
      data-aos="fade-left"
       onClick={onSearchLocation} className=" absolute  py-2 p-4 ">
        <Image src="/loupe.svg" alt="universe" width={45} height={45} />
      </button>
    </main>
  );
}

export default Filter;
