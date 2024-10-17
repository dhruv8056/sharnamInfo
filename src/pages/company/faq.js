
import React, { useState } from 'react';
import Navbar from '../../layout/navbar';
import { FaChevronRight } from "react-icons/fa6";
import Footer from '../../layout/footer';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How much experience do I need to apply for a specific position?",
      answer: "Please click on the opening positions (on this page) based upon your area of interest. You will land on a page where you can view the minimum experience and qualification requirements. We hire people with a wide range of professional experience and educational background."
    },
    {
      question: "What types of systems do you suppot?",
      answer: "Sharnam Info takes into consideration every little detail to make sure the system run smoothly and responsively. Sharnam Info employs a new technique called Minified Technology for securing customers’ database & building up highly confidential firewalls."
    },
    {
      question: "How does the recruitment process at Sharnam Infotech work?",
      answer: "The length and nature of the recruitment process at Sharnam Infotech depends on a case-to-case basis and your location. However, generally your application once received, is reviewed by the recruitment team to ensure if the requirements are met. If they do meet, you will be contacted by them to schedule an interview."
    }
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <div className="se-web">
        <Navbar />
      </div>
      <div className="se-section">
     
        <div className="se-overlay">
        <div className="se-content">
            <button className="se-button">Faq</button>
            <h1>FAQ</h1>
            <a href="/home">Home</a> - <span>Faq</span>
          </div>
        </div>
        </div>
      <div className='fa-section'>
        <h3>FAQ</h3>
        <h2>Frequently Asked Questions?</h2>
      </div>
      <div className='faq-container'>
      <div className="faq-steps">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-step" onClick={() => toggleAnswer(index)}>
            <h3><FaChevronRight size={15} />  {faq.question}</h3>
            {activeIndex === index && <p>{faq.answer}</p>}
          </div>
        ))}
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Faq;