import React from 'react';
import '../style/navbar.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../style/home.css';
import '../style/about.css';
import '../style/footer.css';
import '../style/contact.css';
import '../style/about.css';
import '../style/backend.css';
import '../style/company.css';
import '../style/frontend.css';
<<<<<<< Updated upstream
import Mission from '../pages/company/mission';
import Career from '../pages/company/career';
import Faq from '../pages/company/faq';
=======
>>>>>>> Stashed changes
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
import Contact from '../pages/contact/contact';
import Aboutus from '../pages/aboutus/aboutus ';
import Nodejs from '../pages/services/back/nodejs';
import Nestjs from '../pages/services/back/nestjs';
import Python from '../pages/services/back/python';
import Php from '../pages/services/back/php';
import Laravel from '../pages/services/back/laravel';

function Myrouts() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
<<<<<<< Updated upstream
          <Route path='/aboutus' element={<Aboutus/>} />
          <Route path='/mission' element={<Mission />} />
          <Route path='/career' element={<Career />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/contact' element={<Contact />} />
=======
          <Route path='/aboutus' element={<Aboutus/>}/>
          <Route path="/contact" element={<Contact />} />
>>>>>>> Stashed changes
          <Route path="/web" element={<Web/>} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/angular" element={<Angular />} />
          <Route path="/typescript" element={<Typescript />} />
          <Route path="/reactjs" element={<Reactjs />} />
          <Route path="/vue" element={<Vue />} />
          <Route path="/next" element={<Next />} />
          <Route path="/nuxt" element={<Nuxt />} />
          <Route path="/nodejs" element={<Nodejs />} />
          <Route path="/nestjs" element={<Nestjs />} />
          <Route path="/python" element={<Python />} />
          <Route path="/php" element={<Php />} />
          <Route path="/laravel" element={<Laravel />} />
          <Route path="/webhosting" element={<Webhosting />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Myrouts;

