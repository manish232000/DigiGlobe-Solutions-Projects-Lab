import React, { useEffect } from 'react'
import './Homepage.css'

import myImage from '../../Assets/dog1.avif'
import FindPet from '../FindPet/FindPet';
import Testimonials from '../Testimonial/Testimonials';
import './temp.css'



const Homepage = () => {

  useEffect(() => {
    window.scroll(0, 0);
  }, [])

  return (
    <>
      <div id='x'>
        <div id="innerx">
          <div id="img">
            <div id="Webname">
              <h1>FurEverHomes</h1>
            </div>

            <img src={myImage} alt="" />

          </div>
        </div>
      </div>

      <FindPet />
      <Testimonials />
      

    </>

  )
}

export default Homepage