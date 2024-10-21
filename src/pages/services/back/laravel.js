import React from 'react'
import Navbar from '../../../layout/navbar';
import Footer from '../../../layout/footer';
import Help from '../../help/help';
import laravel1 from '../../../assets/img/laravel1.png';
import laravel2 from '../../../assets/img/laravel2.png';
import { FaLaravel } from 'react-icons/fa';
import { FaDatabase, FaProjectDiagram, FaSyncAlt, FaUserTie } from 'react-icons/fa';
import { FaComputer } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { FadeIn } from '../../../layout/varient';
const Laravel = () => {
  const skills = [
    {
      icon: <FaComputer />,
      title: "Web Development ",
      description: "Our developers are skilled in fundamental web languages. They know everything about CSS, HTML, and JavaScript.",
    },
    {
      icon: <FaDatabase />,
      title: "Database Management ",
      description: "We are experts in managing database systems, organizing all the data from a company’s website, and making it easier for end-users to share the data effectively.",
    },
    {
      icon: <FaProjectDiagram />,
      title: "Knowledge of Project Management Frameworks",
      description: "It provides a methodology that leads to successful output, focusing on the tools, processes, and tasks needed to build a project from start to end.",
    },
    {
      icon: <FaSyncAlt />,
      title: "Adaptability",
      description: "It’s crucial to remain flexible and open to new experiences. Laravel continues to evolve, and we stay on top of the latest updates.",
    },
    {
      icon: <FaUserTie />,
      title: "Professionalism & Communication ",
      description: "We maintain a high level of professionalism and know how to work in groups and listen to others’ ideas.",
    },
  ];



  const laservices = [
    {
      title: 'Custom Laravel Development',
      description:
        'Our Laravel development services provide tailored web application solutions to meet your unique business requirements. We focus on creating agile, secure, scalable, and high-performance web applications that drive results for our clients.',
    },
    {
      title: 'Laravel CMS Development',
      description:
        'To strengthen your customer relationships, a custom Content Management System (CMS) is essential for your business. Our expert Laravel developers specialize in building feature-rich CRM systems tailored to your specific needs.',
    },
    {
      title: 'eCommerce Web App Development',
      description:
        'With our extensive expertise in Laravel, we offer comprehensive eCommerce web app development services designed to enhance your sales and provide an exceptional user experience through outstanding UI design and development.',
    },
    {
      title: 'Laravel Module & API Development',
      description:
        'We deliver seamless RESTful API integration and Laravel module development, providing a complete package to manage enterprise-level Laravel applications that include multiple views, controllers, and models.',
    },
    {
      title: 'Laravel Support & Maintenance',
      description:
        'Our commitment to your success extends beyond development. We offer ongoing support and maintenance services post-launch, ensuring that your Laravel applications remain robust and efficient. Our developers are available to assist you according to your time zone.',
    },
    {
      title: 'Data Migration & Upgradation',
      description:
        'Our expert Laravel team is here to assist you with migrating your applications from one platform to another within the Laravel ecosystem. We also provide upgradation services to the latest Laravel version to optimize performance and functionality.',
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
            <button className="se-button">Laravel Development</button>
            <h1>Laravel Development</h1>
            <p>Services - Laravel development</p>
          </div>
        </div>
      </div>


      {/*laravel development*/}
      <div className="laravel-development">
        <div className='l-con'>

          <h1>  <FaLaravel size={30} /> Laravel Development Team with us</h1>
          <h2>Top Laravel development company offering end-to-end solutions</h2>
          <p>
            At Sharnam Info, we pride ourselves on being a top Laravel development
            company delivering custom web solutions. <br />Laravel, the most popular PHP framework, allows
            us to build dynamic, scalable, and secure
            web applications that meet your unique business needs.</p>
        </div>
        <motion.div
          variants={FadeIn("down", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }} className="skills-container">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        variants={FadeIn("down", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }} className="l-img">
        <img src={laravel1} alt='l-images' className="limage" />


      </motion.div>
      {/* Laravel services */}

      <div className="laravel-services">
        <div className="laravel-header">
          <img src={laravel2} alt='l-images' className="laravel-header-image" />
          <h2>Laravel Development Services</h2><br />

        </div>
        <motion.div
          variants={FadeIn("down", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }} className="laravel-list">
          {laservices.map((service, index) => (
            <div className="laravel-card" key={index}>
              <div className="laravel-card-content">
                <h3 className="laravel-title">{service.title}</h3>
                <p className="laravel-description">{service.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>


      {/*image sets*/}
      <div className="img-background-container">
        <div className="img-overlay">
          <div className='img-con'>
            <FaLaravel size={30} />
            <h1>Laravel - Development<br /></h1>
            <p> Our custom Laravel development <br />services are tailored to meet your specific requirements.</p>
          </div>
        </div>
      </div>
      <Help />
      <Footer />
    </div>
  )
}

export default Laravel