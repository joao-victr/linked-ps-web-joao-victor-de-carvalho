import React from 'react';
import './Footer.css';

import facebookIcon from '../../assets/Facebook.svg';
import instagramIcon from '../../assets/Instagram.svg';
import linkedinIcon from '../../assets/LinkedIn.svg';

export function Footer() {
  return (
    <footer className="footer">
      <div>
        <h4>EMPRESA:</h4>
        <ul className="footer__social">
          <li>
            <a href="#">
              <img src={facebookIcon} alt="Facebook" width={20} height={20} />
              Facebook
            </a>
          </li>
          <li>
            <a href="#">
              <img src={instagramIcon} alt="Instagram" width={20} height={20} />
              Instagram
            </a>
          </li>
          <li>
            <a href="#">
              <img src={linkedinIcon} alt="LinkedIn" width={20} height={20} />
              LinkedIn
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h4>ACESSO RÁPIDO:</h4>
        <ul>
          <li><a href="#inicio">Início</a></li>
          <li><a href="#servicos">Nossos Serviços</a></li>
          <li><a href="#horarios">Horários</a></li>
          <li><a href="#feedbacks">Feedbacks</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </div>

      <div>
        <h4>SERVIÇOS:</h4>
        <ul>
          <li>Serviço 1</li>
          <li>Serviço 2</li>
          <li>Serviço 3</li>
        </ul>
      </div>

      <div>
        <h4>CONTATO:</h4>
        <ul>
          <li>Rua, número<br />Bairro</li>
          <li>+55 (01)23456-7890</li>
          <li>email@email.com</li>
        </ul>
      </div>
    </footer>
  );
}