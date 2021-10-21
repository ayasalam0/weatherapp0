import React, { useState, useEffect, useContext } from "react";
import CompareData from "./CompareData.jsx";
import Filter from "../components/Filter";
import { ApiContext } from "../ApiContext.js";
import { IoIosAdd } from "react-icons/io";

const Compare = () => {
  const [CompareOnState, setCompareOnState] = useState(false);
  function CompareOn() {
    setCompareOnState(true);
    setCompareOnState(!CompareOnState);
  }
  const {
    add,
    setWeatherData,
    OnCompare,
    onUpdateCompare,
    setcompareLocation,
  } = useContext(ApiContext);
  const [inputFields, setInputFields] = useState([]);
  const [input, setinput] = useState("");

  function changed(e) {
    setinput(e.target.value);
    onUpdateCompare(input);

    console.log("input");
  }

  useEffect(() => {
    console.log(inputFields);
  }, [input]);

  return (
    <div className=" pb-4  w-screen text-center ">
      <button
        className=" bg-blue-300 w-3/4 text-center rounded-full h-10  "
        onClick={CompareOn}
      >
        Compare Cities{" "}
      </button>
      {CompareOnState ? (
        <div className="w-screen bg-gray-400 flex flex-row justify-center ">
          
          <input
            className=" w-3/4 text-center rounded-full h-10 text-black "
            placeholder="Compare cities"
            type="text"
            value={input}
            onChange={changed}
          />
          <button className="relative right-8 " onClick={OnCompare}>< IoIosAdd/></button>
          <span>
          <ul>
            {/* {" "}
        {inputFields.map((e) => {
          return <li>{e}</li>;
        })}{" "} */}
            <li>{inputFields}</li>
          </ul></span>
          {" "}
        </div>
      ) : null}
    </div>
  );
};

export default Compare;
