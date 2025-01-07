import React from "react";

const Chat = ({ contacto, mensajes, onBack }) => (
  <div className="chat">
    <div className="chat-header">
      <button className="back-button" onClick={onBack}>
        ←
      </button>
      <img src={contacto.avatar} alt={contacto.nombre} className="chat-avatar" />
      <div>
        <h2 className="chat-contact-name">{contacto.nombre}</h2>
        <p className="chat-last-active">{contacto.ultimaActividad}</p>
      </div>
    </div>

    <div className="chat-messages">
      {mensajes.map((mensaje) => (
        <div
          key={mensaje.id}
          className={`message-container ${
            mensaje.tipo === "enviado" ? "message-sent" : "message-received"
          }`}
        >
          {mensaje.tipo === "recibido" && (
            <img src={contacto.avatar} alt="Avatar" className="message-avatar" />
          )}
          <div className="message-content">
            <p className="message-text">{mensaje.texto}</p>
            <span className="message-time">{mensaje.hora}</span>
          </div>
        </div>
      ))}
    </div>

    <div className="chat-input">
      <input type="text" placeholder="Escribe un mensaje..." className="input-field" />
      <button className="send-button">Enviar</button>
    </div>
  </div>
);

export default Chat;
