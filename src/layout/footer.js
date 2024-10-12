import React from 'react';
import { FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FiArrowRightCircle } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <p className="footer-tagline">COMMITTED TO THE FUTURE</p>
          <p>We provide the expertise and support to propel your business forward.</p>
          <button className="enquiry-button">Send Enquiry</button>
          <div className="social-icons">
            {/* Add links to social media profiles */}
            <a href="https://www.instagram.com/sharnam_info" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/company/sharnaminfo" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="social-icon" />
            </a>
          </div>
        </div>
        
        <div className="footer-middle">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
        
        <div className="footer-right">
          <h3>Services</h3>
          <ul>
            <li><FiArrowRightCircle /> Frontend Development</li>
            <li><FiArrowRightCircle /> Backend Development</li>
            <li><FiArrowRightCircle /> Web Hosting</li>
          </ul>
        </div>
      </div>
      <hr className="footer-line" />
      <div className="footer-bottom">
        <div className="contact-info">
          <FaPhone className="contact-icon" />
          <p>Phone Number</p>
          <p>+91 6351263926</p>
        </div>
        <hr className="footer-line" />
        <div className="contact-info">
          <FaEnvelope className="contact-icon" />
          <p>Email Address</p>
          <p>sharnam.infosystem@gmail.com</p>
        </div>
        <hr className="footer-line" />
        <div className="contact-info">
          <FaMapMarkerAlt className="contact-icon" />
          <p>Location</p>
          <p>418, Amby Valley Arcade, Opp. Sentosa Heights, Green Road, Utran, Mota Varachha, Surat, Gujarat 394105</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
