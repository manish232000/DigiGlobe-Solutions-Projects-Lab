import React, { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  const handleNavlinks = (e) => {
    const nav = e.currentTarget.previousElementSibling.previousElementSibling;
    nav.classList.toggle("show-navlinks");
  };

  useEffect(() => {
    setHeight(() => ref.current.getBoundingClientRect().height);
  }, []);
  useEffect(() => {
    const e = window.addEventListener("scroll", () => {
      const scrollHeight = scrollY;
      if (scrollHeight >= height) {
        ref.current.classList.add("fixed");
      } else {
        ref.current.classList.remove("fixed");
      }
    });

    return () => {
      window.removeEventListener("scroll", e);
    };
  }, [height]);

  return (
    <nav ref={ref} className="navbar">
      <div className="logo">
        <span id="logo-start">Edu</span>
        <span id="logo-end">Elevate</span>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
      </ul>
      <div className="btn-container">
        <button type="button">Login</button>
        <button type="button">Sign up</button>
      </div>
      <button onClick={handleNavlinks} id="bars" type="button">
        <FaBars />
      </button>
    </nav>
  );
};

export default Navbar;
