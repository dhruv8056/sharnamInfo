import React from 'react'
import Navbar from '../../../layout/navbar';
import Footer from '../../../layout/footer';
import Help from '../../help/help';
import { FaLaravel } from 'react-icons/fa';
const Laravel = () => {
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