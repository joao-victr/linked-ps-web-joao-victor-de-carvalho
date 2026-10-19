import React from 'react';
import './Hero.css';
import heroImg from '../../assets/hero.jpg';

export function Hero() {
  return (
    <section id="inicio" className="hero">
      <img
        src={heroImg}
        alt="Psicóloga em atendimento"
        className="hero__photo"
      />

      <div className="hero__panel">
        <p className="hero__tagline">Consultório de psicologia e psicoterapia.</p>
        
        <div className="hero__content">
          <h1>Lorem Ipsum.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="hero__actions">
            <a href="#contato" className="btn btn--solid">
              <span className="dot" />AGENDAR
            </a>
            <a href="#servicos" className="btn btn--outline">
              <span className="dot" />SAIBA MAIS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}