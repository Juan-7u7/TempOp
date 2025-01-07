import * as React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function FormularioInicioSesion() {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    usuario: '',
    contraseña: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/welcome');
  };

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: { xs: '90%', sm: '80%', md: '40%' },
        margin: 'auto',
        mt: 4,
        p: { xs: 2, sm: 3 },
        boxShadow: { xs: 1, md: 3 },
        borderRadius: 2,
        backgroundColor: '#FFC4E1', 
        color: '#FFE1FF'
      }}
      onSubmit={handleSubmit}
    >
      <Typography variant="h5" sx={{ color:'#3c3c3c', textAlign: 'center', mb: 2 }}>
        Inicio de Sesión
      </Typography>

      <TextField
        label="Usuario"
        variant="outlined"
        name="usuario"
        value={formData.usuario}
        onChange={handleChange}
        sx={{ backgroundColor: '#EAEAEA' }}
        required
      />

      <TextField
        label="Contraseña"
        variant="outlined"
        name="contraseña"
        type="password"
        value={formData.contraseña}
        onChange={handleChange}
        sx={{ backgroundColor: '#EAEAEA' }}
        required
      />

      <Button
        type="submit"
        variant="contained"
        sx={{
          mt: 2,
          backgroundColor: '#F07DEA',
          '&:hover': {
            backgroundColor: '#6A4FB5'
          }
        }}
      >
        Iniciar Sesión
      </Button>
    </Box>
  );
}

export default FormularioInicioSesion;