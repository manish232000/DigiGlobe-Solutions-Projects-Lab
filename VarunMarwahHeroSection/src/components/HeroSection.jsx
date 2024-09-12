import React from 'react';
import { MdDeliveryDining,MdOutlineComputer } from "react-icons/md";
import { TiTick } from "react-icons/ti";

const HeroSection = () => {
  return (
    
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12">
          
          
          {/* Text on the left Side */}
          <div className="flex-1 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-5xl font-bold text-blue-900 leading-tight mb-4">
              Your Health, Our Priority
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Discover a wide range of reliable medications and health supplements delivered at your doorstep with the utmost care. Trusted by millions for safe and fast service.
            </p>
  



            {/* Call to Action Buttons */}
            <div className="flex justify-center md:justify-start space-x-4 mb-8">
              <a
                href="/shop"
                className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700 transition duration-300"
              >
                Shop Now
              </a>
              <a
                href="/learn-more"
                className="bg-gray-100 text-blue-600 px-6 py-3 rounded-md shadow-md hover:bg-gray-200 transition duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
  



          {/* Image on Right */}
          <div className="flex-1">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
              alt="Medicinal Products"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
  


  
        {/* Icon section on bottom */}
        <div className="container mx-auto px-6 md:px-12 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-blue-600 p-4 rounded-full mb-4 text-white text-3xl">
            <MdDeliveryDining />

              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Fast Delivery</h3>
              <p className="text-sm text-gray-600 text-center">
                Receive your medicines quickly, safely, and with care.
              </p>
            </div>
  
            <div className="flex flex-col items-center">
              <div className="bg-blue-600 p-4 rounded-full mb-4  text-white text-3xl">
              <TiTick />
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Quality Products</h3>
              <p className="text-sm text-gray-600 text-center">
                We ensure top-quality medicines and health supplements.
              </p>
            </div>
  
            <div className="flex flex-col items-center">
              <div className="bg-blue-600 p-4 rounded-full mb-4 text-white text-3xl">
              <MdOutlineComputer />

              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Easy Online Access</h3>
              <p className="text-sm text-gray-600 text-center">
                Order online from the comfort of your home with just a few clicks.
              </p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default HeroSection;