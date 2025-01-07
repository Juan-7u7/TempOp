import React from 'react';
import { useNavigate } from 'react-router-dom';

const Botones = () => {
  const navigate = useNavigate();

  const handlePublicacionesClick = () => {
    navigate('/publicaciones');
  };

  return (
    <div style={containerStyle}>
      <button onClick={handlePublicacionesClick} style={buttonStyle}>Publicaciones</button>
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10px',
  padding: '20px',
};

const buttonStyle = {
  padding: '12px 24px',
  fontSize: '16px',
  cursor: 'pointer',
  borderRadius: '5px',
  border: '1px solid #ccc',
  backgroundColor: '#f4f4f4',
  transition: 'background-color 0.3s',
  width: '100%',
  maxWidth: '300px',
  boxSizing: 'border-box',
};

export default Botones;
