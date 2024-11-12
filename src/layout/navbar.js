import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { IoMenu } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isResponsive, setIsResponsive] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsResponsive(!isResponsive);
  };

  const handleCvClick = () => {
    navigate('/cv');
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className={isResponsive ? "topnav responsive fixed" : "topnav"} id="myTopnav">
      <IoMenu className="nav-icon" onClick={toggleMenu} />
      <a href="/home" className="active">Home</a>
      <a href="/aboutus" className="active">About Us</a>
      <div className="dropdown">
        <button className="dropbtn">
          Company
          <FaAngleDown size={15} className='nav-i' />
        </button>
        <div className="dropdown-content">
          <a href="/career">Career</a>
          <a href="/faq">FAQ</a>
          <a href="/mission">Mission</a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">
          Services
          <FaAngleDown size={15} className='nav-i' />
        </button>
        <div className="dropdown-content">
          <div className="dropdown-submenu">
            <p>Frontend Development</p>
            <div className="dropdown-subcontent">
              <a href="/web">Web Development</a>
              <a href="/ecommerce">E-commerce Development</a>
              <a href="/reactjs">ReactJS Development</a>
              <a href="/typescript">TypeScript Development</a>
              <a href="/vue">Vue.js Development</a>
              <a href="/angular">AngularJS Development</a>
              <a href="/next">NextJS Development</a>
              <a href="/nuxt">NuxtJS Development</a>
            </div>
          </div>
          <div className="dropdown-submenu">
            <p>Backend Development</p>
            <div className="dropdown-subcontent">
              <a href="/nodejs">Node.js Development</a>
              <a href="/nestjs">NestJS Development</a>
              <a href="/python">Python Development</a>
              <a href="/php">PHP Development</a>
              <a href="/laravel">Laravel Development</a>
            </div>
          </div>
          <a href='/webhosting'>Web Hosting</a>
        </div>
      </div>
      <div className='navbar-action'>
        <button className="btn" onClick={handleContactClick}>Contact Us</button>
        <button className="btn" onClick={handleCvClick}>Send Your CV</button>
      </div>
    </div>
  );
};

export default Navbar;