/* eslint-disable no-unused-vars */
// import React from "react";`
// #6556CD

import LocomotiveScroll from "locomotive-scroll";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import Movie from "./components/Movie";
import TvShows from "./components/TvShows";
import People from "./components/People";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import MovieDetails from "./components/MovieDetails";
import TvDetails from "./components/TvDetails";
import PersonDetails from "./components/PersonDetails";
import Trailer from "./components/partials/Trailer";
import NotFound from "./components/NotFound";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-screen h-screen bg-[#1F1E24]  flex ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />

        {/* Movie Routes */}
        <Route path="/movie" element={<Movie />} />
        {/* Movie Details Route */}
        <Route path="/movie/details/:id" element={<MovieDetails />}>
          <Route path="/movie/details/:id/trailer" element={<Trailer />} />
        </Route>

        {/* TvShows Routes */}
        <Route path="/tv" element={<TvShows />} />
        <Route path="/tv/details/:id" element={<TvDetails />}>
          <Route path="/tv/details/:id/trailer" element={<Trailer />} />
        </Route>

        {/* People Routes */}
        <Route path="/person" element={<People />} />
        <Route path="/person/details/:id" element={<PersonDetails />} />

        {/* AboutUs Route */}
        <Route path="/aboutus" element={<AboutUs />} />

        {/* ContactUs Route */}
        <Route path="/contactus" element={<ContactUs />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
