import React from 'react';
import { FaLaptopCode, FaCubes, FaProjectDiagram, FaTachometerAlt, FaMobileAlt, FaDatabase, FaReact } from 'react-icons/fa';
import { FaRegCheckCircle, FaSearch, FaLightbulb, FaDesktop, FaRocket } from 'react-icons/fa';
import Footer from '../../../layout/footer';
import react1 from '../../../assets/img/react1.png';
import Help from '../../help/help';
import { motion } from 'framer-motion';
import { FadeIn } from '../../../layout/varient';
import web1 from '../../../assets/img/web1.png';
const Reactjs = () => {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: 'Custom Application Development',
      description: ' Our Full-stack development services for creating bespoke React applications tailored to specific business needs. From simple single-page applications to complex enterprise solutions, we ensure each app is robust, scalable, and responsive.',
    },
    {
      icon: <FaCubes />,
      title: 'Component Library Development',
      description: 'Design and development of reusable, scalable component libraries that promote UI consistency across multiple projects. Our component libraries are built to accelerate development and improve maintainability.',
    },
    {
      icon: <FaProjectDiagram />,
      title: 'State Management Solutions',
      description: 'Expert implementation of state management using tools like Redux, Context API, ensuring seamless and predictable state transitions within applications, resulting in improved performance and user experience.',
    },
    {
      icon: <FaTachometerAlt />,
      title: 'Performance Optimization',
      description: 'Comprehensive performance optimization services, including lazy loading, code splitting, server-side rendering  and other techniques, to maximize the speed and responsiveness of your React applications.',
    },
    {
      icon: <FaMobileAlt />,
      title: 'Responsive Design Implementation',
      description: 'Ensuring your application is accessible and visually appealing across all devices. We create mobile-friendly designs with responsive layouts using CSS or frameworks like Tailwind CSS, providing a seamless user experience.',
    },
    {
      icon: <FaDatabase />,
      title: 'API Integration',
      description: 'Smooth integration of RESTful or GraphQL APIs for efficient data handling and dynamic content. We connect your application to external or internal data sources, ensuring secure and reliable data flow.',
    },
  ];

  return (

    <div>
        <div className="w-section">
        <div className="w-content">
          <h1>REACT JS</h1>
          <h1>DEVELOPMENT COMPANY</h1>
          <p>
            Transform your online business with our comprehensive e-commerce development services. Our team of experienced developers
            utilizes industry-leading frameworks and the latest technologies to create user-friendly, scalable, and high-performing
            e-commerce solutions tailored to meet your business needs.
          </p>
          <p>
           Our client-centric approach prioritizes innovation, ensuring that every project
            reflects your brand's goals and contributes to long-term success.
          </p>
          <a class="cbtn animation" href="/contact">Hire React Js Devlopment</a>
        </div>
        <div className="wimage-content">
          <img src={web1} alt="Office Illustration" />
        </div>
      </div>
      {/*react services*/}
      <div className="react-container">
        <h2>ReactJs services</h2>
        <div className='r-p'>
          <p>Our ReactJS development services cover a comprehensive range of <br />solutions tailored to meet
            diverse business requirements.
            We specialize in building high-quality, efficient, and scalable<br /> web applications using ReactJS. </p>
        </div>
        <motion.div
          variants={FadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className=' react-app'>
          {services.map((service, index) => (
            <div key={index} className="react-card">
              <div className="rr-icon">{service.icon}</div>
              <h3 className="react-title">{service.title}</h3>
              <p className="react-description">{service.description}</p>
            </div>
          ))}
        </motion.div>
      </div>


      {/* image */}
      <div className='react-image'>
        <img src={react1} alt='react-img' className='react-image__img' />
        <motion.div
          variants={FadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className='react-image__content'>
          <h1>ReactJs Development</h1>
          <p>
            React development refers to the process of building user interfaces (UIs) and web applications
            using React, a popular JavaScript library for building component-based, dynamic, and responsive
            user interfaces.
          </p>
          <h3>Key Features:</h3>
          <ul>
            <li>Component-Based Architecture</li>
            <li>Virtual DOM for optimal performance</li>
            <li>Declarative UI for predictable coding</li>
            <li>Unidirectional data flow for easier data management</li>
            <li>Hooks for using state and lifecycle features in functional components</li>
          </ul>
        </motion.div>
      </div>


      {/*React contant*/}
      <div className="react-text">
        <ul>
          <li>
            <FaRegCheckCircle className="r-ricon" />
            Components can be easily reused
          </li>
          <li>
            <FaSearch className="r-ricon" />
            Easy to create UI test cases
          </li>
          <li>
            <FaLightbulb className="r-ricon" />
            Debugging is getting easy with specialized Chrome extension
          </li>
        </ul>
        <h2 className="r-title">
          <span className="js-text">Js</span>
          <span className="rr-icon">
            <FaReact className="r-icon" color="#0056b3" />
          </span>
          <span className="r-text">React</span>
        </h2>
        <ul>
          <li>
            <FaDesktop className="r-ricon" />
            Fast when it comes to displaying a big amount of components
          </li>
          <li>
            <FaRocket className="r-ricon" />
            SEO friendly
          </li>
          <li>
            <FaRegCheckCircle className="r-ricon" />
            React JS virtual DOM
          </li>
        </ul>
      </div>

      {/*image sets*/}
      <div className="img-background-container">
        <div className="img-overlay">
          <div className='img-con'>
            <FaReact size={30} />
            <h1>ReactJs - Development<br /></h1>
            <p> Our custom React Js development <br />services are tailored to meet your specific requirements.</p>
          </div>
        </div>
      </div>


      <Help />
      <Footer />
    </div >

  )
}

export default Reactjs

