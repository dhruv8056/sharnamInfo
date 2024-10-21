import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa";
import home2 from '../assets/img/home-2.png';
import { FaBars } from "react-icons/fa6";


const Navbar = () => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

<<<<<<< Updated upstream
  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState); 
  };

  return (
    <div>
      <nav className="navbar">
        <button className="menu-toggle" onClick={toggleMenu}><FaBars /> 
        {isMenuOpen ? 'Close' : 'Menu'}
        </button>
        <ul className={`main-menu ${isMenuOpen ? 'open' : ''}`}>
          <li><Link to="/home">HOME</Link></li>
          <li
            className="navbar-items"
            onMouseEnter={() => setIsCompanyOpen(true)}
            onMouseLeave={() => setIsCompanyOpen(false)}
          >
            <span>COMPANY <FaAngleDown size={15} /></span>
            {isCompanyOpen && (
              <div className="company-dropdown">  
                <div className="company-list">
                  <ul>
                    <li><Link to='/mission'>Our Mission</Link></li>
                    <li><Link to='/career'>Career</Link></li>
                    <li><Link to='/faq'>FAQ</Link></li>
                  </ul>
                </div>
              </div>
            )}
          </li>
          <li
            className="navbar-item" role='menuitem'
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
            aria-haspopup="true"
            aria-expanded={isServicesOpen}
          >
            <span>SERVICES <FaAngleDown size={15} /></span>
            {isServicesOpen && (
              <div className="services-dropdown">
                <div className="services-page">
                  <div className="services-list">
                    <h3>Services</h3>
                    <h4>Frontend Development</h4>
                    <ul>
                      <li><Link to="/web">Web Development</Link></li>
                      <li><Link to="/ecommerce">E-commerce Development</Link></li>
                      <li><Link to="/reactjs">ReactJS Development</Link></li>
                      <li><Link to="/typescript">Typescript Development</Link></li>
                      <li><Link to="/angular">Angular.Js Development</Link></li>
                      <li><Link to="/vue">Vue.Js Development</Link></li>
                      <li><Link to="/next">NextJS Development</Link></li>
                      <li><Link to="/nuxt">Nuxt.js Development</Link></li>
                    </ul>
                  </div>
                  <div className="services-list">
                    <h5>Backend Development</h5>
                    <ul>
                      <li><Link to="/nodejs">Node.js Development</Link></li>
                      <li><Link to="/nestjs">Nest.js Development</Link></li>
                      <li><Link to="/python">Python Development</Link></li>
                      <li><Link to="/php">PHP Development</Link></li>
                      <li><Link to="/laravel">Laravel Development</Link></li>
                    </ul>
                  </div>
                  <div className="commitment-section">
                    <div className="image-placeholder">
                      <img src={home2} alt="Commitment" />
                    </div>
                    <h3>COMMITTED TO THE FUTURE</h3>
                    <p>Our commitment weaves a story of progress and limitless potential.</p>
                  </div>
                </div>
              </div>
            )}
          </li>
        </ul>
        <div className="navbar-actions">
          <button className="btn" onClick={handleContactClick}>Contact Us</button>
          <button className="btn">Send Your CV</button>
        </div>
      </nav>
    </div>
  );
=======
    return (
        <nav className="navbar">
            <ul className="main-menu">
                <li><Link to="/home">HOME</Link></li>
                <li
                    className="navbar-item" role='menuitem'
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                    aria-haspopup="true"
                    aria-expanded={isServicesOpen}
                >
                    <span>SERVICES <FaAngleDown size={15} /></span>
                    {isServicesOpen && (
                        <div className="services-dropdown">
                            <div className="services-page">
                                <div className="services-list">
                                    <h3>Services</h3>
                                    <h4>Frontend Development</h4>
                                    <ul>
                                        <li><Link to="/web">Web Development</Link></li>
                                        <li><Link to="/ecommerce">E-commerce Development</Link></li>
                                        <li><Link to="/reactjs">ReactJS Development</Link></li>
                                        <li><Link to="/typescript">Typescript Development</Link></li>
                                        <li><Link to="/angular">Angular.Js Development</Link></li>
                                        <li><Link to="/vue">Vue.Js Development</Link></li>
                                        <li><Link to="/next">NextJS Development</Link></li>
                                        <li><Link to="/nuxt">Nuxt.js Development</Link></li>
                                    </ul>
                                </div>
                                <div className="services-list">
                                    <h5>Backend Development</h5>
                                    <ul>
                                        <li><Link to="/nodejs">Node.js Development</Link></li>
                                        <li><Link to="/nestjs">Nest.js Development</Link></li>
                                        <li><Link to="/python">Python Development</Link></li>
                                        <li><Link to="/php">PHP Development</Link></li>
                                        <li><Link to="/laravel">Laravel Development</Link></li>
                                        <li><Link to="/webhosting">WEb Hosting</Link></li>
                                    </ul>
                                </div>
                                <div className="commitment-section">
                                    <div className="image-placeholder">
                                        <img src={home2} alt="Commitment" />
                                    </div>
                                    <h3>COMMITTED TO THE FUTURE</h3>
                                    <p>Our commitment weaves a story of progress and limitless potential.</p>
                                </div>
                            </div>
                        </div>
                    )}
                </li>
            </ul>
            <div className="navbar-actions">
                <button className="btn" onClick={handleContactClick}>Contact Us</button>
                <button className="btn">Send Your CV</button>
            </div>
        </nav>
    );
>>>>>>> Stashed changes
};

export default Navbar;