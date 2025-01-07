import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Aquí puedes agregar lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
  };

  return (
    <div
      style={{
        maxWidth: '800px',
        margin: '50px auto',
        padding: '30px',
        backgroundColor: '#FFC4E1', // Fondo principal
        borderRadius: '20px',
        boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.2)',
        textAlign: 'center',
      }}
    >
      <h2 style={{ textAlign: 'center', color: '#3C3C3C', marginBottom: '30px', fontSize: '2rem' }}>Contáctanos para reportar alguna vacante.</h2>
      {submitted ? (
        <p style={{ textAlign: 'center', color: '#F07DEA', fontSize: '1.5rem', fontWeight: 'bold' }}>
          ¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.
        </p>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              width: '90%',
              padding: '15px',
              border: '2px solid #EAEAEA',
              borderRadius: '10px',
              fontSize: '1rem',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#EAEAEA', // Fondo de los inputs
            }}
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: '90%',
              padding: '15px',
              border: '2px solid #EAEAEA',
              borderRadius: '10px',
              fontSize: '1rem',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#EAEAEA', // Fondo de los inputs
            }}
          />
          <textarea
            name="message"
            placeholder="Mensaje"
            value={formData.message}
            onChange={handleChange}
            required
            style={{
              width: '90%',
              padding: '15px',
              border: '2px solid #EAEAEA',
              borderRadius: '10px',
              fontSize: '1rem',
              minHeight: '120px',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#EAEAEA', // Fondo de los inputs
            }}
          />
          <button
            type="submit"
            style={{
              width: '50%',
              padding: '15px',
              backgroundColor: '#F07DEA', // Color del botón
              color: '#FFE1FF', // Color del texto del botón
              border: 'none',
              borderRadius: '10px',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#6A4FB5')} // Hover color
            onMouseOut={(e) => (e.target.style.backgroundColor = '#F07DEA')}
          >
            Enviar
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
