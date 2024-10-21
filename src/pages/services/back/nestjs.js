import React from 'react'
import Navbar from '../../../layout/navbar';
import { SiNestjs } from "react-icons/si";
import next1 from '../../../assets/img/nest1.png';
import Footer from '../../../layout/footer';
import Help from '../../help/help';
import { motion } from 'framer-motion';
import { FadeIn } from '../../../layout/varient';
const Nestjs = () => {

  return (
    <div>
      <div className='se-web'>
        <Navbar />
      </div>
      <div className="se-section">
        <div className="se-overlay">
          <div className="se-content">
            <button className="se-button">Nest Development</button>
            <h1>Nest Development</h1>
            <p>Services - Nest development</p>
          </div>
        </div>
      </div>

      <motion.div
        variants={FadeIn("down", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }} className='nest-info'>
        <h1>
          NestJS Development Services
        </h1>
        <h2>
          NestJS is a powerful Node.js framework that helps teams to build efficient and scalable server-side applications. <br />
          It’s compatible with a wide range of libraries, allowing developers to take advantage of the many valuable third-party plugins.
        </h2>
        <h2>
          Our development team has used NestJS in many web development projects and knows how to make the most of this incredibly versatile framework.<br />
          Team up with us to unlock the value of your web app with the help of our expertise in NestJS.
        </h2>
      </motion.div>
      {/*images and contants*/}
      <div className='nest-contents'>

        <img src={next1} alt='next-i' className='nest-image' />
        <div className="nestjs-features">
          <h2>Nest Development Services</h2>
          <h1>Welcome to the best place for cutting-edge web development solutions,  Sharnam Info
            NestJs Development Hub! </h1>
          <div className="features-grid">
            <div className="feature">
              <h3>Modular Design</h3>
              <p>
                NestJS encourages the use of modular architecture, enabling programmers to divide their code into manageable, reusable modules.
                Teamwork is encouraged, code structure is improved, and code reusability is increased with this modular approach.
              </p>
            </div>
            <div className="feature">
              <h3>TypeScript Support</h3>
              <p>
                NestJS now supports static typing thanks to TypeScript, a superset of JavaScript, which enables developers to detect mistakes
                at compile time rather than runtime. TypeScript increases developer productivity, improves tools support, and makes code easier to read.
              </p>
            </div>
            <div className="feature">
              <h3>Dependency Injection</h3>
              <p>
                Dependency injection is used by NestJS to control the generation and resolution of objects and their dependencies.
                Dependency injection makes it easier to integrate third-party libraries and services, enhances testability,
                and encourages loose coupling between components.
              </p>
            </div>
            <div className="feature">
              <h3>Built-in HTTP Server</h3>
              <p>
                A built-in HTTP server for NestJS is based on Express.js, a well-liked Node.js web application framework.
                A dependable and strong foundation for managing HTTP requests, routing, middleware, and other tasks is provided by this integrated server.
              </p>
            </div>
            <div className="feature">
              <h3>Scalability and Performance</h3>
              <p>
                NestJS's non-blocking, asynchronous architecture makes it ideal for creating high-performance apps that can manage numerous requests at once.
                NestJS offers pre-integrated functionality for caching, rate limitation, and request validation, empowering developers to maximize efficiency and expandability.
              </p>
            </div>
            <div className="feature">
              <h3>Officially Supported by the Community</h3>
              <p>
                The development community of NestJS is dynamic and expanding, with members actively participating in the ecosystem.
                The framework is updated frequently to provide developers with access to the newest tools and technologies.
                Updates include bug repairs, upgrades, and new features.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*image sets*/}
      <div className="img-background-container">
        <div className="img-overlay">
          <div className='img-con'>
            <SiNestjs size={30} />
            <h1>Nest - Development<br /></h1>
            <p> Our custom Nest development <br />services are tailored to meet your specific requirements.</p>
          </div>
        </div>
      </div>

      <Help />
      <Footer />
    </div>
  )
}

export default Nestjs