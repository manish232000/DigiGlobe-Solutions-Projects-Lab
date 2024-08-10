import React from "react";

export default function Navbar({ isMenuOpen, setIsMenuOpen }) {
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Sliding Menu */}
      <div
        className={`fixed inset-0 z-40 bg-gray-900 bg-opacity-90 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex justify-end p-4">
          <div
            className="w-8 h-8 bg-gray-600 text-white flex items-center justify-center cursor-pointer"
            onClick={toggleMenu}
          >
            X
          </div>
        </div>
        <nav className="flex flex-col items-center mt-12">
          <a href="#home" className="text-white text-lg py-2 hover:text-[#e7c65b]">Home</a>
          <a href="#Shop" className="text-white text-lg py-2 hover:text-[#e7c65b]">Shop</a>
          <a href="#About" className="text-white text-lg py-2 hover:text-[#e7c65b]">About</a>
          <a href="#Contact" className="text-white text-lg py-2 hover:text-[#e7c65b]">Contact</a>
          <a href="#Signin" className="text-white text-lg py-2 hover:text-[#e7c65b]">
            <button className="bg-[#ff8922] px-3 py-2 text-gray-300">Sign In</button>
          </a>
        </nav>
      </div>

      {/* Regular Navbar */}
      <div className={`fixed top-0 left-0 w-full bg-transparent flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 mt-4 z-50`}>
        <div className="ml-0 sm:ml-6 lg:ml-10">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl">LOGO</h1>
        </div>
        <div className="hidden sm:flex flex-row gap-4 sm:gap-6 lg:gap-8 text-sm sm:text-base lg:text-lg items-center text-gray-600">
          <a href="#home" className="hover:text-blue-500 hover:ease-in-out duration-300 font-semibold">Home</a>
          <a href="#Shop" className="hover:text-blue-500 hover:ease-in-out duration-300 font-semibold">Shop</a>
          <a href="#About" className="hover:text-blue-500 hover:ease-in-out duration-300 font-semibold">About</a>
          <a href="#Contact" className="hover:text-blue-500 hover:ease-in-out duration-300 font-semibold">Contact</a>
          <a href="#Signin" className="hover:text-blue-500 font-semibold">
            <button className="bg-[#ff8922] px-3 py-2 text-gray-300">Sign In</button>
          </a>
        </div>
      </div>

      {/* Hamburger Menu Button */}
      <div
        className={`block sm:hidden fixed top-4 right-4 z-50 cursor-pointer`}
        onClick={toggleMenu}
      >
        <div className="flex flex-col items-center justify-center w-8 h-8">
          <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
          <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
        </div>
      </div>
    </>
  );
}
