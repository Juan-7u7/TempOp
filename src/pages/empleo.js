
import React from 'react';
import { Box } from '@mui/material';
import FilterGroup from '../components/grupos/FilterGroup';
import MainContent from '../components/grupos/MainContent';

function Empleo() {
  const [formData, setFormData] = React.useState({
    disponibilidad: '',
    sexo: '',
    salario: '',
    calificacion: '',
  });

  const handleChange = (field) => (event) => {
    setFormData((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <FilterGroup formData={formData} handleChange={handleChange} />
      <MainContent />
    </Box>
  );
}

export default Empleo;
