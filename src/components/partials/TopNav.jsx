/* eslint-disable react-hooks/exhaustive-deps */
// import React from 'react'

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "../../utils/axios";

import noimage from "/noimage.png";

const TopNav = () => {
  const [query, setquery] = useState("");
  const [searches, setsearches] = useState([]);

  const getSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=$${query}`);
      // console.log(data.results);
      setsearches(data.results);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    getSearches();
  }, [query]);

  // console.log(query);

  return (
    <div className="w-[80%] h-[10vh]  relative ml-36 flex  items-center ">
      <i className="ri-search-2-line text-2xl text-zinc-200"></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        className="w-[60%] mx-2 p-3 text-xl outline-none rounded-full hover:bg-slate-800  border-none bg-transparent text-zinc-200"
        type="text"
        placeholder="Search Anything"
      />
      {query.length > 0 && (
        <i
          onClick={() => setquery("")}
          className="ri-close-fill text-2xl text-red-400"
        ></i>
      )}

      <div className="z-[100] w-[60%] mt-2 max-h-[50vh] left-[5%] bg-zinc-200 top-[90%] absolute overflow-auto rounded ">
        {searches.map((s, i) =>
          s.title !== "$" ? (
            <Link
              to={`/${s.media_type}/details/${s.id}`}
              key={i}
              className=" text-zinc-600 font-semibold hover:text-zinc-950 hover:bg-zinc-300 duration-300 w-[100%] p-9 flex justify-start items-center border-b-2 border-zinc-100"
            >
              <img
                className="w-[12vh] h-[12vh] object-cover rounded mr-8 shadow-lg"
                src={
                  s.backdrop_path || s.poster_path || s.profile_path
                    ? `https://image.tmdb.org/t/p/original/${
                        s.poster_path || s.backdrop_path || s.profile_path
                      }`
                    : noimage
                }
                alt=""
              />
              <span>
                {s.name || s.orignal_name || s.title || s.orignal_title}
              </span>
              {/* {s.title !== "$" ? (
                <span>{s.name || s.original_name}</span>
              ) : null} */}
            </Link>
          ) : null
        )}
      </div>
    </div>
  );
};

export default TopNav;
