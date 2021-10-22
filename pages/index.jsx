import React, { useState, useContext } from "react";
import Head from "next/head";
import Image from "next/image";
import ApiProvider from "../Context/ApiContext.js";
import Compare from "../components/Compare.jsx";
import Filter from "../components/Filter.jsx";
import Geo from "../components/Geo.jsx";
import DataDisplay from "../components/DataDisplay.jsx";

export default function App() {
  return (
    <>
      <ApiProvider>
        <div className="h-screen  ">
          <Filter />

          <h1 className="text-center text-myred pb-2 ">
            Or Choose Another Way{" "}
          </h1>
          <div className="space-y-4">
            <Geo />
            <Compare />
          </div>
        </div>
      </ApiProvider>
    </>
  );
}
