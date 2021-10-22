import React, { useState, useEffect, useContext } from "react";
import CompareData from "./CompareData.jsx";
import Filter from "../components/Filter";
import { ApiContext } from "../Context/ApiContext.js";
import { IoIosAdd } from "react-icons/io";

const Compare = () => {
  const { OnCompare, Comaprables } = useContext(ApiContext);
  const [input, setinput] = useState("");
  const [CompareButtonState, setCompareButtonState] = useState(false);

  function CompareCities() {
    setCompareButtonState(true);
    setCompareButtonState(!CompareButtonState);
  }

  function CompareSearch(e) {
    setinput(e.target.value);
  }

  const CompareRequest = () => {
    OnCompare(input);
  };
  return (
    <main>
      <div className="flex  justify-center w-screen md:w-1/3 md:relative md:inset-x-1/3  ">
        <button
          className=" bg-myblue w-3/4 text-center rounded-full h-10   "
          onClick={CompareCities}
        >
          Compare Cities{" "}
        </button>
      </div>

      <div>
        {CompareButtonState ? (
          <>
            <div className="w-screen pb-4 pt-4 text-center justify-center">
              <input
                className="  border-b-2 border-blue-200  w-3/4   text-center  h-10  bg-transparent text-black md:w-1/3  outline-none "
                placeholder="Add Cities"
                type="text"
                value={input}
                onChange={CompareSearch}
              />
              <button className="relative right-8 " onClick={CompareRequest}>
                <IoIosAdd />
              </button>{" "}
            </div>

            {Comaprables.map((e) => {
              return (
                <div >
                  <CompareData
                    name={e.name}
                    tempr={e.main.temp}
                    clouds={e.weather[0].main}
                    cloudy={e.clouds.all}
                    wind={e.wind.speed}
                    humidity={e.main.humidity}
                  />
                </div>
              );
            })}
          </>
        ) : null}
      </div>
    </main>
  );
};

export default Compare;
