import React, { useState,useEffect } from 'react';
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import Navbar from '../../layout/navbar';
import Footer from '../../layout/footer';
import { FaAngleUp } from "react-icons/fa6";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: ''

   
  });

  const [errors, setErrors] = useState({});

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let formErrors = {};

    if (!formData.name.trim()) {
      formErrors.name = 'Name is required';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      formErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      formErrors.email = 'Email is invalid';
    }

    const phoneNumberRegex = /^\d{10}$/;
    if (!formData.phoneNumber) {
      formErrors.phoneNumber = 'Phone number is required';
    } else if (!phoneNumberRegex.test(formData.phoneNumber)) {
      formErrors.phoneNumber = 'Please enter a 10 digit number';
    }


    if (!formData.message.trim()) {
      formErrors.message = 'Message is required';
    }

    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      alert('Form Data Submitted: ', formData);
      setIsSubmitted(true);
    } else {
      setErrors(validationErrors);
    }
  };
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setShowScrollUp(true);
      } else {
        setShowScrollUp(false);
      }
    });
  }, []);

  return (
    <div>
      <div className='se-web'>
        <Navbar />
      </div>
      <div className="se-section">
        <div className="se-overlay">
          <div className="se-content">
            <button className="se-button">Contact Us </button>
            <h1>CONTACT US</h1>
            <a href='/home'>Home</a> - <span>Contact Us</span>
          </div>
        </div>
      </div>
      <div className="c-container">
        <div className="contact-container">
          <h1>Contact Us</h1>
          {isSubmitted ? (
            <div className="success-message">Thank you! Your message has been sent.</div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />

                {errors.name && <p className="error-message">{errors.name}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
                {errors.email && <p className="error-message">{errors.email}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  id="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                />
                {errors.phoneNumber && <p className="error-message">{errors.phoneNumber}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  required
                ></textarea>
                {errors.message && <p className="error-message">{errors.message}</p>}
              </div>

              <button type="submit" className="btn-submit">Send Message</button>
            </form>

          )}
        </div>
        <div className="contact-details-container">
          <h1>Contact Details</h1>
          <div className="contact-details">
            <p>
              <strong>Address:</strong> <br /><h3>418, Ambey Valley Arcade, Opp.Sentosa Heights,Green Road,Utran, Mota Varachha, Surat, Gujarat 394105</h3>
            </p>
            <hr className='divider'></hr>
            <p>
              <strong>Phone Number:</strong> <br /> <h3>(+91) 6351263926</h3>
            </p>
            <hr className='divider'></hr>
            <p>
              <strong>Email:</strong> <br /><a href="mailto:sharnam.infosystem@gmail.com">sharnam.infosystem@gmail.com</a>
            </p>
            <hr className='divider'></hr>
            <p>
              <strong>Hours of Operation:</strong> <br /><h3>Monday - Saturday, 9am - 6pm</h3>
            </p>
            <a href='https://www.instagram.com/sharnam_info/?igsh=MTRhc2xwN2FwZWUxeQ%3D%3D'>
              <FaInstagram className="contact-icon" /></a>
            <a href='https://www.linkedin.com/company/sharnaminfo/mycompany/'>
              <FaLinkedinIn className="contact-icon" /></a>
          </div>
        </div>
      </div>
     
      <Footer />
      <div className='scrollup'>
        {showScrollUp && (
          <div className='up-icon'>
            <FaAngleUp 
            onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>
        )}
      </div>

    </div>

  );
};

export default Contact;