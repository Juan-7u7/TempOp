import React from 'react';
import Swal from 'sweetalert2'; // Importa SweetAlert2
import CustomCard from '../components/publicacion';
import FAQ from '../pages/seccion inicio/faq';
import Contact from '../pages/seccion inicio/contactp';
import QuienesSomos from '../pages/seccion inicio/whos';

const images = [
  "https://latinus.us/u/fotografias/m/2024/5/11/f425x230-87003_100985_5050.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGOW5K2-O857h1iJHnk0UDWCNKWsNFKj3y0w&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9sYVeem-YsLLdTfxR-hUOjxpjmh7N_sAuDA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBpFY_KIwfmuhU4z_hXLGJ9HmiivW8kUMgsg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqShh5Ct0YbaBzy_eGi0ROFV5qVaLj3fJkhw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8ZAlSXFO1oi8zQrTvVKeJP1cpshJsukkcog&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt2yZi4lG1niLaFAsB_op-B-4hpLO8JDTmOA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYFVIjsYBS1rPrwu3N7eXT0zwPHrtHrPBgdA&s"
];

const descriptions = [
  "Desarrollo de base de datos para ferreteria",
  "Soporte técnico de equipo de computo",
  "Análisis de registros contables para restaurante",
  "Creacion de punto de venta",
  "Sistema de control de inventario",
  "Asistencia tecnica a clientes",
  "Desarrollo de pagina web para biblioteca",
  "Desarrollo de aplicación para supermercado",
  "Automatizacion de registro de usuarios de reparto de comida",
  "Instalacion de softwares para escuela primaria"
];

const salaries = [
  "$2000 MXN",
  "$8,000 MXN",
  "$4,500 MXN",
  "$1900 MXN",
  "$1800 MXN",
  "$8,500 MXN",
  "$16,000 MXN",
  "$10,000 MXN",
  "$6,500 MXN",
  "$5,000 MXN"
];

function Welcome() {
  const handleInterestClick = (index) => {
    Swal.fire({
      title: `¡Interesado en la vacante ${index + 1}!`,
      text: "Esta vacante se ha agregado a tus intereses.",
      icon: "success",
      confirmButtonText: "Entendido"
    });
  };

  const handleApplyClick = (index) => {
    Swal.fire({
      title: `¡Aplicaste a la vacante ${index + 1}!`,
      text: "Tu solicitud ha sido enviada correctamente.",
      icon: "info",
      confirmButtonText: "Genial"
    });
  };

  return (
    <div style={{ backgroundColor: '#ffe3eb', minHeight: '100vh', padding: '20px' }}>
      {[...Array(10)].map((_, index) => (
        <div key={index} style={{ marginBottom: '30px' }}>
          <CustomCard
            title={`Vacante ${index + 1}: Ingeniero en Sistemas`}
            user={`Empresa ${index + 1}`}
            description={descriptions[index]}
            requirements={[
              "Conocimientos en informatica.",
              "Manejo de bases de datos.",
              "Capacidad para resolver problemas."
            ]}
            salary={salaries[index]}
            image={images[index % images.length]}
            isRecommended={index % 2 === 0}
            onInterestClick={() => handleInterestClick(index)}
            onApplyClick={() => handleApplyClick(index)}
          />
        </div>
      ))}
      {/* Muestra los componentes FAQ y Contact al final */}
      <QuienesSomos />
      <FAQ />
      <Contact />
    </div>
  );
}

export default Welcome;
