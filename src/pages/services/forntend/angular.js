import React from 'react'
import Footer from '../../../layout/footer';
import Help from '../../help/help';
import { FaAngular } from "react-icons/fa";
import { FaComments, FaTools, FaTachometerAlt } from 'react-icons/fa';
import { FaComputer } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { FadeIn } from '../../../layout/varient';
const Angular = () => {


  return (
    <div>
      {/*description*/}
      <div className="angular-container">
        <motion.div
          variants={FadeIn("right", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }} className="angular-header">
          <button>Angular  Js  Excellence</button>
          <h1>AngularJS: New Heights</h1>
        </motion.div>
        <motion.div
          variants={FadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}

          className="angular-body">
          <p>
            In the dynamic world of web development, having a website that not only
            looks stunning but also functions seamlessly is the key to digital success.
            At Sharnam Info, we harness the power of AngularJS to craft
            websites that not only meet but exceed expectations. Let's explore the
            array of services our company provides through AngularJS technology,
            shaping digital landscapes with innovation and user-centric design.
          </p>
        </motion.div>
      </div>


      {/*angular services*/}
      <div className="an-services">
        <h1>O U R</h1>
        <h2> Angular Services</h2>
        <motion.div
          variants={FadeIn("down", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }} className='an-app'>
          <div className="an-service">
            <FaComputer className="an-icon" />
            <h3>Custom Angular Development</h3>
            <p>
              We provide tailored Angular development solutions that cater to your business needs,
              ensuring a seamless user experience and efficient performance.
            </p>
          </div>
          <div className="an-service">
            <FaComments className="an-icon" />
            <h3>Angular Consulting</h3>
            <p>
              Our experts offer comprehensive consulting services to help you leverage Angular's
              capabilities for your projects, including architecture design and best practices.
            </p>
          </div>
          <div className="an-service">
            <FaTools className="an-icon" />
            <h3>Angular Maintenance and Support</h3>
            <p>
              We offer ongoing maintenance and support services to ensure your Angular applications
              remain up-to-date, secure, and high-performing.
            </p>
          </div>
          <div className="an-service">
            <FaTachometerAlt className="an-icon" />
            <h3>Performance Optimization</h3>
            <p>
              Our team specializes in optimizing Angular applications for better performance, including
              code splitting, lazy loading, and reducing load times.
            </p>
          </div>
        </motion.div>
      </div>


      {/*image sets*/}
      <div className="img-background-container">
        <div className="img-overlay">
          <div className='img-con'>
            <FaAngular size={30} />
            <h1>Angular - Development<br /></h1>
            <p> Our custom AngularJS development <br />services are tailored to meet your specific requirements.</p>
          </div>
        </div>
      </div>
      <Help />
      <Footer />
    </div>
  )
}

export default Angular
