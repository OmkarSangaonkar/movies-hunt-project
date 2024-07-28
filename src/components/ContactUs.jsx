/* eslint-disable react/no-unescaped-entities */
// import React from 'react';
import Sidenav from "./partials/Sidenav";
import { useNavigate } from "react-router-dom";
// import 'remixicon/fonts/remixicon.css'; // Ensure you have Remix Icons imported

const ContactUs = () => {
  const navigate = useNavigate();
  document.title = "Contact Us - Movies Hunt";

  return (
    <div className="w-full h-screen flex">
      <Sidenav />
      <div className="w-4/5 h-full overflow-y-auto">
        <nav className="w-full h-[20%] bg-zinc-800 hover:bg-[#cdad56] text-zinc-200 flex items-center justify-center">
          <h1 className="text-2xl text-zinc-200 p-6 mr-10 font-semibold flex items-center">
            <i
              onClick={() => navigate(-1)}
              className="ri-arrow-left-line mr-5 hover:text-[#6556CD]"
            ></i>
          </h1>
          <h1 className="text-4xl font-bold">CONTACT US</h1>
        </nav>
        <div className="p-10 mt-8">
          <h1 className="text-4xl font-semibold text-zinc-200 mb-5">
            Contact Us
          </h1>
          <div className="text-lg text-zinc-300 leading-8">
            <p className="mb-5">
              We'd love to hear from you! Whether you have a question about
              features, pricing, need a demo, or anything else, our team is
              ready to answer all your questions.
            </p>
            <p className="mb-5">
              You can reach us through the following social media platforms:
            </p>
            <div className="flex space-x-4 text-3xl">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#6556CD]"
              >
                <i className="ri-facebook-fill"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#6556CD]"
              >
                <i className="ri-instagram-line"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#6556CD]"
              >
                <i className="ri-twitter-line"></i>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#6556CD]"
              >
                <i className="ri-youtube-line"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#6556CD]"
              >
                <i className="ri-linkedin-box-line"></i>
              </a>
            </div>

            <p className="mt-5">Sincerely,</p>
            <p className="font-bold text-white">The Movies Hunt Team</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
