import React from 'react';
import { Box } from '@mui/material';

const SubContainer = ({ children }) => (
  <Box
    sx={{
      flex: 1, // Asegura que todos los contenedores ocupen espacio proporcional
      backgroundColor: '#fff', // Fondo blanco
      borderRadius: '10px', // Bordes redondeados
      display: 'flex', // Flexbox para estructurar contenido
      flexDirection: 'column', // Coloca el contenido en columna
      justifyContent: 'flex-start', // Alinea el contenido desde la parte superior
      alignItems: 'center', // Centra horizontalmente
      color: '#000', // Texto negro
      minWidth: '150px', // Tamaño mínimo en anchura
      minHeight: '100px', // Tamaño mínimo en altura
      padding: '16px', // Espaciado interno
      boxSizing: 'border-box', // Asegura que el padding no afecte el tamaño total
    }}
  >
    {children}
  </Box>
);

export default SubContainer;
