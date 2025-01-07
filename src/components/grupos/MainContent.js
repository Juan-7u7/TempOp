import React from 'react';
import SubContainerGroup from './SubContainerGroup';
import SubContainer from '../../components/SubContainer';

const MainContent = () => {
  const group1 = [
    'Proyecto de Punto de venta',
    'Bitácora Digital',
    'Chalan de albañil',
    'Desarrollador Web',
    'Creación de App Android',
    'Instalación de Redes para Negocio',
    'Automatización de Procesos',
    'Gestión de reparto',
    'Digitalización de catálogos',
  ];

  return (
    <div
      style={{
        flex: 1,
        margin: '16px',
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'row',
        gap: '16px',
      }}
    >
      {/* Contenedor de grupo */}
      <SubContainerGroup titles={group1} />

      {/* Sección principal */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {/* Descripción */}
        <SubContainer>
      <h3>Descripción</h3>
  <p>
    ¡Bienvenido a tu próximo proyecto estrella! 🌟 Esta aplicación de punto de venta está pensada para 
    hacerte la vida más fácil (y ahorrarte unas cuantas canas 😅). Ideal para pequeños y medianos negocios, 
    nuestro sistema te ayudará a llevar el control de tu inventario 🛒, facturación 📄, y reportes detallados 📊.
  </p>
  <p>
    ¿Tienes clientes exigentes? No te preocupes, aquí tenemos todo lo que necesitas para brindarles la mejor 
    atención. Con una interfaz intuitiva y súper amigable, podrás gestionar ventas en tiempo récord ⏱️, todo 
    mientras te concentras en lo que de verdad importa: ¡hacer crecer tu negocio! 🚀
  </p>
  <p>
    Además, no importa si vendes tacos 🌮, ropa 👗, gadgets 🖥️, o hasta sueños (ok, quizás eso no 😜), 
    esta app es tan versátil que se adapta a tus necesidades como anillo al dedo. 
    Y lo mejor de todo: ¡está lista para que tú la personalices al 100%! 🔧
  </p>

</SubContainer>


        {/* Requisitos y Salario */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'row', gap: '16px' }}>
        <SubContainer>
  <h3 style={{ textAlign: 'center', marginBottom: '16px', fontWeight: 'bold', color: '#11999E' }}>
    Requisitos 💻
  </h3>
  <ul style={{ listStyleType: 'none', padding: '0' }}>
    <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center' }}>
      <span style={{ fontSize: '1.5rem', color: '#6DECB9', marginRight: '8px' }}>✔️</span>
      <span>Conocimientos en desarrollo de software.</span>
    </li>
    <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center' }}>
      <span style={{ fontSize: '1.5rem', color: '#6DECB9', marginRight: '8px' }}>✔️</span>
      <span>Experiencia con bases de datos SQL.</span>
    </li>
    <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center' }}>
      <span style={{ fontSize: '1.5rem', color: '#6DECB9', marginRight: '8px' }}>✔️</span>
      <span>Habilidades de diseño UX/UI.</span>
    </li>
    <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center' }}>
      <span style={{ fontSize: '1.5rem', color: '#6DECB9', marginRight: '8px' }}>✔️</span>
      <span>Capacidad para trabajar en equipo y resolver problemas.</span>
    </li>
    <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center' }}>
      <span style={{ fontSize: '1.5rem', color: '#6DECB9', marginRight: '8px' }}>✔️</span>
      <span>Conocimiento básico en herramientas de control de versiones como Git.</span>
    </li>
  </ul>
</SubContainer>

<SubContainer>
  <h3 style={{ textAlign: 'center', marginBottom: '16px', fontWeight: 'bold', color: '#11999E' }}>
    Salario 💰
  </h3>
  <p style={{ textAlign: 'center', marginBottom: '12px', lineHeight: '1.6', color: '#333' }}>
    El rango salarial es competitivo y está diseñado para valorar tu talento:
  </p>
  <ul style={{ listStyleType: 'none', padding: '0' }}>
    <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center' }}>
      <span style={{ fontSize: '1.5rem', color: '#6DECB9', marginRight: '8px' }}>💵</span>
      <span>
        Rango: <strong>$15,000 - $25,000 MXN mensuales</strong>.
      </span>
    </li>
    <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center' }}>
      <span style={{ fontSize: '1.5rem', color: '#6DECB9', marginRight: '8px' }}>📈</span>
      <span>
        Incremento anual basado en desempeño y objetivos cumplidos.
      </span>
    </li>
    <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center' }}>
      <span style={{ fontSize: '1.5rem', color: '#6DECB9', marginRight: '8px' }}>🏖️</span>
      <span>
        Bono vacacional y prestaciones superiores a la ley.
      </span>
    </li>
    <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center' }}>
      <span style={{ fontSize: '1.5rem', color: '#6DECB9', marginRight: '8px' }}>🎁</span>
      <span>
        Incentivos adicionales por metas alcanzadas.
      </span>
    </li>
  </ul>
</SubContainer>

        </div>
      </div>

      {/* Calificación */}
      <SubContainer>
  <div style={{ textAlign: 'center', marginBottom: '16px' }}>
    <div
      style={{
        display: 'inline-block',
        backgroundColor: '#9B59B6', // Color de fondo para el encabezado
        color: '#fff', // Color del texto
        borderRadius: '20px', // Bordes redondeados
        padding: '8px 16px', // Espaciado interno
        fontWeight: 'bold',
      }}
    >
      Recomendado
    </div>
  </div>
  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
    {/* Comentarios Existentes */}
    <div
      style={{
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '12px',
        color: '#333',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      “Excelente servicio, muy fácil de usar y súper intuitivo. Me encantó. 🌟”
    </div>
    <div
      style={{
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '12px',
        color: '#333',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      “El sistema es muy completo, pero creo que podrían mejorar algunos detalles. 👍”
    </div>
    <div
      style={{
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '12px',
        color: '#333',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      “Buen producto, lo usamos en mi empresa y nos ha ayudado mucho con el control. 🔥”
    </div>
    {/* Nuevos Comentarios */}
    <div
      style={{
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '12px',
        color: '#333',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      “Increíble herramienta, realmente simplifica nuestro trabajo diario. 💼✨”
    </div>
    <div
      style={{
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '12px',
        color: '#333',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      “La atención al cliente fue impecable, resolvieron mis dudas súper rápido. 👏📞”
    </div>
    <div
      style={{
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '12px',
        color: '#333',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      “Mejor de lo que esperaba. Definitivamente volveré a usar este sistema. 🥰”
    </div>
    <div
      style={{
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '12px',
        color: '#333',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      “El precio es justo para lo que ofrece. Muy recomendable. 💸”
    </div>
    <div
      style={{
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '12px',
        color: '#333',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      “No puedo creer lo rápido que nos adaptamos al sistema. Súper fácil. 🚀”
    </div>
    <div
      style={{
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '12px',
        color: '#333',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      “Tuve algunos problemas al inicio, pero el equipo técnico me ayudó mucho. 🛠️”
    </div>
    <div
      style={{
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '12px',
        color: '#333',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      “Es increíble cómo algo tan simple puede ser tan efectivo. ¡Genial! 💡”
    </div>
    <div
      style={{
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '12px',
        color: '#333',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      “Recomiendo este sistema a cualquiera que busque mejorar su negocio. ⭐⭐⭐⭐⭐”
    </div>
  </div>
</SubContainer>

    </div>
  );
};

export default MainContent;
