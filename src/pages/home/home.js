import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import py from '../../assets/img/paython.png';
import { GiBullseye, GiSheikahEye } from "react-icons/gi";
import { MdOutlineDiversity3, MdSecurity } from "react-icons/md";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { GrServices } from "react-icons/gr";
import { ImMobile } from "react-icons/im";
import { RiNextjsLine } from "react-icons/ri";
import { SiNestjs, SiTypescript } from "react-icons/si";
import { FaReact, FaDocker, FaCss3, FaLaptop, FaPhp, FaDatabase, FaAngular, FaNodeJs, FaLaptopCode, FaCogs, FaClipboardList } from 'react-icons/fa';
import { FaVuejs, FaLaravel } from 'react-icons/fa';
import { FaComputer } from 'react-icons/fa6';
import { useEffect } from 'react';
import { FaAngleUp } from "react-icons/fa6";
import Help from '../help/help';
import { motion } from 'framer-motion';
import Footer from '../../layout/footer';
import { FadeIn } from '../../../src/layout/varient';
const Home = () => {
    const [activeTab, setActiveTab] = useState('software');
    const navigate = useNavigate();
    const handaleaboutclick = () => {
        navigate('/aboutus');
    }
    const [showScrollUp, setShowScrollUp] = useState(false);
    const steps = [
        {
            icon: <i className="fa fa-lightbulb"></i>,
            title: "Planning",
            description: "We gather requirements, analyze the project, and create a detailed plan.",
        },
        {
            icon: <i className="fa fa-pencil-ruler"></i>,
            title: "Design",
            description: "Our team creates prototypes and designs based on the plan.",
        },
        {
            icon: <i className="fa fa-code"></i>,
            title: "Development",
            description: "We start coding the project, ensuring all functionalities work as required.",
        },
        {
            icon: <i className="fa fa-rocket"></i>,
            title: "Launch",
            description: "After rigorous testing, we deploy the project live and monitor its performance.",
        },
    ];
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                setShowScrollUp(true);
            } else {
                setShowScrollUp(false);
            }
        });
    }, []);
    const renderContent = () => {
        switch (activeTab) {
            case 'software':
                return (
                    <div className="tab-content">

                        <div className="tab-description">
                            <FaLaptopCode className="tab-icon" />
                            <h3>Software Development</h3>
                            <p>Software development is the creative process of designing, coding, testing, and maintaining computer programs.
                                It involves turning ideas into functional software to address specific needs, leveraging programming languages, frameworks, and methodologies.
                                The goal is to produce reliable, user-friendly, and innovative solutions that empower businesses and individuals in the digital landscape.</p>
                        </div>
                    </div>
                );
            case 'web':
                return (
                    <div className="tab-content">

                        <div className="tab-description">
                            <FaComputer className="tab-icon" />
                            <h3>Web Development</h3>
                            <p>Website development is the art and science of creating and maintaining websites.
                                It involves designing the user interface, writing code, and ensuring functionality across various devices.
                                Website developers use programming languages like HTML, CSS, and JavaScript to build engaging and responsive sites that cater to specific business or personal needs.
                                The process includes both front-end design for user interaction and back-end development for server-side functionalities.</p>
                        </div>
                    </div>
                );
            case 'mobile':
                return (
                    <div className="tab-content">

                        <div className="tab-description">
                            <ImMobile className="tab-icon" />
                            <h3>Mobile App Development</h3>
                            <p>Mobile app development is the process of creating software applications specifically for mobile devices,
                                such as smartphones and tablets. Developers use programming languages like Java or Swift to design and build apps for platforms like iOS or Android.
                                This intricate process involves coding, testing, and optimizing user interfaces for small screens, ensuring functionality, performance, and a positive user experience.</p>
                        </div>
                    </div>
                );
            case 'erp':
                return (
                    <div className="tab-content">

                        <div className="tab-description">
                            <HiOutlineComputerDesktop className="tab-icon" />

                            <h3>ERP Solutions</h3>
                            <p>ERP development involves creating software systems that integrate and manage core business processes such as finance,
                                human resources, inventory, and supply chain. These comprehensive solutions streamline data flow across an organization, enhancing efficiency and decision-making.
                                ERP development customizes software to meet specific business requirements, fostering seamless communication and resource optimization within a centralized platform.</p>
                        </div>
                    </div>
                );
            case 'dba':
                return (
                    <div className="tab-content">

                        <div className="tab-description">
                            <FaDatabase className="tab-icon" />
                            <h3>DBA Services</h3>
                            <p>DBA services involve expert management and optimization of databases within an organization. This includes tasks such as database installation, configuration, security, backup, and performance tuning. DBAs ensure data integrity, availability, and efficient query performance. They play a critical role in maintaining the health of databases, troubleshooting issues, and implementing best practices for data management.</p>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className='home-back'>
            <hr className="home-line" />
            <div className="hero-section">
                <div className="hero-content">
                    <h5>S H A R N A M </h5><h6>I N F O</h6>
                    <h2>Empowering businesses through innovative</h2>
                    <h1>IT Solutions</h1>
                    <p>
                        We deliver cutting-edge technology to enhance operational efficiency, coupled with
                        a commitment to <br />reliability and robust security measures.
                    </p>
                    <button className='read-more-btn' onClick={handaleaboutclick}>Read More</button>
                </div>

            </div>
            <hr className="nav-line" />

            <section className="hm-section">
                <div className="hm-container">
                    <div className="hm-box">
                        <div className="hm-icon">
                            <FaCogs />
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
                            <FaClipboardList />
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
                            <FaComputer />
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

            {/* expertise*/}
            <div className="cards-section">
                <h2>|| Our Expertise ||</h2>
                <div className="cards-container">
                    <div className="card">
                        <div className="card-manage">
                            <MdOutlineDiversity3 />
                            <h3>IT Management</h3>
                            <p>"We build customized software solutions tailored to your business needs."</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-service">
                            <GrServices />
                            <h3>Cloud Services</h3>
                            <p>"Scalable and secure cloud solutions for modern enterprises."</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-security">
                            <MdSecurity />
                            <h3>Data Security</h3>
                            <p>"Protect your data and networks with our advanced cybersecurity services."</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-conslt">
                            <FaLaptop />
                            <h3>IT Consulting</h3>
                            <p>"Expert consulting to help you implement cutting-edge technologies."</p>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="nav-line" />
            { /*offering in technologies*/}
            <div className="h-container">
                <div className="home-container">
                    <h1>WHAT WE'RE OFFERING</h1>
                    <h4>Offering a comprehensive range of professional IT services</h4>
                    <div className='text-strong'>
                        <strong>
                            We are committed to delivering innovative solutions that drive growth, productivity, and success.
                        </strong>
                    </div>
                    <motion.div
                        variants={FadeIn("down", 0.4)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.5 }} className="home-cards">
                        <div className="home-card">
                            <FaLaptopCode className="home-icon" />
                            <h3>Software<br /> Development</h3>
                            <p>
                                We specialize in developing custom software solutions tailored to our clients' unique needs and objectives.
                            </p>
                        </div>
                        <div className="home-card">
                            <FaComputer className="home-icon" />
                            <h3>Web <br />Development</h3>

                            <p>
                                We create visually stunning and highly functional websites that are optimized for performance and user experience.
                            </p>
                        </div>
                        <div className="home-card">
                            < ImMobile className="home-icon" />
                            <h3>Mobile App<br /> Development</h3>
                            <p>
                                Our team of experienced developers creates custom mobile apps that are optimized for performance and user experience.
                            </p>
                        </div>
                        <div className="home-card">
                            <HiOutlineComputerDesktop className="home-icon" />
                            <h3>ERP <br />solution</h3>
                            <p>
                                We provide ERP development services to help businesses streamline their operations, and improve decision-making.
                            </p>
                        </div>
                        <div className="home-card">
                            < FaDatabase className="home-icon" />
                            <h3>DBA <br />services</h3>
                            <p>
                                We focus on reliable data management that optimises and refines business databases and data systems.
                            </p>
                        </div>

                    </motion.div>
                </div>
            </div>

            {/* Tabs Section */}
            <div className="tabs-container">
                <h4>|| our services ||</h4>
                <h1>Elaborating on our product offerings</h1>
                <div className="tabs">
                    <button className={`tab-btn ${activeTab === 'software' ? 'active' : ''}`} onClick={() => setActiveTab('software')}>Software Development</button>
                    <button className={`tab-btn ${activeTab === 'web' ? 'active' : ''}`} onClick={() => setActiveTab('web')}>Web Development</button>
                    <button className={`tab-btn ${activeTab === 'mobile' ? 'active' : ''}`} onClick={() => setActiveTab('mobile')}>Mobile App Development</button>
                    <button className={`tab-btn ${activeTab === 'erp' ? 'active' : ''}`} onClick={() => setActiveTab('erp')}>ERP Solutions</button>
                    <button className={`tab-btn ${activeTab === 'dba' ? 'active' : ''}`} onClick={() => setActiveTab('dba')}>DBA Services</button>
                </div>
                <div className="tab-content-container">
                    {renderContent()}
                </div>
            </div>
            <hr className="nav-line" />


            {/*Technology*/}
            <div className="tech-stack-section">
                <div className='tech-con'>
                    <h4 style={{ letterSpacing: '0.2em' }}>OUR SERVICES</h4>

                    <div className="tech-cards-cont">
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
                            <h3>Css</h3>
                        </div>
                        <div className="tech-card tech-nestjs">
                            <SiNestjs />
                            <h3>Nest.js</h3>
                        </div>
                        <div className="tech-card tech-php">
                            <FaPhp />
                            <h3>Php</h3>
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
                            <img src={py} alt="IT Solutions" className="python" />
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
            </div>

            {/*process*/}
            <section className="p-section">
                <h2 className="p-title" style={{ letterSpacing: '0.2em' }}>OUR PROCESS</h2>
                <p className="p-subtitle">
                    Take a general look at the process that we use when implementing a new project.
                </p>
                <motion.div
                    variants={FadeIn("down", 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.5 }} className="p-steps">
                    {steps.map((step, index) => (
                        <div className="p-step" key={index}>
                            <div className="icon-p">
                                {step.icon}
                            </div>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </div>
                    ))}
                </motion.div>
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
                        in today's fast-paced and ever-changing world. <br />We are committed to delivering exceptional
                        service and support,and to building long-term partnerships based on trust and mutual success.
                    </p>
                </motion.div>
            </div>

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
                        drive growth and success for businesses worldwide.<br />
                        We strive to be at the forefront of emerging technologies,
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
        </div >
    );
};

export default Home;
