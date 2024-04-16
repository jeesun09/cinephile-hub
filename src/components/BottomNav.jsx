import React from "react";
import { Link } from "react-router-dom";
import { FaFire } from "react-icons/fa";
import { BiSolidCameraMovie, BiMovie } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 flex w-screen justify-around bg-[#2D9596] z-50">
      <div>
        <Link
          to="/trending"
          className="flex flex-col items-center mt-2 cursor-pointer"
        >
          <FaFire className="text-2xl" />
          <p className="text-xl">Trending</p>
        </Link>
      </div>
      <div>
        <Link
          to="/movies"
          className="flex flex-col items-center mt-2 cursor-pointer"
        >
          <BiSolidCameraMovie className="text-2xl" />
          <p className="text-xl">Movies</p>
        </Link>
      </div>
      <div>
        <Link
          to="/series"
          className="flex flex-col items-center mt-2 cursor-pointer"
        >
          <BiMovie className="text-2xl" />
          <p className="text-xl">Series</p>
        </Link>
      </div>
      <div>
        <Link
          to="/search"
          className="flex flex-col items-center mt-2 cursor-pointer"
        >
          <IoSearch className="text-2xl" />
          <p className="text-xl">Search</p>
        </Link>
      </div>
    </div>
  );
};

export default BottomNav;
