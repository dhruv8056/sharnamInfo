import React from 'react';
import Footer from '../../../layout/footer';
import Help from '../../help/help';
import { SiTypescript } from "react-icons/si";
import { RiUserSettingsFill } from "react-icons/ri";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FiDatabase, FiRefreshCcw, FiLayers, FiBox } from 'react-icons/fi';
import { FaComputer } from 'react-icons/fa6';
import { BsDatabaseFillGear } from 'react-icons/bs';
const Typescript = () => {
    const servicesData = [
        {
            title: 'Consulting',
            description: 'Expert advice on TypeScript best practices and efficient code design.',
            icon: <MdOutlineSupportAgent size={40} color="#007acc" />,
        },
        {
            title: 'Development',
            description: 'Full-stack development services using TypeScript with React and Node.js.',
            icon: <SiTypescript size={40} color="#007acc" />,
        },
        {
            title: 'Maintenance',
            description: 'Ongoing maintenance and support for TypeScript-based applications.',
            icon: <RiUserSettingsFill size={40} color="#007acc" />,
        },
    ];

    const services = [
        {
            title: 'Custom Web Application Development',
            description: 'Developing scalable and maintainable web applications using TypeScript. Creating dynamic, interactive user interfaces with frameworks like React, Angular, or Vue.js.',
            icon: <FaComputer />
        },
        {
            title: 'API Development and Integration',
            description: 'Building RESTful or GraphQL APIs with TypeScript for seamless data communication. Integrating third-party services and APIs to extend application functionality.',
            icon: <FiDatabase />
        },
        {
            title: 'Migration from JavaScript to TypeScript',
            description: 'Converting existing JavaScript codebases to TypeScript to improve type safety and code quality. Refactoring code for better maintainability and performance.',
            icon: <FiRefreshCcw />
        },
        {
            title: 'Backend Development with Node.js',
            description: 'Developing server-side applications with TypeScript and Node.js for efficient handling of data and business logic.',
            icon: <BsDatabaseFillGear />
        },
        {
            title: 'Enterprise Application Development',
            description: 'Building complex enterprise-grade applications with TypeScript for businesses needing robust, secure, and scalable solutions. ',
            icon: <FiLayers />
        },
        {
            title: 'Frontend Framework Development',
            description: 'Building custom components and libraries in TypeScript for frontend frameworks like Angular, React, or Vue.js. ',
            icon: <FiBox />
        }
    ];
    return (
        <div>
           
            {/* TypeScript services */}
            <div className="ty-container">
                <h1>TypeScript Development</h1>
                <div className=' ty-app'>
                    {servicesData.map((service, index) => (
                        <div key={index} className="ty-card">
                            <div className="ty-icon">
                                {service.icon}
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/*image*/}
            <div className="ty-image">
                <div className="ty-overlay">
                    <div className='ty-contetent'>
                        <SiTypescript size={30} />
                        <p>
                            Type<span className="last-three">Script</span>
                        </p>
                    </div>
                </div>
            </div>

            {/*services typescript*/}
            <div className='ty-main'>
                <h1>TypeScript services</h1>
                <div className="services-ty">
                    {services.map((service, index) => (
                        <div key={index} className="service-card-ty">
                            <div className="icon-ty">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/*image sets*/}
            <div className="img-background-container">
                <div className="img-overlay">
                    <div className='img-con'>
                        <SiTypescript size={30} />
                        <h1>TypeScript - Development<br /></h1>
                        <p> Our custom  TypeScript development <br />services are tailored to meet your specific requirements.</p>
                    </div>
                </div>
            </div>
            <Help />
            <Footer />
        </div>
    );
}

export default Typescript;
