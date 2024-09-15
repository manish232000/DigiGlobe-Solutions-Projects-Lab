import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Card = ({id,img,name,age,color,breed,description,image}) => {

  const navigate=useNavigate();
  const handleClick=()=>{
    const url=`/process/${id}`;
    navigate(url);
  }
  console.log(id,img,name,age,color,breed,description,image);
  console.log("dsjfsdfdslf");
  
  
  return (
    <div id="card">
        <img src={image} alt="" />
        <div id="PetDis">
            <h1>Name : {name}</h1>
            <br />
            <h2>Age : {age}</h2>
            <br />
            
            <h2>Breed : {breed}</h2>
            <br />
            <h2>description:{description}</h2>
           
            <button onClick={()=>{handleClick()}}>
                Adopt
            </button>
        </div>
    </div>
  )
}

export default Card
