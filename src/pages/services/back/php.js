import React from 'react'
import Navbar from '../../../layout/navbar';
import Footer from '../../../layout/footer';
import Help from '../../help/help';
import { FaLaptopCode, FaPhp } from 'react-icons/fa';
import { HiLightBulb} from "react-icons/hi";
import { FaUserTie, FaClipboardList, FaCheckCircle } from 'react-icons/fa';
const Php = () => {
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
         offering reliability, <br/>flexibility, and the potential for growth. Our PHP web development company 
         is here to transform your digital ideas into <br/> reality and
         ensure that your business stands out in the ever-evolving online landscape.</h4>
      <div className="php-team-content-container">
        <div className="php-team-content">
          <FaLaptopCode className="php-icon" />
          <h3>Working Knowledge of PHP</h3>
          <p>
            Knowledge of frameworks used to create PHP applications can allow you to increase productivity and
            accuracy while coding.
          </p>
        </div>
        <div className="php-team-content">
          <FaUserTie className="php-icon" />
          <h3>Expertise That Goes Beyond Basics</h3>
          <p>
            You’ll need an expert on board with the skills to create, deploy, and maintain your app.
          </p>
        </div>
        <div className="php-team-content">
          <FaClipboardList className="php-icon" />
          <h3>Multiple Offers from a Single-Window</h3>
          <p>
            Our developers can deliver services to meet web applications, product development,
            e-commerce websites, database management, security, and other technological requirements.
          </p>
        </div>
        <div className="php-team-content">
          <HiLightBulb className="php-icon" />
          <h3>Ability to Solve Problems</h3>
          <p>
            Our experienced programmers can find solutions to pressing problems while diligently learning the ins
            and outs of a project to suggest unobvious optimization methods.
          </p>
        </div>
        <div className="php-team-content">
          <FaCheckCircle className="php-icon" />
          <h3>Good PHP Development Practices</h3>
          <p>
            Our PHP programmers examine their codes using automated technologies.
          </p>
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