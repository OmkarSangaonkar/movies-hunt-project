/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import React from 'react'

import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import noimage from "/noimage.png";

const Horizontalitems = ({ data }) => {
  const navigate = useNavigate();
  // console.log(data);

  return (
    <div className="w-full h-[70vh] p-5 mt-2 overflow-auto">
      <div className="flex overflow-hidden mt-10">
        {data.length > 0 ? (
          <motion.div
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", duration: 50, repeat: Infinity }}
            className="w-full flex justify-start items-center flex-shrink-0 space-x-8"
          >
            {data.map((item, index) => (
              <Link
                to={`/${item.media_type}/details/${item.id}`}
                key={index}
                className="relative  w-56 h-80 bg-zinc-900 rounded-md flex-none"
              >
                <img
                  src={
                    item.backdrop_path || item.poster_path
                      ? `https://image.tmdb.org/t/p/original/${
                          item.poster_path || item.backdrop_path
                        }`
                      : noimage
                  }
                  alt=""
                  className="w-full h-full object-cover rounded"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 rounded">
                  <h1 className="w-full text-2xl text-white mt-1 p-3 font-black text-center">
                    {item.name ||
                      item.original_name ||
                      item.title ||
                      item.original_title}
                  </h1>
                  <p className="text-white w-full mb-2 p-3 font-normal text-center text-md">
                    {item.overview.slice(0, 90)}...
                    <span
                      onClick={() =>
                        navigate(`/${item.media_type}/details/${item.id}`)
                      }
                      className="text-blue-500"
                    >
                      more
                    </span>
                  </p>
                </div>
              </Link>
            ))}
          </motion.div>
        ) : (
          <h1 className="text-3xl text-white font-semibold mt-5 ">
            Nothing to Show
          </h1>
        )}
      </div>
    </div>
  );
};

export default Horizontalitems;
