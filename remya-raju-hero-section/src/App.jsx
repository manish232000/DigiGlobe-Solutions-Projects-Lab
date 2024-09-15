import React, { useEffect, useState } from 'react'
import Background from './Components/Background/Background';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';

const App = () => {

  let textArray = [

    {

      text_1 : "Journey Beyond ",
      text_2: "the Ordinary"
    },
    {

      text_1 : "Discover Your ",
      text_2: "Next Adventure"
    },
    {

      text_1 : "Adventure Awaits— ",
      text_2: "Pack Your Bags"
    },
    {

      text_1 : "Travel Far, ",
      text_2: "Live Fully"
    },
    {

      text_1 : "Escape to the  ",
      text_2: "Extraordinary"
    },

  ]
  const [count,setCount] = useState(0);
  const [videoStatus,setVideoStatus] = useState(false);

  useEffect(() => {

   const interval= setInterval(() => {

      setCount((count) => {return count===textArray.length-1 ? 0 : count + 1});

    },3000);

    return () => clearInterval(interval)


  },[])




  return (
    
    <div className='app'>

      <Background  count={count}  videoStatus={videoStatus}/>

      <Navbar />

      <Hero textArray={textArray[count]} count={count} setCount={setCount} videoStatus={videoStatus} setVideoStatus={setVideoStatus} />

     
    </div>
  )
}

export default App