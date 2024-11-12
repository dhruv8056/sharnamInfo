import React from 'react'
import Footer from '../../../layout/footer';
import Help from '../../help/help';
import { FaPython } from 'react-icons/fa';
import python2 from '../../../assets/img/python3.png';
import { FaLaptopCode } from 'react-icons/fa';
import { TbDeviceImacCode } from 'react-icons/tb';
import { IoServer } from 'react-icons/io5';
import { BsRobot } from 'react-icons/bs';
import { PiArrowsOutDuotone } from 'react-icons/pi';
import { FaUsersLine } from 'react-icons/fa6';
const Python = () => {
  return (
    <div>

      {/*python Developments*/}

      <div className='py-info'>
        <div className='py-image-container'>
          <img src={python2} alt='Python development' className='p-image' />
        </div>
        <h1 className='py-title'>Python Web Development Company</h1>
        <p className='py-description'>
          Python is a versatile programming language widely used for its scalability, cross-platform compatibility,
          code reusability, <br />extensive libraries, and cost-effectiveness, making it ideal for robust application development.
        </p>

      </div>
      {/*python services*/}
      <div className='python-main'>
        <div className='python-services'>
          <h2
          >Our Python Services</h2>
          <div className='py-cards'>
            <div className='py-card'>
              <FaLaptopCode className='py-icon' />
              <h3>Python Consulting Service</h3>
              <p>
                We leverage Python to offer cutting-edge back-end development services, delivering seamless integrations,
                efficient data processing, and secure, maintainable code.
              </p>
            </div>
            <div className='py-card'>
              <TbDeviceImacCode className='py-icon' />
              <h3>Custom Web App Development</h3>
              <p>
                Utilizing Python to its true potential, our Python developers build interactive web applications
                that offer seamless online services to users.
              </p>
            </div>
            <div className='py-card'>
              <IoServer className='py-icon' />
              <h3>Python Back-end Development</h3>
              <p>
                We build and integrate powerful, scalable, dynamic, and secure back-end solutions to ensure an
                effective user experience and seamless functionality.
              </p>
            </div>
            <div className='py-card'>
              <BsRobot className='py-icon' />
              <h3>AI/ML Development Services</h3>
              <p>
                Our Python developers create data-driven, intelligent web solutions, empowering your business to
                make informed decisions.
              </p>
            </div>
            <div className='py-card'>
              <PiArrowsOutDuotone className='py-icon' />
              <h3>Python App Migration</h3>
              <p>
                Our experts create app migration strategies to smoothly and securely migrate your existing business
                application to the Python ecosystem.
              </p>
            </div>
            <div className='py-card'>
              <FaUsersLine className='py-icon' />
              <h3>Python App Support & Maintenance</h3>
              <p>
                We ensure your Python app stays up-to-date with the latest technology, security patches, and
                market trends while maintaining peak performance.
              </p>
            </div>
          </div>
        </div>
      </div>


      {/*image sets*/}
      <div className="img-background-container">
        <div className="img-overlay">
          <div className='img-con'>
            <FaPython size={30} />
            <h1>Python - Development<br /></h1>
            <p> Our custom Python development <br />services are tailored to meet your specific requirements.</p>
          </div>
        </div>
      </div>
      <Help />
      <Footer />
    </div >
  )
}

export default Python
