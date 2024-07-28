/* eslint-disable react-hooks/exhaustive-deps */
// import React from 'react'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import TopNav from "./partials/TopNav";
import DropDown from "./partials/DropDown";

import axios from "../utils/axios";

import Cards from "./partials/Cards";
import Loading from "./Loading";

const Trending = () => {
  const navigate = useNavigate();
  const [category, setcategory] = useState("all");
  const [duration, setduration] = useState("day");
  const [trending, settrending] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  document.title = "Movies HUNT | Trending" + category.toUpperCase();

  const getTrending = async () => {
    try {
      const { data } = await axios.get(
        `/trending/${category}/${duration}?page=${page}`
      );
      // console.log(data.results);
      //   settrending(data.results);
      if (data.results.length > 0) {
        settrending((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  const refreshHandler = async () => {
    if (trending.length === 0) {
      await getTrending();
    } else {
      setPage(1);
      settrending([]);
      await getTrending();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category, duration]);

  console.log(trending);

  return trending.length > 0 ? (
    <div className="w-full h-screen ">
      {/* navbar */}
      <div className="p-4 pr-8 w-full h-[14vh]  flex items-center ">
        <h1 className="text-2xl text-zinc-200 p-6 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line mr-5 hover:text-[#6556CD]"
          ></i>
          Trending
        </h1>
        <div className="flex items-center w-[90%] ml-[-3%]">
          <TopNav />
          <DropDown
            title="category"
            options={["movie", "tv", "all"]}
            func={(e) => setcategory(e.target.value)}
          />
          <div className="p-3"></div>
          <DropDown
            title="Duration"
            options={["week", "day"]}
            func={(e) => setduration(e.target.value)}
          />
        </div>
      </div>
      {/* body */}
      <InfiniteScroll
        dataLength={trending.length}
        next={getTrending}
        hasMore={hasMore}
        loader={<h1>loading...</h1>}
      >
        <Cards data={trending} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Trending;
