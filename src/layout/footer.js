import React from 'react';
import { FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowAltCircleRight } from 'react-icons/fa';

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <p className="footer-tagline">COMMITTED TO THE FUTURE</p>
          <p>We provide the expertise and support to propel your business forward.</p>
          <div className="social-icons">
            {/* Links to social media profiles */}
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
            <li>
              <FaArrowAltCircleRight color='white' />
              <a href='/aboutus'> About Us</a>
            </li>
            <li>
              <FaArrowAltCircleRight color='white' />
              <a href='/career  '> Careers</a>
            </li>
            <li>
              <FaArrowAltCircleRight color='white' />
              <a href='/contact'> Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="footer-right">
          <h3>Services</h3>
          <ul>
            <li>
              <FaArrowAltCircleRight color='white' />
              <a href='/web'> Web Development</a>
            </li>
            <li>
              <FaArrowAltCircleRight color='white' />
              <a href='/ecommerce'> E-commerce Development</a>
            </li>
            <li>
              <FaArrowAltCircleRight color='white' />
              <a href='/reactjs'> ReactJs Development</a>
            </li>
            <li>
              <FaArrowAltCircleRight color='white' />
              <a href='/nodejs'> NodeJs Development</a>
            </li>
            <li>
              <FaArrowAltCircleRight color='white' />
              <a href='/tython'> Python Development</a>
            </li>
            <li>
              <FaArrowAltCircleRight color='white' />
              <a href='/php'> Php Development</a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="footer-line" />
      <div className="footer-bottom">
        <div className="contact-info">
          <FaPhone className="contacts-icon" />
          <p>Phone Number</p>
          <p>+91 6351263926</p>
        </div>
        <hr className="footer-line" />
        <div className="contact-info">
          <FaEnvelope className="contacts-icon" />
          <p>Email Address</p>
          <p>sharnam.infosystem@gmail.com</p>
        </div>
        <hr className="footer-line" />
        <div className="contact-info">
          <FaMapMarkerAlt className="contacts-icon" />
          <p>Location</p>
          <p>418, Amby Valley Arcade, Opp. Sentosa Heights, Green Road, Utran, Mota Varachha, Surat, Gujarat 394105</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;