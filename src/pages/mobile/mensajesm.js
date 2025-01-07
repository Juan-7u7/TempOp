import React, { useState } from "react";
import "../../styles/mensajesm.css";
import Contacto from "../../components/mobile/contactom";
import Chat from "../../components/mobile/chat";

function Mensajes() {
  const [contactoSeleccionado, setContactoSeleccionado] = useState(null);

  const contactos = [
    {
      id: 1,
      nombre: "Javier Aguirre",
      avatar: "https://images2.minutemediacdn.com/image/upload/c_crop,w_4000,h_2250,x_0,y_0/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/si/01jcsrfg8p5gmc6f50zx.jpg",
      ultimaActividad: "Última actividad hace 2 min",
    },
    {
      id: 2,
      nombre: "Fernando Gago",
      avatar: "https://www.record.com.mx/sites/default/files/styles/v2-crop768x433/public/articulos/2024/11/03/record993.jpg?itok=3jtxMcWr",
      ultimaActividad: "Has enviado un archivo adjunto - 3 d",
    },
    {
      id: 3,
      nombre: "Matias Almeyda",
      avatar: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/3MGQDANAZJBFLCY2EMPWYLYUUU.jpg",
      ultimaActividad: "Última actividad hace 4 h",
    },
  ];

  const mensajes = [
    { id: 1, tipo: "enviado", texto: "Hola, me gustaría saber más información de la vacante.", hora: "08:40 p.m." },
    { id: 2, tipo: "recibido", texto: "Claro, me gustaría agendar una entrevista contigo el lunes a las 10am, ¿qué te parece?", hora: "08:41 p.m." },
    { id: 3, tipo: "enviado", texto: "Me parece muy bien!", hora: "08:42 p.m." },
  ];

  const handleContactoClick = (contacto) => {
    setContactoSeleccionado(contacto);
  };

  const regresarLista = () => {
    setContactoSeleccionado(null);
  };

  return (
    <div className="mensajes-container">
      {!contactoSeleccionado ? (
        <div className="sidebar">
          <h2 className="sidebar-title">Mensajes</h2>
          <ul className="contact-list">
            {contactos.map((contacto) => (
              <Contacto key={contacto.id} contacto={contacto} onClick={handleContactoClick} />
            ))}
          </ul>
        </div>
      ) : (
        <Chat contacto={contactoSeleccionado} mensajes={mensajes} onBack={regresarLista} />
      )}
    </div>
  );
}

export default Mensajes;
