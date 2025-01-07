import React from 'react';

const QuienesSomos = () => (
  <div
    style={{
      marginTop: '40px',
      backgroundColor: '#ffffff',
      borderRadius: '15px',
      padding: '20px',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column', // Cambiar a columna para móviles
      gap: '20px',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    {/* Texto descriptivo */}
    <div>
      <h2 style={{ color: '#F07DEA', marginBottom: '20px', fontSize: '1.5rem' }}>¿Quiénes somos?</h2>
      <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.6' }}>
        Somos una plataforma comprometida con la innovación y el aprendizaje. Nuestro objetivo es proporcionar herramientas
        accesibles y efectivas que empoderen a nuestros usuarios para alcanzar sus metas personales y profesionales.
        Creamos experiencias únicas para fomentar la creatividad y el desarrollo continuo.
      </p>
    </div>

    {/* Imagen representativa */}
    <div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVhc2W19Wo0-qduSl8giQJlgtSayzDIFiD-g&s"
        alt="Quiénes somos"
        style={{
          width: '200px',
          height: 'auto',
          borderRadius: '15px',
          objectFit: 'cover',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        }}
      />
    </div>
  </div>
);

export default QuienesSomos;
