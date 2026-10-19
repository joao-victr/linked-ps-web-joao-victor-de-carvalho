import React from 'react'
import './Feedbacks.css'
import feedbackImg from '../../assets/feedback.jpg'; 

const FEEDBACKS = [
  ["Cliente 1, 2026"],
  ["Cliente 2, 2026"],
  ["Cliente 3, 2025"],
];


export function Feedbacks() {
  return (
    <section id="feedbacks" className="section section--dark feedbacks">
      <div className="feedbacks__text">
        <h2>Feedbacks.</h2>
        <p className="subtitle">Quem conhece, confia.</p>
        <hr />
        <ul>
          {FEEDBACKS.map(([autor]) => (
            <li key={autor}>
              <blockquote>
                “<strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
              </blockquote>
              <cite>- {autor}</cite>
            </li>
          ))}
        </ul>
      </div>
      <img 
        src={feedbackImg} 
        alt="Mãos escrevendo em uma prancheta" 
        className="feedbacks__img" 
      />
      
    </section>
  );
}
