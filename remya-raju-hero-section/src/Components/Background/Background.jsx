import React from 'react'
import './Background.css'

import video from '../../assets/video_1.mp4'
import img_1 from '../../assets/img_1.avif'
import img_2 from '../../assets/img_2.avif'
import img_3 from '../../assets/img_3.avif'
import img_4 from '../../assets/img_4.avif'
import img_5 from '../../assets/img_5.avif'

const Background = ({count,videoStatus}) => {

      {

       if(videoStatus){

        return <video autoPlay loop muted className='bg-video fade-in' >

                <source src={video} type='video/mp4'/>

              </video>
       } 
       
       else if(count==0){

        return <img src={img_1} className='bg-img fade-in' alt="" />
       }
       else if(count==1){

        return <img src={img_2} className='bg-img fade-in' alt="" />
       }
       else if(count==2){

        return <img src={img_3} className='bg-img fade-in' alt="" />
       }
       else if(count==3){

        return <img src={img_4} className='bg-img fade-in' alt="" />
       }
       else if(count==4){

        return <img src={img_5} className='bg-img fade-in' alt="" />
       }
      }

      
   
  
}

export default Background