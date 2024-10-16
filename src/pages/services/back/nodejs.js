import React from 'react'
import Navbar from '../../../layout/navbar';
import Footer from '../../../layout/footer';
import node1 from '../../../assets/img/node1.png';
import { GrOptimize } from "react-icons/gr";
import { FaChrome, FaServer, FaFileCode, FaCloud, FaRecycle } from 'react-icons/fa';
import { FaShieldAlt, FaRocket, FaUsers, FaSync, FaFolderOpen } from 'react-icons/fa';
import Help from '../../help/help';
import { FaNodeJs } from 'react-icons/fa';
import { FaComputer } from 'react-icons/fa6';
import { MdOutlineAddToDrive } from 'react-icons/md';
const Nodejs = () => {
  const reasons = [
    { icon: <FaChrome />, title: 'Built on Google V8 JavaScript Engine' },
    { icon: <FaServer />, title: 'Browser & Server Compatibility' },
    { icon: <FaUsers />, title: 'Strong Node.js Community Support' },
    { icon: <FaFileCode />, title: 'Ajax and JSON Development Stack' },
    { icon: <FaCloud />, title: 'Open Source in Nature' },
    { icon: <MdOutlineAddToDrive />, title: 'Event Driven Architecture' },
    { icon: <FaRecycle />, title: 'Cloud Scalability' },
    { icon: <FaComputer />, title: 'Code Reusability' },
  ];
  return (
    <div>
      <div className='se-web'>
        <Navbar />
      </div>
      <div className="se-section">
        <div className="se-overlay">
          <div className="se-content">
            <button className="se-button">Node  Development</button>
            <h1>Node Development</h1>
            <p>Services - Node development</p>
          </div>
        </div>
      </div>
    

      <div className='node-content'>
        <div className='node-se'>
          <h3>Services</h3>
          <h1>Our Node.js Development Services</h1>
          <p>
            Our skilled and professional Node.js development services team swiftly delivers top-quality work. <br />
            Our expert handling of Node.js development mitigates any issues arising from time differences, enhancing global collaboration and productivity.<br />
            Our experience in Node.js development guarantees optimal results, making us a reliable choice for your programming needs.<br />
          </p>
        </div>
        <div className='node-list'>
          <div className='node-item'>
            <FaFolderOpen className='ne-icon' />
            <h2>Bundle of Libraries</h2>
            <p>NPM - Node package manager consists of thousands of built-in libraries used to build real-time applications.</p>
          </div>
          <div className='node-item'>
            <FaRocket className='ne-icon' />
            <h2>Scalability</h2>
            <p>Handling heavy and impulsive applications like LinkedIn, PayPal and many more, it is highly scalable.</p>
          </div>
          <div className='node-item'>
            <FaShieldAlt className='ne-icon' />
            <h2>Highly Secured</h2>
            <p>Though being open-source in nature, technology provides a reliable and scalable architecture for web and mobile development.</p>
          </div>
          <div className='node-item'>
            <FaUsers className='ne-icon' />
            <h2>Faster Communication</h2>
            <p>Regardless of the number of client requests, it is able to handle and synchronize multiple client requests at the same time.</p>
          </div>
          <div className='node-item'>
            <GrOptimize className='ne-icon' />
            <h2>Faster Development Process</h2>
            <p>As a leading Node.js development company, we prefer to build applications on Node.js as it is faster and more secure.</p>
          </div>
          <div className='node-item'>
            <FaSync className='ne-icon' />
            <h2>Front-End & Back-end Development</h2>
            <p>Being a JavaScript-based technology, it fastens both front-end and back-end applications.</p>
          </div>
        </div>
      </div>


      <div className='reasons-container'>
        <h2>Some More Reasons to Build </h2>
        <h1>Your Applications In Node.js</h1>
        <div className='content-wrapper'>
          <div className='reasons-list'>
            {reasons.map((reason, index) => (
              <div className='reason-card' key={index}>
                <div className='reason-icon'>{reason.icon}</div>
                <h3>{reason.title}</h3>
              </div>
            ))}
          </div>
          <div className='node-img'>
            <img src={node1} alt='node-i'></img>
          </div>
        </div>
      </div>


      {/*image sets*/}
      <div className="img-background-container">
        <div className="img-overlay">
          <div className='img-con'>
            <FaNodeJs size={30} />
            <h1>Node - Development<br /></h1>
            <p> Our custom Node development <br />services are tailored to meet your specific requirements.</p>
          </div>
        </div>
      </div>
      <Help />
      <Footer />
    </div>
  )
}

export default Nodejs