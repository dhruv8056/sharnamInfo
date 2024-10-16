import React from 'react'
import Navbar from '../../../layout/navbar';
import Footer from '../../../layout/footer';
import Help from '../../help/help';
import { FaPython } from 'react-icons/fa';
const Python = () => {
  return (
    <div>
      <div className='se-web'>
        <Navbar />
      </div>
      <div className="se-section">
        <div className="se-overlay">
          <div className="se-content">
            <button className="se-button">Python Development</button>
            <h1>Python Development</h1>
            <p>Services - Python development</p>
          </div>
        </div>
      </div>


       {/*image sets*/}
       <div className="img-background-container">
        <div className="img-overlay">
          <div className='img-con'>
            <FaPython size={30} />
            <h1>Python - Development<br /></h1>
            <p> Our custom Python development <br />services are tailored to meet your specific requirements.</p>
          </div>
        </div>
      </div>
      <Help />
      <Footer />
    </div>
  )
}

export default Python
