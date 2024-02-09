import { useContext } from "react";
import PinIcon from "../../assets/pin.svg";
import { WeatherContext } from "../../context";
import getFormattedDate from "../../utils/date-util";

import CloudIcon from "../../assets/cloud.svg";
import HazeIcon from "../../assets/haze.svg";
import SnowIcon from "../../assets/icons/snow.svg";
import SunnyIcon from "../../assets/icons/sunny.svg";
import RainIcon from "../../assets/rainy.svg";
import ThundarIcon from "../../assets/thunder.svg";

export default function Location() {
  const { data } = useContext(WeatherContext);

  function getWeatherIcon(climate) {
    switch (climate) {
      case "Rain":
        return RainIcon;
      case "Clouds":
        return CloudIcon;
      case "Snow":
        return SnowIcon;

      case "Thunder":
        return ThundarIcon;

      case "Sunny":
        return SunnyIcon;
      case "Haze":
      case "Fog":
      case "Mist":
        return HazeIcon;
      default:
        return SunnyIcon;
    }
  }
  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={getWeatherIcon(data.climate)} alt="cloud" />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {Math.round(data.temparature)}°
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={PinIcon} />
            <h2 className="text-2xl lg:text-[50px]">{data.location}</h2>
          </div>
        </div>
      </div>

      <p className="text-sm lg:text-lg">
        {getFormattedDate(data.time, "time", false)} -
        {getFormattedDate(data.time, "date", false)}
      </p>
    </div>
  );
}
