import { useContext } from "react";
import HeartRedIcon from "../../assets/heart-red.svg";
import HeartIcon from "../../assets/heart.svg";
import { FavouriteContext, WeatherContext } from "../../context";

export default function AddToFav() {
  const { data } = useContext(WeatherContext);

  const { addToFavourite, removeToFavourite, favourites } =
    useContext(FavouriteContext);

  const hasFavourite =
    favourites.findIndex((fav) => fav.location === data.location) === -1;

  function handleAddToClick() {
    if (hasFavourite) {
      addToFavourite(data.lat, data.long, data.location);
    } else {
      removeToFavourite(data.location);
    }
  }
  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          onClick={handleAddToClick}
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
        >
          <span>Add to Favourite</span>
          <img src={hasFavourite ? HeartIcon : HeartRedIcon} alt="" />
        </button>
      </div>
    </div>
  );
}
