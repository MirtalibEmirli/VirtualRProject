import React from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20 overflow-hidden">
      <h1 className=" flex flex-col text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR build tools
        <span
          className="bg-gradient-to-r from-orange-500 to-red-800  text-transparent
        bg-clip-text"
        >
          {" "}
          for developers
        </span>
      </h1>
      <p className="mt-10 text-center text-lg text-neutral-500 max-w-4xl">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus,
        expedita! Iure mollitia porro quod nulla ratione. Minima facere et quam
        magnam possimus atque.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r  from-orange-500 to-red-800
      py-3 px-4 mx-3 rounded-md"
        >
          Start for Free
        </a>
        <a
          className="border rounded-md
      px-4 py-3 mx-3 transition-all duration-300 hover:bg-gradient-to-r from-orange-500 to-red-800 "
        >
          Documentation
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          muted
          loop
          className="rounded-lg w-1/3 border 
        border-orange-700 shadow-orange-400 mx-2 my-4"
        >
          <source src={video1}/>Your browser does not support video tag.
        </video>

        <video autoPlay muted loop className="rounded-lg shadow-orange-400
         border-orange-700
        border w-1/3  mx-2 my-4 ">  <source src={video2}/>Your browser does not 
        support video tag.
        </video>
      </div> 
    </div>
  );
};

export default HeroSection;
