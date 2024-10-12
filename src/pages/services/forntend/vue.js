import React from 'react'
import Navbar from '../../../layout/navbar';
import Footer from '../../../layout/footer';
import Help from '../../help/help';
import { FaClipboardCheck, FaMobileAlt, FaVuejs } from 'react-icons/fa';
import { TbDeviceDesktopCog, TbDeviceImacCode } from "react-icons/tb";
import vue1 from '../../../assets/img/vue1.png';
const Vue = () => {

  const services = [
    {
      title: "Custom Vue.js Development",
      description: "We specialize in building custom Vue.js applications tailored to your specific needs, ensuring optimal performance, scalability, and a seamless user experience.",
      icon: <TbDeviceImacCode />,
    },

    {
      title: "Testing for Vue.js Development",
      description: "Our team implements thorough testing strategies, including unit, integration, and end-to-end testing, to guarantee that your Vue.js applications meet the highest quality standards.",
      icon: <FaClipboardCheck />,
    },
    {
      title: "API Integration and Development",
      description: "We specialize in integrating third-party APIs and developing custom APIs for Vue.js applications, enhancing functionality and interoperability.",
      icon: <TbDeviceDesktopCog />,
    },
    {
      title: "Responsive Design Implementation",
      description: "Our responsive design implementation ensures that Vue.js applications are fully adaptable to various screen sizes, providing a seamless user experience on all devices.",
      icon: <FaMobileAlt />,
    },
  ];

  return (
    <div>
      <div className='se'>
        <Navbar />
      </div>
      <div className="se-section">
        <div className="se-overlay">
          <div className="se-content">
            <button className="se-button">VueJs Development</button>
            <h1>VueJs Development</h1>
            <p>Services - VueJs development</p>
          </div>
        </div>
      </div>


      {/*vuejs services*/}
      <div className="vue-container">
        <h1> VueJS Development services</h1>
        <div className="vue-card-container">
          {services.map((service, index) => (
            <div className="vue-card" key={index}>
              <div className="vue-icon">{service.icon}</div>
              <h3 className="vue-title">{service.title}</h3>
              <p className="vue-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/*sets image of vue*/}
      <div className='vue-image'>
        <img src={vue1} alt='vue-img' className='vue-img' />
        <h2 className='vue-h2'>OUR EXPERTISE</h2>
        <p className='vue-p'>
          Scale Your Business by Leveraging Our Robust Services
          <br />
          <br />
          Vue.js has been a game changer when it comes to front-end development.<br />
          It is a progressive framework as it offers easy-to-use syntax and clean formatting styles. <br />
          If you need a framework to develop the same, Vue.js is the answer for you.  <br />
          Our Vue.js developers are skilled with the latest versions of Vue.js. <br />
        </p>
      </div>


      {/*image sets*/}
      <div className="img-background-container">
        <div className="img-overlay">
          <div className='img-con'>
            <FaVuejs size={30} />
            <h1>VueJs - Development<br /></h1>
            <p> Our custom VueJS development <br />services are tailored to meet your specific requirements.</p>
          </div>
        </div>
      </div>
      <Help />
      <Footer />
    </div>

  )
};

export default Vue
