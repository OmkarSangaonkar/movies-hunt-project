/* eslint-disable react-hooks/exhaustive-deps */
// import React from 'react'

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import axios from "../utils/axios";
import TopNav from "./partials/TopNav";
import DropDown from "./partials/DropDown";
import Cards from "./partials/Cards";
import Loading from "./Loading";

const Popular = () => {
  const navigate = useNavigate();
  const [category, setcategory] = useState("movie");

  const [popular, setpopular] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  document.title = "Movies HUNT | Popular" + category.toUpperCase();

  const getPopular = async () => {
    try {
      const { data } = await axios.get(`${category}/popular?page=${page}`);
      // console.log(data.results);
      //   setpopular(data.results);
      if (data.results.length > 0) {
        setpopular((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  const refreshHandler = async () => {
    if (popular.length === 0) {
      await getPopular();
    } else {
      setPage(1);
      setpopular([]);
      await getPopular();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return popular.length > 0 ? (
    <div className="w-[100%] h-screen">
      {/* navbar */}
      <div className="p-4 pr-8 w-full h-[14vh]  flex items-center ">
        <h1 className="text-2xl text-zinc-200 p-6 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line mr-5 hover:text-[#6556CD]"
          ></i>
          Popular
        </h1>
        <div className="flex items-center w-[90%] ml-[-3%]">
          <TopNav />
          <DropDown
            title="category"
            options={["movie", "tv"]}
            func={(e) => setcategory(e.target.value)}
          />
          <div className="p-3"></div>
        </div>
      </div>
      {/* body */}
      <InfiniteScroll
        dataLength={popular.length}
        next={getPopular}
        hasMore={hasMore}
        loader={<h1>loading...</h1>}
      >
        <Cards data={popular} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Popular;
