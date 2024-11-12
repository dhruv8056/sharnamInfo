import React from 'react'
import Footer from '../../../layout/footer';
import next1 from '../../../assets/img/next1.png';
import next2 from '../../../assets/img/next2.png';
import { SiNextdotjs } from "react-icons/si"
import { FaComments, FaUsersCog } from 'react-icons/fa';
import { GiUpgrade } from "react-icons/gi";
import { TbDeviceImacCog } from "react-icons/tb";
import Help from '../../help/help';
import { FaComputer } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { FadeIn } from '../../../layout/varient';
import { RiNextjsLine } from 'react-icons/ri';
const Next = () => {
  const services = [
    {
      title: "Next.js Web Development",
      description: "Get highly scalable, versatile, responsive web development solutions by our expert Next.js developers.",
      icon: <FaComputer size={30} />,
    },
    {
      title: "Next.js Custom Development",
      description: "OpenXcell has expert developers who can develop customized solutions for your business.",
      icon: <TbDeviceImacCog size={30} />,
    },
    {
      title: "Upgrade to Next.js",
      description: "Migrate your existing business solution to Next.js with our expert consultants waiting to help you.",
      icon: <GiUpgrade size={30} />,
    },
    {
      title: "Next.js Consultation",
      description: "We have experienced Next.js developers who can guide you through the journey of adapting Next.js for your business.",
      icon: <FaComments size={30} />,
    },
    {
      title: "Next.js Integration",
      description: "Get seamless Next.js integration for your business solution with the expertise of our skilled developers.",
      icon: <SiNextdotjs size={30} />,
    },
    {
      title: "Next.js Support & Maintenance",
      description: "Our Next.js developers provide complete support even after deployment and solve all the little errors.",
      icon: <FaUsersCog size={30} />,
    }
  ];
  return (

    <div>
    
      {/*next js description*/}
      <motion.div
        variants={FadeIn("down", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }} className='next-con'>
        <h1>Next.js Development</h1>
        <p>'
          We prioritize quality work that meets industry standards,<br /> ensuring top-notch service
          from our experienced team of software developers.<br /> Our developers possess a variety of technical
          skills, including expertise in Python, React, Node.js, Next.js,
          TailwindCSS.'
        </p>
      </motion.div>

      {/* Next.js */}
      <div className='next-image'>
        <img src={next1} alt='Next.js development' className='next-image__img' />
        <motion.div
          variants={FadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }} className='next__content'>
          <h1>Next.js Development</h1>
          <p>Why Choose Next.js Development:</p>
          <ul>
            <li>SEO-friendly</li>
            <li>Server & client-side routing</li>
            <li>Code splitting</li>
            <li>Ease of testing</li>
            <li>Integration & maintenance</li>
            <li>Highly scalable</li>
          </ul>
        </motion.div>
      </div>


      {/*image set*/}
      <div className="n-next">
        <img src={next2} alt='n2-img' />
      </div>

      {/*next services*/}
      <div className="nextjs-services">
        <div className="next-list">
          <h3>Services Provided</h3>
          <h2>Next.js Development Services for <br />Your Business</h2>
        </div>
        <div className="next-grid">
          {services.map((service, index) => (
            <motion.div
              variants={FadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }} className="next-card" key={index}>
              <div className="icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/*image sets*/}
      <div className="img-background-container">
        <div className="img-overlay">
          <div className='img-con'>
            <RiNextjsLine size={30} />
            <h1>Next Js - Development<br /></h1>
            <p> Our custom Next JS development <br />services are tailored to meet your specific requirements.</p>
          </div>
        </div>
      </div>
      <Help />
      <Footer />
    </div>

  )
}

export default Next