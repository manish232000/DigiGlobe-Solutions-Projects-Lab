import React, {useState} from "react";
import logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar(){
    const [hamburger, sethamburger] = useState(false);
    let links = [
        {name: "Home", link: '#'},
        {name: "About Me", link: '#'},
        {name: "Services", link: '#'},
        {name: "Products", link: '#'},
        {name: "Contact", link: '#'}
    ];
    const toggleit = ()=> {
        sethamburger(!hamburger);
    }
  

    
    return(
       <div className="w-[100%] absolute md:absolute bg-transparent border-solid top-0 z-20 flex justify-between px-[40px] border-b-[1px] mx-0 flex-nowrap items-center text-white bg-black h-[80px] ">
        <div className="">
            <img src={logo} className="w-[100px] md:w-[120px] h-[auto] " alt="image" />
        </div>
        <nav className={`w-[60%] md:block ${hamburger? "block": 'hidden '} `}>
            <ul className={`flex flex-col items-center absolute md:bg-transparent bg-blue-600 h-fit rounded-bl-[25%] rounded-br-[25%] w-[100%] p-2  md:flex md:flex-row md:justify-end md:items-center md:relative left-0 md:top-0  gap-8 transition-all duration-500 ease-in-out ${hamburger? ' top-0':'top-[-100px] '}`}>
               {links.map((link)=>{
                return <li className="hover:text-blue-600 md:text-[1.2rem] transition-all duration-500 ease-in  text-nowrap" key={link.name}>
                    <a href={link.link}>{link.name}</a>
                </li>
               })}
            </ul>
        </nav>
        <div className="md:hidden z-10 block">
        <FontAwesomeIcon onClick={toggleit}  icon={hamburger ? faTimes: faBars} className="text-2xl" />
        </div>
       </div>
    )

}

export default Navbar;