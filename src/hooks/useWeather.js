import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../context";

export default function useWeatherData() {
  const [data, setData] = useState({
    location: "",
    climate: "",
    temparature: "",
    maxTemperature: "",
    minTemperature: "",
    humidity: "",
    cloudPercentage: "",
    wind: "",
    time: "",
    long: "",
    lat: "",
  });

  const { selectedLocation } = useContext(LocationContext);


  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });

  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = true;

    async function fetchWeatherData(lat, long) {
      try {
        setLoading({
          state: true,
          message: "Fetching weather data",
        });

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${
            import.meta.env.VITE_WEATHER_API
          }&units=metric`
        );

        if (!response.ok) {
          const errorMessage = `Fetching data failed: ${response.status}`;

          throw new Error(errorMessage);
        }

        const weatherData = await response.json();

        const updatedData = {
          location: weatherData?.name,
          climate: weatherData?.weather[0]?.main,
          temparature: weatherData?.main?.temp,
          maxTemperature: weatherData?.main?.temp_max,
          minTemperature: weatherData?.main?.temp_min,
          humidity: weatherData?.main?.humidity,
          cloudPercentage: weatherData?.clouds?.all,
          wind: weatherData?.wind?.speed,
          time: weatherData?.dt,
          long: long,
          lat: lat,
        };

        setData(updatedData);
      } catch (e) {
        setError(e);
      } finally {
        setLoading({
          state: false,
          message: "Featched Done",
        });
      }
    }

    setLoading({
      loading: true,
      message: "Finding location...",
    });
    if (selectedLocation.lat && selectedLocation.long) {
      fetchWeatherData(selectedLocation.lat, selectedLocation.long);
    } else {
      navigator.geolocation.getCurrentPosition(function (position) {
        fetchWeatherData(position.coords.latitude, position.coords.longitude);
      });
    }

    return () => {
      ignore = false;
    };
  }, [selectedLocation]);

  return {
    data,
    loading,
    error,
  };
}
