import React, { useState, useEffect,useContext } from "react";
import Filter from "../components/Filter/Filter";
import { ApiContext } from "../ApiContext.js";
const Compare = () => {
  const { onUpdateSearch, onSearchLocation } = useContext(ApiContext);
  const [inputFields, setInputFields] = useState([]);
  const [input, setinput] = useState("");
  const [cityDisplay, setcityDisplay] = useState();

  function changed(e) {
    setinput(e.target.value);
    console.log("object");
  }
  function clicked(e) {
    setcityDisplay(input);
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
        return <p>{e}</p>;
      })} 
    </div>
  );
};

export default Compare;
