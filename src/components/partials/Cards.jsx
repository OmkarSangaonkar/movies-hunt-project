/* eslint-disable react/prop-types */
// import React from 'react'

import { Link } from "react-router-dom";
import noimage from "/noimage.png";

const Cards = ({ data, title }) => {
  // console.log(title);
  return (
    <div className="text-white flex flex-wrap mt-12 pl-16 py-12 bg-[#1F1E24] ">
      {data.map((card, index) => (
        <Link
          to={`/${card.media_type || title}/details/${card.id}`}
          className="w-48 mr-16 relative"
          key={index}
        >
          <img
            className="h-72 shadow-[8px_18px_38px_4px_rgba(0,0,0,0.6)] "
            // src={`https://image.tmdb.org/t/p/original/${
            //   card.poster_path || card.backdrop_path || card.profile_path
            // }`}
            src={
              card.backdrop_path || card.poster_path || card.profile_path
                ? `https://image.tmdb.org/t/p/original/${
                    card.poster_path || card.backdrop_path || card.profile_path
                  }`
                : noimage
            }
            loading="lazy"
            alt=""
          />
          <h1 className="text-xl text-zinc-300 mt-2 p-2 mb-8 font-semibold">
            {card.name || card.original_name || card.original_title}
          </h1>
          {card.vote_average ? (
            <div className=" absolute bottom-28 right-1 text-white flex justify-center items-center w-8 h-8 rounded-full p-5 font-semibold bg-yellow-500 text-lg">
              {(card.vote_average * 10).toFixed()} <sup>%</sup>
            </div>
          ) : null}
        </Link>
      ))}
    </div>
  );
};

export default Cards;
