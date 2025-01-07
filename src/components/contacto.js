import React from "react";

const Contacto = ({ contacto }) => (
  <li className="contact-item">
    <img src={contacto.avatar} alt={contacto.nombre} className="contact-avatar" />
    <div>
      <span className="contact-name">{contacto.nombre}</span>
      <p className="contact-last-message">{contacto.ultimaActividad}</p>
    </div>
  </li>
);

export default Contacto;
