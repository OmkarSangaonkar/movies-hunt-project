/* eslint-disable react/prop-types */
// import React from 'react'
import { Link } from "react-router-dom";

const Headers = ({ data }) => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.6), rgba(0,0,0,.7)),url(https://image.tmdb.org/t/p/original/${
          data.poster_path || data.backdrop_path || data.profile_path
        }})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat", // Prevents the image from repeating
        backgroundAttachment: "scroll",
      }}
      className="w-full h-[90vh] flex flex-col items-start justify-end p-[5%]"
    >
      <h1 className="w-[70%] text-5xl font-black text-white">
        {data.name || data.original_name || data.original_title}
      </h1>
      <p className="text-white w-[70%] mt-5 mb-4 ">
        {data.overview.slice(0, 200)}...
        <Link
          to={`/${data.media_type}/details/${data.id}`}
          className="text-blue-500"
        >
          more
        </Link>
      </p>
      <p className="text-white">
        <i className="text-yellow-300 mr-2 ri-megaphone-line"></i>
        {""}
        {data.release_date || "no information"}
        <i className="text-yellow-300  ml-6 mr-2 ri-album-line"></i>
        {data.media_type.toUpperCase()}
      </p>
      <Link
        to={`/${data.media_type}/details/${data.id}/trailer`}
        className="bg-[#6556CD] hover:bg-[#6556EF] text-white p-4 mt-4 rounded font-medium"
      >
        Watch Trailer
      </Link>
    </div>
  );
};

export default Headers;
