import React, { useState, useEffect } from 'react'

import { ApiContext } from "../ApiContext.js";
const CompareData = () => {
  const {
    onUpdateSearch,
    onSearchLocation,
    onUpdategeo,
    isLoading,
    weatherData,
  } = useContext(ApiContext);
  return ( 
    <div>
    
    <DataDisplay/>
    
    </div>
   );
}
 
export default CompareData;