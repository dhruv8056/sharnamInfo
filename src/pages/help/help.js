import React from 'react'
import { TbMessage2Question } from "react-icons/tb";
const Help = () => {
  return (
    <div>
       {/*help section*/}
       <div className="help-section">
                <div className="question-mark"><TbMessage2Question /></div>
                <div className="text">
                    <h2>  Do you need further help or information?</h2>
                    <p>Reach out to us if you need any assistance or have inquiries.</p>
                </div>
                <button className="let-s-discuss-button">Let's Discuss</button>
            </div>
    </div>
  )
}

export default Help
