import React, { useEffect, useState } from 'react'
import cover from './banner/plain.jpg'
import cover2 from './banner/polo.jpg'
import cover3 from './banner/shirt.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft ,faChevronRight} from '@fortawesome/free-solid-svg-icons'

function Hero() {
   const [index,setindex]=useState(0)
   const[images,setimages]=useState([cover,cover2,cover3])

   useEffect(()=>{
    const intervalChange= setInterval(() => {
        setindex((index+1)% images.length)
    }, 4000);
    return ()=> clearInterval(intervalChange)
   },
   [index,images])

   const leftimage=()=>{
    setindex((index-1+images.length)% images.length)
   }

   const rightimage=()=>{
    setindex((index+1)%images.length)
   }
    return (
<div >
    <img src={images[index]} alt="slider-img" />
    <div className='flex justify-between mx-4 index-0 relative -top-64   '>
        <button className= 'relative  text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none ' onClick={leftimage} >
        <FontAwesomeIcon icon={faChevronLeft} size="lg" style={{color: "#d0d1d2",}} />   </button>
        <button className='text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none' onClick={rightimage}>
        <FontAwesomeIcon icon={faChevronRight} size="lg" style={{color: "#d0d1d2",}} />
        </button>
    </div>

</div>
    )
}

export default Hero
