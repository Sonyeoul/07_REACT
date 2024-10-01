

export const WeatherQuestion = () => {
  const API_KEY = '207a52923e0d2e1ca4acea1ce48628fc';

  const [position, setPosition] = useState({});
  const [cityName, setCityName] = useState("");
  const [weather, setWeather] = useState({});
  const [wind, setWind] = useState({});

  useEffect(() => {
    found();
  }, []);




  async function found() {
    navigator.geolocation.getCurrentPosition((currentPosition) => {
    const { longitude, latitude } = currentPosition.coords;
    setPosition({
      longitude,
      latitude,
    });

    callApi(latitude, longitude);
  });

    
  }

  async function callApi(latitude, longitude) {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
      const data = await response.json();
      
      setCityName(data.name);
      setWeather(data.weather[0]);
      setWind(data.wind);
    } catch (e) {
      console.error("에러", e);
    }
  }

  return (
    <>
      <h3>오늘의 날씨</h3>
      <h4>{`경도 : ${position.longitude} 위도 : ${position.latitude}`}</h4>
      <h4>{`조회 도시 : ${cityName}`}</h4>
      <h4>{`날씨 : ${weather.main} 날씨 설명 : ${weather.description}`}</h4>
      <h4>{`풍향  : ${wind.deg}도 풍속 : ${wind.speed}m/s`}</h4>
    </>
  );
};
