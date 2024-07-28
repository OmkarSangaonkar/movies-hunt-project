// import React from 'react'

import { useState, useEffect } from "react";

import Sidenav from "./partials/Sidenav";
import TopNav from "./partials/TopNav";
import axios from "../utils/axios";
import Headers from "./partials/Headers";
import HorizontalCards from "./partials/HorizontalCards";
import DropDown from "./partials/DropDown";
import Loading from "./Loading";
const Home = () => {
  document.title = "Movies Hunt";

  const [wallpaper, setwallpaper] = useState(null);
  const [trending, settrending] = useState(null);
  const [category, setcategory] = useState("all");

  const getHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      // console.log(data.results);
      let randomData =
        data.results[(Math.random() * data.results.length).toFixed()];
      setwallpaper(randomData);
    } catch (error) {
      console.log("Error", error);
    }
  };

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      // console.log(data.results);
      settrending(data.results);
    } catch (error) {
      console.log("Error", error);
    }
  };

  // console.log(trending);
  useEffect(() => {
    !wallpaper && getHeaderWallpaper();
    getTrending();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  return wallpaper && trending ? (
    <div className="w-full h-screen flex">
      <Sidenav />
      <div className="w-4/5 h-full overflow-y-auto">
        <TopNav className="sticky top-0 z-10 bg-white" />
        <Headers data={wallpaper} />
        <div className="mb-1 mt-5 pt-5 pl-5 pr-5 flex justify-between ">
          <h1 className="text-zinc-300 text-2xl font-semibold">Trending</h1>

          <DropDown
            title="Filter"
            options={["tv", "movie", "all"]}
            func={(e) => setcategory(e.target.value)}
          />
        </div>

        <HorizontalCards data={trending} />
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Home;
