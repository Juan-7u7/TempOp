// const CardsSection = () => {
//     const tools = [
//       {
//         name: "React",
//         description: "Una biblioteca de JavaScript para construir interfaces de usuario.",
//         image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/250px-React.svg.png",
//       },
//       {
//         name: "VsCode",
//         description: "Un editor de código fuente ligero y potente.",
//         image: "https://code.visualstudio.com/assets/images/code-stable.png",
//       },
//       {
//         name: "Xampp",
//         description: "Una herramienta para configurar servidores locales con Apache y MySQL.",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRRdU9q3LfQVdSrsCh3Ah0eaPLMY3K0Rne9g&s",
//       },
//       {
//         name: "Material UI",
//         description: "Una biblioteca de componentes de interfaz para React basada en Material Design.",
//         image: "https://mui.com/static/logo.png",
//       },
//       {
//         name: "Canva",
//         description: "Una plataforma de diseño gráfico para crear presentaciones y contenido visual.",
//         image: "https://yt3.googleusercontent.com/GVxMNSPYQckhJOGBbtNjJ58joOa1Xq7QLQ4gGzCHLeU10_A-9bTv900PKVY61UW8EaMurWOYHQ=s900-c-k-c0x00ffffff-no-rj",
//       },
//       {
//         name: "CSS",
//         description: "Lenguaje de estilo para diseñar páginas web.",
//         image: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
//       },
//       {
//         name: "Uiverse",
//         description: "Una biblioteca de componentes visuales interactivos.",
//         image: "https://pbs.twimg.com/profile_images/1716216565090095104/J7r-hsjd_400x400.png",
//       },
//       {
//         name: "Colorhunt",
//         description: "Una plataforma para explorar y elegir paletas de colores.",
//         image: "https://colorhunt.co/img/color-hunt-logo-animation.gif",
//       },
//       {
//         name: "Infinity Free",
//         description: "Un servicio de hosting gratuito para sitios web.",
//         image: "https://dash.infinityfree.com/images/logo.svg",
//       },
//     ];
  
//     return (
//       <div className="cards">
//         {tools.map((tool, index) => (
//           <div
//             key={index}
//             className={`card ${index % 3 === 0 ? 'red' : index % 3 === 1 ? 'blue' : 'green'}`}
//             style={{
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//               justifyContent: 'space-between',
//               padding: '20px',
//               borderRadius: '15px',
//               boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
//             }}
//           >
//             <div
//               style={{
//                 backgroundColor: '#fff',
//                 borderRadius: '15px',
//                 padding: '10px',
//                 width: '80px',
//                 height: '80px',
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 marginBottom: '10px',
//               }}
//             >
//               <img
//                 src={tool.image}
//                 alt={tool.name}
//                 style={{
//                   width: '100%',
//                   height: '100%',
//                   objectFit: 'contain',
//                   borderRadius: '10px',
//                 }}
//               />
//             </div>
//             <div style={{ textAlign: 'center' }}>
//               <p className="tip" style={{ fontSize: '1rem', fontWeight: 'bold', margin: '0 0 5px 0' }}>
//                 {tool.name}
//               </p>
//               <p className="second-text" style={{ fontSize: '0.9rem', margin: 0 }}>
//                 {tool.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   };
  
//   export default CardsSection;
  
import React from "react";
import "../../styles/CardsSection.css"; // Asegúrate de crear este archivo CSS para manejar los estilos

const CardsSection = () => {
  const tools = [
    {
      name: "React",
      description: "Una biblioteca de JavaScript para construir interfaces de usuario.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/250px-React.svg.png",
    },
    {
      name: "VsCode",
      description: "Un editor de código fuente ligero y potente.",
      image: "https://code.visualstudio.com/assets/images/code-stable.png",
    },
    {
      name: "Xampp",
      description: "Una herramienta para configurar servidores locales con Apache y MySQL.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRRdU9q3LfQVdSrsCh3Ah0eaPLMY3K0Rne9g&s",
    },
    {
      name: "Material UI",
      description: "Una biblioteca de componentes de interfaz para React basada en Material Design.",
      image: "https://mui.com/static/logo.png",
    },
    {
      name: "Canva",
      description: "Una plataforma de diseño gráfico para crear presentaciones y contenido visual.",
      image: "https://yt3.googleusercontent.com/GVxMNSPYQckhJOGBbtNjJ58joOa1Xq7QLQ4gGzCHLeU10_A-9bTv900PKVY61UW8EaMurWOYHQ=s900-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "CSS",
      description: "Lenguaje de estilo para diseñar páginas web.",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
    },
    {
      name: "Uiverse",
      description: "Una biblioteca de componentes visuales interactivos.",
      image: "https://pbs.twimg.com/profile_images/1716216565090095104/J7r-hsjd_400x400.png",
    },
    {
      name: "Colorhunt",
      description: "Una plataforma para explorar y elegir paletas de colores.",
      image: "https://colorhunt.co/img/color-hunt-logo-animation.gif",
    },
    {
      name: "Infinity Free",
      description: "Un servicio de hosting gratuito para sitios web.",
      image: "https://dash.infinityfree.com/images/logo.svg",
    },
  ];

  return (
    <div className="cards">
      {tools.map((tool, index) => (
        <div
          key={index}
          className={`card ${index % 3 === 0 ? "red" : index % 3 === 1 ? "blue" : "green"}`}
        >
          <div className="card-image-container">
            <img src={tool.image} alt={tool.name} className="card-image" />
          </div>
          <div className="card-text">
            <p className="card-title">{tool.name}</p>
            <p className="card-description">{tool.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsSection;
