import React, { useState } from 'react';
import './HeroSection.css';
import TestimonialsCarousel from './TestimonialsCarousel';
import ParticlesBg from 'particles-bg';
import { FaBars } from 'react-icons/fa';

const HeroSection = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="hero-container">
      <nav className="navbar">
        <div className="logo">DigiGlobal Solutions</div>
        <div className="nav-items">
          <ul className={`nav-links ${isDropdownOpen ? 'open' : ''}`}>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="hamburger-menu" onClick={toggleDropdown}>
            <FaBars />
          </div>
        </div>
      </nav>
      <ParticlesBg type="circle" bg={true} />
      <div className="hero-content" style={{ paddingTop: isDropdownOpen ? '110px' : '10px' }}>
        <h1>DigiGlobal Solutions</h1>
        <p className="animated-text">Your Partner for Mobile App and Web Development</p>
        <button className="cta-button">Get Started</button>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <TestimonialsCarousel />
      <div className="scroll-indicator">&#x25BC;</div>
    </div>
  );
};

export default HeroSection;
