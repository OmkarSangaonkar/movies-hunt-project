// import React from 'react'
import loader from "/loading.gif";

const Loading = () => {
  return (
    <div className="w-full h-full bg-black flex justify-center items-center">
      <img className="h-[50%] object-cover" src={loader} alt="" />
    </div>
  );
};

export default Loading;
