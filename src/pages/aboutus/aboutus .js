import React, { useState } from 'react'
import about from '../../assets/img/about.jpg';
import box1 from '../../assets/img/box-1.png';
import box2 from '../../assets/img/box-2.png';
import box3 from '../../assets/img/box-3.png';
import box4 from '../../assets/img/box-4.png';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { FaCcDiscover } from "react-icons/fa";
import { SiCssdesignawards } from "react-icons/si";
import { FaConnectdevelop } from "react-icons/fa";
import { MdLaunch } from "react-icons/md";
import about1 from '../../assets/img/about1.jpg';

const Aboutus = () => {
  const [counterState, setCounterState] = useState(false);

  return (

    <div>
      <div className='image-sections'>
        <img src={about} alt='about us' className='banner' />
        <div className="about-text">
          <h1>About Us</h1>
          <a href='/home'>Home</a>-
          <span>About Us</span>
        </div>
      </div>
      <div className='about-page-container'>
        <div className='slice-container'>
          <div className='abouts-section'>
            <div className='dividers'>
              <h1> About Us</h1>
            </div>

            <h2>Clients all across the world have put their trust in us.</h2>
            <p>Sharnam info provides software, website, development, and other services to satisfy clients needs and enhance their customer relation management needs. Sharnam info provides quality services and maintains a high standard for development.</p>
          </div>
          <div className='row-container'>
            <div className='client-count'>
              <span>15 +</span>
              <h4>Happy Clients</h4>
            </div>
            <div className='client-count'>
              <span>26 +</span>
              <h4>Project Done</h4>
            </div>

            <div className='client-count'>
              <span>8 +</span>
              <h4>Skilled Experts</h4>
            </div>
          </div>
        </div>

        <div className='box-section'>
          <div className='box-containers'>

            <div className='box1'>
              <img src={box1} alt='about us' className='banner' />
              <div className='image-text'>Our Mission</div>

            </div>



            <div className='box2'>
              <img src={box2} alt='about us' className='banner' />
              <div className='image-text'>Our Vision</div>
            </div>


            <div className='box3'>
              <img src={box3} alt='about us' className='banner' />
              <div className='image-text'>Our Philosophy</div>
            </div>
            <div className='box4'>
              <img src={box4} alt='about us' className='banner' />
              <div className='image-text'>Our Stratagy</div>
            </div>
          </div>
        </div>
      </div>

      <div className='pro-header'>
        <span>our process</span>
        <h2>Our Working Process</h2>
      </div>
      <div className='process-steps'>
        <div className='process-step'>
          <div className='icons'>
            <FaCcDiscover />
          </div>
          <h4>Discovery</h4>
          <p>We work closely with our clients to understand their needs and goals.</p>
        </div>
        <div className='process-step'>
          <SiCssdesignawards />
          <h4>Design</h4>
          <p>We create wireframes and prototypes to visualize the solution.</p>
        </div>
        <div className='process-step'>
          <FaConnectdevelop />
          <h4>Development</h4>
          <p>We develop the solution using the latest technologies and best practices.</p>
        </div>
        <div className='process-step'>
          <MdLaunch />
          <h4>Launch</h4>
          <p>We launch the solution and provide ongoing support and maintenance.</p>
        </div>
      </div>

      <div className='about-section'>
        <img src={about1} alt='about us' className='banner' />
        <div className='abouts-text'>
          <h1>We solve business challenges with modern technologies</h1>
          <p>We provide all kind of IT management services of in the according to on your organization prioritie.</p>
          <div className='react-icon'>
            <FaReact />
          </div>
          <div className='react-icon1'>
            <FaNodeJs />
          </div>
          <div className='react-icon2'>
            <FaPython />
          </div>
          <div className='react-icon3'>
            <DiJavascript />
          </div>

        </div>
      </div>

      <ScrollTrigger onEnter={() => setCounterState(true)} onExit={() => setCounterState(false)}>
        <div className='counter-area'>

          <div className='counter-list'>
            <h2> {counterState &&
              <CountUp
                start={0}
                end={26}
                duration={2.50}>
              </CountUp>}+</h2>
            <p>Finished Projects</p>
          </div>
          <div className='counter-list'>
            <h2>
              {counterState &&
                <CountUp
                  start={0}
                  end={15}
                  duration={2.50}>
                </CountUp>}</h2>
            <p>Happy Clients</p>
          </div>
          <div className='counter-list'>
            <h2> {counterState &&
              <CountUp
                start={0}
                end={5}
                duration={2.50}>
              </CountUp>} +</h2>
            <p>Years of experience</p>
          </div>
        </div>
      </ScrollTrigger>
      <div className='connects'>
        <h2>Let's start a
          <span> Cool Project </span>
          <br />
          With
          <span> Sharnam </span>
          Infotech
        </h2>
      </div>
      <div className='sub-conatiner'>
        <a href='/contact'>
          <button type="contact" className="btn-contact">Contact Us</button>
        </a>

      </div>
    </div>

  );
};

export default Aboutus;
