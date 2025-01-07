import React from 'react';
import Slider from "react-slick";

const Carousel = ({ preguntas, settings }) => {
  return (
    <Slider {...settings}>
      {preguntas.map((item, index) => (
        <div key={index} style={{ padding: '10px' }}>
          <div
            style={{
              backgroundColor: '#f4f4f4',
              borderRadius: '10px',
              padding: '15px',
              boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
            }}
          >
            <h3 style={{ color: '#F07DEA' }}>{item.titulo}</h3>
            <p style={{ color: '#333', fontSize: '0.9rem' }}>{item.respuesta}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
