import React from 'react';
import './Header.css';


const NAV = [
  ["Início", "#inicio"],
  ["Serviços", "#servicos"],
  ["Horários", "#horarios"],
  ["Feedbacks", "#feedbacks"],
  ["Contato", "#contato"],
];

export function Header() {
  return (
    <header className="header">
      <a href="#inicio" className="logo">Nome / Logo</a>
      <nav aria-label="Principal">
        <ul>
          {NAV.map(([label, href]) => (
            <li key={href}><a href={href}>{label}</a></li>
          ))}
        </ul>
      </nav>
    </header>
  );
}