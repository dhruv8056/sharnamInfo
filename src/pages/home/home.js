import React from 'react';
import logo from '../../assets/img/home-1.png';
import py from '../../assets/img/paython.png'
import { MdOutlineDiversity3 } from "react-icons/md";
import { GrServices } from "react-icons/gr";
import { ImMobile } from "react-icons/im";
import { RiNextjsLine } from "react-icons/ri";
import { MdSecurity } from "react-icons/md";
import { SiNestjs, SiTypescript } from "react-icons/si";
import { FaReact, FaDocker, FaCss3, FaLaptop, FaPhp, FaAngular, FaNodeJs, FaLaptopCode } from 'react-icons/fa';
import { FaVuejs, FaLaravel } from 'react-icons/fa';
import { FaComputer } from 'react-icons/fa6';
const Home = () => {

    return (
        <div className='home-back'>
            <div className="infotech">

                <div className="content">
                    <div className='content-info'>
                        <h4>S H A R N A M  I N F O</h4>
                    </div>
                    <span>Empowering businesses through innovative </span><br />
                    <h1>IT solutions</h1>
                    <p>We deliver cutting-edge technology to enhance operational efficiency,<br />
                        coupled with a commitment to reliability and robust security measures.</p>
                    
                    <div className="stats">
                        <div className="stat">
                            <i className="fas fa-clock"></i>
                            <p>2+ Years Experience</p>
                        </div>
                        <div className="stat">
                            <i className="fas fa-users"></i>
                            <p>8+ Team Members</p>
                        </div>
                        <div className="stat">
                            <i className="fas fa-briefcase"></i>
                            <p>26+ Completed Projects</p>
                        </div>
                    </div>
                    <button className="read-more-btn">Read More</button>

                </div>
            </div>


            <div className="home-container">
                <div className="content-section">
                    <h1>Welcome to the it Solutions for the Future</h1>
                    <div className="image-section">
                        <img src={logo} alt="IT Solutions" className="banner" />
                    </div>
                </div>
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
                { /*offering in technologies*/}
                <div className="container">
                    <div className="image-container">
                    </div>
                    <div className="text-container">
                        <h2>WHAT WE'RE OFFERING</h2>
                        <p>Offering a comprehensive range of professional IT services</p>
                        <div className='text-strong'>
                            <strong>
                                We are committed to delivering innovative solutions that drive growth, productivity, and success.

                            </strong>
                        </div>
                        <div className="service-cards">
                            <div className="service-card">
                                <FaLaptopCode className="service-icon" />
                                <h3>Software Development</h3>
                                <p>
                                    We specialize in developing custom software solutions tailored to our clients' unique needs and objectives.
                                </p>
                            </div>
                            <div className="service-card">
                                <FaComputer className="service-icon" />
                                <h3>Web Development</h3>
                                <p>
                                    We create visually stunning and highly functional websites that are optimized for performance and user experience.
                                </p>
                            </div>
                            <div className="service-card">
                                < ImMobile className="service-icon" />
                                <h3>Mobile App Development</h3>
                                <p>
                                    Our team of experienced developers creates custom mobile apps that are optimized for performance and user experience.
                                </p>
                            </div>
                            <div className="service-card">
                                < ImMobile className="service-icon" />
                                <h3>Ecommerce And Store</h3>
                                <p>
                                    Our team of experienced developers creates custom mobile apps that are optimized for performance and user experience.
                                </p>
                            </div>
                            <div className="service-card">
                                < ImMobile className="service-icon" />
                                <h3>Ecommerce And Store</h3>
                                <p>
                                    Our team of experienced developers creates custom mobile apps that are optimized for performance and user experience.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

                {/*Technology*/}
                <div className="tech-stack-section">
                    <h4> || SERVICES ||</h4>
                    <h3>IT Technologies</h3>
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
                            <h3>vue.js</h3>
                        </div>

                        <div className="tech-card tech-python">
                            <img src={py} alt="IT Solutions" className="python" />
                            <h3>Python</h3>
                        </div>

                        <div className="tech-card tech-typscript">
                            <SiTypescript />
                            <h3>Typscript</h3>
                        </div>

                        <div className="tech-card tech-laravel">
                            <FaLaravel />
                            <h3>Laravel</h3>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;




