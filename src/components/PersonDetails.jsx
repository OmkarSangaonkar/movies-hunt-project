// import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadperson, removeperson } from "../store/actions/personActions";
// import { asyncloadmovie, removemovie } from "../store/actions/movieActions";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import HorizontalCards from "./partials/HorizontalCards";

const PersonDetails = () => {
  // const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  const { info } = useSelector((state) => state.person);
  // const { movieInfo } = useSelector((state) => state.movie);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncloadperson(id));

    return () => {
      dispatch(removeperson());
    };
  }, [id, dispatch]);

  // console.log(info);

  return info ? (
    <div className="relative w-screen h-screen overflow-y-auto text-zinc-300">
      <div
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center z-0"
        style={{
          backgroundImage:
            info.combinedCredits.cast.length > 0
              ? `linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.6), rgba(0,0,0,.7)), url(https://image.tmdb.org/t/p/original/${
                  info.combinedCredits.cast[
                    Math.floor(Math.random() * info.combinedCredits.cast.length)
                  ].backdrop_path || "bg-black"
                })`
              : "bg-black",
        }}
      ></div>

      <div className="relative w-full h-full px-[8%] text-zinc-300 z-10">
        {/* Part 1 NAVBAR */}
        <nav className="w-full h-24 flex gap-10 items-center text-2xl py-3 ">
          <Link
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line mr-5  text-zinc-200 hover:text-[#6556CD]"
          ></Link>
        </nav>

        {/* Part 2 Poster and details */}
        <div className="w-full flex">
          <div className="flex flex-col">
            <img
              className="h-80 shadow-[8px_18px_38px_4px_rgba(0,0,0,0.6)] "
              src={`https://image.tmdb.org/t/p/original/${
                info.detail.poster_path ||
                info.detail.backdrop_path ||
                info.detail.profile_path
              }`}
              loading="lazy"
              alt=""
            />
            {/* SOCIALS ICONS DIV */}

            <div className="flex mt-8 flex-col mb-10">
              <h1 className="text-xl font-semibold mb-5">Socials</h1>
              <div className="">
                <a
                  href={
                    info.externalid.facebook_id
                      ? `https://www.facebook.com/${info.externalid.facebook_id}`
                      : `https://www.facebook.com`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white  hover:text-[#6556CD] mr-5 text-3xl"
                >
                  <i className="ri-facebook-fill"></i>
                </a>
                <a
                  href={`https://www.instagram.com/${info.externalid.instagram_id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#6556CD] mr-5 text-3xl"
                >
                  <i className="ri-instagram-line"></i>
                </a>
                <a
                  href={`https://x.com/${info.externalid.twitter_id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#6556CD] mr-5 text-3xl "
                >
                  <i className="ri-twitter-x-line"></i>
                </a>
                <a
                  href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#6556CD] mr-4 text-3xl "
                >
                  <i className="ri-earth-line"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="content ml-10 w-[80%]">
            <h1 className="text-6xl font-black text-white mb-5">
              {info.detail.name ||
                info.detail.original_name ||
                info.detail.original_title}
            </h1>

            <div className="flex gap-x-4 items-center mt-2 mb-8 w-[95%]">
              <span className="text-white hover:bg-fuchsia-500 flex justify-center items-center  w-[10vw] h-8 rounded-md p-4 font-semibold bg-yellow-500   text-sm">
                <h4 className="text-md mr-2">Gender:</h4>
                {info.detail.gender === 1 ? "Female" : "Male"}
              </span>
              <span className="text-white hover:bg-fuchsia-500 flex justify-center items-center w-[11vw] h-8 rounded-md p-4 font-semibold bg-cyan-600 text-sm">
                <h4 className="text-md mr-2">DOB:</h4>
                {info.detail.birthday}
              </span>

              <span className="text-white hover:bg-fuchsia-500 flex justify-center items-center w-42 h-8 rounded-md p-4 font-semibold bg-green-500 text-sm">
                <h4 className="text-md mr-2">Birth Place:</h4>
                {info.detail.place_of_birth}
              </span>

              <span className="text-white hover:bg-fuchsia-500 flex justify-center items-center w-42 h-8 rounded-md p-4 font-semibold bg-indigo-700 text-sm">
                {info.detail.known_for_department}
              </span>
            </div>
            <h5 className="text-lg text-white font-semibold">
              Also Known As <i className="ri-corner-right-down-fill mr-3"></i>
              <div className="flex flex-row flex-wrap gap-2 mb-5 text-base font-normal">
                {info.detail.also_known_as.map((name, i) => (
                  <h2 className="inline-block" key={i}>
                    {name},
                  </h2>
                ))}
              </div>
            </h5>
            <h1 className="text-2xl text-white font-semibold mt-8 mb-5">
              Biography
            </h1>
            <p className="text-md text-white mb-10">{info.detail.biography}</p>
          </div>
        </div>
        <hr className="bg-zinc-300 border-none h-[1px]" />
        <h1 className="text-2xl mt-10 text-zinc-200 font-semibold  ">
          Known For
          <i className="ml-4 ri-corner-right-down-fill"></i>
        </h1>
        <div className="mb-10 mt-8 w-full">
          <HorizontalCards
            data={
              info.combinedCredits.cast.length > 0
                ? info.combinedCredits.cast
                : "no data available"
            }
          />
        </div>
      </div>
      <Outlet />
    </div>
  ) : (
    <Loading />
  );
};

export default PersonDetails;
