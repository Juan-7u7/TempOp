import React from "react";

const Mensaje = ({ mensaje, avatar }) => (
  <div
    className={`message-container ${
      mensaje.tipo === "enviado" ? "message-sent" : "message-received"
    }`}
  >
    {mensaje.tipo === "recibido" && (
      <img src={avatar} alt="Avatar" className="message-avatar" />
    )}
    <div className="message-content">
      <p className="message-text">{mensaje.texto}</p>
      <span className="message-time">{mensaje.hora}</span>
    </div>
  </div>
);

export default Mensaje;
