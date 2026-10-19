import React, {useState} from 'react'
import './Contato.css'
import locationIcon from '../../assets/Location.svg'
import { Flower } from '../../components/Flower/Flower';

const MAP_SRC = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1520.106242834423!2d-44.25779505953286!3d-21.137181921068848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa1c7472779a3d5%3A0x70a863f47357e6ed!2sFuner%C3%A1ria%20Bom%20Jardim!5e0!3m2!1spt-BR!2sbr!4v1792451463882!5m2!1spt-BR!2sbr'

export function Contato() {
  const [form, setForm] = useState({ nome: "", email: "", obs: "" });
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Enviar:", form); 
  };

  return (
    <section id="contato" className="section section--light contato">
      <Flower className="flower flower--bottom" />
      <Flower className="flower flower--left-low" />
      
      <div className="contato__top">
        <address className="contato__card">
          <p className="contato__title">Visite-nos</p>
          <p>
            <img src={locationIcon} width={14} height={14} aria-hidden="true" alt="" /> 
            {' '}<strong>ENDEREÇO:</strong>
          </p>
          <p className="indent">Rua, número<br />Bairro</p>
          <p className="indent">CEP: 40028922</p>
        </address>
        
        <div className="contato__map">
          {MAP_SRC ? (
            <iframe title="Mapa" src={MAP_SRC} loading="lazy" />
          ) : (
            <div className="contato__map-empty">Mapa</div>
          )}
        </div>
      </div>

      <form className="form" onSubmit={onSubmit}>
        <div className="form__head">
          <h3>Formulário de contato</h3>
          <p>Ficou com alguma dúvida? Converse diretamente conosco!</p>
        </div>
        <input name="nome" value={form.nome} onChange={onChange} placeholder="Nome:" aria-label="Nome" required />
        <input name="email" type="email" value={form.email} onChange={onChange} placeholder="Email:" aria-label="Email" required />
        <input name="obs" value={form.obs} onChange={onChange} placeholder="Obs:" aria-label="Observações" />
        <button type="submit" className="btn btn--outline form__submit"><span className="dot" />ENVIAR</button>
      </form>
    </section>
  );
}