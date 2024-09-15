import React from 'react'
import './Listing.css';
import myImage from '../../Assets/dog1.avif'
const Listing = () => {
  const myHeaders = new Headers();
myHeaders.append("API_KEY", "prashik_bahadure");
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "name": "sdfasedf",
  "type": "Husdfsdafman",
  "age": 231,
  "breed": "sdfsd",
  "description": "Smart hai",
  "imgURL": "https://media.licdn.com/dms/image/D4D35AQFSDi3AOZNukw/profile-framedphoto-shrink_400_400/0/1697537626860?e=1723654800&v=beta&t=TRHBfR1cKIGMdsMP0Y6gE9pr-EXDQsfmy45S55jUupc",
  "location": "IIT KGP",
  "contact": "9654780617"
});

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

const data=[];
fetch("192.168.31.81:3000/api/pet", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

  return (
    <div id='Listing'>
        <div id="Main">
            <div id="cardM">
              <img src={myImage} alt="" />
              <h2>Name : aldsjfaj</h2>
              <h2>Age:33</h2>
              <h2>Breed:skdjf</h2>
              <h2>Color:398ur</h2>
              {/* <button>Adopt</button> */}
            </div>
            <div id="cardM"></div>
            <div id="cardM"></div>
            <div id="cardM"></div>
            <div id="cardM"></div>
            <div id="cardM"></div>
            
            
        </div>
    </div>
  )
}

export default Listing