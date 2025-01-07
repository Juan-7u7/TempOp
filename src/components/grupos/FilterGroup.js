import React from 'react';
import CustomComboBox from '../../components/CustomComboBox';

const FilterGroup = ({ formData, handleChange }) => {
  const filters = [
    { label: 'Disponibilidad', field: 'disponibilidad', options: ['Tiempo Completo', 'Medio Tiempo', 'Por Proyecto'] },
    { label: 'Sexo', field: 'sexo', options: ['Masculino', 'Femenino', 'Otro'] },
    { label: 'Salario', field: 'salario', options: ['Menos de $2,000', '$2,500 - $3,500', 'Más de $8,000'] },
    { label: 'Calificación', field: 'calificacion', options: ['Recomendado', 'Buen lugar', 'Decente', 'Hay mejores lugares', 'No vale la pena'] },
  ];

  return (
<div
  style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '24px', // Incrementa la separación entre los filtros
    padding: '16px 24px', // Agrega espacio arriba y abajo
    margin: '16px 0', // Espaciado adicional entre filtros y otros elementos
    // backgroundColor: '#F8F8F8', // Fondo claro para resaltar el área de filtros
    borderRadius: '10px', // Bordes redondeados para un diseño más moderno
    // boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Sombra suave para resaltar
  }}
>
  {filters.map(({ label, field, options }) => (
    <CustomComboBox
      key={field}
      label={label}
      value={formData[field]}
      onChange={handleChange(field)}
      options={options}
    />
  ))}
</div>

  );
};

export default FilterGroup;
