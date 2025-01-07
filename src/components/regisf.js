import * as React from 'react';
import { Box, TextField, Button, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function FormularioRegistro() {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    usuario: '',
    nombre: '',
    correo: '',
    tipo: '',
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
      onSubmit={handleSubmit}
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
    >
      <Typography variant="h5" sx={{ color:'#3c3c3c', textAlign: 'center', mb: 2 }}>
        Registro de Usuario
      </Typography>
      <TextField
        label="Usuario"
        variant="outlined"
        name="usuario"
        value={formData.usuario}
        onChange={handleChange}
        required
        sx={{ backgroundColor: '#EAEAEA' }}
      />
      <TextField
        label="Nombre"
        variant="outlined"
        name="nombre"
        value={formData.nombre}
        onChange={handleChange}
        required
        sx={{ backgroundColor: '#EAEAEA' }}
      />
      <TextField
        label="Correo"
        variant="outlined"
        name="correo"
        type="email"
        value={formData.correo}
        onChange={handleChange}
        required
        sx={{ backgroundColor: '#EAEAEA' }}
      />
      <FormControl variant="outlined" required>
        <InputLabel id="tipo-label" sx={{ color: '#FFE1FF' }}>Tipo</InputLabel>
        <Select
          labelId="tipo-label"
          name="tipo"
          value={formData.tipo}
          onChange={handleChange}
          label="Tipo"
          sx={{ backgroundColor: '#EAEAEA', color: '#000000' }}
        >
          <MenuItem value="Candidato">Candidato</MenuItem>
          <MenuItem value="Reclutador">Reclutador</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Contraseña"
        variant="outlined"
        name="contraseña"
        type="password"
        value={formData.contraseña}
        onChange={handleChange}
        required
        sx={{ backgroundColor: '#EAEAEA' }}
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
        Registrar
      </Button>
    </Box>
  );
}

export default FormularioRegistro;