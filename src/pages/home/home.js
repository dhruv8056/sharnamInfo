import React, { useState, useEffect } from 'react';
import py from '../../assets/img/paython.png';
import home1 from '../../assets/img/home-1.png';
import { GiBullseye, GiSheikahEye } from "react-icons/gi";
import { MdOutlineDiversity3, MdSecurity } from "react-icons/md";
import { GrServices } from "react-icons/gr";
import { RiNextjsLine } from "react-icons/ri";
import { SiAmazonapigateway, SiAmazoncognito, SiAmazonelasticache, SiNestjs, SiTypescript } from "react-icons/si";
import { FaReact, FaVuejs, FaLaravel, FaDocker, FaCss3, FaLaptop, FaPhp, FaDatabase, FaAngular, FaNodeJs, FaLaptopCode, FaPuzzlePiece, FaCubes, FaCog, FaRocket } from 'react-icons/fa';
import { FaMobileAlt, FaShoppingCart, FaPaintBrush } from 'react-icons/fa';
import { FaAngleUp } from 'react-icons/fa6';
import Help from '../help/help';
import { motion } from 'framer-motion';
import Footer from '../../layout/footer';
import { FadeIn } from '../../../src/layout/varient';
import { BsDatabaseFillGear } from 'react-icons/bs';
import { VscCircleFilled } from 'react-icons/vsc';
const Home = () => {

    const [showScrollUp, setShowScrollUp] = useState(false);
    
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                setShowScrollUp(true);
            } else {
                setShowScrollUp(false);
            }
        });
    }, []);


    

    const services = [
        {
            icon: <FaLaptopCode />,
            title: 'Frontend Development',
            description: 'Delivering dynamic and responsive frontend development with frameworks like Vue.js, React.js, and Angular, we bring ideas to life with visually appealing and user-centered interfaces.'
        },
        {
            icon: <FaDatabase />,
            title: 'Backend Development',
            description: 'Offering robust backend solutions optimized for high-traffic environments, we ensure scalability, security, and seamless integration to meet your business needs.'
        },
        {
            icon: <FaShoppingCart />,
            title: 'Ecommerce & Online Stores',
            description: 'Crafting scalable eCommerce platforms with integrated digital marketing strategies to boost sales, customer engagement, and retention across digital channels.'
        },
        {
            icon: <FaPaintBrush />,
            title: 'UI/UX Design',
            description: 'Our design experts create intuitive, engaging digital experiences from initial prototyping to user testing, ensuring visually appealing and user-focused products.'
        },
        {
            icon: <FaMobileAlt />,
            title: 'Web & Mobile Design',
            description: 'Specializing in customized web and mobile design, we enhance your brand’s digital presence with interfaces that maximize usability and customer interaction.'
        },
        {
            icon: < BsDatabaseFillGear />,
            title: 'Database Management Solutions',
            description: 'Providing reliable database administration and optimization, we help streamline data processes, enhance performance, and support business growth with well-managed data systems.'
        }
    ];

    const steps = [
        {
            icon: <FaPuzzlePiece />,
            title: 'Idea',
            description: 'New inventions and the latest product innovations.',
        },
        {
            icon: <FaCubes />,
            title: 'Planning',
            description: 'Deciding scope of software product.',
        },
        {
            icon: <FaCog />,
            title: 'Create',
            description: 'Care and accuracy in the implementation process.',
        },
        {
            icon: <FaRocket />,
            title: 'Success',
            description: 'User experience and branding  success.',
        },
    ];

    return (
        <div className='home-back'>
            <hr className="nav-line" />
            <div className="hero-section">
                <div className="text-content">
                    <p className="small-title"><VscCircleFilled color='#0056b3' />YOUR GROWTH IS OUR SHARNAM INFO</p>
                    <p className="small-title"><VscCircleFilled color='#0056b3' />
                        We provide secure and scalable IT outsourcing services to our clients.</p>
                    <h1>
                        Digitizing your <span className="highlight">business</span> through our creative solutions

                    </h1>
                    <a className="cbtn animation" href="/contact">Consult Sharnam</a>
                </div>
                <div className="image-content">
                    <img src={home1} alt="Office Illustration" />
                </div>
            </div>

            <section className="hm-section">
                <div className="hm-container">
                    <div className="hm-box">
                        <div className="hm-icon">
                            <SiAmazonapigateway />
                        </div>
                        <div className="hm-content">
                            <div className="hm-number">
                                <span className="hm-box-number"> 01</span>
                            </div>
                            <h3 className="hm-title">Planning and Strategy</h3>
                            <p className="hm-description"></p>
                        </div>
                    </div>
                    <div className="hm-box">
                        <div className="hm-icon">
                            <SiAmazonelasticache />
                        </div>
                        <div className="hm-content">
                            <div className="hm-number">
                                <span className="hm-box-number">02</span>
                            </div>
                            <h3 className="hm-title">Development and Integration</h3>
                            <p className="hm-description"></p>
                        </div>
                    </div>
                    <div className="hm-box">
                        <div className="hm-icon">
                            <SiAmazoncognito />
                        </div>
                        <div className="hm-content">
                            <div className="hm-number">
                                <span className="hm-box-number">03</span>
                            </div>
                            <h3 className="hm-title">Testing and Deployment</h3>
                            <p className="hm-description"></p>
                        </div>
                    </div>
                </div>
            </section>

            {/* our expertise*/}
            <div className="cards-section">
                <div className='card-h2'>
                    <h2> Our Expertise </h2>
                </div>
                <div className="cards-container">
                    <div className="card">
                        <div className="card-1">
                            <MdOutlineDiversity3 />
                        </div>
                        <h3>IT Management</h3>
                        <p>"We build customized software solutions tailored to your business needs."</p>
                    </div>
                    <div className="card">
                        <div className="card-1">
                            <GrServices />
                        </div>
                        <h3>Cloud Services</h3>
                        <p>"Scalable and secure cloud solutions for modern enterprises."</p>
                    </div>
                    <div className="card">
                        <div className="card-1">
                            <MdSecurity />
                        </div>
                        <h3>Data Security</h3>
                        <p>"Protect your data and networks with our advanced cybersecurity services."</p>
                    </div>
                    <div className="card">
                        <div className="card-1">
                            <FaLaptop />
                        </div>
                        <h3>IT Consulting</h3>
                        <p>"Expert consulting to help you implement cutting-edge technologies."</p>
                    </div>
                </div>
            </div>

            {/*Technology*/}
            <div className="tech-stack-section">
                <h2 className="tech-title" >Our Technology</h2>
                <div className="tech-cards-container">
                    <div className="tech-card tech-react">
                        <FaReact />
                        <h3>React</h3>
                    </div>
                    <div className="tech-card tech-node">
                        <FaNodeJs />
                        <h3>Node.js</h3>
                    </div>
                    <div className="tech-card tech-docker">
                        <FaDocker />
                        <h3>Docker</h3>
                    </div>
                    <div className="tech-card tech-next">
                        <RiNextjsLine />
                        <h3>Next.js</h3>
                    </div>
                    <div className="tech-card tech-css">
                        <FaCss3 />
                        <h3>CSS</h3>
                    </div>
                    <div className="tech-card tech-nestjs">
                        <SiNestjs />
                        <h3>Nest.js</h3>
                    </div>
                    <div className="tech-card tech-php">
                        <FaPhp />
                        <h3>PHP</h3>
                    </div>
                    <div className="tech-card tech-angular">
                        <FaAngular />
                        <h3>Angular</h3>
                    </div>
                    <div className="tech-card tech-vuejs">
                        <FaVuejs />
                        <h3>Vue.js</h3>
                    </div>
                    <div className="tech-card tech-python">
                        <img src={py} alt="Python" className="python" />
                        <h3>Python</h3>
                    </div>
                    <div className="tech-card tech-type">
                        <SiTypescript />
                        <h3>TypeScript</h3>
                    </div>
                    <div className="tech-card tech-laravel">
                        <FaLaravel />
                        <h3>Laravel</h3>
                    </div>
                </div>
            </div>


            { /*services in technologies*/}
            <section className="core-services">
                <h2>Our Services</h2>
                <div className="service-list">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>


            <section className="about-studio">
                <div className="stats-overlay">
                    <a href='/aboutus' className="about-link">Our About</a>
                    <div className="stats-section">
                        <div className="stat">
                            <h3>2+</h3>
                            <p>Years Of Experience</p>
                        </div>
                        <div className="stat">
                            <h3>08+</h3>
                            <p>Skilled Expert</p>
                        </div>
                        <div className="stat">
                            <h3>15+</h3>
                            <p>Happy Clients</p>
                        </div>
                        <div className="stat">
                            <h3>26+</h3>
                            <p>Projects Done</p>
                        </div>
                    </div>
                </div>
            </section>

            {/*process*/}
            <section className="p-section">
                <h2 className="p-title" style={{ letterSpacing: '0.2em' }}>OUR PROCESS</h2>
                <p className="p-subtitle">
                    Take a general look at the process that we use when implementing a new project.
                </p>
                <div className="p-steps">
                    {steps.map((step, index) => (
                        <div className="p-step" key={index}>
                            <div className="icon-p">
                                {step.icon}
                            </div>
                            <motion.h3
                                variants={FadeIn("right", 0.4)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.5 }}>{step.title}</motion.h3>
                            <motion.p
                                variants={FadeIn("left", 0.4)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.5 }}>{step.description}</motion.p>
                        </div>
                    ))}
                </div>
            </section>

            {/*mission card content*/}
            <div className="mission-card">
                <div className="micon">
                    <GiBullseye size={100} />
                </div>
                <motion.div
                    variants={FadeIn("down", 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.5 }} >
                    <h4 className="title">Our Mission</h4>
                    <p className="description">
                        Our mission is to provide innovative technology solutions that enable businesses to thrive
                        in today's fast-paced and ever-changing world.<br />We are committed to delivering exceptional
                        service and support,and to building long-term partnerships based on trust and
                        mutual success.
                    </p>
                </motion.div>
            </div>


            {/*our vision*/}
            <div className="mission-card">
                <div className="micon">
                    <GiSheikahEye size={100} />
                </div>
                <motion.div
                    variants={FadeIn("down", 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.5 }}>
                    <h4 className="title">Our Vision</h4>
                    <p className="description">
                        Our vision is to be the leading provider of innovative technology solutions that
                        drive growth and success for businesses worldwide.<br />We strive to be at
                        the forefront of emerging technologies,
                        and to deliver exceptional value and service to our clients.
                    </p>
                </motion.div>
            </div>

            <Help />
            <hr className="nav-line" />
            <Footer />
            <div className='scrollup'>
                {showScrollUp && (
                    <div className='up-icon'>
                        <FaAngleUp
                            onClick={() => {
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
