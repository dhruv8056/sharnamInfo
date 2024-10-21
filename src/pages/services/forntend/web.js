// Web.js
import React from 'react';
import Navbar from '../../../layout/navbar';
import Footer from '../../../layout/footer';
import { VscCircleFilled } from "react-icons/vsc";
import Help from '../../help/help';
import { FaReact, FaNodeJs } from "react-icons/fa";
import { AiOutlinePython } from "react-icons/ai";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { motion } from 'framer-motion';
import { FadeIn } from '../../../layout/varient';
const Web = () => {
    const services = [
        {
            title: 'Web development',
            description: 'Design and implement stunning, responsive user interfaces that offer highly interactive, native- like experiences to users.',
            icon: <HiOutlineComputerDesktop />,
        },
        {
            title: 'Node.js',
            description: 'Develop high-performance web applications using JavaScript, enabling full-stack development with a single, versatile language.',
            icon: <FaNodeJs />,
        },
        {
            title: 'Python',
            description: 'Python, as one of the fastest-growing programming languages, ensures timely completion of your projects with efficiency and reliability.',
            icon: <AiOutlinePython />,
        },
        {
            title: 'React.js',
            description: 'Utilize a cutting-edge and adaptable frontend tool, backed by a large community of skilled and proficient developers.',
            icon: <FaReact />,
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
                        <button className="se-button">Web Development</button>
                        <h1>Web Development</h1>
                        <p>Services - Web development</p>

                    </div>
                </div>
            </div>


            {/* web devlopment*/}
            <div className="web-services">
                <h4>O U R</h4>
                <h2>Web Development </h2>
                <hr className='web-line'></hr>
                <div className="web-app">
                    <div className="cus-app">
                        <h3><VscCircleFilled className='web-icon' /> Custom Website Development:</h3>
                        <p>
                            Our custom web development services ensure that the solutions we deliver align precisely with your unique business needs. Whether you choose React,paython our custom solutions seamlessly integrate with various platforms for optimal performance.
                        </p>
                    </div>
                    <div className="cus-app">
                        <h3><VscCircleFilled className='web-icon' /> Web Application Development:</h3>
                        <p>
                            Our web application development services, powered by React,paython  create dynamic and
                            interactive web applications. Ensure a consistent user experience across various devices with
                            our cross-platform compatible web applications.
                        </p>
                    </div>
                    <div className="cus-app">
                        <h3><VscCircleFilled className='web-icon' /> E-commerce Development:</h3>
                        <p>
                            Whether it's with React, paython we develop robust and scalable e-commerce platforms tailored
                            to your business needs. Security is paramount in e-commerce, and our solutions prioritize secure
                            transaction handling to build trust with your customers.
                        </p>
                    </div>
                    <div className="cus-app">
                        <h3><VscCircleFilled className='web-icon' />  Responsive Web Design:</h3>
                        <p>
                            Our web application development services, powered by React,paython create
                            dynamic and interactive web applications. Ensure a consistent user experience across
                            various devices with our cross-platform compatible web applications.
                        </p>
                    </div>
                </div>
            </div>


            {/*web services description*/}
            <div className="web-dev">
                <h1>Web Development</h1>
                <h2 className="web-services-title">services</h2>
                <p>Utilize our dependable processes to accelerate delivery across various technology stacks. <br />
                    Let's discuss how we can assist you.</p>

                <motion.div
                    variants={FadeIn("down", 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.5 }}
                    className="web-services-grid">
                    {services.map((service, index) => (
                        <div className="web-service-card" key={index}>
                            <div className="web-dservice-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/*image sets*/}
            <div className="img-background-container">
                <div className="img-overlay">
                    <div className='img-con'>
                        <h1>Web - Development<br /></h1>
                        <p> web deblopment It involves a combination of various <br />tasks
                            and technologies to build <br />the functionality, design, and
                            interactivity of websites.</p>
                    </div>
                </div>
            </div>

            <Help />
            <Footer />
        </div>
    );
}

export default Web;
