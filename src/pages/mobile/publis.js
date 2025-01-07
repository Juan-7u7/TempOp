import React from 'react';
import CustomCard from '../../components/publicacion';

const images = [
  "https://latinus.us/u/fotografias/m/2024/5/11/f425x230-87003_100985_5050.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXSfY0i2yUYk5g3xOqdlys5qb9MfI2deTqRw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_S1FzNAvKPd-SRlNlr31BPTF8bFqvjYUcVQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb8-iwCJBfrwSf7Yb110ZBGXp46HmgEl4xww&s",
  "https://static.wikia.nocookie.net/rap/images/2/20/Valent%C3%ADnOlivaWos.jpg/revision/latest?cb=20210313190652&path-prefix=es",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvA8nwAC9tY5gI046bZ30Ytt8WcR6-gk-ndw&s",
  "https://upload.wikimedia.org/wikipedia/commons/4/46/Santa_Fe_Klan_-_2023.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Kanye_West_at_the_2009_Tribeca_Film_Festival_%28crop_2%29.jpg/640px-Kanye_West_at_the_2009_Tribeca_Film_Festival_%28crop_2%29.jpg"
];

const descriptions = [
  "Desarrollo backend para aplicaciones empresariales.",
  "Soporte técnico y administración de sistemas.",
  "Análisis de datos y desarrollo de reportes dinámicos.",
  "Diseño de arquitecturas de software escalables.",
  "Integración de sistemas IoT en entornos corporativos.",
  "Optimización de bases de datos y consultas SQL.",
  "Desarrollo de APIs para servicios móviles.",
  "Implementación de soluciones en la nube.",
  "Automatización de procesos mediante scripts avanzados.",
  "Monitoreo y mantenimiento de servidores Linux."
];

const salaries = [
  "$12,000 MXN",
  "$11,000 MXN",
  "$13,500 MXN",
  "$15,000 MXN",
  "$14,000 MXN",
  "$10,500 MXN",
  "$16,000 MXN",
  "$18,000 MXN",
  "$17,500 MXN",
  "$20,000 MXN"
];

function Publis() {
  return (
    <div style={{ backgroundColor: '#ffe3eb', minHeight: '100vh', padding: '20px' }}>
      {[...Array(10)].map((_, index) => (
        <div key={index} style={{ marginBottom: '30px' }}>
          <CustomCard
            title={`Vacante ${index + 1}: Ingeniero en Sistemas`}
            user={`Empresa ${index + 1}`}
            description={descriptions[index]}
            requirements={[
              "Conocimientos en programación.",
              "Manejo de bases de datos.",
              "Capacidad para resolver problemas."
            ]}
            salary={salaries[index]}
            image={images[index % images.length]}
            isRecommended={index % 2 === 0}
            onInterestClick={() => alert(`¡Te interesa la vacante ${index + 1}!`)}
            onApplyClick={() => alert(`¡Aplicaste a la vacante ${index + 1}!`)}
          />
        </div>
      ))}
    </div>
  );
}

export default Publis;
