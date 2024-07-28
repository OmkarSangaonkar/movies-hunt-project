// import React from 'react'

import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

import ReactPlayer from "react-player";
import NotFound from "../NotFound";

const Trailer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytvideo = useSelector((state) => state[category].info.videos);

  console.log(ytvideo);

  return (
    <div className="group top-0 left-0 bg-[rgba(0,0,0,0.5)] z-[100] text-white text-5xl absolute w-screen h-screen flex items-center justify-center">
      <div className="relative w-[90%] h-[90%] aspect-w-16 aspect-h-9">
        <Link
          onClick={() => navigate(-1)}
          className="absolute text-3xl right-[50%] top-[2%] z-[500] ri-close-large-line mr-5 p-4 rounded-full text-zinc-200 hover:text-red-500 hover:bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        ></Link>
        {ytvideo ? (
          <ReactPlayer
            className="absolute top-0 left-0 w-full h-full"
            url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
            width="100%"
            height="100%"
            controls={true}
          />
        ) : (
          <NotFound />
        )}
      </div>
    </div>
  );
};

export default Trailer;
