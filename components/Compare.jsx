import React, { useState, useEffect, useContext } from "react";
import { ApiContext } from "../ApiContext.js";
import DataDisplay from "../components/DataDisplay.jsx";
const Compare = () => {
  const { onUpdateSearch, onSearchLocation } = useContext(ApiContext);
  const [inputFields, setInputFields] = useState([]);
  const [input, setinput] = useState("");
  const [cityDisplay, setcityDisplay] = useState();

  function changed(e) {
    setinput(e.target.value);
    onUpdateSearch(input)
    console.log(input);
  }
  function clicked(e) {
    onSearchLocation()
    setcityDisplay(<DataDisplay/>);

  }
  useEffect(() => {
    
    setInputFields([...inputFields, cityDisplay]);
    console.log(input);
  }, [cityDisplay]);
  return (
    <div>
      <h1>compare two cities </h1>
      <input type="text" value={input} onChange={changed} />
      <button onClick={clicked}>click </button>
      {inputFields.map((e) => {
        return (e);
      })}
    </div>
  );
};

export default Compare;
