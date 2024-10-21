import React from 'react'
import Navbar from '../../../layout/navbar';
import php1 from '../../../assets/img/php1.png';
import Footer from '../../../layout/footer';
import Help from '../../help/help';
import { FaLaptopCode, FaPhp } from 'react-icons/fa';
import { HiLightBulb } from "react-icons/hi";
import { FaPaintBrush, FaBuilding, FaProductHunt, FaExchangeAlt, FaComments } from 'react-icons/fa';
import { FaUserTie, FaClipboardList, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { FadeIn } from '../../../layout/varient';
const Php = () => {
  const services = [
    {
      icon: <FaPaintBrush />,
      title: 'PHP Web/Application UI/UX Development',
      description: 'Our designers deliver competitive PHP web UI/UX development services and mobile app UI/UX services based on the latest market trends.'
    },
    {
      icon: <FaLaptopCode />,
      title: 'Custom PHP Development Services',
      description: 'Our 2+ years of domain expertise helps us provide secure, scalable, feature-packed, and mobile-friendly PHP web applications.'
    },
    {
      icon: <FaBuilding />,
      title: 'Enterprise PHP Development Services',
      description: 'Get high-performing and secure enterprise-level PHP web & mobile app development solutions tailored to your business needs.'
    },
    {
      icon: <FaProductHunt />,
      title: 'PHP Product Development Services',
      description: 'Our expert team understands your business and provides advice to develop your product using PHP.'
    },
    {
      icon: <FaExchangeAlt />,
      title: 'PHP Migration & Upgradation Services',
      description: 'Migrate or upgrade your website or product to PHP with an appealing interface and enhanced user experience.'
    },
    {
      icon: <FaComments />,
      title: 'PHP Consulting Services',
      description: 'With over 2 years in PHP development, we offer industry-standard solutions and best practices. Let’s start a business partnership!'
    },
  ];

  return (
    <div>
      <div className='se-web'>
        <Navbar />
      </div>
      <div className="se-section">
        <div className="se-overlay">
          <div className="se-content">
            <button className="se-button">Php  Development</button>
            <h1>Php Development</h1>
            <p>Services - Php development</p>
          </div>
        </div>
      </div>

      <div className="php-team-container">
        <h2> PHP Development Team with Us</h2>
        <h4>Our PHP web development services provide the backbone for your online presence,
          offering reliability, <br />flexibility, and the potential for growth. Our PHP web development company
          is here to transform your digital ideas into <br /> reality and
          ensure that your business stands out in the ever-evolving online landscape.</h4>
        <motion.div
          variants={FadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }} className="php-team-content-container">
          <div className="php-team-content">
            <FaLaptopCode className="ph-icon" />
            <h3>Working Knowledge of PHP</h3>
            <p>
              Knowledge of frameworks used to create PHP applications can allow you to increase productivity and
              accuracy while coding.
            </p>
          </div>
          <div className="php-team-content">
            <FaUserTie className="ph-icon" />
            <h3>Expertise That Goes Beyond Basics</h3>
            <p>
              You’ll need an expert on board with the skills to create, deploy, and maintain your app.
            </p>
          </div>
          <div className="php-team-content">
            <FaClipboardList className="ph-icon" />
            <h3>Multiple Offers from a Single-Window</h3>
            <p>
              Our developers can deliver services to meet web applications, product development,
              e-commerce websites, database management, security, and other technological requirements.
            </p>
          </div>
          <div className="php-team-content">
            <HiLightBulb className="ph-icon" />
            <h3>Ability to Solve Problems</h3>
            <p>
              Our experienced programmers can find solutions to pressing problems while diligently learning the ins
              and outs of a project to suggest unobvious optimization methods.
            </p>
          </div>
          <div className="php-team-content">
            <FaCheckCircle className="ph-icon" />
            <h3>Good PHP Development Practices</h3>
            <p>
              Our PHP programmers examine their codes using automated technologies.
            </p>
          </div>
        </motion.div>
      </div>


      {/*services proved*/}
      <div className='php-services-container'>
        <div className='php-img'>
          <img src={php1} alt='PHP Development Services' />
        </div>
        <div className='php-services'>
          <h2>Scope of Our PHP Development Services</h2>
          <div className='php-grid'>
            {services.map((service, index) => (
              <motion.div
                variants={FadeIn("down", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.5 }} key={index} className='php-card'>
                <div className='php-icon'>{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>  
              </motion.div>
            ))}
          </div>
        </div>
      </div>


      {/*image sets*/}
      <div className="img-background-container">
        <div className="img-overlay">
          <div className='img-con'>
            <FaPhp size={30} />
            <h1>Php - Development<br /></h1>
            <p> Our custom Php development <br />services are tailored to meet your specific requirements.</p>
          </div>
        </div>
      </div>
      <Help />
      <Footer />
    </div >
  )
}

export default Php