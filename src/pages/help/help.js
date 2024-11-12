import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TbMessage2Question } from "react-icons/tb";
const Help = () => {
  const navigate = useNavigate();
  const handlehelpClick = () => {
    navigate('/contact');
  };
  return (
    <div>
      {/*help section*/}
      <div className="h-help-section">
        <div className="h-help-mark"><TbMessage2Question /></div>
        <div className="h-help">
          <h2> Do you need further help or information?</h2>
          <p>Reach out to us if you need any assistance or have inquiries.</p>
        </div>
        <button className="let-s-discuss-button" onClick={handlehelpClick}>Let's Discuss</button>
      </div>
    </div>
  )
}

export default Help
