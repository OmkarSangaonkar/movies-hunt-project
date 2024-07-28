/* eslint-disable react/no-unknown-property */
// import React from 'react'

import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div className="w-[20%] sticky top-0 h-full border-r-2 border-zinc-500 p-6">
      <h1 className="text-white text-3xl font-semibold">
        {/* <i className="text-[#6556CD] ri-clapperboard-fill p-4"></i> */}
        <i className="text-[#6556CD] ri-movie-2-line mr-2"></i>
        <span className="">MoviesHunt</span>
      </h1>

      <nav className="flex flex-col text-zinc-400 text-lg gap-2">
        <h1 className="font-semibold text-white text-lg mt-8 mb-3">
          New Feeds
        </h1>
        <Link
          to="/trending"
          className="trending hover:bg-[#6556CD] hover:text-white duration-300 p-2 rounded-lg"
        >
          <i className="ri-fire-line mr-2"></i>
          Trending
        </Link>
        <Link
          to="/popular"
          className="hover:bg-[#6556CD] hover:text-white duration-300 p-2 rounded-lg"
        >
          <i className="ri-sparkling-2-line mr-2"></i>
          Popular
        </Link>
        <Link
          to="/movie"
          className="hover:bg-[#6556CD] hover:text-white duration-300 p-2 rounded-lg"
        >
          <i className="ri-movie-line mr-2"></i>
          Movies
        </Link>
        <Link
          to="/tv"
          className="hover:bg-[#6556CD] hover:text-white duration-300 p-2 rounded-lg"
        >
          <i className="ri-tv-line mr-2"></i>
          TV Shows
        </Link>
        <Link
          to="/person"
          className="hover:bg-[#6556CD] hover:text-white duration-300 p-2 rounded-lg mb-2"
        >
          <i className="ri-team-line mr-2"></i>
          People
        </Link>
      </nav>
      <hr className="border-none h-[1px] bg-zinc-400 mt-1" />
      <nav className="flex flex-col text-zinc-400 text-lg gap-2">
        <h1 className="font-semibold text-white text-lg mt-5 mb-3">
          Website Information
        </h1>
        <Link
          to="/aboutus"
          className="hover:bg-[#6556CD] hover:text-white duration-300 p-2 rounded-lg"
        >
          <i className="ri-information-line mr-2"></i>
          About
        </Link>
        <Link
          to="/contactus"
          className="hover:bg-[#6556CD] hover:text-white duration-300 p-2 rounded-lg"
        >
          <i className="ri-phone-line mr-2"></i>
          Contact Us
        </Link>
      </nav>
    </div>
  );
};

export default Sidenav;
