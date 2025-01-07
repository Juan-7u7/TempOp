import React from "react";
import "../styles/mensajes.css";
import Contacto from "../components/contacto";
import Mensaje from "../components/mensaje";

function Mensajes() {
  const contactos = [
    { id: 1, nombre: "Jesus Matias Almeyda", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRTYXuYrylCr6paJG2ZriG7qioiqH7trMMCQ&s", ultimaActividad: "Última actividad hace 2 min" },
    { id: 2, nombre: "Fernando Gago", avatar: "https://www.record.com.mx/sites/default/files/styles/v2-crop768x433/public/articulos/2024/11/03/record993.jpg?itok=3jtxMcWr", ultimaActividad: "Has enviado un archivo adjunto - 3 d" },
    // Otros contactos...
  ];

  const mensajes = [
    { id: 1, tipo: "enviado", texto: "Hola, me gustaría saber más información de la vacante.", hora: "08:40 p.m." },
    { id: 2, tipo: "recibido", texto: "Claro, me gustaría agendar una entrevista contigo el lunes a las 10am, ¿qué te parece?", hora: "08:41 p.m." },
    // Otros mensajes...
  ];

  const contactoActual = contactos[0]; // Selecciona el primer contacto como ejemplo

  return (
    <div className="mensajes-container">
      {/* Barra lateral izquierda */}
      <div className="sidebar">
        <h2 className="sidebar-title">Mensajes</h2>
        <ul className="contact-list">
          {contactos.map((contacto) => (
            <Contacto key={contacto.id} contacto={contacto} />
          ))}
        </ul>
      </div>

      {/* Sección principal del chat */}
      <div className="chat">
        <div className="chat-header">
          <img src={contactoActual.avatar} alt={contactoActual.nombre} className="chat-avatar" />
          <div>
            <h2 className="chat-contact-name">{contactoActual.nombre}</h2>
            <p className="chat-last-active">{contactoActual.ultimaActividad}</p>
          </div>
        </div>

        <div className="chat-messages">
          {mensajes.map((mensaje) => (
            <Mensaje key={mensaje.id} mensaje={mensaje} avatar={contactoActual.avatar} />
          ))}
        </div>

        <div className="chat-input">
          <input type="text" placeholder="Escribe un mensaje..." className="input-field" />
          <button className="send-button">Enviar</button>
        </div>
      </div>
    </div>
  );
}

export default Mensajes;
