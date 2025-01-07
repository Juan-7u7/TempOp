import React, { useState } from 'react';
import FilterModal from '../components/mobile/FilterModal';

function Vacantes() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [filters, setFilters] = useState({
    disponibilidad: {
      value: 'Tiempo completo',
      options: ['Tiempo completo', 'Medio tiempo', 'Por proyecto'],
    },
    sexo: {
      value: 'Masculino',
      options: ['Masculino', 'Femenino', 'Otro'],
    },
    salario: {
      value: 'Mínimo',
      options: ['Mínimo', '+4,000', '+8,000'],
    },
    calificacion: {
      value: 'Recomendado',
      options: ['Recomendado', 'Buen lugar', 'Decente', 'Hay mejores lugares', 'No vale la pena'],
    },
  });

  // Maneja el cambio de los filtros
  const handleFilterChange = (filter, value) => {
    setFilters((prev) => ({
      ...prev,
      [filter]: {
        ...prev[filter],
        value,
      },
    }));
  };

  return (
    <div style={{ backgroundColor: '#ffe4e1', height: '100vh', padding: 0, margin: 0 }}>
      {/* Encabezado con barra transparente */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          padding: '10px 15px',
        }}
      >
        <p style={{ margin: 0, fontSize: '16px', color: '#000' }}>10,000 vacantes</p>
        <button
          onClick={() => setIsFilterOpen(true)}
          style={{
            background: '#f0f0f0',
            border: '1px solid #ccc',
            color: '#000',
            padding: '5px 10px',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Filtrar ▼
        </button>
      </div>

      {/* Modal de filtros */}
      {isFilterOpen && (
        <FilterModal
          filters={Object.entries(filters).reduce((acc, [key, value]) => {
            acc[key] = { value: value.value, options: value.options };
            return acc;
          }, {})}
          onClose={() => setIsFilterOpen(false)}
          onChange={handleFilterChange}
        />
      )}
    </div>
  );
}

export default Vacantes;
