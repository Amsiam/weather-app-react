import { WeatherContext } from "../context";
import { useWeatherData } from "../hooks";

const WeatherProvider = ({ children }) => {
  const { loading, error, data } = useWeatherData();

  return (
    <WeatherContext.Provider value={{ loading, error, data }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
