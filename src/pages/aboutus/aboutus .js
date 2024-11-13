import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../../layout/navbar';
import { FaReact, FaCcDiscover, FaNodeJs, FaPython, FaConnectdevelop, FaAngleUp } from "react-icons/fa6";
import { DiJavascript } from "react-icons/di";
import { SiCssdesignawards } from "react-icons/si";
import { MdLaunch } from "react-icons/md";
import Footer from '../../layout/footer';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';


const Aboutus = () => {
  const [showScrollUp, setShowScrollUp] = useState(false);
  const [counterStart, setCounterStart] = useState(false);
  const scrollRef = useRef(null);


  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setShowScrollUp(true);
      } else {
        setShowScrollUp(false);
      }
    });
  }, []);

  return (
    <div>
      <div className='se-web'>
        <Navbar />
      </div>
      <div className="se-section">
        <div className="se-overlay">
          <div className="se-content">
            <button className="se-button">About Us </button>
            <h1>About Us</h1>
            <a href='/home'>Home</a> - <span>About Us</span>
          </div>
        </div>
      </div>

      <div className='about-page-container'>
        <div className='slice-container'>
          <div className='abouts-section'>
            <h1> About Us</h1>
            <h2>Clients all across the world have put their trust in us.</h2>
            <p>Sharnam info provides software, website, development, and other services to satisfy clients' needs and enhance their customer relationship management. We maintain a high standard for development.</p>
          </div>
          <ScrollTrigger onEnter={() => setCounterStart(true)} onExit={() => setCounterStart(false)} ref={scrollRef}>

            <div className='row-container'>
              <div className='client-count'>
                <h2>{counterStart &&
                  <CountUp
                    start={0}
                    end={15}
                    duration={2}
                  />}+</h2>
                <p>Happy Clients</p>
              </div>
              <div className='client-count'>
                <h2>{counterStart &&
                  <CountUp
                    start={0}
                    end={26}
                    duration={2}
                  />}+</h2>
                <p>Projects Done</p>
              </div>
              <div className='client-count'>
                <h2>{counterStart &&
                  <CountUp
                    start={0}
                    end={8}
                    duration={2}
                  />} +</h2>
                <p>Skilled Experts</p>
              </div>
            </div>
          </ScrollTrigger>
        </div>


        <div className='box-containers'>
          <div className='box1'><div className='bx-overlay'><h2>Our Mission</h2></div></div>
          <div className='box2'><div className='bx-overlay'><h2>Our Vision</h2></div></div>
          <div className='box3'><div className='bx-overlay'><h2>Our Philosophy</h2></div></div>
          <div className='box4'><div className='bx-overlay'><h2>Our Strategy</h2></div></div>
        </div>
      </div>

      <div className='pro-header'>
        <span>Our Process</span>
        <h2>Our Working Process</h2>
      </div>
      <div className='process-steps'>
        <div className='process-step'>
          <div className='icons'><FaCcDiscover /></div>
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

      <ScrollTrigger onEnter={() => setCounterStart(true)} onExit={() => setCounterStart(false)} ref={scrollRef}>
        <div className='counter-area'>
          <div className='counter-list'>
            <h2>{counterStart &&
              <CountUp
                start={0}
                end={26}
                duration={2}
              />} +</h2>
            <p>Finished Projects</p>
          </div>
          <div className='counter-list'>
            <h2>{counterStart &&
              <CountUp
                start={0}
                end={15}
                duration={2}
              />}+</h2>
            <p>Happy Clients</p>
          </div>
          <div className='counter-list'>
            <h2>{counterStart &&
              <CountUp
                start={0}
                end={2}
                duration={2}
              />} +</h2>
            <p>Years of Experience</p>
          </div>
        </div>
      </ScrollTrigger>


      <div className='about-section'>
        <div className='ab-overlay'>
          <div className='abouts-text'>
            <h2>We solve business challenges with modern technologies</h2>
            <p>We provide all kinds of IT management services according to your organization's priorities.</p>
            <div className='react-icons'>
              <div className='react-icon1'>
                <FaReact />
              </div>
              <div className='react-icon2'>
                <FaNodeJs />
              </div>
              <div className='react-icon3'>
                <DiJavascript />
              </div>
              <div className='react-icon4'>
                <FaPython />
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className='connects'>
        <h3>Let's start a <span>Cool Project</span> with <span>Sharnam</span> Infotech</h3>
      </div>
      <div className='sub-container'>
        <a href='/contact'>
          <button type="button" className="btn-contact">Contact Us</button>
        </a>
      </div>

      <Footer />
      <div className='scrollup'>
        {showScrollUp && (
          <div className='up-icon'>
            <FaAngleUp onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Aboutus;