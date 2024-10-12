import { useState } from 'react';
import { Link } from 'react-router-dom';
import home2 from '../assets/img/home-2.png'
const Navbar = () => {

    const [isServicesOpen, setIsServicesOpen] = useState(false);


    return (
        <nav className="navbar">
            <ul className='main-menu'>
                <li><Link to="/home">HOME</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
                <li
                    className="navbar-item"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                >
                    <span>SERVICES </span>
                    {isServicesOpen && (
                        <div className="services-dropdown">
                            <div className="services-page">

                                <div className="services-list">
                                    <h3>Services</h3>
                                    <h4>Frontend Development</h4>
                                    <ul>
                                        <li><Link to='/web'>Web Development</Link></li>
                                        <li><Link to='/ecommerce'>E-commerce Development</Link></li>
                                        <li><Link to='/reactjs'>ReactJS Development</Link></li>
                                        <li><Link to='/typescript'>Typescript Development</Link></li>
                                        <li><Link to='/angular'>Angular.Js Development</Link></li>
                                        <li><Link to='/vue'>Vue.Js Development</Link></li>
                                        <li><Link to='/next'>NextJS Development</Link></li>
                                        <li><Link to='/nuxt'>Nuxt.js Development</Link></li>
                                    </ul>

                                </div>
                                <div className="services-list">
                                    <h4>Backend Development</h4>
                                    <ul>
                                        <li>Node.js Development</li>
                                    </ul>

                                </div>

                                <div className="commitment-section">
                                    <div className="image-placeholder">
                                        <img src={home2} alt=" Commitment" />
                                    </div>
                                    <h3>COMMITTED TO THE FUTURE</h3>
                                    <p>Our commitment weaves a story of progress and limitless potential.</p>
                                </div>
                            </div>
                        </div>
                    )}
                </li>
            </ul>
            <div className="navbar-actions">
                <button className="btn" ><Link to='/contact'></Link>Contact Us</button>
                <button className="btn">Send Your CV</button>
            </div>

        </nav>
    );
};

export default Navbar;
