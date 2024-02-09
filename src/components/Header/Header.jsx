import FavModal from "./FavModal";
import Logo from "./Logo";
import SearchForm from "./SearchForm";

import { useState } from "react";
import HeartIcon from "../../assets/heart.svg";

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
      <nav className="container flex items-center justify-between py-6">
        <Logo />

        <div className="flex items-center gap-4 relative">
          <SearchForm />
          <div
            onClick={() => setShowModal(!showModal)}
            className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all"
          >
            <img src={HeartIcon} alt="" />
            <span>Favourite Locations</span>
          </div>

          {showModal && <FavModal />}
        </div>
      </nav>
    </header>
  );
}
