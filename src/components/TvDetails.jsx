/* eslint-disable react-hooks/exhaustive-deps */
// import React from 'react'

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadtv, removetv } from "../store/actions/tvActions";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Loading from "../components/Loading";
import HorizontalCards from "./partials/HorizontalCards";

const TvDetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  const { info } = useSelector((state) => state.tv);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncloadtv(id));
    return () => {
      dispatch(removetv());
    };
  }, [id, dispatch]);

  console.log(info);

  return info ? (
    <div className="relative w-screen h-screen overflow-y-auto text-zinc-300">
      <div
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.6), rgba(0,0,0,.7)),url(https://image.tmdb.org/t/p/original/${
            info.detail.poster_path || info.detail.backdrop_path
          })`,
        }}
      ></div>

      <div className="relative w-full h-full px-[8%] text-zinc-300 z-10">
        {/* Part 1 NAVBAR */}
        <nav className="w-full h-24 flex gap-10 items-center text-2xl py-3 ">
          <Link
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line mr-5  text-zinc-200 hover:text-[#6556CD]"
          ></Link>
          <a target="_blank" href={info.detail.homepage}>
            <i className="ri-external-link-fill"></i>
          </a>
          <a
            target="_blank"
            href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
          >
            <i className="ri-earth-line"></i>
          </a>
          <a
            target="_blank"
            href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
          >
            imdb
          </a>
        </nav>

        {/* Part 2 Poster and details */}
        <div className="w-full flex">
          <img
            className="h-80 shadow-[8px_18px_38px_4px_rgba(0,0,0,0.6)] "
            src={`https://image.tmdb.org/t/p/original/${
              info.detail.poster_path || info.detail.backdrop_path
            }`}
            loading="lazy"
            alt=""
          />
          <div className="content ml-10 w-[100%]">
            <h1 className="text-5xl font-black text-white">
              {info.detail.name ||
                info.detail.original_name ||
                info.detail.original_title}
              <small className="text-xl text-zinc-300 ml-2 font-semibold">
                ({info.detail.first_air_date.split("-")[0]})
              </small>
            </h1>
            <div className="flex gap-x-4 items-center mt-2 w-[99%]">
              <span className="text-white hover:bg-fuchsia-500 flex justify-center items-center  w-[15vw] h-8 rounded-md p-4 font-semibold bg-yellow-500   text-sm">
                <h4 className="text-md mr-2">User Score </h4>
                {(info.detail.vote_average * 10).toFixed()} <sup>%</sup>
              </span>
              <span className="text-white hover:bg-fuchsia-500 flex justify-center items-center w-[15vw] h-8 rounded-md p-4 font-semibold bg-cyan-600 text-sm">
                {info.detail.first_air_date}
              </span>
              {info.detail.genres && info.detail.genres.length > 0 ? (
                <span className="text-white hover:bg-fuchsia-500 flex justify-center items-center w-42 h-8 rounded-md p-4 font-semibold bg-green-500 text-sm">
                  {info.detail.genres.map((g) => g.name).join(", ")}
                </span>
              ) : (
                <span className="text-white hover:bg-fuchsia-500 flex justify-center items-center w-42 h-8 rounded-md p-4 font-semibold bg-green-500 text-sm">
                  <h3 className="text-sm">unkown</h3>
                </span>
              )}

              <span className="text-white hover:bg-fuchsia-500 flex justify-center items-center w-42 h-8 rounded-md p-4 font-semibold bg-indigo-700 text-sm">
                Seasons {info.detail.number_of_seasons}
              </span>
            </div>
            <h1 className="text-xl text-white font-black mt-5 mb-2">
              Overview
            </h1>
            <p className="text-md text-white mb-10">
              {info.detail.overview.slice(0, 1000)}
            </p>
            <div className="mb-10">
              <Link
                className="p-4 text-md font-semibold rounded-lg hover:bg-emerald-600 bg-fuchsia-700"
                to={`${pathname}/trailer`}
              >
                <i className="p-2 ri-play-fill"></i>
                Play Trailer
              </Link>
            </div>

            {/* Part 3 platforms availble */}
            <div className="mt-4 mb-5">
              {info.watchproviders && info.watchproviders.flatrate && (
                <div className="flex gap-x-8 mb-8">
                  <h1 className="text-xl">Availble on Platforms: </h1>
                  {info.watchproviders.flatrate.map((w, i) => (
                    <img
                      title={w.provider_name}
                      className="w-12 h-12 object-cover rounded-md "
                      key={i}
                      src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                    />
                  ))}
                </div>
              )}
              {info.watchproviders && info.watchproviders.rent && (
                <div className="flex gap-x-8 mb-8">
                  <h1 className="text-xl">Availble on rent: </h1>
                  {info.watchproviders.rent.map((w, i) => (
                    <img
                      title={w.provider_name}
                      className="w-12 h-12 object-cover rounded-md "
                      key={i}
                      src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                    />
                  ))}
                </div>
              )}
              {info.watchproviders && info.watchproviders.buy && (
                <div className="flex gap-x-8">
                  <h1 className="text-xl"> buy on : </h1>
                  {info.watchproviders.buy.map((w, i) => (
                    <img
                      title={w.provider_name}
                      className="w-12 h-12 object-cover rounded-md "
                      key={i}
                      src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <hr className="bg-zinc-300 border-none h-[1px]" />
        <h1 className="text-2xl mt-10 text-zinc-200 font-semibold  ">
          Recommendations and Similar Stuff
          <i className="ml-4 ri-corner-right-down-fill"></i>
        </h1>
        <HorizontalCards
          data={
            info.recommendations.results.length > 0
              ? info.recommendations.results
              : info.similar.results
          }
        />
      </div>
      <Outlet />
    </div>
  ) : (
    <Loading />
  );
};

export default TvDetails;
