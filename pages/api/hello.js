export async function getServerSideProps(context) {
   const [location, setLocation] = useState("");
  const [temp, setTemp] = useState({});
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [weatherData, setWeatherData] = useState({});
  const [isLoading, setIsLoeading] = useState(false);
 fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&q=${location}&appid=${ApiKey}`
    )
      .then((res) => res.json())
      .then((res) => setWeatherData(res))
      .then(() => setIsLoeading(true));
  return {
    props: { 
      location :location,
      temp:temp,
     }, // will be passed to the page component as props
  }
}
export default clicking(){
  return(
    <button>{temp}</button>
  )
}