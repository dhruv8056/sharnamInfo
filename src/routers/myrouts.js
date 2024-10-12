import React from 'react';
import '../style/navbar.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../style/home.css';
import '../style/footer.css';
import '../style/frontend.css';
import Company from '../pages/company/company';
import Web from '../pages/services/forntend/web';
import Navbar from '../layout/navbar';
import Home from '../pages/home/home';
import Ecommerce from '../pages/services/forntend/ecommerce';
import Angular from '../pages/services/forntend/angular';
import Typescript from '../pages/services/forntend/typescript';
import Vue from '../pages/services/forntend/vue';
import Next from '../pages/services/forntend/next';
import Nuxt from '../pages/services/forntend/nuxt';
import Webhosting from '../pages/services/webhosting/webhosting';
import Reactjs from '../pages/services/forntend/reactjs';
function Myrouts() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/company' element={<Company />} />
          <Route path="/web" element={<Web/>} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/angular" element={<Angular />} />
          <Route path="/typescript" element={<Typescript />} />
          <Route path="/reactjs" element={<Reactjs />} />
          <Route path="/vue" element={<Vue />} />
          <Route path="/next" element={<Next />} />
          <Route path="/nuxt" element={<Nuxt />} />
          <Route path="/webhosting" element={<Webhosting />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Myrouts;

