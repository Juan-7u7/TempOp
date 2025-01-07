import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselSection = () => {
  const preguntas = [
    { titulo: "Justificación", respuesta: "Crear una plataforma digital para conectar empleadores y candidatos, facilitando la búsqueda de empleo en Tehuacán y México, promoviendo accesibilidad y desarrollo profesional." },
    { titulo: "Objetivos", respuesta: "Diseñar una plataforma funcional, conectar empleadores y candidatos, implementar un sistema multiplataforma y mejorar el mercado laboral local." },
    { titulo: "Área", respuesta: "Tecnología y desarrollo de software aplicado a recursos humanos y plataformas web." },
    { titulo: "Descripción del problema", respuesta: "Falta de plataformas accesibles en Tehuacán que conecten candidatos con empleadores de manera eficiente." },
    { titulo: "Alcance", respuesta: "Desarrollar una plataforma que publique vacantes, cree perfiles de usuarios, implemente calificaciones y sea escalable a nivel nacional." },
    { titulo: "Limitaciones", respuesta: "Recursos tecnológicos, presupuesto limitado y necesidad de aprendizaje en arquitectura de software y bases de datos." },
    { titulo: "Metodología", respuesta: "Investigación preliminar, diseño modular, desarrollo iterativo, pruebas funcionales y recolección de feedback." },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div
      style={{
        marginTop: "40px",
        backgroundColor: "#ffffff",
        borderRadius: "15px",
        padding: "20px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        width: "calc(100% - 40px)",
        maxWidth: "1200px",
        margin: "40px auto",
      }}
    >
      <Slider {...settings}>
        {preguntas.map((item, index) => (
          <div key={index} style={{ padding: "10px" }}>
            <div
              style={{
                backgroundColor: "#f4f4f4",
                borderRadius: "10px",
                padding: "15px",
                boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
              }}
            >
              <h3 style={{ color: "#F07DEA" }}>{item.titulo}</h3>
              <p style={{ color: "#333", fontSize: "0.9rem" }}>{item.respuesta}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselSection;
