import React from 'react'
import { FaBoxOpen, FaShoppingCart, FaChartLine, FaSearch, FaShoppingBag } from 'react-icons/fa';
import { IoIosContacts } from "react-icons/io";
import Navbar from '../../../layout/navbar';
import Footer from '../../../layout/footer';
import { VscCircleFilled } from "react-icons/vsc";
import Help from '../../help/help';
const Ecommerce = () => {


  return (

    <div>
      <div className='se-web'>
        <Navbar />
      </div>
      <div className="se-section">
        <div className="se-overlay">
          <div className="se-content">
            <button className="se-button">E-commerce Development</button>
            <h1>E-commerce Development</h1>
            <p>Services - Ecommerce development</p>
          </div>
        </div>
      </div>


      {/* e-commerce devlopment*/}
      <div className="web-services">
        <h4>O U R</h4>
        <h2>E-Commerce Development </h2>
        <hr className='web-line'></hr>
        <div className="web-app">
          <div className="cus-app">
            <h3><VscCircleFilled className='web-icon' /> Custom Website Development:</h3>
            <p>
              We provide tailor-made e-commerce solutions designed to meet the specific needs
              of your business. Our team of experts will work with you to develop a platform that
              enhances user experience, drives sales, and integrates seamlessly with your existing systems.
            </p>
          </div>
          <div className="cus-app">
            <h3><VscCircleFilled className='web-icon' /> Responsive Web Design:</h3>
            <p>
              Our e-commerce solutions, developed with react, node.js or python prioritize responsive
              web design to ensure optimal user experiences across devices. We ensure your e-commerce website performs
              consistently across different browsers, enhancing accessibility for all users.
            </p>
          </div>
          <div className="cus-app">
            <h3><VscCircleFilled className='web-icon' /> E-Commerce Mobile App Development:</h3>
            <p>
              We go beyond websites, offering e-commerce mobile app development to ensure your business
              is accessible to users on the go. Whether you need a native app for a specific platform or a
              cross-platform solution, our expertise covers both, ensuring a wider audience reach.
            </p>
          </div>
          <div className="cus-app">
            <h3><VscCircleFilled className='web-icon' />Payment Gateway Integration:</h3>
            <p>
              We offer secure payment gateway integration to provide a smooth checkout
              process for your customers. Our solutions support various payment methods, ensuring
              convenience and security for online transactions.
            </p>
          </div>
        </div>
      </div>


      {/*web services*/}
      <div className="e-services-container">
        <h2>O U R </h2>
        <h1>E-Commerce Services</h1>
        <hr className='web-line'></hr>
        <div className='e-app'>
          
          <div className="e-service">
          
            <IoIosContacts size={24} className='e-icon' />
            <h3>We create easy points of contact</h3>
            <p>
              To boost engagement, we integrate strong calls-to-action, social media signals,
              and conversion-optimized storefront
              designs for your eCommerce website.
            </p>
          </div>
          
          <div className="e-service">
            <FaBoxOpen size={24} className='e-icon' />
            <h3>Inventory Management System</h3>
            <p>
              With our robust inventory management system, you can easily track stock levels,
              set alerts for low inventory, and keep your product listings up-to-date in real time.
            </p>
          </div>
          
          <div className="e-service">
            <FaShoppingCart size={24} className='e-icon' />
            <h3>We simplify the  process</h3>
            <p>
              We make checkout a breeze with a simple 3-4 step process, easy-to-fill-out fields,
              and by removing unnecessary clutter.
            </p>
          </div>
       
          <div className="e-service">
            <FaChartLine size={24} className='e-icon' />
            <h3>Integrated Analytics and Reporting</h3>
            <p>
              We provide built-in analytics tools that allow you to monitor your store's performance,
              track sales, and gain insights into customer behavior, helping you make data-driven decisions.
            </p>
          </div>
          
          <div className="e-service">
            <FaSearch size={24} className='e-icon' />
            <h3>We make your store visible on search engines to bring traffic</h3>
            <p>
              With on-site optimization and SEO-friendly architecture, our online stores are
              easy to find on search engines, bringing
              in organic traffic as soon as you go live.
            </p>
          </div>
          
          <div className="e-service">
            <FaShoppingBag size={24} className='e-icon' />
            <h3>E-Commerce website</h3>
            <p>
              Compared to other companies, our eCommerce web design services focus on
              helping you sell more, with advanced features,
              rich shopping cart design, and integrated social media signals.
            </p>
          </div>
          
        </div>
        <hr className='web-line'></hr>~
      </div>


      {/*image sets*/}
      <div className="img-background-container">
        <div className="img-overlay">
          <div className='img-con'>
            <h1>Ecommerce - Development<br /></h1>
            <p> Our team processes a  wealth  of in <br />e-commerce development,having
              successfully devlivered <br />solution across  diverse industries.</p>
          </div>
        </div>
      </div>
      

      <Help />
      <Footer />
    </div>

  )
}

export default Ecommerce