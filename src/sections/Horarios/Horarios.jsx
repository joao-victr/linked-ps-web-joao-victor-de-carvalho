import React from 'react';
import clockIcon from '../../assets/clock.svg';
import './Horarios.css'
import { Flower } from '../../components/Flower/Flower';

const HORARIOS = [
  ["Segunda - Sexta", "08:00 - 17:00"],
  ["Sábado", "10:00 - 14:00"],
  ["Domingo", "Fechado"],
];

export function Horarios() {
  return (
    <section id="horarios" className="section section--light horarios">
      <Flower className="flower flower--left" />
      <Flower className="flower flower--right" />
      <h2>Horário de Atendimento.</h2>
      <p className="subtitle">Estamos disponíveis para agendamento de consultas e visitas.</p>
      <hr />
      <div className="horarios__card">

        <img src={clockIcon} className="horarios__clock" aria-hidden="true" alt="" />
        
        <dl className="horarios__table">
          {HORARIOS.map(([dia, hora]) => (
            <div key={dia}>
              <dt>{dia}</dt>
              <dd>{hora}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}