
import React, { useState, useEffect } from 'react';
import Navbar from '../../layout/navbar';
import logo from '../../assets/img/missions.jpg';
import Footer from '../../layout/footer';


const Mission = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="se-web">
        <Navbar />
      </div>
      <div className="se-section">
        <div className="se-overlay">
          <div className="se-content">
            <button className="se-button">Our Mission</button>
            <h1>Our Mission</h1>
            <a href="/home">Home</a> - <span>Our Mission</span>
          </div>
        </div>
      </div>

      <div className="missions-card">
        <div className="image-container">
          <img src={logo} alt="mission" className="mission-image" />
        </div>
        <div className={`mission-content ${scrollPosition > 500 ? 'animate' : ''}`}>
          <h4>Our Mission:</h4>
          <p>
            Our mission is to empower individuals and organizations to achieve their full potential by providing innovative solutions and exceptional service.
          </p>
        </div>

        <div className={`vision-content ${scrollPosition > 800 ? 'animate' : ''}`}>
          <h4>Our Vision:</h4>
          <p>
            Our vision is to be a leading provider of innovative solutions that make a positive impact on people's lives.
          </p>
        </div>

        <div className={`value-content ${scrollPosition > 1000 ? 'animate' : ''}`}>
          <h4>Values:</h4>
          <ul>
            <li>Integrity: We operate with transparency and honesty in all our interactions.</li>
            <li>Excellence: We strive for excellence in everything we do.</li>
            <li>Innovation: We encourage creativity and innovation to stay ahead of the curve.</li>
            <li>Teamwork: We believe in collaboration and teamwork to achieve common goals.</li>
          </ul>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Mission;