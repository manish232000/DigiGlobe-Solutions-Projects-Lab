import React from "react";
import Navbar from "./Navbar";
import heroimage from '../assets/herosectionimg.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function Herosection(){
 const styles = {
    backgroundImage:  `url(${heroimage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgrounPosition: 'center center'
   
 }

    return(
        <>
        <Navbar/>
        <section className="w-[100%] sm:h-screen absolute top-0 h-screen lg:relative lg:h-screen bg-black" style={styles}>
            <div className="absolute inset-0 bg-gradient-to-r from-[#1e2026] to-[#000] opacity-75"></div>
            <div className="text-white h-screen relative flex flex-col  justify-center items-center w-[100%]">
                <h1 className="text-center font-serif text-[2rem] md:text-[3rem] mb-3  tracking-wider capitalize font-bold">Do your <span className="bg-gradient-to-tr from-fuchsia-600 to-purple-700 bg-clip-text text-transparent">Practice</span> And All is <span className="bg-gradient-to-tr from-fuchsia-600 to-purple-700 bg-clip-text text-transparent">Coming</span></h1>
                <p className="mx-auto mb-4 text-center text-[1.2rem] tracking-tight font-thin w-[50%]">When the breath wanders the mind also is unsteady. But when the breath is calmed the mind too get calmed.</p>
                <div className="flex justify-center mt-5">
                <button className="bg-transparent outline tracking-wider text-white font-bold py-2 px-4 rounded-full transition duration-500 ease-in-out transform hover:bg-blue-700 hover:outline-none hover:scale-110 hover:shadow-lg">
                    Contact Us
                </button>
                </div>
                <FontAwesomeIcon icon={faAngleDown} className=" cursor-pointer text-[2rem] md:bottom-[40px] bottom-[10px] p-5 rounded-2xl w-[40px] absolute right-[2rem] md:right-[2rem] border-2 border-solid animate-upDown"/>
            </div>
        </section>
        </>
    )
}

export default Herosection;