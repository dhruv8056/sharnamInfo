import React from "react";

const Navbar = () => {
    
    return (
        <section className='navbarsection'>
            <header className='header flex'>
                <div className='logodiv'>
                    <a href='assets/ones/home' className='logo flex'>
                    </a>
                </div>
             
                    <ul className='navlist flex'>
                        <li className='navitem'>
                            <a href='/home' className='logo'>HOME</a>
                        </li>
                        <li className='navitem'>
                            <a href='/company' className='logo'>COMPANY</a>
                        </li>
                
                        <li className='navitem'>
                            <a href='/services' className='logo'>SERVICES</a>
                        </li>

                        <li className='navitem'>
                            <a href='/contact' className='logo'>CONTACT</a>
                        </li>

                    </ul>
                   
            </header>
        </section>
    );
};

export default Navbar;
