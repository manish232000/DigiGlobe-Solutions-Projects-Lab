import React from 'react'
import './Navbar.css'
import image from '../../Assets/logo.png'
import { Link,NavLink } from 'react-router-dom'
// import NewsArtical from './NewsArtical';

const Navbar = () => {
  return (
    <div id='nav'>
      <div id="nav-left">
        <Link to="/"><img src={image} alt="" /></Link>
      </div>
      <div id="nav-right">
        <NavLink to="/" className={({isActive})=>(isActive?"a":"b")}>Home</NavLink>
        {/* if the route is  "/" then it is active */}
        <Link to="/listing">Listing</Link>
        <Link to="/Addpet">Add a Pet</Link>
        <Link to="/blogs">Blog</Link>
      </div>
    </div>
  )
}

export default Navbar;