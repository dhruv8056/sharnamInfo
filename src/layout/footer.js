import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowAltCircleRight } from 'react-icons/fa';
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes

const Footer = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <p className="footer-tagline">COMMITTED TO THE FUTURE</p>
          <p>We provide the expertise and support to propel your business forward.</p>
          <button className="enquiry-button" onClick={handleContactClick}>Send Enquiry</button>
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
<<<<<<< Updated upstream
            <li>
              <FaArrowAltCircleRight color='white' />
              <Link to='/aboutus'>About Us</Link>
            </li>
            <li>
              <FaArrowAltCircleRight color='white' />
              <Link to='/team'>Our Team</Link>
            </li>
            <li>
              <FaArrowAltCircleRight color='white' />
              <Link to='/careers'>Careers</Link>
            </li>
            <li>
              <FaArrowAltCircleRight color='white' />
              <Link to='/contact'>Contact</Link>
            </li>
=======
            <li><FaArrowAltCircleRight color='white' /><a href="/aboutus" className="learn-more"> About Us</a></li>
            <li><FaArrowAltCircleRight color='white' /> Our Team</li>
            <li><FaArrowAltCircleRight color='white' /> Careers</li>
            <li><FaArrowAltCircleRight color='white' /><a href="/contact" className="learn-more"> Contact Us</a></li>
>>>>>>> Stashed changes
          </ul>
        </div>

        <div className="footer-right">
          <h3>Services</h3>
          <ul>
<<<<<<< Updated upstream
            <li>
              <FaArrowAltCircleRight color='white' />
              <Link to='/web'>Web Development</Link>
            </li>
            <li>
              <FaArrowAltCircleRight color='white' />
              <Link to='/ecommerce'>E-commerce Development</Link>
            </li>
            <li>
              <FaArrowAltCircleRight color='white' />
              <Link to='/reactjs'>ReactJS Development</Link>
            </li>
            <li>
              <FaArrowAltCircleRight color='white' />
              <Link to='/next'>NextJS Development</Link>
            </li>
=======
            <li><FaArrowAltCircleRight color='white' /><a href="/web" className="learn-more"> Web Development</a></li>
            <li><FaArrowAltCircleRight color='white' /><a href="/ecommerce" className="learn-more"> E-commerce Development</a></li>
            <li><FaArrowAltCircleRight color='white' /><a href="/reactjs" className="learn-more"> ReactJs Development</a></li>
            <li><FaArrowAltCircleRight color='white' /><a href="/nodejs" className="learn-more"> NodeJs Development</a></li>
            <li><FaArrowAltCircleRight color='white' /><a href="/python" className="learn-more"> Python Development</a></li>
            <li><FaArrowAltCircleRight color='white' /><a href="/webhosting" className="learn-more"> web Hosting</a></li>

>>>>>>> Stashed changes
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