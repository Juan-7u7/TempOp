import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "¿Cómo puedo registrarme?",
      answer: "Puedes registrarte haciendo clic en el botón de registro en la parte superior derecha y completando el formulario.",
    },
    {
      question: "¿Es gratuita esta plataforma?",
      answer: "Sí, nuestra plataforma ofrece acceso gratuito a la mayoría de las funciones.",
    },
    {
      question: "¿Qué servicios ofrecen?",
      answer: "Ofrecemos una mejor conexion con diferentes empresas para la oportunidad laboral",
    },
    {
      question: "¿Cómo puedo contactar soporte?",
      answer: "Puedes contactarnos a través del formulario de contacto o enviando un correo a tempop@gmail.com",
    },
    {
      question: "¿Puedo reportar un usuario o vacante?",
      answer: "Sí, puedes reportarlo completando el formulario de contacto para poder tomar en cuenta tu reporte",
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        maxWidth: '800px',
        margin: '50px auto',
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '15px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h2 style={{ color: '#F07DEA', textAlign: 'center', marginBottom: '20px' }}>Preguntas Frecuentes</h2>
      <div>
        {faqs.map((faq, index) => (
          <div
            key={index}
            style={{
              marginBottom: '15px',
              padding: '10px 15px',
              border: '1px solid #EAEAEA',
              borderRadius: '10px',
              boxShadow: activeIndex === index ? '0px 4px 10px rgba(0, 0, 0, 0.2)' : 'none',
              transition: 'box-shadow 0.3s ease',
            }}
          >
            <h3
              onClick={() => toggleAnswer(index)}
              style={{
                cursor: 'pointer',
                color: '#333',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '1.1rem',
                margin: 0,
              }}
            >
              {faq.question}
              <span
                style={{
                  transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                }}
              >
                ▼
              </span>
            </h3>
            {activeIndex === index && (
              <p
                style={{
                  color: '#666',
                  marginTop: '10px',
                  fontSize: '0.95rem',
                  lineHeight: '1.5',
                }}
              >
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
