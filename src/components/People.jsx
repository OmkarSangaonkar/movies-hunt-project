/* eslint-disable no-unused-vars */
// import React from 'react'

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import axios from "../utils/axios";
import TopNav from "./partials/TopNav";

import Cards from "./partials/Cards";
import Loading from "./Loading";

const People = () => {
  const navigate = useNavigate();
  const [category, setcategory] = useState("popular");

  const [person, setperson] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  document.title = "Movies Hunt | Persons " + category.toUpperCase();

  const getPerson = async () => {
    try {
      const { data } = await axios.get(`/person/${category}?page=${page}`);
      // console.log(data.results);
      //   setperson(data.results);
      if (data.results.length > 0) {
        setperson((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  const refreshHandler = async () => {
    if (person.length === 0) {
      await getPerson();
    } else {
      setPage(1);
      setperson([]);
      await getPerson();
    }
  };

  useEffect(() => {
    refreshHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  return person.length > 0 ? (
    <div className="w-screen h-screen">
      {/* navbar */}
      <div className="p-4 pr-8 w-full h-[14vh]  flex items-center ">
        <h1 className="text-2xl text-zinc-200 p-6 mr-10 font-semibold flex items-center">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line mr-5 hover:text-[#6556CD]"
          ></i>
          Person <span className="text-base ml-5">{category}</span>
        </h1>

        <div className="flex items-center w-[90%] ml-[-3%]">
          <TopNav />
        </div>
      </div>
      {/* body */}
      <InfiniteScroll
        dataLength={person.length}
        next={getPerson}
        hasMore={hasMore}
        loader={<h1>loading...</h1>}
      >
        <Cards data={person} title="person" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default People;
