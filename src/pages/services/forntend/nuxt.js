import React from 'react'
import Navbar from '../../../layout/navbar';
import Footer from '../../../layout/footer';
import Help from '../../help/help';
const Nuxt = () => {
  return (

    <div>
      <div className='se-web'>
        <Navbar />
      </div>
      <div className="se-section">
        <div className="se-overlay">
          <div className="se-content">
            <button className="se-button">Nuxt Js Development</button>
            <h1>Nuxt Js Development</h1>
            <p>Services - Nuxt development</p>
          </div>
        </div>
      </div>

      
       {/*image sets*/}
       <div className="img-background-container">
        <div className="img-overlay">
          <div className='img-con'>
            <h1>Nuxt Js- Development<br /></h1>
            <p> Our custom NuxtJS development <br />services are tailored to meet your specific requirements.</p>
          </div>
        </div>
      </div>
      <Help />
      <Footer />
    </div>

  )
}

export default Nuxt