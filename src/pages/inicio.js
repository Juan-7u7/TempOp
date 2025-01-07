import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FAQ from '../pages/seccion inicio/faq';
import Contact from '../pages/seccion inicio/contactp';
import QuienesSomos from '../pages/seccion inicio/whos';
import CardsSection from '../pages/seccion inicio/cards';
import CarouselSection from '../pages/seccion inicio/carrusel';
import '../styles/bienvenida.css';

function Bienvenida() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f4', minHeight: '100vh', padding: '20px' }}>
      {/* Contenedor principal */}
      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          backgroundColor: '#ffffff',
          borderRadius: '15px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            backgroundColor: '#F07DEA',
            padding: '20px',
            textAlign: 'center',
            color: '#fff',
            fontSize: '1.5rem',
          }}
        >
          <h1 style={{ margin: 0 }}>¡Bienvenido a Nuestra Plataforma!</h1>
        </div>

        <div style={{
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          alignItems: 'center',
          textAlign: 'center',
        }}>
          <img
            src="https://uniscopio.com/wp-content/uploads/2019/07/Ambientes-de-aprendizaje.png"
            alt="Ambiente de aprendizaje"
            style={{
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '4px solid #F07DEA',
            }}
          />
          <div>
            <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.5' }}>
              ¡Gracias por visitarnos! Nuestra plataforma está diseñada para ofrecerte una experiencia intuitiva y
              eficiente. Explora las funcionalidades que hemos desarrollado especialmente para ti y encuentra todo lo que
              necesitas para facilitar tus tareas diarias.
            </p>
            <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.5' }}>
              Si tienes alguna pregunta o necesitas ayuda, no dudes en contactarnos. ¡Estamos aquí para ayudarte!
            </p>
          </div>
        </div>
      </div>

      {/* Carrusel */}
      <div
        id="preguntas-frecuentes"
        style={{
          marginTop: '40px',
          backgroundColor: '#ffffff',
          borderRadius: '15px',
          padding: '20px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          width: 'calc(100% - 40px)',
          maxWidth: '1200px',
          margin: '40px auto',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#F07DEA' }}>Información Clave</h2>
        <CarouselSection />
      </div>

      {/* Cards Section */}
      <div id="quienes-somos">
        <CardsSection />
      </div>

      <div id="contacto">
        <QuienesSomos />
      </div>

      {/* Textos adicionales */}
      <div
        style={{
          marginTop: '20px',
          textAlign: 'center',
          color: '#333',
          fontSize: '1.2rem',
        }}
      >
        <FAQ />
        <Contact />
      </div>
    </div>
  );
}

export default Bienvenida;
