import React from 'react';
import '../style/navbar.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../style/style.css'
import Services from '../pages/services/services';
import Company from '../pages/company/company';
import Navbar from '../layout/navbar';
import Home from '../pages/home/home';
function Myrouts() {
  return (
    <Router>  
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='home' element={<Home />} />
          <Route path='company' element={<Company />} />
          <Route path='services' element={<Services />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Myrouts;

