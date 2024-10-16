import React from 'react'
import Navbar from '../../../layout/navbar';
import Footer from '../../../layout/footer';
import nuxt1 from '../../../assets/img/nuxt1.png';
import nuxt2 from '../../../assets/img/nuxt2.png';
import { FaStar, FaHandshake, FaHeadset } from 'react-icons/fa';
import { GiCogsplosion } from "react-icons/gi";
import Help from '../../help/help';
const Nuxt = () => {
  return (

    <div>
      <div className='se-web'>
        <Navbar />
      </div>
      <div className="se-section">
        <div className="se-overlay">
          <div className="se-content">
            <button className="se-button">Nuxt Js Development</button>
            <h1>Nuxt Js Development</h1>
            <p>Services - Nuxt development</p>
          </div>
        </div>
      </div>

      {/*nuxt js devlopments*/}
      <div className="nuxt-section">
        <div className="nuxt-content">
          <h4>Nuxt.js Excellence Unleashed</h4>
          <h3>Our Nuxt.js Core Competencies</h3>
          <p>
            Our expert developers at  Sharnam Info,  Minds bring a deep understanding and expertise
            in a range of tools and libraries that empower us to develop applications with unrivaled a
            progressive web application , performance,
            availability, security, and user experience.
          </p>
          <h1>Develop Powerful Nuxt Js Websites With The Most Efficient </h1>
          <p>With years of expertise in designing scalable apps, our Android Developers use high-rated Nuxt JS development services:</p>
          <div className="n-cards">
            <div className="n-card">
              <FaStar className="n-icon" />
              <h3>Customer Satisfaction</h3>
            </div>
            <div className="n-card">
              <FaHandshake className="n-icon" />
              <h3>Integrity & Transparency</h3>
            </div>
            <div className="n-card">
              <FaHeadset className="n-icon" />
              <h3>24/7 Customer Support</h3>
            </div>
            <div className="n-card">
              <GiCogsplosion className="n-icon" />
              <h3>Flexible Engagement Models</h3>
            </div>
          </div>
        </div>
        <div className="n-image">
          <img src={nuxt1} alt="Nuxt Js Service Illustration" />
        </div>
      </div>

      {/*description*/}
      <div className='nuxt-describs'>
        <div className='nt-img'>
          <img src={nuxt2} alt='n-i'></img>
        </div>
        <div className='n-des'>
          <h1>Nuxt.js: The Perfect Blend of Performance and Functionality for Web Application Development.</h1>
          <p>Nuxt.js is a robust, open-source framework for building web applications using Vue.js. It provides a
            unique blend of performance and functionality, making it the
            perfect choice for developers developing dynamic and interactive web applications.</p>
          <p> You can easily create powerful and robust web applications that meet your business's
            and your users' needs. The built-in server-side rendering capabilities improve the performance and
            speed of your application, especially in terms of SEO and page load time.</p>

        </div>
      </div>

      {/*image sets*/}
      <div className="img-background-container">
        <div className="img-overlay">
          <div className='img-con'>
            <h1>Nuxt Js- Development<br /></h1>
            <p> Our custom NuxtJS development <br />services are tailored to meet your specific requirements.</p>
          </div>
        </div>
      </div>
      <Help />
      <Footer />
    </div>

  )
}

export default Nuxt