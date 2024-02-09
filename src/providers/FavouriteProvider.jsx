import { FavouriteContext } from "../context";
import { useLocalStorage } from "../hooks";
export default function FavouriteProvider({ children }) {
  const [favourites, setFavourite] = useLocalStorage("favourites", []);

  function addToFavourite(lat, long, location) {
    setFavourite([
      ...favourites,
      {
        lat,
        long,
        location,
      },
    ]);
  }

  function removeToFavourite(location) {
    const newFavourite = favourites.filter(
      (items) => items.location !== location
    );
    setFavourite(newFavourite);
  }

  return (
    <FavouriteContext.Provider
      value={{ favourites, addToFavourite, removeToFavourite }}
    >
      {children}
    </FavouriteContext.Provider>
  );
}
