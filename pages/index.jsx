import Head from "next/head";
import Dropdown from "react-dropdown";
import Compare from "../components/Compare.jsx";
import ApiProvider from "../ApiContext.js";
import Image from "next/image";
import classNames from "classnames";
import Loading from "../components/Loading";
import Filter from "../components/Filter.jsx";
import React, { useState, useContext } from "react";
import Geo from "../components/Geo.jsx";
import { ApiContext } from "../ApiContext.js";
import DataDisplay from "../components/DataDisplay.jsx";
export default function App() {
  return (
    <>
      <ApiProvider>
        <main className="flex  space-y-22 flex-col p-4 ">
          <Filter />
          <div className=" space-y-4">
          <Geo />
          <Compare />
          </div>
          
        </main>
      </ApiProvider>
    </>
  );
}
