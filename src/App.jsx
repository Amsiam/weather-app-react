import {
  FavouriteProvider,
  LocationProvider,
  WeatherProvider,
} from "./providers";

import Page from "./Page";

export default function App() {
  return (
    <LocationProvider>
      <FavouriteProvider>
        <WeatherProvider>
          <Page />
        </WeatherProvider>
      </FavouriteProvider>
    </LocationProvider>
  );
}
