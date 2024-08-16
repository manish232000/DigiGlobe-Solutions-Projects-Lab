import React from 'react'
import { useState,useEffect } from 'react'

function Github() {
    const[data,setData]=useState([])

    useEffect(()=>{fetch('https://api.github.com/users/impriteshchoubey')
    .then(response => response.json())
    .then(data=>setData(data))},[])
 

    return (
        <div className='flex gap-5 justify-evenly  bg-gray-600 p-4 text-xl mx-40 text-white font-serif list-none  '>
        
        <li>
            Followers:{data.followers}
    </li> 
    <li>location:{data.location}</li>
    <li>id:{data.id }</li>
    <li>id:{data.bio }</li>

    <img className='rounded-lg '  src={data.avatar_url} alt="" />
    </div>   )
}

export default Github
