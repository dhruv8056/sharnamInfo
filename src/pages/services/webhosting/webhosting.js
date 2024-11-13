import React from 'react';
import { FaServer, FaWordpress } from 'react-icons/fa';
import Navbar from '../../../layout/navbar';
import Help from '../../help/help';
import Footer from '../../../layout/footer';
import { GrCloudComputer } from 'react-icons/gr';
import { RiFileCloudFill } from 'react-icons/ri';
import { GiServerRack } from 'react-icons/gi';
import host1 from '../../../assets/img/host1.png'

const Webhosting = () => {
  return (
    <div>
        <Navbar />
      {/*Our Web Hosting Solutions*/}
      <div className='h-services'>
        <h1>WEB HOSTING SERVICES</h1>
        <h2> AT ' SHARNAM INFO</h2>

        <div className='hosting-services-container'>
          <div className='hosting-services'>
            <RiFileCloudFill className='host-i' />
            <h3>Shared Hosting</h3>
            <p>
              Ideal for small businesses or personal websites looking for cost-effective hosting with essential features and easy management.
            </p>
          </div>

          <div className='hosting-services'>
            <FaServer className='host-i' />
            <h3>VPS Hosting</h3>
            <p>
              For businesses that require more control and flexibility, our VPS hosting offers dedicated resources with scalable options.
            </p>
          </div>

          <div className='hosting-services'>
            <GiServerRack className='host-i' />
            <h3>Dedicated Hosting</h3>
            <p>
              For high-traffic websites or businesses with custom requirements, our dedicated hosting provides powerful performance and full server control.
            </p>
          </div>

          <div className='hosting-services'>
            <GrCloudComputer className='host-i' />
            <h3>Cloud Hosting</h3>
            <p>
              Enjoy the benefits of a fully managed cloud environment with automatic scaling, load balancing, and enhanced security.
            </p>
          </div>

          <div className='hosting-services'>
            <FaWordpress className='host-i' />
            <h3>Managed WordPress Hosting</h3>
            <p>
              We provide specialized WordPress hosting with optimized performance, security, and expert support tailored to WordPress users.
            </p>
          </div>
        </div>
        <div>
            <img  src={host1} alt='hosting-img'></img>
          </div>
      </div>

      

      {/*image sets*/}
      <div className="img-background-container">
        <div className="img-overlay">
          <div className='img-con'>
            <FaServer size={30} />
            <h1>Web Hosting<br /></h1>
            <p> Our custom WEb Hosting <br />services are tailored to meet your specific requirements.</p>
          </div>
        </div>
      </div>

      <Help />
      <Footer />
    </div >
  );
};
export default Webhosting;


