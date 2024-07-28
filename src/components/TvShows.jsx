// import React from 'react'

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import axios from "../utils/axios";
import TopNav from "./partials/TopNav";
import DropDown from "./partials/DropDown";
import Cards from "./partials/Cards";
import Loading from "./Loading";

const TvShows = () => {
  const navigate = useNavigate();
  const [category, setcategory] = useState("airing_today");

  const [tv, settv] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  document.title = "Movies Hunt | TV shows" + category.toUpperCase();

  const getTv = async () => {
    try {
      const { data } = await axios.get(`/tv/${category}?page=${page}`);
      // console.log(data.results);
      //   settv(data.results);
      if (data.results.length > 0) {
        settv((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  const refreshHandler = async () => {
    if (tv.length === 0) {
      await getTv();
    } else {
      setPage(1);
      settv([]);
      await getTv();
    }
  };

  useEffect(() => {
    refreshHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  return tv.length > 0 ? (
    <div className="w-screen h-screen ">
      {/* navbar */}
      <div className="p-4 pr-8 w-full h-[14vh]  flex items-center ">
        <h1 className="text-2xl text-zinc-200 p-6 mr-10 font-semibold flex items-center">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line mr-5 hover:text-[#6556CD]"
          ></i>
          TV <span className="text-base ml-5">{category}</span>
        </h1>

        <div className="flex items-center w-[90%] ml-[-3%]">
          <TopNav />
          <DropDown
            title="category"
            options={["on_the_air", "popular", "top_rated", "airing_today"]}
            func={(e) => setcategory(e.target.value)}
          />
          <div className="p-3"></div>
        </div>
      </div>
      {/* body */}
      <InfiniteScroll
        dataLength={tv.length}
        next={getTv}
        hasMore={hasMore}
        loader={<h1>loading...</h1>}
      >
        <Cards data={tv} title="tv" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default TvShows;
