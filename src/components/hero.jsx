import React from "react";

const Hero = () => (
  <section id="home" className="bg-red-500 text-white px-8 py-10 w-screen ">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between w-full mb-8">
        {/* Text Section */}
        <div className="flex-1 mt-0 py-2 w-full md:w-1/2 md:pr-8">
          <p className="text-xl mt-0 py-0 md:text-2xl mb-2 text-left">
            <span className="text-7xl text-shadow-lg/30 font-bold">
              {" "}
              Mridangam Academy{" "}
            </span>{" "}
            offers, <br /> <br />
            <span className="font-bold text-black">
              Online Music Classes
            </span>{" "}
            for all age groups.{" "}
          </p>
          <p className="text-lg md:text-sm text-left">
            Learn the art of playing the South Indian percussion Mridangam at your own pace, anytime.
          </p>
        </div>
        {/* Divider for desktop */}
        <div className="hidden md:block h-64 border-l-2 border-white mx-8"></div>
        {/* Image Section */}
        <div className="flex-1 w-full md:w-1/2 flex justify-center">
          <img
            src="/images/mridangam.jpg"
            alt="Mridangam"
            className="w-40 h-64 object-cover rounded shadow"
          />
        </div>
      </div>
      <a
        href="#enrollment"
        className="bg-white text-red-500 px-6 py-3 rounded font-semibold shadow hover:bg-gray-100 transition"
      >
        Enroll now
      </a>
      <h1 className="text-4xl md:text-6xl font-bold py-6 mb-4 w-full text-shadow-lg/30 text-center ">
        Welcome to Mridangam Academy
      </h1>
      <h6 className="text-sm text-center text-black">Learn music from us. Have your trial class "FREE". 
        Buy your instrument from us. Let us know what you need.</h6>
    </div>
  </section>
);

export default Hero;
