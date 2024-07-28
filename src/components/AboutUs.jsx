/* eslint-disable react/no-unescaped-entities */
// import React from 'react';
import Sidenav from "./partials/Sidenav";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  document.title = "About Us - Movies Hunt";

  return (
    <div className="w-full h-screen flex">
      <Sidenav />
      <div className="w-4/5 h-full overflow-y-auto">
        <nav className="w-full h-[20%] bg-[#6556CD] text-zinc-200 flex items-center justify-center">
          <h1 className="text-2xl text-zinc-200 p-6 mr-10 font-semibold flex items-center">
            <i
              onClick={() => navigate(-1)}
              className="ri-arrow-left-line mr-5 hover:text-[#6556CD]"
            ></i>
          </h1>
          <h1 className="text-4xl font-bold">ABOUT US</h1>
        </nav>
        <div className="p-10 mt-8">
          <h1 className="text-4xl font-semibold text-zinc-200 mb-5">
            About Us
          </h1>
          <div className="text-lg text-zinc-300 leading-8">
            <p className="mb-5">
              Welcome to{" "}
              <span className="font-bold text-white">Movies Hunt</span>, your
              number one source for all things movies and TV shows. We're
              dedicated to providing you the very best of entertainment, with an
              emphasis on trending movies, TV shows, and personalized
              recommendations.
            </p>
            <p className="mb-5">
              Founded in 2024, Movies Hunt has come a long way from its
              beginnings. When we first started out, our passion for movies and
              TV shows drove us to start our own platform.
            </p>
            <p className="mb-5">
              We hope you enjoy our services as much as we enjoy offering them
              to you. If you have any questions or comments, please don't
              hesitate to contact us.
            </p>
            <p className="mb-5">Sincerely,</p>
            <p className="font-bold text-white">The Movies Hunt Team</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
