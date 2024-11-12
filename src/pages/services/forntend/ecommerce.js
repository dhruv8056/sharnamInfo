import React from 'react'
import { FaBoxOpen, FaShoppingCart, FaChartLine, FaSearch, FaShoppingBag } from 'react-icons/fa';
import { IoIosContacts } from "react-icons/io";
import Footer from '../../../layout/footer';
import Help from '../../help/help';
import { TfiShoppingCartFull } from 'react-icons/tfi';
import web1 from '../../../assets/img/e-com1.png';
const Ecommerce = () => {

  return (

    <div>
      <div className="w-section">
        <div className="w-content">
          <h1>E-COMMERCE</h1>
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
          <a class="cbtn animation" href="/contact">Hire E-commerce Devlopment</a>
        </div>
        <div className="wimage-content">
          <img src={web1} alt="Office Illustration" />
        </div>
      </div>
      {/* e-commerce devlopment*/}
      <div className="eco-services">
        <h4>O U R</h4>
        <h2>E-Commerce Development </h2>
        <hr className='web-line'></hr>
        <div className="eapp-app">
          <div className="eco-app">
            <h3>Custom Website <br />Development:</h3>
            <hr className="nav-line" />
            <p>
              We provide tailor-made e-commerce solutions designed to meet the specific needs
              of your business. Our team of experts will work with you to develop a platform that
              enhances user experience, drives sales, and integrates seamlessly with your existing systems.
            </p>
          </div>

          <div className="eco-app">
            <h3> Responsive Web <br />Design:</h3>
            <hr className="nav-line" />
            <p>
              Our e-commerce solutions, developed with react, node.js or python prioritize responsive
              web design to ensure optimal user experiences across devices. We ensure your e-commerce website performs
              consistently across different browsers, enhancing accessibility for all users.
            </p>
          </div>

          <div className="eco-app">
            <h3> E-Commerce Mobile App <br /> Development:</h3>
            <hr className="nav-line" />
            <p>
              We go beyond websites, offering e-commerce mobile app development to ensure your business
              is accessible to users on the go. Whether you need a native app for a specific platform or a
              cross-platform solution, our expertise covers both, ensuring a wider audience reach.
            </p>
          </div>
          <div className="eco-app">
            <h3>Payment Gateway<br /> Integration:</h3>
            <hr className="nav-line" />
            <p>
              We offer secure payment gateway integration to provide a smooth checkout
              process for your customers. Our solutions support various payment methods, ensuring
              convenience and security for online transactions.
            </p>
          </div>
        </div>
      </div>

      <div className="e-services-container">
        <h2>O U R </h2>
        <h1>E-Commerce Services</h1>
        <hr className='web-line'></hr>
        <div
          className='e-app'>
          <div className="e-service">
            <IoIosContacts size={24} className='e-icon' />
            <h3>We create easy points of contact</h3>
            <hr className="nav-line" />
            <p>
              To boost engagement, we integrate strong calls-to-action, social media signals,
              and conversion-optimized storefront
              designs for your eCommerce website.
            </p>
          </div>
          <div className="e-service">
            <FaBoxOpen size={24} className='e-icon' />
            <h3>Inventory Management System</h3>
            <hr className="nav-line" />
            <p>
              With our robust inventory management system, you can easily track stock levels,
              set alerts for low inventory, and keep your product listings up-to-date in real time.
            </p>
          </div>
          <div className="e-service">
            <FaShoppingCart size={24} className='e-icon' />
            <h3>We simplify the  process</h3>
            <hr className="nav-line" />
            <p>
              We make checkout a breeze with a simple 3-4 step process, easy-to-fill-out fields,
              and by removing unnecessary clutter.
            </p>
          </div>
          <div className="e-service">
            <FaChartLine size={24} className='e-icon' />
            <h3>Integrated Analytics and Reporting</h3>
            <hr className="nav-line" />
            <p>
              We provide built-in analytics tools that allow you to monitor your store's performance,
              track sales, and gain insights into customer behavior, helping you make data-driven decisions.
            </p>
          </div>
          <div className="e-service">
            <FaSearch size={24} className='e-icon' />
            <h3>We make your store visible on search engines to bring traffic</h3>
            <hr className="nav-line" />
            <p>
              With on-site optimization and SEO-friendly architecture, our online stores are
              easy to find on search engines, bringing
              in organic traffic as soon as you go live.
            </p>
          </div>
          <div className="e-service">
            <FaShoppingBag size={24} className='e-icon' />
            <h3>E-Commerce  website</h3>
            <hr className="nav-line" />
            <p>
              Compared to other companies, our eCommerce web design services focus on
              helping you sell more, with advanced features,
              rich shopping cart design, and integrated social media signals.
            </p>
          </div>
        </div>
      </div>

      {/*image sets*/}
      <div className="img-background-container">
        <div className="img-overlay">
          <div className='img-con'>
            <TfiShoppingCartFull size={30} />
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