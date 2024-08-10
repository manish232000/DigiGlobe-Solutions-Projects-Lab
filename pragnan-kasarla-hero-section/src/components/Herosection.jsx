import React from "react";
import heroimage from "../assets/heroimg.webp";

function Herosection() {
    const sectionStyle = {
      backgroundImage: `url(${heroimage})`,
      backgroundSize: "cover",
      backgroundPosition: "bottom",
      height: "120vh",
      position: "relative",
    };

    return (
      <div style={sectionStyle} className="relative h-screen pt-[60px]">
        <div className="absolute inset-0 flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center mb-48">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-serif mb-4">
              Elevate Your Space With
            </h1>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-serif mb-6">
              Curated Architectural Elegance!
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-sans font-semibold text-gray-700 mb-4">
            Welcome to our premier architectural destination, where you'll discover a curated selection
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-sans font-semibold text-gray-700 mb-6">
            of exquisite designs and premium materials, tailored to your unique vision and style.
            </p>
            <button className="bg-white text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl px-4 py-2 font-semibold hover:bg-opacity-90">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    );
}

export default Herosection;
