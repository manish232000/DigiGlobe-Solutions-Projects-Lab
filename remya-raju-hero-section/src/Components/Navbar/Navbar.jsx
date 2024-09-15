import React, { useState } from 'react'
import './Navbar.css'

import { GiWorld } from "react-icons/gi";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";


const Navbar = () => {

  const [menu,setMenu] = useState(false);

  return (

    //********* Navbar **************

    <div className="navbar">

      <div className="navbar-logo">

          <GiWorld className='logo' />

          <h2>ExploreEase</h2>

      </div>

      <ul className='navbar-menu'>

        <div className="menulist">

          <li>Home</li>
          <li>About</li>
          <li>Explore</li>
          <li className='contact'>Contact</li>

        </div>

        
        {/*   ********* Navbar Side Menu ************** */}

      <div className="navbar-sidemenu">

        <div className="sidemenu-icons" onClick={() => setMenu(!menu)}>

          { menu ? <IoMdClose className='menu-close' />  : <IoMdMenu className='menu-open' />}   

        </div>

        <ul className={menu ? "side-menu" :  "side-menu  menu-hide"}>

          <li>Home</li>
          <li>About</li>
          <li>Explore</li>
          <li>Contact</li>

        </ul>

      </div>

      </ul>

      

      
    </div>
  )
}

export default Navbar