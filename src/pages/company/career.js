import React from 'react'
import Navbar from '../../layout/navbar';
import career from '../../assets/img/career1.png';
import { GiProgression } from "react-icons/gi";
import { AiOutlineSolution } from "react-icons/ai";
import { PiStrategyBold } from "react-icons/pi";
import { TiStopwatch } from "react-icons/ti";
import { MdOutlineModelTraining } from "react-icons/md";
import { FaAward } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";





const Career = () => {
  return (
    <div>
      <div className="se-web">
        <Navbar />
      </div>
      <div className="se-section">
        <div className="se-overlay">
          <div className="se-content">
            <button className="se-button">Career</button>
            <h1>Career</h1>
            <a href="/home">Home</a> - <span>Career</span>
          </div>
        </div>
      </div>
      <div className='careers'>
        <div className='career-contain'>
          <img src={career} alt="career" className="career-image" />
        </div>
        <div className='career-contents'>

          <h2>Why Our
            <span> Clients </span>
            Choose to
            <span> Work </span>
            With Us
          </h2>
          <p>We have worked with hundreds of businesses like yours and helped them achieve their milestones. Discuss your milestones with our team and see how we help your business.
          </p>
          <div className='latest-contain'>
            <div className='ca-icon'>
              <GiProgression />
            </div>
            <div className='careers-text'>
              <h4>Latest Technologies</h4>
              <p>We continuously learn and implement new technologies to improve client outcomes.</p>
            </div>
          </div>
          <div className='latest-contain'>
            <div className='ca-icon'>
              <AiOutlineSolution />
            </div>
            <div className='careers-text'>
              <h4>Unique Solutions</h4>
              <p>Unique solutions result from creative idea implementation. Imagination alone falls short.</p>
            </div>
          </div>
          <div className='latest-contain'>
            <div className='ca-icon'>
              <PiStrategyBold />
            </div>
            <div className='careers-text'>
              <h4>Powerful Strategies</h4>
              <p>Pre-negotiation planning predicts long-term impact and guides successful execution.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='hire-process'>
        <h2>Perks of Joining Sharnam Infotech</h2>
      </div>
      <div className='hire-steps'>
        <div className='hire-step'>
          <div className='h-icon'>
             <TiStopwatch />
          </div>
          <h3>Flexible Timings</h3>
          <p>To empower employees to manage things in a fast-paced life.</p>
        </div>
        <div className='hire-step'>
        <div className='h-icon'>
        <MdOutlineModelTraining />
        </div>
        <h3>Training</h3>
          <p>Practical training & learning from the experts and mentors.</p>
        </div>
        <div className='hire-step'>
        <div className='h-icon'>
        <FaAward />
        </div>
        <h3>Rewards</h3>
          <p>To value and appreciate the performance on a regular basis.</p>
        </div>
        <div className='hire-step'>
        <div className='h-icon'>
        <RiTeamFill />
        </div>
        <h3>Team building</h3>
          <p>Indoor & outdoor team building workshops and activities.</p>
        </div>


</div>
    </div>
  )
}

export default Career;
