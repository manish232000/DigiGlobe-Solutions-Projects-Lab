import React from 'react'
import './Hero.css'

import { FaArrowRight } from "react-icons/fa";
import { IoPlaySharp } from "react-icons/io5";
import { IoPauseSharp } from "react-icons/io5";


const Hero = ( {textArray,count,setCount,videoStatus,setVideoStatus}) => {
  return (

    <div className="hero">

      <div className="hero-text">

        <p>{textArray.text_1}</p>
        <p>{textArray.text_2}</p>

      </div>

      <div className="hero-explore">

        <h2>Explore the features</h2>

        <div className="arrow">

            <FaArrowRight />

        </div>

      </div>

      <div className="hero-bottom">

        <ul className="circles">

            <li onClick={() => setCount(0)} className={count==0 ? "circle active" : "circle"}></li>
            <li onClick={() => setCount(1)} className={count==1 ? "circle active" : "circle"}></li>
            <li onClick={() => setCount(2)} className={count==2 ? "circle active" : "circle"}></li>
            <li onClick={() => setCount(3)} className={count==3 ? "circle active" : "circle"}></li>
            <li onClick={() => setCount(4)} className={count==4 ? "circle active" : "circle"}></li>
        </ul>

        <div className="hero-play">

          <div className="play-buttons" onClick={() => setVideoStatus(!videoStatus)}>

            <div className="video-button">

              { videoStatus ? <IoPauseSharp /> : <IoPlaySharp /> }


            </div>

            <p>See the video</p>

          </div>
        </div>
      </div>


    </div>
  )
}

export default Hero