// import React from 'react'
import notfound from "/404.gif";

const NotFound = () => {
  return (
    <div className="w-full h-full bg-black flex justify-center items-center">
      <img className="h-[50%] object-cover" src={notfound} alt="" />
    </div>
  );
};

export default NotFound;
